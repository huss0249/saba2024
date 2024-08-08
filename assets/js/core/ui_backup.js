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
    log("tdd.ui init > loaded");

    const interval = setInterval(() => {
      info('Waiting for TOC...')
      // if( !tdd.js_loaded ) {
      if( !tdd.ready.toc ) {
          log('Waiting for TOC')
          //Do Something While Waiting / Spinner Gif etc.
      }else{
          info('TOC found...')
          clearInterval(interval)
          // log("$toc => ", $toc);
          // log("tdd.toc.list => ", tdd.toc.list);
          
          this.init_Elements();
            // tdd.ready.ui = true;
            // import('./assets/js/core/toc.js')
            // import('./assets/js/core/ui.js')
      }
      }, 500);

      // this.generate_ui("hi");

      // this.init_Elements();
      return;
    },

  // elements
  init_Elements() {
    log("tdd.ui init elements > loaded");


    /*
    init_Header();
    init_Main();
    
    init_navOptions();
    init_Footer();
    */
  //  this.generate_ui("hi");
   this.course_info();

  },

  // elements
  init_Header() {
    log("tdd.ui init elements > loaded");

    /* HEADER
    globalThis.$header = document.createElement("header");
    $body.insertBefore($header, $modal_menu);

    
    init_Brand();
    init_Navbar();
    $header.classList.add('container');
    */
  },

  // elements
  init_Main() {
    log("tdd.ui init elements > loaded");

    /* MAIN
        // parent of saba publisher container
    globalThis.$main = document.createElement("main");
    $body.insertBefore($main, $modal_menu);

    $main.classList.add('container', 'flex-shrink-0', 'bg-transparent');
    $main.appendChild($pageDiv);
    */
  },

  // elements
  init_Brand() {
    log("tdd.ui init elements > loaded");

    
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
    log("tdd.ui init elements > loaded");


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
  init_Footer() {
    log("tdd.ui init elements > loaded");


    /* FOOTER
        globalThis.$footer_nav = document.createElement("div");
    $footer_nav.id = 'footer_nav';

    $footerContainer.appendChild($footer_nav);




    globalThis.$footer_bar = document.createElement("div");
    $footer_bar.id = 'footer_bar';

    globalThis.$copyright = document.createElement("p");
    $copyright.id = "copyright";
    $copyright.innerHTML = '';

    $footer_bar.appendChild($copyright);
    updateCopyright();

    globalThis.$footer_brand = document.createElement("img");
    $footer_brand.id = 'footer_brand';

    $footer_brand.src = './canada_logo.svg';
    $footer_brand.alt = 'Symbol of the Government of Canada';
    $footer_brand.style.height = '20px';

    $footer_bar.appendChild($footer_brand);

    $footerContainer.appendChild($footer_bar);







    globalThis.$footer = document.createElement("footer");

    globalThis.$footerContainer = document.createElement("div");
    $footerContainer.id = 'footerContainer';
    $footerContainer.classList.add('container');

    $footer.appendChild($footerContainer);

    $body.insertBefore($footer, $modal_menu);

    $footer.classList.add('footer', 'mt-auto', 'py-3');

    init_footer_nav();
    init_footer_bar();




    */


  },

  // elements
  init_Page_Nav() {
    log("tdd.ui init elements > loaded");


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

  
  course_info() {
    log("$toc => ", $toc);
    log("tdd.toc.list => ", tdd.toc.list);
    
    let $title_name = document.createElement("h3");
    let $module_name = document.createElement("h3");
    let $page_name = document.createElement("h1");
    
    $title_name.classList.add('title-name')
    $module_name.classList.add('module-name')
    $page_name.classList.add('page-name')
    
    log('LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL ', currentLanguage)

    if ( currentLanguage != 'title') {

      $title_name.textContent = tdd.course.title
      $module_name.textContent = tdd.course.module
      $page_name.textContent = tdd.course.page
      
      log('course data => ', tdd.course)
    } else {
      log('EN \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ course data => ', tdd.toc.list[0].en_name)
      log('FR \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ course data => ', tdd.toc.list[0].fr_name)
    }
    
    // log('module => ', tdd.toc.list[0][`${currentLanguage}_name`])
    // log('page => ', tdd.toc.list[0][`${currentLanguage}_name`])
    
    this.generate_ui("hi");
    /*
    log("course info generate > loaded => ");
    globalThis.$titleName = document.createElement("h3");
    globalThis.$chapterName = document.createElement("h3");
    globalThis.$sectionName = document.createElement("h2");
    globalThis.$pageName = document.createElement("h1");


    globalThis.pageInSection = VarPageInSection.getValue();
    globalThis.sectionPages = VarPagesInSection.getValue();
    globalThis.pageInChapter = VarPageInChapter.getValue();
    globalThis.chapterPages = VarPagesInChapter.getValue();

    //Will not use these since we have EN, FR and popups
    globalThis.pageInTitle = VarPageInTitle.getValue();
    globalThis.titlePages = VarPagesInTitle.getValue();

    //Will not use these since the original vars are available
    globalThis.sectionPage = Var_sectionPage.getValue();
    globalThis.titlePage = Var_titlePage.getValue();

    */
    // return;
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

ff ? log("tdd.ui generate > loaded => ", ff) : ''


    return;
  },


};
tdd.ui.init();
// tdd.ui.init_Page_Nav();
// tdd.addEventListener('load', tdd.App.process_data)
// log("tdd.ui -------< END");
