function comparator(a, b) {
    if (a.textContent < b.textContent) return -1;
    if (a.textContent > b.textContent) return 1;
    return 0;
  }
  
  let $listGroup = document.querySelector(".list-group");
  let items = $listGroup.querySelectorAll(".list-group-item");
  
  let sorted = Array.from(items).sort(comparator);
  $listGroup.innerHTML = "";
  // sorted.forEach((e) => $sample.appendChild(e));
  
  let firstLetter = null;
  let $letter = null;
  let df = new DocumentFragment();
  
  let linkNav = () => {
    let letterList = document.querySelectorAll(".character");
    const $nav = document.querySelector("#navbar");
    let $navList = document.createElement("ul");
    $navList.classList.add(
      "nav",
      "nav-pills",
      "ms-auto",
      "fs-4",
      // "fw-bold",
      "text-info"
    );
    df.innerHTML = "";
    // console.log(Array.from(letterList));
    Array.from(letterList).forEach((e, idx) => {
      let $e = document.createElement("li");
      $e.classList.add("nav-item", "text-warning");
      $e.innerHTML = `<a class="nav-link" href="#${e.textContent.toLowerCase()}">${
        e.textContent
      }</a>`;
      df.appendChild($e);
    });
    $navList.appendChild(df);
    $nav.appendChild($navList);
  };
  
  let groupItems = () => {
    sorted.forEach((e, idx) => {
      if (firstLetter === null) {
        firstLetter = e.textContent[0];
  
        $letter = document.createElement("div");
        $letter.id = firstLetter.toLowerCase();
        $letter.classList.add(
          "character",
          "display-6",
          "text-secondary",
          "fw-light",
          "ps-3",
          "mt-5"
        );
        $letter.textContent = firstLetter;
        df.appendChild($letter);
      } else if (
        firstLetter != e.textContent[0] &&
        firstLetter === sorted[idx - 1].textContent[0]
      ) {
        firstLetter = e.textContent[0];
  
        $letter = document.createElement("div");
        $letter.id = firstLetter.toLowerCase();
        $letter.classList.add(
          "character",
          "display-6",
          "text-secondary",
          "fw-light",
          "ps-3",
          "mt-5"
        );
  
        $letter.textContent = firstLetter;
        df.appendChild($letter);
      }
      // console.log("first = ", firstLetter);
      // console.log(e.textContent[0]);
  
      e.classList.add("py-3")
      df.appendChild(e);
    });
    $listGroup.appendChild(df);
    return;
  };
  let grouped = groupItems();
  
  let linked = linkNav();
  