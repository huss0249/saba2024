const template = document.createElement('template');
template.innerHTML = `
  <style>
    @import url("./assets/css/lib/bootstrap.min.css");
    @import url("./assets/css/lib/icons/bootstrap-icons.css");
    @import url("./app2023.css");

    :root {
      display: block;
    }

    .note {
      // border-radius: 1rem;
    }
    .shadow {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, .25) !important;
    }
  </style>

  <div class="root card border-light border-2 mb-3 shadow note">
    <div class="card-header">
      <i class="bi bi-bookmark h3"></i> <slot name="title" class="h4 fw-light">Note</slot>
    </div>
    <div class="card-body text-dark bg-body-white">
      <slot name="cardbody">Default text content</slot>
    </div>
  </div>
`;

class customCard extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'closed' });
    let clone = template.content.cloneNode(true);
    this.root.append(clone);
    // console.log('comp Note created')
  }

  //define the allowed attributes
  static get observedAttributes() {
    return ['cat'];
  }

  //handle values and changes to the attributes
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName.toLowerCase() === 'cat') {
      let colorVal = ''
      let iconVal = ''

      if (newVal === 'note') {
        colorVal = 'warning'
        iconVal = 'sticky'
      } else if (newVal === 'res') {
        colorVal = 'info'
        iconVal = 'book'
      } else if (newVal === 'tip') {
        colorVal = 'success'
        iconVal = 'lightbulb'
      } else if (newVal === 'info') {
        colorVal = 'primary'
        iconVal = 'info-circle'
      } else {
        colorVal = 'dark'
        iconVal = 'info-lg'
      }

      let icon = this.root.querySelector('i')
      // console.log(icon)
      icon.classList.remove('bi-bookmark');
      icon.classList.add(`bi-${iconVal}`);

      // this.classList.add(`bg-${colorVal}`);
      // this.classList.add(`border-${colorVal}`);
      this.classList.add(`bg-${colorVal}`, `border-${colorVal}`);

      let header = this.root.querySelector('.card-header')
      // console.log(header)
      // header.classList.add(`bg-${colorVal}-subtle`);
      // header.classList.add(`text-${colorVal}-emphasis`);
      header.classList.add(`bg-${colorVal}-subtle`, `text-${colorVal}-emphasis`);

      icon.classList.add(`text-${colorVal}`);
    }


    if (attrName.toLowerCase() === 'color') {
      // this.classList.add(`bg-${newVal}`);
      // this.classList.add(`border-${newVal}`);
      this.classList.add(`bg-${newVal}`, `border-${newVal}`);

      let header = this.root.querySelector('.card-header')
      console.log(header)
      // header.classList.add(`bg-${colorVal}-subtle`);
      // header.classList.add(`text-${colorVal}-emphasis`);
      header ? header.classList.add(`bg-${colorVal}-subtle`, `text-${colorVal}-emphasis`) : "";

      let icon = this.root.querySelector('i')
      icon.classList.add(`text-${newVal}`);
    }

    if (attrName.toLowerCase() === 'icon') {
      let icon = this.root.querySelector('i')
      // console.log(icon)
      icon.classList.remove('bi-info-circle');
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

}
customElements.define('tdd-card', customCard);