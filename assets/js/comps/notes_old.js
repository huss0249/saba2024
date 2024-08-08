const template = document.createElement('template');
template.innerHTML = `
  <style>
    @import url("./assets/css/lib/bootstrap.min.css");
    @import url("./assets/css/lib/icons/bootstrap-icons.css");
    // @import url("./app2023.css");

    :root {
      --bs-card-bg: red !important;
    }

    :host{
      /* the shadow root */
      // background-color: red;
      border-radius: 1rem;
      display: block;
      // padding: 3rem;
      // margin: 1rem 0;
    }
    .root {
        // display: block;
    }

    .iconfont {
        width: var(--icon-size) !important;
        height: var(--icon-size) !important;
      }
      
      .note {
        // border-radius: 1rem !important;
      }
      .shadow {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, .25) !important;
      }
  </style>

  <div class="root card border-light border-1 mb-3 shadow">
    <div class="card-header">
    <!--
      <i class="bi bi-emoji-angry fs-1"></i> <slot name='title' class="fs-4 fw-bold pb2">Note</slot>
      -->
      <i class="bi bi-emoji-angry h3"></i> <slot name='title' class="h4 fw-light">Note</slot>
    </div>
    <!--
    <div class="card-body text-dark bg-body-tertiary">
    -->
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
  

    //handle values and changes to the attributes
    attributeChangedCallback(attrName, oldVal, newVal) {
      // if (attrName.toLowerCase() === 'cat') {
      //   const div = this.root.querySelector('.root');
      //   let p = div.querySelector('p')
      //     ? div.querySelector('p')
      //     : document.createElement('p');
      //   p.className = 'character';
      //   p.textContent = newVal;
      //   div.append(p);
      // }



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
}
customElements.define('tdd-note', Note);