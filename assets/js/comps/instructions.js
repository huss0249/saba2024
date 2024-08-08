const template = document.createElement('template');
template.innerHTML = `
  <style>
    @import url("./assets/css/lib/bootstrap.min.css");
    @import url("./assets/css/lib/icons/bootstrap-icons.css");
    //@import url("./app2023.css");

.root {
display: inline-block !important;
}
    .shadow {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, .25) !important;
    }
  </style>

  <div class="root border-light border-2 mb-4 alert alert-info inline-block" role="instruction">
      <i class="bi bi-info-square fs-5"></i> <slot>Default text if not provided text</slot>
  </div>
`;

class customInstruction extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'closed' });
        let clone = template.content.cloneNode(true);
        this.root.append(clone);
        // console.log('comp Note created')
    }
}
customElements.define('tdd-instruction', customInstruction);