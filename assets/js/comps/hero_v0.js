const template = document.createElement('template');
template.innerHTML = `
  <style>
    @import url("./assets/css/lib/bootstrap.min.css");
    @import url("./assets/css/lib/icons/bootstrap-icons.css");

    :host{
      // background-color: #ccc;
      // display: block;
    }

    :root {
      --hero-clip: polygon(
        0 0,
        100% 0,
        100% 90%,
        50% 95%,
        0 90%
        );
        --shadow: 0rem 0.5rem 1rem rgba(0, 0, 0, 0.15);
    }

    .hero {
      filter: drop-shadow(0rem 0.5rem 1rem rgba(0, 0, 0, 0.15));
    }
    
    .hero-img img {
      clip-path: polygon(
        0 0,
        100% 0,
        100% 90%,
        50% 95%,
        0 90%
        ) !important;
      object-fit: cover !important;
      object-position: bottom center !important;
    }
    
    .hero-img::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100% !important;
      height: 70% !important;
      overflow: hidden !important;
      z-index: 999;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.75) 15%, rgba(0, 0, 0, 0) 40%) !important;
      filter: hue-rotate(90deg) !important;
      clip-path: polygon(
        0 0,
        100% 0,
        100% 90%,
        50% 95%,
        0 90%
        ) !important;
    }

  </style>
  <!--
  <div class="root">
      <img src="./rpp01m1p4_02.jpg" alt="Placeholder ALT" />
  </div>
  -->
  <div class="root hero hero-img">
      <img src="./rpp01m1p4_02.jpg" alt="Placeholder ALT" />
  </div>
`;

class Hero extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'closed' });
        let clone = template.content.cloneNode(true);
        this.root.append(clone);
        console.log('comp Hero created')
    }

    //define the allowed attributes
    static get observedAttributes() {
      return ['imgsrc', 'imgalt'];
    }

    //sync attributes with properties as you want
    get sss() {
      return this.getAttribute('sss');
    }
    set sss(value) {
      this.setAttribute('sss', value);
    }

    get aaa() {
      return this.getAttribute('aaa');
    }
    set aaa(value) {
      this.setAttribute('aaa', value);
    }


    connectedCallback() {
      const $img = this.root.querySelector("div img")
      console.log("$img = ", $img)

      if (this.sss) {
        $img.setAttribute('src', this.sss)
        $img.classList.add('img-fluid');
      }    
      
      if (this.aaa) {
        $img.setAttribute('alt', this.aaa)
      }
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
      console.log(attrName, oldVal, newVal)
      const $img = this.root.querySelector("div img")

      console.log("$img = ", $img)
      if (attrName.toLowerCase() === 'sss') {
        
        // this.src = newVal
        // $img.src = newVal
        $img.setAttribute('src', this.sss)
        // $img.classList.add('img-fluid');
        // this.classList.add('img-fluid');
      }    
      
      if (attrName.toLowerCase() === 'aaa') {
        // $img.alt = newVal
        // this.alt = newVal
        // $img.alt = this.imgalt
        $img.setAttribute('alt', this.aaa)
      }
    }

}
customElements.define('tdd-hero', Hero);