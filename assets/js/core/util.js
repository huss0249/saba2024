
globalThis.log = console.log
globalThis.info = console.info
globalThis.warn = console.warn
globalThis.error = console.error
globalThis.trace = console.trace
globalThis.table = console.table
/*	=====================================================================================	*/
// globalThis.tdd = {}

tdd.localData = false;
// tdd.courseCode = "";
tdd.courseCode = "enHRMS-frHRMS";

tdd.ready = {}
tdd.course = {}

tdd.$ui = {};
tdd.toc = {};
tdd.toc_list = [];
/*	=======================================================	*/

//	GLOBAL VARIABLES
globalThis.$html = document.getElementsByTagName('html')[0]
globalThis.$body = document.body
globalThis.$pageDiv = document.getElementById("pageDIV")
globalThis.$toc = ''
                
// $pageDiv.style.display = 'none'
// $pageDiv.style.visibility = 'hidden'


globalThis.lang = ''
globalThis.currentLanguage = ''

globalThis.currentMode = "dark";

globalThis.myArr = []
/*	=====================================================================================	*/

// LOADER
tdd.$preloader_cont = document.createElement('div')
tdd.$preloader_cont.id = 'preloader_cont'
$body.prepend(tdd.$preloader_cont)

tdd.$preloader = document.createElement('div')
tdd.$preloader.id = 'preloader'
// $body.prepend(tdd.$preloader)
tdd.$preloader_cont.appendChild(tdd.$preloader)

let logo = document.createElement('img')
logo.src = './assets/img/tdd.png'
logo.width = '200'
logo.height = '100'
logo.id = 'logo'
tdd.$preloader_cont.appendChild(logo)

window.addEventListener('load', () => {
    // $preloader.classList.add('preloader-hidden')
    tdd.$preloader.addEventListener('transitionend', () => {
        // $body.removeChild(tdd.$preloader)
        $body.removeChild(tdd.$preloader_cont)
    })
})

/*	=====================================================================================	*/

//load js files from array
tdd.loadJS = (arr) => {
    let count = 0
    let js_df = new DocumentFragment();
    
    arr.forEach(item => {
        let scriptObj = document.createElement("script")
        
        scriptObj.setAttribute("src", item)
        scriptObj.setAttribute("type", "module")
        scriptObj.setAttribute("async", true)

        js_df.appendChild(scriptObj)
        count++

        // success event 
        scriptObj.addEventListener("load", () => {
            // info('Script file loaded: ', item)
        })

        // error event
        scriptObj.addEventListener("error", (ev) => {
            error(item, ev, 'JS error')
        })
    })

    // log('count => ', count, ' and arr.length = ', arr.length)

    if(count === arr.length) {
        // tdd.js_loaded = true
        tdd.ready.js = true
        $body.appendChild(js_df)
    } else {
        error('Problem in loading JS files')
    }
}

/*	=====================================================================================	*/

//  Write to local Storage
tdd.writeLocalStorage = (key, val) => {
    log('local storage Write > ', key, val)
    log('local storage Write language > ', currentLanguage)
    // tdd.toc_list = [...myList];
    // localStorage.setItem([tdd.code], JSON.stringify(tdd.toc_list));
  
    let tdd ={
      courseCode: val,
      lang: currentLanguage,
      mode: currentMode
    }
    
    log(tdd)
    localStorage.setItem([val], JSON.stringify(tdd));
    return
  }



  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        // $nav.classList.remove('container');
        // $nav.classList.add('fixed-top', 'bg-dark', 'navbar-dark', 'shadow-lg');
        // $nav_bar.classList.remove('shadow');
        // $sectionName.classList.add('text-light');
        // //      $main.style.paddingTop = '180px';
        // $main.style.paddingTop = '100px';
        log('window.scrollY = >', window.scrollY)
    } else {
        // $nav.classList.add('container');
        // $nav.classList.remove('fixed-top', 'bg-dark', 'navbar-dark', 'shadow-lg');
        // $nav_bar.classList.add('shadow');
        // $sectionName.classList.remove('text-light');
        // $main.style.paddingTop = '0';
        log('window.scrollY = >', window.scrollY)
    }
})