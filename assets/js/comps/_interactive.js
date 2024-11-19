window.log = console.log;

const $dummy = document.createElement("template");
$dummy.innerHTML = `
    <div class="p-3">
        <h2 class="text-warning">Web Component Configuration</h2>
        <p>All the following must be met:</p>
        
        <ol class="text-success">
            <li>Root container must be a <code> < div > </code> tag</li>
            <li>First child should be <code> < h2 > </code> or <code> < h3 > </code></li>
            <li>For responsive customization, internal <code> < div > </code> could be used as needed</li>
        </ol>
    </div>
`;

customElements.define(
  "tdd-interactive",
  class wcInteractive extends HTMLElement {
    constructor() {
      super();
      this.root = this.attachShadow({ mode: "closed" });

      const $css = document.createElement("link");
      $css.rel = "stylesheet";
      $css.media = "all";
      $css.href = "./comps.css";

      const $slot = document.createElement("slot");
      $slot.name = "content";
      // $slot.classList.add("d-block", "p-3", "d-shadow");

      $slot.append($dummy.content.cloneNode(true));

      this.root.appendChild($css);
      this.root.appendChild($slot);

      /*
            -------------------------------------------------------
            PRE
            -------------------------------------------------------
            */

      this.$host = this.root.getRootNode().host;
      this.$host.classList.add(
        "d-block",
        "d-shadow",
        "p-3",
        "m-3"
        //   "border",
        //   "border-info"
      );

      this.$slotContent = this.root.querySelector("slot").assignedElements()[0];
    }

    connectedCallback() {
      let $selectors = Array.from(this.$slotContent.children);
      log($selectors);

      $selectors.forEach((el, index) => {
        log(index, el.tagName);

        el.tagName === "DIV"
          ? el.classList.add("bg-success")
          : el.classList.add("bg-dark");
      });

      // this.makeAccordions();
    }

    static get observedAttributes() {
      return ["cat", "color", "correct"];
    }

    //handle values and changes to the attributes
    attributeChangedCallback(attrName, oldVal, newVal) {
      /*
    if(attrName.toLowerCase() === 'color') {
      this.root.querySelector('.root').classList.add(newVal)
    }
    */
    }

    makeAccordions() {
      log("this.$host = ", this.$host);

      log("this.$slotContent = ", Array.from(this.$slotContent));
      log("------------");

      let boxes = this.$slotContent.children;

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
          accCollapse.classList.add(
            "accordion-collapse",
            "collapse",
            "d-shadow"
          );
          accCollapse.setAttribute("data-bs-parent", `#${parentName}${idx}`);

          // let accHeader = AccEl.querySelector("h2");

          let accHeader = "";
          if (AccEl.querySelector("h2")) {
            accHeader = AccEl.querySelector("h2");
          } else if (AccEl.querySelector("h3")) {
            accHeader = AccEl.querySelector("h3");
          }
          console.log("accHeader is", accHeader);
          if (accHeader != "") {
            accHeader.classList.add("accordion-header");
            accBtn.textContent = accHeader.textContent;
            accHeader.innerHTML = "";
            accHeader.appendChild(accBtn);
            accItem.appendChild(accHeader);
          }

          let accBody = AccEl;
          accBody.classList.add("accordion-body", "rounded", "rounded-5");
          accCollapse.appendChild(accBody);
          accItem.appendChild(accCollapse);
          df.appendChild(accItem);
          $acc.appendChild(df);
          $acc.classList.add("accordion", "accordion-flush", "pb-5");
        });

        return $acc;
      });
    }

    //sync attributes with properties as you want
    get cat() {
      return this.getAttribute("cat");
    }
    set cat(value) {
      this.setAttribute("cat", value);
    }

    get color() {
      return this.getAttribute("color");
    }
    set color(value) {
      this.setAttribute("color", value);
    }

    get controls() {
      return this.getAttribute("controls");
    }
    set controls(value) {
      this.setAttribute("controls", value);
    }

    get correct() {
      return this.getAttribute("correct");
    }
    set correct(value) {
      this.setAttribute("correct", value);
    }
  }
);

//------------------------------
//------------------------------
//------------------------------
//------------------------------
//------------------------------
let s = "b";
//log(s.toLowerCase().charCodeAt(s) - 97);

//log(s.charCodeAt(s));
//------------------------------
const char = "b";
const findCharIndex = (char = "") => {
  const legend = "abcdefghijklmnopqrstuvwxyz";
  if (!char || !legend.includes(char) || char.length !== 1) {
    return -1;
  }
  return legend.indexOf(char);
};
//console.log(findCharIndex(char));

//-------------------------------------

function ReplaceWithAlpahbet(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map((c) => c.charCodeAt() - 64)
    .join(" ");
}

//console.log(ReplaceWithAlpahbet("b"));
