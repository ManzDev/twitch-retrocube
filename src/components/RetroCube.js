class RetroCube extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${RetroCube.styles}</style>
    <div class="container">
      <div class="face right"></div>
      <div class="face front"></div>
      <div class="face back"></div>
      <div class="face bottom"></div>
      <div class="face top"></div>
      <div class="face left"></div>
      <img class="content" src="bunny-face.png" alt="bunny" />
    </div>`;
  }
}

customElements.define("retro-cube", RetroCube);
