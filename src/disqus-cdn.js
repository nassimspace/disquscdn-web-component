'use strict';
class DisqusCommentsComponent extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() { return ["url", "title", "shortname", "id"]; } // This line can be deleted; Added that in to further extend the use of this component if need be
    async connectedCallback() {
      const dsqurl = `https://disquscdn.netlify.app/?url=${this.getAttribute("url")}&title=${this.getAttribute("title")}&shortname=${this.getAttribute("shortname")}&identifier=${this.getAttribute("id")}`;
      this.shadowRoot.innerHTML = `<style>       
        iframe {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  border: none;
        }</style><iframe src=${dsqurl} webkitallowfullscreen="" mozallowfullscreen="" sandbox="allow-forms allow-scripts allow-popups allow-same-origin allow-pointer-lock allow-top-navigation allow-modals" allowfullscreen="" frameBorder="0" scrolling="auto" loading="eager" seamless></iframe>`;
    }
  }
// optional
const deepFreeze = obj => {
  Object.keys(obj).forEach(prop => {
    if (typeof obj[prop] === 'object') deepFreeze(obj[prop]);
  });
  return Object.freeze(obj);
};
const frozenComponent = deepFreeze(DisqusCommentsComponent);
customElements.define("disqus-cdn", frozenComponent);
  