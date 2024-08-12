const template = document.createElement('template');
template.innerHTML = `
  <style>
  // https://cdn.jsdelivr.net/gh/huss0249/saba2024@latest/
    // @import url("./assets/css/lib/bootstrap.min.css");
    // @import url("./assets/css/lib/icons/bootstrap-icons.css");
    @import url("https://cdn.jsdelivr.net/gh/huss0249/saba2024@latest/assets/css/lib/bootstrap.min.css");
    @import url("https://cdn.jsdelivr.net/gh/huss0249/saba2024@latest/assets/css/lib/icons/bootstrap-icons.css");
    // @import url("./app2023.css");

    .note {
      border-radius: 1rem;
    }
    .shadow {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, .25) !important;
    }
  </style>

  <div class="root card border-light border-2 mb-3 shadow note">
    <div class="card-header">
      <i class="bi bi-emoji-angry h3"></i> <slot name='title' class="h4 fw-light">Note</slot>
    </div>
    <div class="card-body text-dark bg-body-white">
      <slot name="notecontent">Default text if not title slot used in HTML</slot>
    </div>
  </div>
`;

class Note extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'closed' });
        let clone = template.content.cloneNode(true);
        this.root.append(clone);
        console.log('comp Note created')
    }

    //define the allowed attributes
    static get observedAttributes() {
      return ['cat', 'color', 'icon'];
    }
    
    //handle values and changes to the attributes
    attributeChangedCallback(attrName, oldVal, newVal) {
      // console.log(attrName, newVal);

      if (attrName.toLowerCase() === 'color') {
        this.classList.add(`bg-${newVal}`);
        this.classList.add(`border-${newVal}`);

        let header = this.root.querySelector('.card-header')
        console.log(header)
        // header.classList.add(`bg-${newVal}`);
        header.classList.add(`bg-${newVal}-subtle`);
        header.classList.add(`text-${newVal}-emphasis`);

        let icon = this.root.querySelector('i')
        icon.classList.add(`text-${newVal}`);
      }    

      if (attrName.toLowerCase() === 'icon') {
        // this.root.classList.add(`border-${newVal}`);

        let icon = this.root.querySelector('i')
        console.log(icon)
        icon.classList.remove('bi-emoji-angry');
        icon.classList.add(`bi-${newVal}`);
      }
    }


    //sync attributes with properties as you want
    get cat() {
      return this.getAttribute('cat');
    }
    set cat(value) {
      this.setAttribute('cat', value);
    }

    get color() {
      return this.getAttribute('color');
    }
    set color(value) {
      this.setAttribute('color', value);
    }
  
    get icon() {
      return this.getAttribute('icon');
    }
    set icon(value) {
      this.setAttribute('icon', value);
    }
}
customElements.define('tdd-note', Note);
