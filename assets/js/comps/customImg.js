class customImage extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        const customSrc = this.getAttribute('custom-src')
        const customAlt = this.getAttribute('custom-alt')
        
        if(customSrc) {
            const img = document.createElement('img')
            img.classList.add('img-fluid')
            img.src = customSrc
            img.alt = customAlt
            this.append(img)
        }
    }
}
customElements.define('custom-image', customImage);