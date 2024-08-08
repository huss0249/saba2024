class JumboImg extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'closed' });
    }
    
    static get observedAttributes() {
      return ['j-src', 'j-alt'];
    }

    //sync attributes with properties as you want
    get jSrc() {
      return this.getAttribute('j-src');
    }
    set jSrc(value) {
      this.setAttribute('j-src', value);
    }

    get jAlt() {
      return this.getAttribute('j-alt');
    }
    set jAlt(value) {
      this.setAttribute('j-alt', value);
    }

    connectedCallback() {        
        if(this.jSrc) {
            let img = this.root.querySelector('img')
            ? this.root.querySelector('img') 
            : document.createElement('img')
            
            console.log('img ===================== ', img)
            img.classList.add('img-fluid')
            img.src = this.jSrc
            img.alt = this.jAlt
            
            this.append(img)
        }
        console.log("JUMBO connected")
    }
}
customElements.define('tdd-jumbo', JumboImg);