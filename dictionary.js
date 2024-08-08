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

window.dictionary = {
    // core
    core: {
      lang: {
        en: "en",
        fr: "fr"
      },
      cover: {
          // cover logo
          logo: {
              en: "National Defence Fire Service Logo",
              fr: "Logo du service des incendies de la Défense nationale",
          },
          // button text
          buttons: {
              en: "English",
              fr: "Français",
          },

          // button tooltip
          buttons_tooltip: {
              en: "English",
              fr: "Français",
          },

          custom_title: {
            // custom title navigation text
            msg: {
                // en: "To continue in the course, please indicate if you are a deploying CAF member to receive the overseas content. If you are not a deploying CAF member, select Continue to proceed.",
                en: "<p>To continue in the course, please indicate if you are a deploying CAF member to receive the overseas content.</p><p>If you are not a deploying CAF member, select <strong>Continue </strong>to proceed.</p>",
                fr: "<p>Pour poursuivre le cours, veuillez indiquer si vous êtes un membre des Forces armées canadiennes (FAC) en déploiement pour recevoir le contenu destiné au déploiement à l’étranger.</p><p>Sinon, sélectionnez <strong>Continuer</strong> pour suivre le cours.</p>",
            },

            // custom title navigation button
            buttons: {
                // yes / true
                yes: {
                    en: "Deploying CAF Member",
                    fr: "Membre des FAC en déploiement",
                },
                // no false
                no: {
                    en: "Continue",
                    fr: "Continuer",
                },
            },

            // custom title navigation button tooltip
            buttons_tooltip: {
                // yes
                yes: {
                    en: "Continue to the deploying CAF member version of the course.",
                    fr: "Consulter la version du cours destinée aux membres des FAC en déploiement.",
                },
                // no false
                no: {
                    en: "Continue to the course.",
                    fr: "Consulter la version standard du cours.",
                },
            },
          },
      },
      navigation: {
          prev: {
              en: "Previous",
              fr: "Précédent",
              en_title: "Previous",
              fr_title: "Précédent",
              en_tooltip: "Previous",
              fr_tooltip: "Précédent",
              en_alt: "Previous",
              fr_alt: "Précédent",
          },
          next: {
              en: "Next",
              fr: "Suivant",
              en_title: "Next",
              fr_title: "Suivant",
              en_tooltip: "Next",
              fr_tooltip: "Suivant",
              en_alt: "Next",
              fr_alt: "Suivant",
          },
          exit: {
              en: "EXIT",
              fr: "FR EXIT",
              en_tooltip: "EXIT",
              fr_tooltip: "FR EXIT",
          },
      },
      modal_options: {
          prev: {
              en: "Previous",
              fr: "Précédent"
          },
          next: {
              en: "Next",
              fr: "Suivant"
          },
          exit: {
              en: "Exit Title",
              fr: "FR Exit Title"
          },
      },
      page_number_spacer: {
        en: "of",
        fr: "de",
      },
    },
  
    // labels
    labels: {
        toolbox: {
            title: {
              en: "Toolbox",
              fr: "Toolbox FR",
              icon: "gear-wide"
            },
        },

        // nav options
        toolbox_items: {
        /*
        ---------------------------------------
        1.	Resources
        2.	Definitions
        3.	Abbreviations
        4.	Placeholder A
        5.	Placeholder B
        ---------------------------------------
        */
            resources: {
                en: "Resources",
                fr: "FR Resources",
                en_tooltip: "Resources",
                fr_tooltip: "FR Resources",
                icon: "nut",
                en_link: "resources_en.html",
                fr_link: "resources_fr.html",
            },

            definitions: {
                en: "Definitions",
                fr: "FR Definitions",
                en_tooltip: "Definitions",
                fr_tooltip: "FR Definitions",
                icon: "pen",
                en_link: "definitions_en.html",
                fr_link: "definitions_fr.html",
            },

            abbreviations: {
                en: "Abbreviations",
                fr: "FR Abbreviations",
                en_tooltip: "Abbreviations",
                fr_tooltip: "FR Abbreviations",
                icon: "pencil-square",
                en_link: "abbreviations_en.html",
                fr_link: "abbreviations_fr.html",
            },
            
            custom1: {
                en: "Custom Menu 1",
                fr: "FR Custom Menu 1",
                en_tooltip: "Custom Menu 1",
                fr_tooltip: "FR Custom Menu 1",
                icon: "cog",
                en_link: "custom_menu_1_en.html",
                fr_link: "custom_menu_1_fr.html",
            },

            custom2: {
                en: "Custom Menu 2",
                fr: "FR Custom Menu 2",
                en_tooltip: "Custom Menu 2",
                fr_tooltip: "FR Custom Menu 2",
                icon: "cog",
                en_link: "custom_menu_2_en.html",
                fr_link: "custom_menu_2_fr.html",
            },

            glossary: {
                en: "GLOSSARY",
                fr: "FR GLOSSARY",
                en_tooltip: "GLOSSARY",
                fr_tooltip: "FR GLOSSARY",
                icon: "cog",
                en_link: "internal",
                fr_link: "internal",
            },
            pdf: {
                en: "PDF",
                fr: "FR PDF",
                en_tooltip: "PDF",
                fr_tooltip: "FR PDF",
                icon: "arrow-left",
                en_link: "print_en.pdf",
                fr_link: "print_fr.pdf",
            },
            help: {
                en: "HELP",
                fr: "FR HELP",
                en_tooltip: "HELP",
                fr_tooltip: "FR HELP",
                icon: "arrow-right",
                en_link: "internal",
                fr_link: "internal",
            },
            language: {
                //                en: 'English',
                //                fr: 'Français',
                en: "Français",
                fr: "English",
                en_tooltip: "Français",
                fr_tooltip: "English",
                icon: "globe",
                // EN link goes to the French page and viceVersa
                en_link: "English",
                fr_link: "Français",
            },
            exit: {
                en: "EXIT",
                fr: "FR EXIT",
                en_tooltip: "EXIT",
                fr_tooltip: "FR EXIT",
                icon: "star",
                en_link: "exit",
                fr_link: "exit",
            },
        },

        
        toc: {
            title: {
                en: "Table of contents",
                fr: "Table des matières",
                icon: "list-stack"
            },
        },

        
        menu: {
            title: {
                en: "Menu",
                fr: "Menu",
                icon: "bi-list"
            },
        },
      modal_options_core: {
          button: {
              en: "SETTINGS",
              fr: "FR SETTINGS",
              en_tooltip: "SETTINGS",
              fr_tooltip: "FR SETTINGS"
          },
          title: {
              en: "Course Options",
              fr: "Course Options"
          },
      },
  
      // nav options
      modal_options: {
        /*
        ---------------------------------------
        1.	Resources
        2.	Definitions
        3.	Abbreviations
        4.	Placeholder A
        5.	Placeholder B
        ---------------------------------------
        */
          acronyms: {
              en: "Acronyms",
              fr: "FR Acronyms",
              en_tooltip: "Acronyms",
              fr_tooltip: "FR Acronyms",
              icon: "cog",
              en_link: "acronyms_en.html",
              fr_link: "acronyms_en.html",
          },
          glossary: {
              en: "GLOSSARY",
              fr: "FR GLOSSARY",
              en_tooltip: "GLOSSARY",
              fr_tooltip: "FR GLOSSARY",
              icon: "cog",
              en_link: "internal",
              fr_link: "internal",
          },
          resources: {
              en: "Resources",
              fr: "FR Resources",
              en_tooltip: "Resources",
              fr_tooltip: "FR Resources",
              icon: "globe",
              en_link: "resources_en.html",
              fr_link: "resources_en.html",
          },
          pdf: {
              en: "PDF",
              fr: "FR PDF",
              en_tooltip: "PDF",
              fr_tooltip: "FR PDF",
              icon: "arrow-left",
              en_link: "print_en.pdf",
              fr_link: "print_fr.pdf",
          },
          help: {
              en: "HELP",
              fr: "FR HELP",
              en_tooltip: "HELP",
              fr_tooltip: "FR HELP",
              icon: "arrow-right",
              en_link: "internal",
              fr_link: "internal",
          },
          language: {
              //                en: 'English',
              //                fr: 'Français',
              en: "Français",
              fr: "English",
              en_tooltip: "Français",
              fr_tooltip: "English",
              icon: "globe",
              // EN link goes to the French page and viceVersa
              en_link: "English",
              fr_link: "Français",
          },
          exit: {
              en: "EXIT",
              fr: "FR EXIT",
              en_tooltip: "EXIT",
              fr_tooltip: "FR EXIT",
              icon: "star",
              en_link: "exit",
              fr_link: "exit",
          },
        },
      
      // footer
      footer: {
          copyright: {
              // \u00A9 ${new Date().getFullYear()}
            //   en: "Copyright ©\u00A9 His Majesty the King in Right of Canada, as represented by the Minister of National Defence, 2023.",
            //   fr: "Droits d'auteur ©\u00A9 Sa Majesté le Roi du chef du Canada, représenté par le ministre de la Défense nationale, 2023.",
              en: "Copyright © His Majesty the King in Right of Canada, as represented by the Minister of National Defence",
              fr: "Droits d'auteur © Sa Majesté le Roi du chef du Canada, représenté par le ministre de la Défense nationale",
          },
      },
    },
  };