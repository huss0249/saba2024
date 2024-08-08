/*!
===============================================================
* Script: tdd.ui v1.0.1
* Autor: Ahmed Hussein
* Copyright 2011-2023
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
===============================================================
20230131:
    	- 
===============================================================
TO FIX:
    	- 
===============================================================
*/
// log("tdd.ui -------> START");
tdd.ui = {
  // init UI elements
  init() {
    // log("tdd.ui init > loaded");

    const interval = setInterval(() => {
      if (!tdd.ready.toc) {
        log("Waiting for TOC");
        //Do Something While Waiting / Spinner Gif etc.
      } else {
        // info("TOC found...");
        clearInterval(interval);

        return this.init_Elements();
      }
    }, 100);
    // return;
  },

  // elements
  init_Elements() {
    let ui_df = new DocumentFragment();

    tdd.$ui.$header = this.header();
    tdd.$ui.$main = this.main();
    tdd.$ui.$footer = this.footer();

    ui_df.appendChild(tdd.$ui.$header);
    ui_df.appendChild(tdd.$ui.$main);
    ui_df.appendChild(tdd.$ui.$footer);

    $body.prepend(ui_df);

    return this.generate_ui("hi");
    /*
    
    init_navOptions();
    */
    //  this.generate_ui("hi");
  },

  //  jumbo
  jumbo() {
    // let $jumbo = document.querySelector('[title="refTOC"]')
    // let $jumbo = document.querySelector('.hero-img')
    let $jumbo = $pageDiv.querySelector('.hero-img')

    if($jumbo) {
    log('found hero image', $jumbo)
    log('found hero image', $jumbo.children)
    log('found hero image', $jumbo.childNodes)

    let a = $jumbo.querySelector('img')
    if (a) {
      log('image source = ', a.src)
      $jumbo.classList.add('deleting')
      return a.src
    }
    // $jumbo.children.forEach( el => {

    // })
    }
      
    // return $jumbo
  },

  // offcanvas
  offcanvas() {
    let $offCanvasCont = document.createElement("div");

    $offCanvasCont.classList.add(
      "offcanvas",
      "offcanvas-xxl",
      "offcanvas-end",
      "bg-dark"
    );
    $offCanvasCont.id = "navbar";

    $offCanvasCont.setAttribute("tabindex", "-1");
    $offCanvasCont.setAttribute("aria-labelledby", "NavbarOffcanvasLabel");
    $offCanvasCont.setAttribute("data-bs-scroll", "true");

    let $offCanvasHeader = document.createElement("div");
    $offCanvasHeader.classList.add("offcanvas-header", "px-4", "pb-2");

    let $offCanvasTitle = document.createElement("h5");
    $offCanvasTitle.classList.add("offcanvas-title", "text-white");
    $offCanvasTitle.id = "NavbarOffcanvasLabel";
    // $offCanvasTitle.textContent = 'Title'
    $offCanvasTitle.textContent =
      tdd.dictionary.labels.toc.title[currentLanguage];

    let $offCanvasBtn = document.createElement("button");
    $offCanvasBtn.classList.add("btn-close", "btn-close-white");

    $offCanvasBtn.setAttribute("type", "button");
    $offCanvasBtn.setAttribute("data-bs-dismiss", "offcanvas");
    $offCanvasBtn.setAttribute("aria-label", "Close");
    $offCanvasBtn.setAttribute("data-bs-target", "#navbar");

    let $offCanvasBody = document.createElement("div");
    $offCanvasBody.classList.add("offcanvas-body", "pe-2");

    // append accordion to off canvas if not a cover page
    // $offCanvasBody.appendChild($toc);
    currentLanguage != 'title' ? $offCanvasBody.appendChild($toc) : ''

    $offCanvasHeader.appendChild($offCanvasTitle);
    $offCanvasHeader.appendChild($offCanvasBtn);

    $offCanvasCont.appendChild($offCanvasHeader);
    $offCanvasCont.appendChild($offCanvasBody);

    // $header.appendChild($offCanvasCont)
    return $offCanvasCont;
  },

  //  NAV
  nav() {
    let $nav = document.createElement("nav");

    $nav.classList.add("container");
    $nav.setAttribute("aria-label", "Main Navigation");

    let $brandContainer = document.createElement("div");
    $brandContainer.classList.add("d-lg-none");
    $nav.appendChild($brandContainer);

    // this.get_course_info();
    let test = this.get_course_info();
    $brandContainer.appendChild(test[0]);
    $brandContainer.appendChild(test[1]);
    $brandContainer.appendChild(test[2]);
    log(test);

    let $btnContainer = document.createElement("div");
    $btnContainer.classList.add("d-flex");

    let $btnToggle = document.createElement("button");
    $btnToggle.classList.add("navbar-toggler", "d-flex", "order-3", "p-2");
    // $btnToggle.type = 'button'
    $btnToggle.setAttribute("type", "button");
    $btnToggle.setAttribute("data-bs-toggle", "offcanvas");
    $btnToggle.setAttribute("data-bs-target", "#navbar");
    $btnToggle.setAttribute("aria-controls", "navbar");
    $btnToggle.setAttribute("aria-label", "Toggle navigation");

    let $btnToggleIcon = document.createElement("i");
    $btnToggleIcon.classList.add("bi", "bi-list", "text-light");

    $btnToggle.appendChild($btnToggleIcon);
    $btnContainer.appendChild($btnToggle);
    $nav.appendChild($btnContainer);

    let $offCanvasCont = this.offcanvas();
    $nav.appendChild($offCanvasCont);

    return $nav;
  },

  // elements
  // init_header() {
  header() {
    // log("tdd.ui init elements > loaded");

    /* HEADER */
    // tdd.$ui.$header = document.createElement("header");
    let $header = document.createElement("header");
    $header.classList.add(
      "navbar",
      "navbar-expand-xxl",
      "navbar",
      "bg-dark",
      "text-light",
      "sticky-top"
    );
    // $body.insertBefore(tdd.$ui.$main, tdd.$ui.$header);

    let $nav = this.nav();
    $header.appendChild($nav);

    
    // this.get_course_info();
    // let test = this.get_course_info();
    // $header.appendChild(test[0])
    // $header.appendChild(test[1])
    // $header.appendChild(test[2])
    // log(test)

    /*
    init_Brand();
    init_Navbar();
    */

    // log("tdd.ui init elements > loaded");

    /* BRAND

        let $brandSource = `./dnd_logo_${currentLanguage}.svg`;


    $brand.src = $brandSource;
    
    //  $brand.alt = 'Defence logo';
    $brand.setAttribute('alt', 'Defence logo');
    $brand.setAttribute('title', 'Defence logo');
    $brand.setAttribute('tooltip', 'Defence logo');
    $brand.style.height = '20px';
    $brand.classList.add('ml-auto', 'bd-highlight');

    $titleName.classList.add('mr-3');

    $brand_bar.classList.add('py-3');
    $brand_bar.style.display = 'flex';
    //    $brand_bar.appendChild($titleName);
    $brand_bar.appendChild($chapterName);
    $brand_bar.appendChild($brand);

    $header.appendChild($brand_bar);
    
    */

    /*  PAGE NAV
        globalThis.$pagePrevious = document.querySelector(".btn_previous");
    globalThis.$pageNext = document.querySelector(".btn_next");
    //  globalThis.$exit = document.querySelector(".btn_exit");

    $pagePrevious.children[0].innerHTML = '';
    $pageNext.children[0].innerHTML = ''
    //  $exit.children[0].innerHTML = ''

    // Bring buttons to their parent level instead of being inside a div
    let $pagePreviousChild = $pagePrevious.children[0];
    $pagePreviousChild.className = $pagePrevious.className;
    $pagePrevious = $pagePreviousChild.cloneNode(true);

    let $pageNextChild = $pageNext.children[0];
    $pageNextChild.className = $pageNext.className;
    $pageNext = $pageNextChild.cloneNode(true);

    //  let $exitChild = $exit.children[0];
    //  $exitChild.className = $exit.className;
    //  $exit = $exitChild.cloneNode(true);

    locale_pageNav()
    */

    return $header;
  },

  pageDiv() {
    // hide page content
    // $pageDiv.style.display = 'none';
    // $pageDiv.removeAttribute('style')
    $pageDiv.style.position = "unset";
    $pageDiv.style.top = "unset";
    $pageDiv.style.left = "unset";
    $pageDiv.style.width = "unset";
    $pageDiv.style.height = "unset";
    // $pageDiv.style.clip = 'unset'
    $pageDiv.style.overflow = "unset";

    return;
  },

  // elements
  // init_main() {
  main() {
    // parent of saba publisher container
    // tdd.$ui.$main = document.createElement("main");
    let $main = document.createElement("main");

    // $main.classList.add('container', 'flex-shrink-0', 'bg-transparent');
    $main.classList.add("container", "bg-transparent");

    this.pageDiv();

    $main.appendChild($pageDiv);

    // let $jumbo = this.jumbo();
    let jumbo = this.jumbo();
    log('jumbo => ', jumbo)
    // let nn = URL(`${ $jumbo }`)
    // $main.style.background = $jumbo
    // $main.style.backgroundImage = nn
    // $main.css("background-image", `url(${jumbo})`);
    $main.style.backgroundImage = `url('${jumbo}')`;
    $main.style.backgroundRepeat = 'no-repeat';

    $main.style.backgroundSize = 'contain'
    // $main.style.backgroundSize = 'cover'
    $main.style.backgroundPosition = 'top center'

    return $main;
  },

  // elements
  // init_footer() {
  footer() {
    // tdd.$ui.$footer = document.createElement("footer");
    let $footer = document.createElement("footer");
    $footer.classList.add("footer", "mt-auto", "py-3");

    let $footerContainer = document.createElement("div");
    $footerContainer.id = "footerContainer";
    $footerContainer.classList.add("container");

    let $footer_bar = document.createElement("div");
    $footer_bar.id = "footer_bar";

    let $footer_brand = document.createElement("img");
    $footer_brand.id = "footer_brand";
    $footer_brand.src = "./assets/img/canada_logo.svg";
    $footer_brand.alt = "Symbol of the Government of Canada";
    $footer_brand.style.height = "20px";

    let $footer_nav = document.createElement("div");
    $footer_nav.id = "footer_nav";

    let $copyright = document.createElement("p");
    $copyright.id = "copyright";

    $copyright.textContent = `\u00A9 ${new Date().getFullYear()} ${
      tdd.dictionary.labels.footer.copyright[currentLanguage]
    }`;
    // updateCopyright();

    $footerContainer.appendChild($footer_bar);
    $footerContainer.appendChild($footer_nav);

    $footer_bar.appendChild($footer_brand);
    $footer_bar.appendChild($copyright);

    $footer.appendChild($footerContainer);

    return $footer;
  },

  // elements
  init_Brand() {
    // log("tdd.ui init elements > loaded");
    /* BRAND

        let $brandSource = `./dnd_logo_${currentLanguage}.svg`;


    $brand.src = $brandSource;
    
    //  $brand.alt = 'Defence logo';
    $brand.setAttribute('alt', 'Defence logo');
    $brand.setAttribute('title', 'Defence logo');
    $brand.setAttribute('tooltip', 'Defence logo');
    $brand.style.height = '20px';
    $brand.classList.add('ml-auto', 'bd-highlight');

    $titleName.classList.add('mr-3');

    $brand_bar.classList.add('py-3');
    $brand_bar.style.display = 'flex';
    //    $brand_bar.appendChild($titleName);
    $brand_bar.appendChild($chapterName);
    $brand_bar.appendChild($brand);

    $header.appendChild($brand_bar);
    
    */
  },

  // elements
  init_Nav_Options() {
    // log("tdd.ui init elements > loaded");
    /* NAV OPTIONS
        globalThis.$navOptions = document.createElement("div");

    $navOptions.id = 'navOptions';
    $navOptions.classList.add('btn-group', 'btn-group-sm', 'btn-block');
    $navOptions.setAttribute("aria-label", "Course Options");
    $navOptions.setAttribute("role", "group");


    globalThis.nestedPath = tdd_dictionary.labels.modal_options;

    globalThis.navOptions = reuse_getNestedArr(currentLanguage, nestedPath, false);
    globalThis.navOptions_names = reuse_getNestedArr(currentLanguage, nestedPath, true);
    globalThis.navOptions_icons = reuse_getNestedArr('icon', nestedPath, true);

    let option_text = '';
    let option_icon = '';

    for (let i = 0; i < navOptions.length; i++) {
        let el = document.createElement("button").cloneNode(true);

        el.id = navOptions[i];
        el.setAttribute("title", navOptions[i]);
        el.setAttribute("tooltip", navOptions[i]);
        el.setAttribute("data-toggle", navOptions[i]);
        el.setAttribute("data-placement", 'bottom');
        el.classList.add('btn', 'btn-dark');

        option_text = navOptions_names[i];
        option_icon = '<i class="fa fa-' + navOptions_icons[i] + '"></i>';
        el.innerHTML = `${option_icon} ${option_text}`;
        $navOptions.appendChild(el);
    }
    */
  },

  // elements
  init_Page_Nav() {
    // log("tdd.ui init elements > loaded");

    /*  PAGE NAV
        globalThis.$pagePrevious = document.querySelector(".btn_previous");
    globalThis.$pageNext = document.querySelector(".btn_next");
    //  globalThis.$exit = document.querySelector(".btn_exit");

    $pagePrevious.children[0].innerHTML = '';
    $pageNext.children[0].innerHTML = ''
    //  $exit.children[0].innerHTML = ''

    // Bring buttons to their parent level instead of being inside a div
    let $pagePreviousChild = $pagePrevious.children[0];
    $pagePreviousChild.className = $pagePrevious.className;
    $pagePrevious = $pagePreviousChild.cloneNode(true);

    let $pageNextChild = $pageNext.children[0];
    $pageNextChild.className = $pageNext.className;
    $pageNext = $pageNextChild.cloneNode(true);

    //  let $exitChild = $exit.children[0];
    //  $exitChild.className = $exit.className;
    //  $exit = $exitChild.cloneNode(true);

    locale_pageNav()
    */

    // this.generate_ui("hi");
    return;
  },

  get_course_info() {
    // log("$toc => ", $toc);
    // log("tdd.toc.list => ", tdd.toc.list);

    let $title_name = document.createElement("h3");
    let $module_name = document.createElement("h3");
    let $page_name = document.createElement("h1");

    $title_name.classList.add("title-name");
    $module_name.classList.add("module-name");
    $page_name.classList.add("page-name");

    if (currentLanguage != "title") {
      $title_name.textContent = tdd.course.title;
      $module_name.textContent = tdd.course.module;
      $page_name.textContent = tdd.course.page;

      // log("course data => ", tdd.course);
    } else {
      // log("EN \\\\\\\\\\\\\\\\\\\\\\ course data => ", tdd.toc.list[0].en_name);
      // log("FR \\\\\\\\\\\\\\\\\\\\\\ course data => ", tdd.toc.list[0].fr_name);
    }

    // log('module => ', tdd.toc.list[0][`${currentLanguage}_name`])
    // log('page => ', tdd.toc.list[0][`${currentLanguage}_name`])

    let arr = [$title_name, $module_name, $page_name];
    return arr;
    //  return this.generate_ui("hi");
  },

  // Build UI
  generate_ui(ff) {
    //   tdd.ui_loaded = true;
    //   tdd.ready.ui = true;

    // const interval = setInterval(() => {
    //     info('Waiting for TOC...')
    //     // if( !tdd.js_loaded ) {
    //     if( !tdd.ready.toc ) {
    //         log('Waiting for TOC')
    //         //Do Something While Waiting / Spinner Gif etc.
    //     }else{
    //         info('Data found...')
    //         clearInterval(interval)
    //           // tdd.ready.ui = true;
    //           // import('./assets/js/core/toc.js')
    //           // import('./assets/js/core/ui.js')
    //     }
    //     }, 500);

    tdd.ready.ui = true;

    ff ? log("tdd.ui generate > loaded => ", ff) : "";

    return;
  },

  // Build UI
  connect_ui(rr) {
    // let mm = document.querySelector('header')
    // tdd.$ui.$header.appendChild(rr);
    // mm.appendChild(rr);
    $html.classList.add('conic-gradient', 'h-100');
    //    $html.classList.add('stacked-linear', 'h-100');
    //    $html.classList.add('layered-linear', 'h-100');
    //    $html.className = 'custom-bg h-100';

    //  $body.classList.add('noBG', 'd-flex', 'flex-column', 'h-100');
    $body.classList.add('d-flex', 'flex-column', 'h-100', 'bg-transparent');

    return;
  },
};
// log("tdd.ui -------> ", tdd.ui);
tdd.ui.init();
// tdd.ui.init_Page_Nav();
// tdd.addEventListener('load', tdd.App.process_data)
// log("tdd.ui -------< END");
