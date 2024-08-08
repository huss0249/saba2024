/*!
===============================================================
* Script: tdd.toc v1.0.1
* Autor: Ahmed Hussein
* Copyright 2011-2023
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
===============================================================
20230223:
- 
===============================================================
TO FIX:
    	- 
===============================================================
*/
// log("tdd.toc -------> START");
tdd.toc = {
  // get toc data from DOM
  init() {

    // get raw toc from DOM Form element
    const $src = $body.querySelector('[title="refTOC"]');
    // log('$src = ', $src)

    //extract raw data
    const raw_toc = this.extract($src);

    // get 2 language titles
    const titles = this.get_titles(raw_toc);
    if (titles.length != 0) {

      // Fill master toc list
      tdd.toc_list = this.eval_toc(titles[0], titles[1]);
    }

    if (tdd.toc_list.length != 0) {
      if (currentLanguage === "en" || currentLanguage === "fr") {

        // generate navigation menu
        $toc = this.generate_toc();

      } else if (currentLanguage === "title") {
        $toc = currentLanguage;
        tdd.ready.toc = true;
      }
    }

    // return tdd.App.process_data($src)
    return tdd.App.process_data($toc);
  },

  // extract data from DOM select option
  extract(obj) {
    // log(obj)
    let arr = [];

    // Define obj Keys
    let itemIndex,
      itemRawText,
      itemText,
      itemLink,
      itemSelected,
      itemLevel,
      itemType;

    // Fill the main array
    Array.from(obj).forEach((item, index) => {
      itemIndex = item.index;
      itemRawText = item.innerHTML;
      itemText = itemRawText.split("&nbsp;&nbsp;").join("");
      itemLink = item.getAttribute("value");
      itemSelected = item.getAttribute("selected");
      itemType = "p";

      // Get the current Page Index
      itemSelected !== null ? (itemSelected = 1) : (itemSelected = 0);

      // Get list item level
      itemLevel = itemRawText.split("&nbsp;&nbsp;").length - 1;

      // Set Type
      // itemLevel === 3 || 4 || 5 || 6 || 7 ? itemType = 'p': ''
      itemLevel === 2 ? (itemType = "module") : "";
      itemLevel === 1 ? (itemType = "title") : "";
      itemLevel === 0 ? (itemType = "unit") : "";

      // Push obj to array
      arr.push({
        index: itemIndex,
        en_name: itemText,
        fr_name: "",
        en_link: itemLink,
        fr_link: "",
        active: itemSelected,
        level: itemLevel,
        type: itemType,
        module: "",
        global: "",
        local: "",
      });
    });

    //remove Assignable unit from the beginning of the array
    // arr.shift()

    // arr[0].level === arr[1].level ? arr[0].type = 'cover' : ''
    arr[1].level === arr[2].level ? (arr[1].type = "cover") : "";

    // log('EXTRACTED arr = ', arr)

    return arr;
    // return arr, this.get_titles()
  },

  //get_titles
  get_titles(raw_toc) {
    let return_arr = [];
    // Filter the titles to get number of titles
    const filtered_titles = tdd.lib.filter_itemType(raw_toc, "title");
    // log('filtered_titles = ', filtered_titles)

    let isBilingual = "";
    if (filtered_titles.length % 2 == 0) {
      let checkName = raw_toc[filtered_titles.slice(-1)[0]].en_name;
      // log('checkName = ', checkName)

      // TRUE > Bilingual | No > POPUPS
      // FALSE > Singular | Yes > POPUPS
      checkName.toLowerCase() != "popups | do not alter"
        ? (isBilingual = true)
        : (isBilingual = false);
    } else {
      // TRUE > Bilingual | Yes > POPUPS
      // FALSE > Singular | No > POPUPS
      filtered_titles.length === 1
        ? (isBilingual = false)
        : (isBilingual = true);
    }
    // log('isBilingual => ', isBilingual)

    //Prepare TOC based on current language
    const en_toc = raw_toc.slice(filtered_titles[0], filtered_titles[1]);
    const fr_toc = raw_toc.slice(filtered_titles[1], filtered_titles[2]);
    const popup_toc = raw_toc.slice(filtered_titles[2], -1);

    // log('en_toc = ', en_toc)
    // log('fr_toc = ', fr_toc)
    // log('popup_toc = ', popup_toc)

    let mismatch = 0;
    if (en_toc.length != fr_toc.length) {
      tdd.errors.toc_mismatch_in_structure = `tdd.toc.get_titles error: Mismatch between EN ${en_toc.length} and FR ${fr_toc.length}`;

      error(tdd.errors.toc_mismatch_in_structure);
      alert(tdd.errors.toc_mismatch_in_structure);
    } else {
      for (let i = 0; i < en_toc.length; i++) {
        if (en_toc[i].length != fr_toc[i].length) {
          mismatch += 1;

          tdd.errors.toc_mismatch_in_pages = `tdd.toc.get_titles error: ${mismatch} of mismatching(s) found at: " ${
            Object.keys({ en_toc })[0]
          } " and " ${Object.keys({ fr_toc })[0]} " at index ${n} => ${
            en_toc[n].length
          } and ${fr_toc[n].length}`;

          error(tdd.errors.toc_mismatch);
          alert(tdd.errors.toc_mismatch);
        }
      }

      // mismatch === 0 ? this.eval_toc(en_toc, fr_toc) : ''
      mismatch === 0 ? (return_arr = [en_toc, fr_toc]) : "";
    }
    return return_arr;
  },

  // is bilingual
  eval_toc(en_toc, fr_toc) {
    let module_ndx = 0;

    // define counters variables
    let module_count, local_count, global_count;
    module_count = local_count = global_count = 0;

    // clone one of the arrays to alter
    let toc_list = [...en_toc];
    // log("toc_list = >>", toc_list);

    // add list properties to title and modules
    toc_list.filter((m, ndx, arr) => {
      m.type === "title" ? (m.list = new Array()) : "";

      if (m.type === "module") {
        // fill list array of parent
        arr[0].list.push(ndx);
        m.list = new Array();
      }
    });

    // will work on one instance lang to save processing
    toc_list.forEach((item, index, arr) => {
      item.index = index;

      // combine EN and FR data into a unified list
      item.fr_name = fr_toc[index].en_name;
      item.fr_link = fr_toc[index].en_link;

      // make sure the list has the active page
      // if (currentLanguage === "en") {
      //   item.active = fr_toc[index].active;
      // } else if (currentLanguage === "fr") {
      //   item.active = fr_toc[index].active;
      // }
      if (en_toc[index].active === 1 || fr_toc[index].active === 1) {
        item.active = 1
        // log('active here = ', index)
      }

      if (item.type === "p") {
        item.type = "page";
        global_count++;
        local_count++;

        // fill pages obj properties
        item.module = module_count;
        item.global = global_count;
        item.local = local_count;

        // get the current module index for the first child page (the previous item is the module)
        if (arr[index - 1].type === "module") {
          // get pos of current module
          module_ndx = index - 1;
          // log('arr[module_ndx].module', arr[module_ndx].module)

          // add first page position to parent module
          arr[module_ndx].list.push(index);
          // log(arrr[idx - 1]);
        } else {
          // if page is not the first child of the module
          if (item.module === arr[module_ndx].module) {
            // add pages positions to their parent module
            arr[module_ndx].list.push(index);
            // log(index, ' module_ndx => ', module_ndx)
          }
        }
      }

      if (item.type === "module") {
        // to fix the summary page properties
        if (index === toc_list.length - 1) {
          item.type = "page";
          item.global = global_count + 1;
          item.local = 0;

          // remove the summary from modules list
          arr[0].list.pop();

          // delete un-needed properties
          // delete item.local
          delete item.module;
          delete item.list;
        } else {
          // reset local page counter and increment the other ones
          local_count = 0;
          module_count++;
          item.module = module_count;

          // delete un-needed properties
          delete item.active;
          delete item.en_link;
          delete item.fr_link;
          delete item.global;
          delete item.local;
        }
      }

      if (item.type === "title") {
        // delete un-needed properties
        delete item.en_link;
        delete item.fr_link;
        delete item.module;
        delete item.global;
        delete item.local;
        delete item.level;
        delete item.index;
        delete item.active;

        // Remove the Starting [EN | ] and [FR | ] from modules names @ Saba Publisher
        item.en_name = item.en_name.slice(5);
        item.fr_name = item.fr_name.slice(5);
      }
      // delete un-needed properties
      delete item.index;
      delete item.level;
    });

    // Define the main list array
    // tdd.toc.list = [...toc_list]

    // Create the nav menu from list
    // return this.generate_toc()
    return toc_list;
  },

  // Build TOC
  generate_toc() {
    // log("generate_toc = >");
    // log("currentLanguage = >", currentLanguage);

    globalThis.$toc_df = new DocumentFragment();

    myArr = [...tdd.toc_list];
    // log("myArr => ", myArr);

    const $accordion = document.createElement("div");
    $accordion.id = "accordion";
    $accordion.classList.add(`accordion`, "accordion-flush", "rounded-0");

    // const $list = [...toc_list];

    // const $accordion = document.createElement("div");
    // $accordion.id = "accordion";
    // $accordion.classList.add("accordion");

    let $item,
      $header,
      $button,
      $buttonSpan,
      $collapse,
      $accordionBody,
      $listItem,
      $listGroup,
      $lastListItem,
      counter;

    myArr.forEach((el, idx, arr) => {
      if (el.type === "module") {
        // log("el");
        $item = document.createElement("div");
        $item.id = `item${idx}`;
        $item.classList.add("accordion-item");

        $header = document.createElement("h2");
        $header.id = `heading${idx}`;
        $header.classList.add("accordion-header");

        $button = document.createElement("button");
        $button.classList.add(
          "accordion-button",
          "collapsed",
          "d-flex",
          "justify-content-between",
          "align-items-start"
        );
        $button.textContent = el[`${currentLanguage}_name`];

        $button.setAttribute("type", "button");
        $button.setAttribute("data-bs-toggle", "collapse");
        $button.setAttribute("data-bs-target", `#collapse${idx}`);
        $button.setAttribute("aria-expanded", false);

        $button.setAttribute("aria-controls", `collapse${idx}`);

        $buttonSpan = document.createElement("span");
        $buttonSpan.classList.add(
          "badge",
          "bg-primary",
          "badge-pill",
          "ms-auto",
          "flex-shrink-1"
        );

        $collapse = document.createElement("div");
        $collapse.id = `collapse${idx}`;
        
        $collapse.classList.add("accordion-collapse", "collapse");

        $collapse.setAttribute("aria-labelledby", `heading${idx}`);
        $collapse.setAttribute("data-bs-parent", `#${$accordion.id}`);

        $accordionBody = document.createElement("div");
        $accordionBody.classList.add("accordion-body");

        $listGroup = document.createElement("div");
        $listGroup.classList.add("list-group", "list-group-flush");
        
        counter = 0;
        
        arr.forEach((elP, index, arrP) => {
          if (elP.type === "page" && elP.module === el.module) {
            $listItem = document.createElement("a");
            $listItem.classList.add(
              "list-group-item",
              "list-group-item-action",
              "rounded-0"
            );

            $listItem.setAttribute("data-global", elP.global);
            $listItem.style.cursor = "pointer";
            if (elP.active === 1) {
              // log('elP.active === 1 -------------------------------------------------------------------------------')
              // log('current TITLE ==========================================> ', arrP[0][`${currentLanguage}_name`])
              
              // log('current module ==========================================> ', arrP[elP.module][`${currentLanguage}_name`])
              // log('current module ==========================================> ', arr[idx][`${currentLanguage}_name`])

              // log('elP check if no local => ', elP.local)
              
              // log('current Page ==========================================> ', elP[`${currentLanguage}_name`])
              if (elP.local != 0) {
                tdd.course.title = arrP[0][`${currentLanguage}_name`]
                tdd.course.module = arr[idx][`${currentLanguage}_name`]
                tdd.course.page = elP[`${currentLanguage}_name`]
              }
              // log('Course Data => ', [tdd.course.title, tdd.course.module, tdd.course.page])
              // log('elP.active === 1 -------------------------------------------------------------------------------')

              $listItem.setAttribute("aria-current", true);
              $listItem.setAttribute(onclick, "return false;");

              $listItem.classList.toggle("list-group-item-success");

              $button.setAttribute("aria-expanded", true);

              $button.classList.toggle("collapsed");
              $collapse.classList.toggle("show");
            }

            $listItem.textContent = elP[`${currentLanguage}_name`];

            //LINK
            // $listItem.setAttribute("href", elP[`${currentLanguage}_link`]);
            $listItem.setAttribute("href", "#");
            $listItem.setAttribute("data-en", elP.en_link);
            $listItem.setAttribute("data-fr", elP.fr_link);

            $listItem.addEventListener("click", function (e) {
              let vv = e.target;
              log(vv);
              log(vv.textContent);
              log(vv.href);
              log(vv.dataset.global);
            });

            $listGroup.appendChild($listItem);
            // $accordionBody.appendChild($listItem);
            $accordionBody.appendChild($listGroup);

            counter++;
          }
          $buttonSpan.textContent = counter;
        });
        $collapse.appendChild($accordionBody);

        // $button.appendChild($buttonSpan);
        $header.appendChild($button);
        $item.appendChild($header);
        $item.appendChild($collapse);

        // $accordion.appendChild($item);
        $toc_df.appendChild($item);
        //   } else if (el.type === "page" && el.local === undefined) {
      } else if (el.type === "page" && el.local === 0) {
        log("el page", el);
        $listGroup = document.createElement("div");
        $listGroup.classList.add("list-group", "list-group-flush");

        $lastListItem = document.createElement("a");
        $lastListItem.classList.add(
          "list-group-item",
          "list-group-item-action",
          "rounded-0"
        );
        $lastListItem.textContent = el[`${currentLanguage}_name`];
        // $lastListItem.setAttribute("href", el[`${currentLanguage}_link`]);
        $lastListItem.setAttribute("href", "#");

        $lastListItem.setAttribute("data-en", el.en_link);
        $lastListItem.setAttribute("data-fr", el.fr_link);

        $lastListItem.setAttribute("data-global", el.global);

        if (el.active === 1) {
          
          if (el.local === 0) {
            tdd.course.title = arr[0][`${currentLanguage}_name`]
            // tdd.course.module = arr[idx][`${currentLanguage}_name`]
            tdd.course.module = tdd.course.title
            tdd.course.page = el[`${currentLanguage}_name`]
          }

          // log('Course Data => ', [tdd.course.title, tdd.course.module, tdd.course.page])

          $lastListItem.setAttribute("aria-current", true);

          $lastListItem.classList.toggle("list-group-item-success");

          // $button.setAttribute("aria-expanded", true);
          // // $button.classList.remove("collapsed");
          // // $collapse.classList.add("show");
          // $button.classList.toggle("collapsed");
          // $collapse.classList.toggle("show");
        }

        $lastListItem.addEventListener("click", function (e) {
          let vv = e.target;
          log(vv);
          log(vv.textContent);
          log(vv.href);
          log(vv.dataset.global);
        });

        $listGroup.appendChild($lastListItem);
        // $accordion.appendChild($listGroup);
        $toc_df.appendChild($listGroup);
      }
    });

    // $accordion.appendChild($toc_df);

    $accordion.appendChild($toc_df);

    // $body.appendChild($accordion)

    tdd.ready.toc = true

    log("generate_toc = <");
    return $accordion;
  },

  
};
tdd.toc.init();
// tdd.addEventListener('load', tdd.App.process_data)
// log("tdd.toc -------< END");
