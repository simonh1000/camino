import { createSignal, onMount } from "solid-js";
import { A, useSearchParams } from "@solidjs/router";
import Header from "../components/Header";

export default function Pilgrims() {
  const [params] = useSearchParams();
  const [password, setPassword] = createSignal("");
  const [comment, setComment] = createSignal("");
  const [isLocating, setIsLocating] = createSignal(false);
  const [waves, setWaves] = createSignal(0);

  onMount(() => {
    const checkAndSetPassword = async (pwd: string, shouldRedirect: boolean = false) => {
      try {
        const res = await fetch("/api/auth", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password: pwd })
        });
        
        if (res.ok) {
          localStorage.setItem("camino_admin_password", pwd);
          setPassword(pwd);
          if (shouldRedirect) {
            window.history.replaceState({}, document.title, window.location.pathname);
          }
        } else {
          localStorage.removeItem("camino_admin_password");
        }
      } catch (err) {
        console.error("Auth check failed", err);
      }
    };

    if (params.password) {
      checkAndSetPassword(params.password, true);
    } else {
      const stored = localStorage.getItem("camino_admin_password");
      if (stored) checkAndSetPassword(stored);
    }
    
    fetch("/api/wave")
      .then(res => res.text())
      .then(t => setWaves(parseInt(t, 10) || 0))
      .catch(console.error);
  });

  const handleLogin = async (e: Event) => {
    e.preventDefault();
    const fd = new FormData(e.target as HTMLFormElement);
    const pwd = fd.get("password") as string;
    
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pwd })
      });
      
      if (res.ok) {
        localStorage.setItem("camino_admin_password", pwd);
        setPassword(pwd);
      } else {
        alert("Incorrect Admin Password.");
      }
    } catch (err) {
      alert("Error verifying password.");
    }
  };

  const handlePost = async () => {
    if (!comment()) return;
    setIsLocating(true);
    
    try {
      const pos = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      
      const payload = {
        comment: comment(),
        position: { lat: pos.coords.latitude, lng: pos.coords.longitude },
        poster: "Simon" // Can make this dynamic later
      };

      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${password()}`
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error(await res.text());

      setComment("");
      alert("Post successful!");
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Failed to get location or post update.");
    } finally {
      setIsLocating(false);
    }
  };

  return (
    <main>
      <Header 
        title="Admin Portal" 
        subtitle={`Waves received: ${waves()} 👋`} 
        icon="✍️"
      />

      {!password() ? (
        <form class="post-card" style="flex-direction: column;" onSubmit={handleLogin}>
          <h3>Login to Post</h3>
          <input 
            type="password" 
            name="password" 
            class="styled-input" 
            placeholder="Enter admin password" 
            required 
          />
          <button type="submit" class="btn primary">Login</button>
        </form>
      ) : (
        <div class="post-card" style="flex-direction: column;">
          <h3>Write an Update</h3>
          <textarea 
            class="styled-textarea" 
            placeholder="How's the walk going?"
            value={comment()}
            onInput={(e) => setComment(e.target.value)}
          />
          <div class="action-bar" style="margin-bottom: 0;">
            <button class="btn primary" onClick={handlePost} disabled={isLocating() || !comment()}>
              {isLocating() ? "📍 Locating..." : "Post Update"}
            </button>
            <button class="btn" onClick={() => setComment("")}>Cancel</button>
          </div>
        </div>
      )}

      {/* TODO List posts for editing here */}

      <footer class="footer">
        <span>v0.1.0</span>
        <A class="btn" href="/">Return to Map</A>
      </footer>
    </main>
  );
}
