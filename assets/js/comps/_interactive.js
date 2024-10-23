window.log = console.log;

const $dummy = document.createElement("template");
$dummy.innerHTML = `<div class="dummy">
                      <h2 class="text-warning">Headding</h2>
                      <p class="text-success">sample Paragraph content</p>
                    </div>
                    `;

class wcInt extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "closed" });

    const $css = document.createElement("link");
    $css.rel = "stylesheet";
    $css.media = "all";
    $css.href = "./comps.css";

    const $slot = document.createElement("slot");
    // $slot.name = "content";
    // $slot.classList.add("d-block", "p-3", "bg-light");

    $slot.append($dummy.content.cloneNode(true));
    $slot.append($dummy.content.cloneNode(true));

    this.root.appendChild($css);
    this.root.appendChild($slot);

    /*
    -------------------------------------------------------
    PRE
    -------------------------------------------------------
    */

    this.$root = this.root.getRootNode();
    this.$host = this.$root.host;
    this.$host.classList.add(
      "d-block",
      "bg-light",
      "p-1",
      "m-1",
      "border",
      "border-info"
    );
  }

  connectedCallback() {
    // log(ShadowRoot());
    // log("----------", document.querySelectorAll(".dummy"));
    let $target = this.root.querySelector("slot");
    log($target.innerHTML);

    let $selector = "div";
    let ees = $target.querySelectorAll($selector);

    ees.forEach((ee, index) => {
      log(index, ee.tagName);
      ee.tagName === "my-wc"
        ? ee.classList.add("bg-danger")
        : ee.classList.add("bg-dark");
    });
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

customElements.define("my-wc", wcInt);

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
