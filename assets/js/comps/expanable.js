const template = document.createElement("template");
template.innerHTML = `
<div>
  <h1>WC Name</h1>
  <div>
    <slot name = 'content'></slot>
  </div>
</div>
`;

class Expandable extends HTMLElement {
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

    this.makeAccordions();

    // return;
  }

  wc_title() {
    let $title = this.root.querySelector("h1");
    let yy = this.id;
    // this.id === "uuu" ? window.$abc(this.id) : window.$xyz(this.id);
    $title.textContent = this.id;
  }

  wc_content() {
    // this.$content = this.root.querySelector("slot").assignedElements()[0];
    this.makeAccordions();
  }

  // makeAccordion(targetSelector, selectorSection) {
  // makeAccordions(flag) {
  makeAccordions() {
    this.$content = this.root.querySelector("div slot").assignedElements()[0];

    let targetSelector = "div";
    let boxes = this.$content.children;

    Array.from(boxes).forEach(($acc, idx) => {
      // console.log("BOX ", $acc.parentElement.parentElement.id);

      let parentName = $acc.parentElement.parentElement.id;
      // $acc.id = `${$acc.parentElement.parentElement.id}${idx}`;
      $acc.id = `${parentName}${idx}`;

      let $accs = $acc.querySelectorAll("div");

      let df = new DocumentFragment();

      // LOOP
      $accs.forEach((AccEl, iddx) => {
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

        let accHeader = AccEl.querySelector("h2");
        accHeader.classList.add("accordion-header");
        accBtn.textContent = accHeader.textContent;
        accHeader.innerHTML = "";
        accHeader.appendChild(accBtn);
        accItem.appendChild(accHeader);

        let accBody = AccEl;
        accBody.classList.add("accordion-body", "rounded", "rounded-5");
        accCollapse.appendChild(accBody);
        accItem.appendChild(accCollapse);
        df.appendChild(accItem);
        $acc.appendChild(df);
        $acc.classList.add("accordion", "accordion-flush", "pb-3");
      });

      return $acc;
    });
  }
}
customElements.define("tdd-expandable", Expandable);