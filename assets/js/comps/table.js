const template = document.createElement('template');
template.innerHTML = `
  <style>
    @import url("./assets/css/lib/bootstrap.min.css");
    @import url("./assets/css/lib/icons/bootstrap-icons.css");

    :host{
      background-color: #ccc;
    }
  </style>

  <div class="root">
    <table class="table table-striped table-hover">
    <thead>
        <tr></tr>
    </thead>
        <tbody slot="tabledata"></tbody>
    </table>
  </div>
`;

class Table extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        let clone = template.content.cloneNode(true);
        this.root.append(clone);
    }

    static get observedAttributes() {
        return ['headers'];
    }

    get headers() {
        return this.getAttribute('headers')
    }

    set headers(value) {
        this.setAttribute('headers', value)
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        if(attrName.toLowerCase() === 'headers') {
            const headers = newVal.split(",").map(nv => nv.trim())
            // console.log('attrName => ', attrName, headers)
             
            const $thead = this.root.querySelector('thead')

            let $tr = $thead.querySelector('tr')
                ? $thead.querySelector('tr')
                : document.createElement('tr');
            
            
            $tr.innerHTML = `${headers.map( header => `<th>${header}</th>` ).join("") }`;

                // ${headers.map( header => `<th>${header}</th>` ).join("") }
            $thead.append($tr)
        }
    }
}
customElements.define('tdd-table', Table);
