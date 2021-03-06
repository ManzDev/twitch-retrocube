import { htmlCover, cssCover } from "../templates/covers.js";

class CoverFace extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.content = this.classList.contains("html") ? htmlCover : cssCover;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CoverFace.styles}</style>
    <div class="container">
      ${this.content}
    </div>`;
  }
}

customElements.define("cover-face", CoverFace);
