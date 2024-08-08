const template = document.createElement("template");
template.innerHTML = `
<div>
  <h1></h1>
  <div>
    <slot name = 'content'></slot>
  </div>
</div>
`;

class ExTab extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    let clone = template.content.cloneNode(true);
    this.root.append(clone);
  }

  static get observedAttributes() {
    return ["cat", "color"];
  }
  connectedCallback() {
    this.wc_title();
    // this.wc_content();

    this.makeTabs();

    // return;
  }

  wc_title() {
    let $title = this.root.querySelector("h1");
    $title.textContent === "" ? $title.remove() : ''
    // $title.textContent = this.id;
  }

  wc_content() {
    // this.$content = this.root.querySelector("slot").assignedElements()[0];
    this.makeTabs();
  }

  makeTabs() {
    this.$content = this.root.querySelector("div slot").assignedElements()[0];

    let boxes = this.$content.children;

    Array.from(boxes).forEach(($tab, idx) => {

      let parentName = $tab.parentElement.parentElement.id;
      $tab.id = `${parentName}${idx}`;

      let $tabs = $tab.querySelectorAll("div");




      $tab.classList.add("d-flex", "align-items-start");
  
      let navTabs = document.createElement("div");
      navTabs.classList.add(
        "nav",
        "col-5",
        "flex-column",
        "nav-pills",
        "me-3",
        "nav-fill",
        "p-3"
      );
      navTabs.id = "v-pills-tab";
      navTabs.role = "tablist";
      navTabs.setAttribute("aria-orientation", "vertical");
  
      let tabContent = document.createElement("div");
      tabContent.id = "nav-tabContent";
      tabContent.classList.add("tab-content");




    //   let df = new DocumentFragment();

      // LOOP
      $tabs.forEach((TabEl, iddx) => {
        /*
        let accItem = document.createElement("div");
        accItem.classList.add("accordion-item");

        let accBtn = document.createElement("button");
        accBtn.type = "button";
        accBtn.classList.add("accordion-button", "collapsed", "mt-3");
        accBtn.setAttribute("data-bs-toggle", "collapse");
        accBtn.setAttribute(
          "data-bs-target",
          `#${parentName}${idx}-collapse_${iddx}`
        );
        accBtn.setAttribute("aria-expanded", "false");
        accBtn.setAttribute(
          "aria-controls",
          `${parentName}${idx}-collapse_${iddx}`
        );

        let accCollapse = document.createElement("div");
        accCollapse.id = `${parentName}${idx}-collapse_${iddx}`;
        accCollapse.classList.add("accordion-collapse", "collapse", "d-shadow");
        accCollapse.setAttribute("data-bs-parent", `#${parentName}${idx}`);

        let accHeader = TabEl.querySelector("h2");
        accHeader.classList.add("accordion-header");
        accBtn.textContent = accHeader.textContent;
        accHeader.innerHTML = "";
        accHeader.appendChild(accBtn);
        accItem.appendChild(accHeader);

        let accBody = TabEl;
        accBody.classList.add("accordion-body", "rounded", "rounded-5");
        accCollapse.appendChild(accBody);
        accItem.appendChild(accCollapse);
        df.appendChild(accItem);
        $tab.appendChild(df);
        $tab.classList.add("accordion", "accordion-flush", "pb-3");
        */
        let df = new DocumentFragment();
        let tabBtn = document.createElement("button");
  
        tabBtn.type = "button";
        tabBtn.role = "tab";
        tabBtn.id = `#${parentName}${idx}-tab_${iddx}`;
  
        // accCollapse.id = `${parentName}${idx}-collapse_${iddx}`;
  
        if (iddx === 0) {
          tabBtn.classList.add(
            "nav-link",
            "active",
            "text-start",
            "nav-fill",
            "p-3"
          );
          tabBtn.setAttribute("aria-selected", "true");
        } else {
          tabBtn.classList.add("nav-link", "text-start", "nav-fill", "p-3");
          tabBtn.setAttribute("aria-selected", "false");
        }
  
        tabBtn.setAttribute("data-bs-toggle", "tab");
        tabBtn.setAttribute(
          "data-bs-target",
          `#${parentName}${idx}-tab_${iddx}`
        );
        tabBtn.setAttribute(
          "aria-controls",
          `${parentName}${idx}-tab_${iddx}`
        );
        tabBtn.textContent = TabEl.querySelector("h2").textContent;
  
        navTabs.appendChild(tabBtn);
        let tabPane = document.createElement("div");
        tabPane.id = `${parentName}${idx}-tab_${iddx}`;
  
        iddx === 0
          ? tabPane.classList.add("tab-pane", "fade", "show", "active")
          : tabPane.classList.add("tab-pane", "fade");
        tabPane.role = "tabpanel";
        tabPane.setAttribute(
          "aria-labelledby",
          `${parentName}${idx}-tab_${iddx}`
        );
        tabPane.tabindex = 0;
        tabPane.appendChild(TabEl);
        tabContent.appendChild(tabPane);
        df.appendChild(navTabs);
        df.appendChild(tabContent);
        $tab.appendChild(df);
      });

      return $tab;
    });
  }
}
customElements.define("tdd-extab", ExTab);