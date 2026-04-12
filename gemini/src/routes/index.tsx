import { createSignal, onMount, Show } from "solid-js";
import { A } from "@solidjs/router";
import Header from "../components/Header";

export default function Home() {
  const [waves, setWaves] = createSignal(0);
  const [posts, setPosts] = createSignal<any[]>([]);
  const [apiKey, setApiKey] = createSignal(import.meta.env.VITE_GAPI_KEY || "");
  const [isAdmin, setIsAdmin] = createSignal(false);

  const loadData = async () => {
    try {
      const [postRes, waveRes] = await Promise.all([
        fetch("/api/posts"),
        fetch("/api/wave"),
      ]);
      if (postRes.ok) setPosts(await postRes.json());
      if (waveRes.ok) setWaves(parseInt(await waveRes.text(), 10) || 0);
    } catch (e) {
      console.error(e);
    }
  };

  onMount(() => {
    loadData();
    if (localStorage.getItem("camino_admin_password")) {
      setIsAdmin(true);
    }
  });

  const handleWave = async () => {
    setWaves((w) => w + 1); // Optimistic UI
    fetch("/api/wave", { method: "POST" }).catch(console.error);
  };

  const handleRefresh = () => loadData();

  const mapMarkers = () =>
    JSON.stringify(
      posts().map((p) => ({
        position: p.position,
        options: {
          background: p.color,
          borderColor: p.color,
          glyphColor: "#ffffff",
        },
      })),
    );

  return (
    <main>
      <Header 
        title="Where are we?" 
        subtitle="Follow our Camino diary live" 
      />

      <div class="action-bar">
        <button class="btn primary" onClick={handleWave}>
          👋 Wave ({waves()})
        </button>
        <button class="btn" onClick={handleRefresh}>
          🔄 Refresh
        </button>
      </div>

      <div class="map-container">
        <camino-map
          attr:api-key={apiKey()}
          attr:center={JSON.stringify({ lat: 43.16, lng: -1.23 })}
          attr:zoom="10"
          // attr:options={JSON.stringify({ mapTypeId: "satellite" })}
          attr:markers={mapMarkers()}
          attr:count="5"
        />
      </div>

      <div class="feed">
        {posts().map((post) => (
          <article class="post-card">
            <div
              class="post-color-dot"
              style={{ background: post.color }}
            ></div>
            <div class="post-content">
              <div class="post-meta">
                <span>{post.poster}</span>
                <span>{new Date(post.datetime).toLocaleDateString()}</span>
              </div>
              <p class="post-text">{post.comment}</p>
            </div>
          </article>
        ))}
      </div>

      <footer class="footer">
        <span>v0.1.0</span>
        <Show when={isAdmin()}>
          <A class="btn" href="/pilgrims">
            Admin 🔒
          </A>
        </Show>
      </footer>
    </main>
  );
}
