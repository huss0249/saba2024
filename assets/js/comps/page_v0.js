const template = document.createElement('template');
template.innerHTML = `
  <style>
    @import url("./assets/css/lib/bootstrap.min.css");
    @import url("./assets/css/lib/icons/bootstrap-icons.css");
    // @import url("./app2023.css");

    
  </style>

  <div class="root">
    <h1>Dynamic page WC is here</h1>
  </div>
`;

class customPage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'closed' });
        let clone = template.content.cloneNode(true);
        this.root.append(clone);
        console.log('comp customPage created')
    }

    //define the allowed attributes
    static get observedAttributes() {
    //   return ['page'];
      return ['w3-include-html'];
    }
    

    connectedCallback() {
console.log('HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', this.page)
// if (this.page) {
//   console.log("ATTRIBUTE IS ", this.page)

// }
        w3.includeHTML()
    }

    //handle values and changes to the attributes
    attributeChangedCallback(attrName, oldVal, newVal) {
      // console.log(attrName, newVal);
      
    //   if (attrName.toLowerCase() === 'page') {
      if (attrName.toLowerCase() === 'w3-include-html') {
        console.log("ATTRIBUTE IS ", attrName, this.page, newVal)

      }
    }


    
    /* TESTING w3 includeHTML =============================================================================*/
/*      
    let shortName = Var_courseShortName.getValue() ? Var_courseShortName.getValue() : ''; 

    log('PAGE INFO ----------------------------------- ', currentLanguage, shortName, flag_activePage)

    console.log('check pageDiv ', $pageDiv)

    let page = document.createElement('div')

    let pageName = `${currentLanguage}_${shortName}_0${flag_activePage.module}0${flag_activePage.local}.html`

    log(pageName)

    page.setAttribute('w3-include-html', pageName)
      log(page.innerHTML)
      $pageDiv.prepend(page)
      w3.includeHTML()
      log('returning========================')
*/
      /* ENDED =====================================================================TESTING w3 includeHTML */


    //sync attributes with properties as you want
    get page() {
    //   return this.getAttribute('page');
      return this.getAttribute('w3-include-html');
    }
    set page(value) {
    //   this.setAttribute('page', value);
      this.setAttribute('w3-include-html', value);
    }

}
customElements.define('tdd-page', customPage);