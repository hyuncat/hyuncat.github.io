---
layout: single
title: "For Jeffrey"
permalink: /secrets/biboombap/
---

<style>
  .bb-wrap { max-width: 560px; margin: 0 auto; }
  .bb-frame {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 14px;
    overflow: hidden;
    background: #111;
    box-shadow: 0 10px 30px rgba(0,0,0,0.12);
    user-select: none;
  }
  .bb-frame img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    background: #111;
  }
  .bb-hit {
    position: absolute;
    inset: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .bb-hit > div { cursor: pointer; }
  .bb-ui {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
  }
  .bb-ui button {
    padding: 8px 12px;
    border-radius: 10px;
    border: 1px solid rgba(0,0,0,0.15);
  }
  .bb-counter {
    font-variant-numeric: tabular-nums;
    opacity: 0.8;
  }
  .bb-hint {
    text-align: center;
    margin-top: 10px;
    opacity: 0.7;
    font-size: 0.95em;
  }
</style>

<div class="bb-wrap">
  <div class="bb-frame">
    <img id="bb-img" alt="biboombap page" />
    <div class="bb-hit">
      <div id="bb-prevArea" aria-label="Previous page"></div>
      <div id="bb-nextArea" aria-label="Next page"></div>
    </div>
  </div>

  <div class="bb-ui">
    <button id="bb-prevBtn" type="button">← Prev</button>
    <span class="bb-counter" id="bb-counter"></span>
    <button id="bb-nextBtn" type="button">Next →</button>
  </div>

  <!-- <div class="bb-hint">Click left/right side or use ← → keys</div> -->
</div>

<script>
  // ---- CONFIG ----
  const BASE = "/assets/images/secrets/biboombap/";
  const TOTAL_PAGES = 13;

  const pages = Array.from(
    { length: TOTAL_PAGES },
    (_, i) => `${BASE}biboombap-${i + 1}.png`
  );

  // ---- STATE ----
  let idx = 0;
  const img = document.getElementById("bb-img");
  const counter = document.getElementById("bb-counter");

  function preload(src) {
    const im = new Image();
    im.src = src;
  }

  function render() {
    img.src = pages[idx];
    counter.textContent = `${idx + 1} / ${pages.length}`;

    if (idx + 1 < pages.length) preload(pages[idx + 1]);
    if (idx - 1 >= 0) preload(pages[idx - 1]);
  }

  function next() {
    if (idx < pages.length - 1) {
      idx++;
      render();
    }
  }

  function prev() {
    if (idx > 0) {
      idx--;
      render();
    }
  }

  // Click areas
  document.getElementById("bb-nextArea").addEventListener("click", next);
  document.getElementById("bb-prevArea").addEventListener("click", prev);

  // Buttons
  document.getElementById("bb-nextBtn").addEventListener("click", next);
  document.getElementById("bb-prevBtn").addEventListener("click", prev);

  // Keyboard
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  });

  render();
</script>
