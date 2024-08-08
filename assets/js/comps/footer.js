const template = document.createElement('template');
template.innerHTML = `
  <style>
    @import url("./assets/css/lib/bootstrap.min.css");
    @import url("./assets/css/lib/icons/bootstrap-icons.css");

    :host{
      /* the shadow root */
      background-color: #ccc; /* default */
    }
  </style>

  <div class="root container">
    <div id="footer_bar" class="d-flex flex-row justify-content-start align-items-center">
      <img id="footer_brand" src="./assets/img/canada_logo.svg" alt="Symbol of the Government of Canada" class="me-3" style="height: 20px;">
      <slot name="copyright" id="copyright" class="pt-1">Default text if not title slot used in HTML</slot>
    </div>
    <div id="footer_nav"></div>
  </div>
`;

class Footer extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'closed' });
        let clone = template.content.cloneNode(true);
        this.root.append(clone);
        console.log('comp FOOTER created')
    }
    connectedCallback() {
      //console.log('from footer wc connected callback ', tdd.toc_list)
    }
}
customElements.define('tdd-footer', Footer);