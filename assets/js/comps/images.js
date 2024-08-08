const template = document.createElement('template');
template.innerHTML = `
  <style>
    @import url("./assets/css/lib/bootstrap.min.css");
    @import url("./assets/css/lib/icons/bootstrap-icons.css");

    :host{
      // background-color: #ccc;
      display: block;
    }

    :root {
      --hero-clip: polygon(
        0 0,
        100% 0,
        100% 600px,
        50% 640px,
        0 600px
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
        100% 600px,
        50% 640px,
        0 600px
        ) !important;
        min-width: 100%;
        width: 1265px;
        min-height: 100%;
        max-height: 680px;
      object-fit: cover !important;
      object-position: top center !important;
    }
    
    .hero-img::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100% !important;
      height: 600px !important;
      overflow: hidden !important;
      z-index: 999;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.75) 15%, rgba(0, 0, 0, 0) 40%) !important;
      filter: hue-rotate(90deg) !important;
      clip-path: polygon(
        0 0,
        100% 0,
        100% 600px,
        50% 640px,
        0 600px
        ) !important;
    }

  </style>
<!--
  <div class="root hero hero-img">

  <img src="./rpp01m1p4_02.jpg" alt="Placeholder ALT" />
-->
  <div class="root">
      <img src="" alt="" />
  </div>
`;

class customImage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'closed' });
        let clone = template.content.cloneNode(true);
        this.root.append(clone);
        
        // console.log('comp customImage created')
    }

    //define the allowed attributes
    static get observedAttributes() {
      return ['custom-src', 'custom-alt', 'hero'];
    }

    //sync attributes with properties as you want
    get customSrc() { return this.getAttribute('custom-src')}
    set customSrc(value) { this.setAttribute('custom-src', value) }

    get customAlt() { return this.getAttribute('custom-alt') }
    set customAlt(value) { this.setAttribute('custom-alt', value) }

    get hero() { return this.getAttribute('hero') }
    set hero(value) { this.setAttribute('hero', value) }

    connectedCallback() {
      const $root = this.root.querySelector(".root")
      const $img = this.root.querySelector("div img")

      if (this.customSrc && this.customSrc != "") {
        // console.log("this.customSrc = ", this.customSrc)
        $img.setAttribute('src', this.customSrc)
        $img.classList.add('img-fluid');
        // $img.classList.add('w-100');
      }
      
      if (this.hero === '1' && this.customSrc === "") {
        let randomSrc = this.randomizeSrc()
        this.customSrc = randomSrc
        // console.log("RANDOM NAME", randomSrc)
        $img.setAttribute('src', this.customSrc)
        // $img.setAttribute('src', randomSrc)
        $img.classList.add('img-fluid');
        // $img.classList.add('w-100');
      }
      
      this.customAlt ? $img.setAttribute('alt', this.customAlt) : "";

      this.hero === '1' ? $root.classList.add("hero", "hero-img") : "";
      
    }

    randomizeSrc() {
      // let randomNum = Math.floor((Math.random()*20) + 1);
      let randomNum = tdd.lib.pad(Math.floor((Math.random()*20) + 1));
      // console.log(randomNum)
      //let randomSrc = `./assets/img/bnr${randomNum}.jpg`
      let randomSrc = `./assets/img/bnr_${randomNum}.jpg`
      return randomSrc
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
      // console.log(attrName, oldVal, newVal)

      const $root = this.root.querySelector(".root")

      const $img = this.root.querySelector("div img")
      
      attrName.toLowerCase() === 'custom-src' ? $img.setAttribute('src', this.customSrc) : "";
      attrName.toLowerCase() === 'custom-alt' ? $img.setAttribute('alt', this.customAlt) : "";
      (attrName.toLowerCase() === 'hero' && this.hero === '1') ? $root.classList.add("hero", "hero-img") : "";
      (attrName.toLowerCase() === 'hero' && this.hero != '1') ? $img.classList.add('img-thumbnail', 'rounded',  'mx-auto', 'd-block') : "";
    }

}
customElements.define('tdd-img', customImage);