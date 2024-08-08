const template = document.createElement('template');
template.innerHTML = `
  <style>
    @import url("./assets/css/lib/bootstrap.min.css");
    @import url("./assets/css/lib/icons/bootstrap-icons.css");
    // @import url("./app2023.css");

    :root {
        display: block;
    }
  </style>

  <div class="root">
  <!--
    <slot name='page' tdd-include-html='en_rpp1_0106.html' onload='tdd.lib.includeHTML'>TEST</slot>
  -->
    </div>
  
`;

class customPage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        let clone = template.content.cloneNode(true);
        this.root.append(clone);
        // console.log('comp customPage created')
    }

    //define the allowed attributes
    static get observedAttributes() {
      return ['page'];
    }
    

    connectedCallback() {

      // console.log('HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', this.page)
      // tdd.lib.includeHTML()
      window.includeHTML()
  
      const $root = this.root.querySelector(".root")
      let $div = document.createElement('div')        
      $div.setAttribute("tdd-include-html", this.page)
      $root.append($div)
      // console.log($root)
      // tdd.lib.includeHTML()
    }

    //handle values and changes to the attributes
    attributeChangedCallback(attrName, oldVal, newVal) {
      // console.log(attrName, newVal);
      
      if (attrName.toLowerCase() === 'page') {
        // console.log("ATTRIBUTE IS ", attrName, this.page, newVal)

      }
    }


    
    /* TESTING w3 includeHTML =============================================================================*/
/*      
    let shortName = Var_courseShortName.getValue() ? Var_courseShortName.getValue() : ''; 

    log('PAGE INFO ----------------------------------- ', currentLanguage, shortName, flag_activePage)

    // console.log('check pageDiv ', $pageDiv)

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
      return this.getAttribute('page');
    }
    set page(value) {
      this.setAttribute('page', value);
    }

}
customElements.define('tdd-page', customPage);