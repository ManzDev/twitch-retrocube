const l=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function d(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=d(t);fetch(t.href,e)}};l();class a extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: 200px;
        --height: 200px;
        --depth: 200px;
      }

      .container {
        --origin-z: calc(-1 * calc(var(--width) / 2));

        width: var(--width);
        height: var(--height);
        position: relative;
        transform-style: preserve-3d;
        transform: rotateX(157deg) rotateY(295deg);
        transform-origin: 50% 100% var(--origin-z);
        animation: rotating 5s linear infinite;
      }

      .face {
        width: 100%;
        height: 100%;
        position: absolute;
      }

      .right {
        background: #ffffff77;
        transform: translate3d(0, 0, calc(-1 * var(--width)));
        width: var(--depth);
      }

      .front {
        background: #00800077;
        transform-origin: 0% 0%;
        transform: rotate3d(0, 1, 0, 90deg);
      }

      .back {
        background: #FFD70077;
        transform-origin: 0% 100%;
        transform: rotate3d(0, 1, 0, 90deg) translate3d(0, 0, calc(var(--depth)));
      }

      .bottom {
        background: #FF69B477;
        transform-origin: 0% 0%;
        transform: rotate3d(1, 0, 0, -90deg);
        height: var(--width);
        width: var(--depth);
      }

      .top {
        --offset: calc(-1 * calc(var(--height) - var(--width)));

        background: #0000FF77;
        transform-origin: 0 100%;
        transform: rotate3D(1, 0, 0, 90deg) translateZ(var(--offset));
        height: var(--width);
        width: var(--depth);
      }

      .left {
        background: #FFA50077;
        width: var(--depth);
      }

      .content {
        position: absolute;

        transform: rotate3D(1, 0, 0, 180deg) rotate3D(0, 1, 0, 90deg) translate3D(-100px, 0, 0);
        display: block;
      }

      vinyl-disc,
      cover-face {
        position: relative;
        top: 0;
        left: 0;
      }

      @keyframes rotating {
        0% { transform: rotateX(157deg) rotateY(0deg); }
        100% { transform: rotateX(157deg) rotateY(360deg); }
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${a.styles}</style>
    <div class="container">
      <div class="face right"></div>
      <div class="face front"></div>
      <div class="face back"></div>
      <div class="face bottom"></div>
      <div class="face top"></div>
      <div class="face left"></div>
      <img class="content" src="bunny-face.png" alt="bunny" />
    </div>`}}customElements.define("retro-cube",a);const c=`
  <div class="group">
    <h1>HTML</h1>
    <span>&lt;Remarkable Hits&gt;</span>
    <span class="normal">Close your <strong>tags</strong></span>
    <span class="normal">Vinyl Disc</span>
  </div>
  <footer>
    <div class="brand">W3C</div>
  </footer>
`,f=`
  <div class="group">
    <h1>CSS<span>3</span></h1>
    <div class="subtitle">THE JOURNING OF CENTERING</div>
  </div>
  <div class="middle">
    <span class="text"></span>
  </div>
  <footer>
    <div class="brand">W3C</div>
  </footer>
`;class i extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: 400px;
        --height: 400px;
        --shadow-gradient: linear-gradient(to left, #fff6 -3%, transparent 2% 98%, #0009 104%);
        font-size: 16px;
      }

      :host(.html) {
        --cover-vinyl: linear-gradient(
          145deg,
          #fff 40%,
          #D3274D 40.25% 45%,
          #DE5737 45.25% 50%,
          #EA8F26 50.25% 55%,
          #EFB631 55.25% 60%,
          #1E1F21 60%
        );
        --cover-padding: 6px 16px;
      }

      :host(.css) {
        --cover-vinyl:
          linear-gradient(to bottom, #222 0% 29%, transparent 29% 80%, #222 80% 100%),
          linear-gradient(to right, #222 0% 10%, transparent 10% 90%, #222 90% 100%),
          linear-gradient(
            130deg,
            #222 30%,
            #37B4F6 30% 35%,
            #222 35% 40%,
            #4D8CE9 40% 45%,
            #5D5EDC 45% 55%,
            #6B36CC 55% 65%,
            #C9CDD0 65% 75%,
            #679FB8 75% 76%,
            #C9CDD0 76% 86%,
            #679FB8 86% 86.5%,
            #C9CDD0 86.5% 100%
          );
        --cover-padding: 10px 25px;
      }

      :host(.css) h1 {
        font-size: 4rem;
        color: #fff;
      }

      :host(.css) h1 span {
        font-size: 4rem;
        font-weight: bold;
        color: #555;
      }

      :host(.css) .subtitle {
        font-family: "Roboto";
        font-size: 1rem;
        font-weight: 700;
        padding-top: 12px;
        color: #795A9D;
      }

      /*
      :host(.extra) {
        --cover-vinyl:
          linear-gradient(
            to right,
            #fff 0 11%,
            transparent 11% 100%
          ),
          linear-gradient(
            to bottom,
            #fff 45%,
            #33A9DC 45% 50%,
            #1572B6 50% 55%,
            #12619C 55% 60%,
            #0E4D7B 60% 65%,
            #0B3D61 65% 70%,
            #093250 70% 75%,
            #fff 75% 100%
          );
        --cover-padding: 10px 10px 10px 40px;
      }
      */

      .container {
        width: var(--width);
        height: var(--height);
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        box-shadow:
          0 0 80px #000c inset,
          0 0 10px #0007;

        background:
          url(/asfalt-dark.png),
          var(--shadow-gradient),
          var(--cover-vinyl);
      }

      h1 {
        font-family: "Roboto";
        font-weight: 700;
        letter-spacing: -3px;
        font-size: 5rem;
        color: #111;
        margin: 0;
        margin-bottom: -16px;
        padding: 0;
      }

      span {
        font-family: "Roboto";
        font-weight: 300;
        font-size: 1.5rem;
        letter-spacing: -1px;
        color: #CC6D4D;
        padding-left: 4px;
      }

      footer {
        align-self: flex-end;
        padding: 24px;
      }

      .brand {
        font-family: "Lester Bold";
        font-size: 2rem;
        border: 1px solid #872B36;
        border-radius: 2px;
        padding: 0 3px;
        color: #872B36;
        text-shadow: 0 0 1px #872b36;
      }

      .normal {
        font-family: "Roboto";
        font-weight: 400;
        display: block;
        font-size: 1rem;
        color: #444a;
      }

      .group {
        padding: var(--cover-padding);
      }
    `}connectedCallback(){this.content=this.classList.contains("html")?c:f,this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${i.styles}</style>
    <div class="container">
      ${this.content}
    </div>`}}customElements.define("cover-face",i);class n extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: 400px;
        --height: 400px;
        transform: translateX(var(--offset, -400px)) rotate(var(--rotate, 0deg));
        transition: transform 0.5s ease-in-out;
        z-index: -1;
      }

      .vinyl {
        width: var(--width);
        height: var(--height);
        background: #000;
        background-image:
          repeating-radial-gradient(circle at 50% 50%, transparent 0% 15%, #0004 15.25% 15.75%),
          repeating-conic-gradient(transparent 0% 25%, #fff3 42% 42%, transparent 50%);
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      .label {
        width: calc(var(--width) / 3.2);
        height: calc(var(--width) / 3.2);
        background: #D3274D;
        border: 8px solid #000;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
      }

      .label::after {
        --hole-size: calc(var(--width) * 0.03);

        content: "";
        display: block;
        position: absolute;
        border-radius: 50%;
        background: #fff;
        width: var(--hole-size);
        height: var(--hole-size);
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${n.styles}</style>
    <div class="vinyl">
      <div class="label"></div>
    </div>`}}customElements.define("vinyl-disc",n);
