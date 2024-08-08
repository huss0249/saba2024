const template = document.createElement('template');
template.innerHTML = `
  <style>
    @import url("./assets/css/lib/bootstrap.min.css");
    @import url("./assets/css/lib/icons/bootstrap-icons.css");

    :host{
      background-color: #ccc;
      display: block;
    }
  </style>
  <!--
  <div class="root">
      <img src="./rpp01m1p4_02.jpg" alt="Placeholder ALT" />
  </div>
  -->
  <span class="root">
      <img src="./rpp01m1p4_02.jpg" alt="Placeholder ALT" />
  </span>
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
      const $img = this.root.querySelector("span img")
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
      const $img = this.root.querySelector("span img")

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