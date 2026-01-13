---
layout: single
title: "Secrets"
permalink: /secrets/
---

<style>
  .hint-section {
    margin-top: 1.5rem;
  }

  .hint-grid {
    display: grid;
    gap: 0.75rem;
  }

  /* Individual collapsible secret cards */
  .hint-item {
    border: 1px solid rgba(0,0,0,0.10);
    border-radius: 12px;
    background: rgba(255,255,255,0.85);
    overflow: hidden;
  }

  .hint-item summary {
    list-style: none;
    cursor: pointer;
    user-select: none;
    padding: 0.85rem 0.85rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 650;
  }

  .hint-item summary::-webkit-details-marker { display: none; }

  .hint-item summary .chev {
    transition: transform 0.15s ease;
    opacity: 0.7;
  }

  .hint-item[open] summary .chev {
    transform: rotate(90deg);
  }

  .hint-content {
    display: flex;
    align-items: center;          /* vertical centering */
    padding: 0.85rem 0.95rem;
    border-top: 1px solid rgba(0,0,0,0.08);
  }

  .hint-text {
    margin: 0.65rem 0 0 0;
    opacity: 0.85;
    line-height: 1.35;
  }

  .hint-note {
    margin-top: 0.85rem;
    font-size: 0.95em;
    opacity: 0.7;
  }
</style>

<div class="notice--info">
  Restricted area!
</div>

<input id="secret-input" type="password" placeholder="Password" />
<button id="secret-btn" class="btn">Enter</button>

<p id="secret-msg" style="margin-top: 0.75rem;"></p>

### Hints

<div class="hint-section">
  <div class="hint-grid">

    <details class="hint-item">
      <summary>
        <span>Secret #1</span>
        <span class="chev">›</span>
      </summary>
      <div class="hint-content">
        <p class="hint-text">"There's only one thing I love more than mahjong... it's beating up Koreans with my secret identity!"</p>
      </div>
    </details>

    <details class="hint-item">
      <summary>
        <span>Secret #2</span>
        <span class="chev">›</span>
      </summary>
      <div class="hint-content">
        <p class="hint-text">"What's Sarah's vibe?"</p>
      </div>
    </details>

  </div>

  <div class="hint-note">
    (Codes are case-sensitive.)
  </div>
</div>

<script src="/assets/images/secrets/header.js"></script>
<script> 

  async function sha256Hex(s) {
    const data = new TextEncoder().encode(s);
    const hashBuf = await crypto.subtle.digest("SHA-256", data);
    const hashArr = Array.from(new Uint8Array(hashBuf));
    return hashArr.map(b => b.toString(16).padStart(2, "0")).join("");
  }

  async function go() {
    const el = document.getElementById("secret-input");
    const msg = document.getElementById("secret-msg");
    const code = (el.value || "").trim().toLowerCase();

    if (!code) {
      msg.textContent = "Enter a code.";
      return;
    }

    const key = await sha256Hex(`${window.SALT}|${code}`);
    const routes = window.SECRET_HASH_ROUTES || {};
    const dest = routes[key];

    if (!dest) {
      msg.textContent = "Wrong!";
      return;
    }

    // Redirect
    window.location.href = dest;
  }

  document.getElementById("secret-btn").addEventListener("click", go);
  document.getElementById("secret-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") go();
  });
</script>
