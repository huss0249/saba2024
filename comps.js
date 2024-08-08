function whatIs(ev) {
    console.log("THIS IS > ", ev)
    // console.log("THIS IS > ", ev.target)
    return ev
  }
  
  
  
  function checkHTML() {
    let $exPage = document.querySelector("#exPage")
    // console.log("$exPage.id => ", $exPage.children)
  
    /*
    if(document.querySelector("#exacc")) {
      makeAccordion('exacc', 'div')
    } else if(document.querySelector("#exscenarioid")) {
      makeTabs('exscenarioid', 'div')
    }
   */
    
    // Check types of interactions to call the related function
    if($exPage.querySelector("#exacc")) {
      makeAccordion('exacc', 'div')
    } else if($exPage.querySelector("#exscenarioid")) {
      makeTabs('exscenarioid', 'div')
    } else if($exPage.querySelector("#exaction")) {
      customInteraction('exaction', 'div')
    } else {}
  
    return
  }
  
  function makeAccordion(targetSelector, selectorSection) {
  
  console.log("targetSelector = > ", targetSelector)
  console.log("selectorSection => ", selectorSection)
  
      const $acc = document.querySelector(`#${targetSelector}`)
      console.log("$acc ----------------------- ", $acc)
      // $acc.style.clip = 'unset'
      // $acc.style.height = '100%'
      
      const $accs = $acc.querySelectorAll(selectorSection)
      
      console.log("$acc = ", $acc)
      console.log("$accs = ", $accs)
      
      let df = new DocumentFragment()
      
      
      // LOOP
      for (let i = 0; i < $accs.length; i++) {    
          // create Elements
          let accItem = document.createElement("div")
          accItem.classList.add("accordion-item")
  
          let accBtn = document.createElement("button")
          accBtn.type = "button"
          accBtn.classList.add("accordion-button", "collapsed")
  
          tdd.tmpAttArr = [accBtn]
          tdd.tmpAttObj = {
              "data-bs-toggle": "collapse",
              "data-bs-target": `#${targetSelector}-collapse_${i}`,
              "aria-expanded": false,
              "aria-controls": `${targetSelector}-collapse_${i}`
          }
          tdd.lib.loop_setAtts(tdd.tmpAttArr, tdd.tmpAttObj)
          tdd.lib.reset_loop_setAtts()
  
          let accCollapse = document.createElement("div")
          accCollapse.id = `${targetSelector}-collapse_${i}`
          accCollapse.classList.add("accordion-collapse", "collapse")
          accCollapse.setAttribute("data-bs-parent", `#${$acc.id}`)
  
          let accHeader = $accs[i].querySelector("h2")
          // accHeader.classList.add("accordion-header", "bg-success")
          accHeader ? accHeader.classList.add("accordion-header") : ""
  
          // accBtn.textContent = accHeader.textContent
          
  
          accHeader ? accBtn.textContent = accHeader.textContent : ''
          accHeader ? accHeader.innerHTML = "" : ""
          accHeader ? accHeader.appendChild(accBtn) : ""
          accHeader ? accItem.appendChild(accHeader) : ""
          
  
  
          let accBody = $accs[i]
          accBody.classList.add("accordion-body")
  
          accCollapse.appendChild(accBody)
          accItem.appendChild(accCollapse)
  
          df.appendChild(accItem)
  
          $acc.appendChild(df)
          $acc.classList.add("accordion", "accordion-flush")
          // $acc.classList.add("accordion")
      }
      console.log("$acc = ", $acc)
      return $acc;
    }
  
  /* THERE IS A DUPLICATE IN TDD>LIB> */
    function includeHTML(cb) {
      let z, i, elmnt, file, xhttp;
      z = document.getElementsByTagName("*");
      for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("tdd-include-html");
        if (file) {
          xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
              if (this.status == 200) {elmnt.innerHTML = this.responseText;}
              if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
              elmnt.removeAttribute("tdd-include-html");
              tdd.lib.includeHTML(cb);
            }
          }      
          xhttp.open("GET", file, true);
          xhttp.send();
          return;
        }
      }
      if (cb) cb();
      return
    }
  
  
    function makeTabs(targetSelector, selectorSection) {
  
      // const makeTabs = (targetSelector, selectorSection) => {
      const $tab = document.querySelector(`#${targetSelector}`);
      const $tabs = $tab.querySelectorAll(selectorSection);
  
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
  
      let df = new DocumentFragment();
  
      // LOOP
      for (let i = 0; i < $tabs.length; i++) {
        // create Elements
        let tabBtn = document.createElement("button");
        tabBtn.type = "button";
        tabBtn.role = "tab";
        // tabBtn.setAttribute("role", "tab");
        tabBtn.id = `#${targetSelector}-tab_${i}`;
  
        if (i === 0) {
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
  
        tdd.tmpAttArr = [tabBtn]
        tdd.tmpAttObj = {
          "data-bs-toggle": "tab",
          "data-bs-target": `#${targetSelector}-tab_${i}`,
          "aria-controls": `${targetSelector}-tab_${i}`
        }
        tdd.lib.loop_setAtts(tdd.tmpAttArr, tdd.tmpAttObj)
        tdd.lib.reset_loop_setAtts()
  
        // tabBtn.textContent = `tab ${i + 1}`;
        tabBtn.textContent = $tabs[i].querySelector("h2").textContent;
  
        navTabs.appendChild(tabBtn);
  
        /*  */
        //
        /*  */
  
        let tabPane = document.createElement("div");
        tabPane.id = `${targetSelector}-tab_${i}`;
        if (i === 0) {
          tabPane.classList.add("tab-pane", "fade", "show", "active");
        } else {
          tabPane.classList.add("tab-pane", "fade");
        }
  
        tabPane.role = "tabpanel";
        tabPane.setAttribute("aria-labelledby", `${targetSelector}-tab_${i}`);
        tabPane.tabindex = 0;
  
        tabPane.appendChild($tabs[i]);
        tabContent.appendChild(tabPane);
      }
      // $nav.appendChild(navTabs);
      // df.appendChild($nav);
      df.appendChild(navTabs);
      df.appendChild(tabContent);
      $tab.appendChild(df);
  
      // console.log($tab);
      return $tab;
      // }
  
    }
  
  
  
    function customInteraction(targetSelector, selectorSection) {
      console.log("Not Started Yet")
    }
  
  
  //   function resetCollapse(flag) {
  // console.log(flag.parentElement.parentElement.parentElement.parentElement)
  //     // const $custominteraction = document.getElementById("custominteraction")
  //     const $custominteraction = flag.parentElement.parentElement.parentElement.parentElement
  //     console.log($custominteraction)
  //     // let $collapses = document.querySelectorAll(".exbox");
  //     let $collapses = $custominteraction.querySelectorAll(".exbox");
  //     console.log($collapses)
  //     $collapses.forEach((el) => el.classList.remove("show"));
  //     return;
  // }
  
  
  
  
  
  
  function just(a, b) {
    console.log("a = >" ,a , "  b = > ", b)
    // new LeaderLine( a, b)
  }
  
  
  
  
  
  function hi() {
  
    setTimeout(() => {
      // console.log("Delayed for 1 second.");
      
      console.log("HI")
            document.querySelectorAll(".accordion-collapse").forEach((el) => { el.classList.remove("collapse") })
      // window.hi()
      // page.classList.add("show")
    }, "200");
  
  
    // setTimeout(() => {
    //   console.log("HI")
    //         document.querySelectorAll(".accordion-collapse").forEach((el) => { el.classList.remove("collapse") })
    // }, "200");
  
  
    const $accss = document.querySelectorAll(".accordion-collapse")
    $accss.forEach((el) => {
      el.classList.remove("collapse")
      console.log("000000000000000000000000000")
    })
    
        }  