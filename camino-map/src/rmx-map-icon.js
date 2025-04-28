"use strict";

// init choreogrphy inspired by good map
let initCalled;
const callbackPromise = new Promise((r) => (window.__initMap = r));
const styles = [
    {
        featureType: "administrative.land_parcel",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "administrative.neighborhood",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "poi",
        elementType: "labels.text",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "road",
        elementType: "labels",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "road.arterial",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "road.highway",
        elementType: "labels",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "road.local",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "water",
        elementType: "labels.text",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
];

function loadGoogleMaps(apiKey) {
    if (!initCalled) {
        const script = document.createElement("script");
        script.src =
            "https://maps.googleapis.com/maps/api/js?" +
            (apiKey ? `key=${apiKey}&` : "") +
            "callback=__initMap&libraries=marker";
        document.head.appendChild(script);
        initCalled = true;
    }
    return callbackPromise;
}

class MapIcon extends HTMLElement {
    constructor() {
        super();

        this.apiKey = null;
        // // zoom, lat, lng exposed at top level, but passed to map init within mapOptions
        this.zoom = null;
        this.center = null;
        this.mapOptions = {
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false,
        };
        this.markerData = [];

        // internal state
        this.map = null;
        this.markers = [];
        this.googleLoaded = false;
    }

    static get observedAttributes() {
        return ["api-key", "zoom", "center", "options", "markers"];
    }

    connectedCallback() {
        // called after the attributes have been set via attributeChangedCallback

        loadGoogleMaps(this.apiKey).then(() => {
            this.googleLoaded = true;
            if (this.zoom) {
                this.mapOptions.zoom = this.zoom;
            }
            if (this.center) {
                this.mapOptions.center = this.center;
            }

            // console.log("connected", this.center, this.mapOptions);
            this.render();
        });
    }

    attributeChangedCallback(name, oldVal, val) {
        // console.log(name, val);
        switch (name) {
            case "api-key":
                this.apiKey = val;
                break;

            case "zoom":
                this.zoom = parseInt(val) || null;
                this.render();
                break;

            case "center":
                this.center = this.parseLatLng(val);
                this.render();
                break;

            case "options":
                try {
                    this.mapOptions = JSON.parse(val);
                } catch (_) {}
                break;

            case "markers":
                this.markerData = JSON.parse(val) || [];
                // this.attachMarkers();
                this.render();
                break;
        }
    }

    validate() {
        return (
            this.apiKey !== "" && (!!this.center || this.markerData.length > 0)
        );
    }

    parseLatLng(string) {
        try {
            const obj = JSON.parse(string);
            return obj?.lat != undefined && obj?.lng != undefined ? obj : null;
        } catch (_) {
            return null;
        }
    }

    render() {
        const validated = this.validate();
        // console.log("render", validated);
        if (validated) {
            if (this.map) {
                this.attachMarkers();
            } else if (this.googleLoaded) {
                const options = {
                    ...this.mapOptions,
                    mapId: "41ba66a00dbff00d",
                };
                // console.log(options);
                this.map = new google.maps.Map(this, options);
                this.map.setOptions({ styles: styles });

                google.maps.event.addListenerOnce(this.map, "idle", () => {
                    this.attachMarkers();
                });
            } else {
                console.log("validated but no map and !googleLoaded");
            }
        } else {
            // remove from state so that it can be added again when re-configured
            this.map = null;
            this.innerHTML = `map not configured: API: ${
                this.apiKey !== ""
            }, center: ${!!this.center}, markers: ${this.markerData > 0}`;
        }
    }

    attachMarkers() {
        const markers = JSON.parse(this.getAttribute("markers")) || [];
        try {
            if (typeof google != "undefined" && google.maps) {
                this.addRemoveMarkers(markers);
            }
        } catch (e) {
            console.error("attachMarkers", e);
        }
    }

    addRemoveMarkers(markers) {
        if (this.map) {
            // remove existing markers
            this.markers.forEach((marker) => (marker.map = null));

            if (markers.length > 0) {
                markers.forEach((marker, idx) => {
                    const newMarker = this.makeMarker(marker);
                    this.markers[idx] = newMarker;
                });
            }
            this.fitMap();
        }
    }

    makeMarker(pos) {
        let base = {};
        if (pos.options) {
            const pin = new google.maps.marker.PinElement(pos.options);
            base = { content: pin.element };
        }

        const marker = new google.maps.marker.AdvancedMarkerElement({
            ...base,
            map: this.map,
            position: pos.position,
        });
        // <gmp-advanced-marker>: Please use addEventListener('gmp-click', ...)
        marker.addListener(
            "click",
            ((detail) => {
                this.dispatchEvent(
                    new CustomEvent("marker-clicked", { detail })
                );
            }).bind(this, pos)
        );
        return marker;
    }

    fitMap() {
        // fit map only to most recent points, so as to get a higher zoom level and with more space between
        let ct = JSON.parse(this.getAttribute("count")) || 0;

        let markers = ct == 0 ? this.markers : this.markers.slice(0, ct);
        // console.log({ ct, ms: markers });
        const mybounds = new google.maps.LatLngBounds();
        // if there are no markers (and no location) we end up at 0,0
        if (markers.length) {
            markers.forEach((marker) => mybounds.extend(marker.position));
        } else {
            if (this.center) mybounds.extend(this.center);
        }
        this.map.fitBounds(mybounds);
        if (this.map.getZoom() > this.zoom) {
            this.map.setZoom(this.zoom);
        }
    }
}

customElements.define("rmx-map-icon", MapIcon);
