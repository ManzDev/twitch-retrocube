class VinylDisc extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${VinylDisc.styles}</style>
    <div class="vinyl">
      <div class="label"></div>
    </div>`;
  }
}

customElements.define("vinyl-disc", VinylDisc);
