/*
===================================================================================
===================================================================================
===================================================================================
===================================================================================
===================================================================================


===================================================================================
===================================================================================
===================================================================================
===================================================================================
===================================================================================
===================================================================================
===================================================================================
===================================================================================
===================================================================================
===================================================================================


===================================================================================
===================================================================================
===================================================================================
===================================================================================
===================================================================================
*/


/*!
===================================================================================
* Script: dictionary v1.0.1
* Autor: Ahmed Hussein
* Copyright 2011-2021 
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
===================================================================================
TO DO:
    - 
===================================================================================
TO FIX:
    - 
===================================================================================
*/


/*
==========================================================
============================================================
==============================================================
============================================================
==========================================================
*/
//globalThis.tdd_dictionary = {
tdd.dictionary = {
//export const tdd_dictionary = {
    /*
    ======================================================
    USAGE:
            - Define template bilingual labels for layout elements
    
    INPUT:
            - Table element
    
    RETURN:
            -
    ======================================================
    TO DO:
            - course navigation => Next / prev
            - copyrights in footer
            - go to top of the page
            - TOC title
            - modal options title
            - options navigation
            - extra text boxes
            - accessibility titles
            - tooltips
    ======================================================
    TO FIX:
            -
    ======================================================
    */
    core: {
        lang: {
            en: 'en',
            fr: 'fr'
        },
        cover: {
            buttons: { en: 'Start Course', fr: 'Start Course FR' },
        },
        navigation: {
            prev: { en: 'PREV', fr: 'FR PREV' },
            next: { en: 'NEXT', fr: 'FR NEXT' },
            exit: { en: 'EXIT', fr: 'FR EXIT' }
        },
        navigation_name: {
            prev: { en: 'Previous Page', fr: 'FR Previous Page' },
            next: { en: 'Next Page', fr: 'FR Next Page' },
            exit: { en: 'Exit Title', fr: 'FR Exit Title' }
        },
        page_number_spacer: {
            en: '/',
            fr: 'de'
        }
    },
    labels: {
        toc: {
            title: { en: 'TOCC TITLE', fr: 'FR TOC TITLE' }
        },
        modal_options_core: {
            button: { en: 'SETTINGS', fr: 'FR SETTINGS' },
            title: { en: 'Course Options', fr: 'Course Options' }
        },
        modal_options: {
            glossary: {
                en: 'GLOSSARY',
                fr: 'FR GLOSSARY',
                icon: 'cog',
                en_link: 'internal',
                fr_link: 'internal'
            },
            resources: {
                en: 'RESOURCES',
                fr: 'FR RESOURCES',
                icon: 'globe',
                en_link: 'internal',
                fr_link: 'internal'
            },
            pdf: {
                en: 'PDF',
                fr: 'FR PDF',
                icon: 'arrow-left',
                en_link: 'print_en.pdf',
                fr_link: 'print_fr.pdf'
            },
            help: {
                en: 'HELP',
                fr: 'FR HELP',
                icon: 'arrow-right',
                en_link: 'internal',
                fr_link: 'internal'
            },
            language: {
//                en: 'ENGLISH',
//                fr: 'Français',
                en: 'Français',
                fr: 'ENGLISH',
                icon: 'globe',
                // EN link goes to the French page and viceVersa
                en_link: 'ENGLISH',
                fr_link: 'Français'
            },
            exit: {
                en: 'EXIT',
                fr: 'FR EXIT',
                icon: 'star',
                en_link: 'exit',
                fr_link: 'exit'
            }
        },
        footer: {
            copyright: {
              // \u00A9 ${new Date().getFullYear()}
              en: "EN COPYRIGHT From Dictionary JavaScript file",
              fr: "FR COPYRIGHT From Dictionary JavaScript file"
            }
          }
        }
      };
      
      // log("tdd.dictionary -------> ", tdd.dictionary);
      // log("tdd.dictionary -------> END");