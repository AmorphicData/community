export default {
  "title": "Amorphic Community",
  "tagline": "This is a place for our community to get latest news, read blog posts, learn by video tutorials and request new features",
  "url": "https://amorphicdata.github.io",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/core/favicon.ico",
  "organizationName": "AmorphicData",
  "projectName": "workshop",
  "themeConfig": {
    "sidebarCollapsible": true,
    "hideableSidebar": true,
    "image": "img/core/logo.png",
    "navbar": {
      "title": "Amorphic Community",
      "logo": {
        "alt": "Amorphic Logo",
        "src": "img/core/logo.svg"
      },
      "items": [
        {
          "to": "/news",
          "label": "News",
          "position": "left"
        },
        {
          "to": "/blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "to": "/docs/intro",
          "label": "Video Tutorials",
          "position": "left"
        },
        {
          "to": "/team",
          "label": "Team",
          "position": "left"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Tutorial",
              "to": "/docs/intro"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/docusaurus"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/docusaurus"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "/blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/facebook/docusaurus"
            }
          ]
        }
      ],
      "logo": {
        "alt": "Amorphic Logo",
        "src": "img/core/logo-white.svg",
        "href": "https://amorphicdata.com"
      },
      "copyright": "Copyright © 2021 My Project, Inc. Built with Docusaurus."
    },
    "prism": {
      "defaultLanguage": "python",
      "theme": {
        "plain": {
          "color": "#9CDCFE",
          "backgroundColor": "#1E1E1E"
        },
        "styles": [
          {
            "types": [
              "prolog"
            ],
            "style": {
              "color": "rgb(0, 0, 128)"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(106, 153, 85)"
            }
          },
          {
            "types": [
              "builtin",
              "changed",
              "keyword"
            ],
            "style": {
              "color": "rgb(86, 156, 214)"
            }
          },
          {
            "types": [
              "number",
              "inserted"
            ],
            "style": {
              "color": "rgb(181, 206, 168)"
            }
          },
          {
            "types": [
              "constant"
            ],
            "style": {
              "color": "rgb(100, 102, 149)"
            }
          },
          {
            "types": [
              "attr-name",
              "variable"
            ],
            "style": {
              "color": "rgb(156, 220, 254)"
            }
          },
          {
            "types": [
              "deleted",
              "string",
              "attr-value"
            ],
            "style": {
              "color": "rgb(206, 145, 120)"
            }
          },
          {
            "types": [
              "selector"
            ],
            "style": {
              "color": "rgb(215, 186, 125)"
            }
          },
          {
            "types": [
              "tag"
            ],
            "style": {
              "color": "rgb(78, 201, 176)"
            }
          },
          {
            "types": [
              "tag"
            ],
            "languages": [
              "markup"
            ],
            "style": {
              "color": "rgb(86, 156, 214)"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "rgb(212, 212, 212)"
            }
          },
          {
            "types": [
              "punctuation"
            ],
            "languages": [
              "markup"
            ],
            "style": {
              "color": "#808080"
            }
          },
          {
            "types": [
              "function"
            ],
            "style": {
              "color": "rgb(220, 220, 170)"
            }
          },
          {
            "types": [
              "class-name"
            ],
            "style": {
              "color": "rgb(78, 201, 176)"
            }
          },
          {
            "types": [
              "char"
            ],
            "style": {
              "color": "rgb(209, 105, 105)"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#000000",
          "backgroundColor": "#ffffff"
        },
        "styles": [
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(0, 128, 0)"
            }
          },
          {
            "types": [
              "builtin"
            ],
            "style": {
              "color": "rgb(0, 112, 193)"
            }
          },
          {
            "types": [
              "number",
              "variable",
              "inserted"
            ],
            "style": {
              "color": "rgb(9, 134, 88)"
            }
          },
          {
            "types": [
              "operator"
            ],
            "style": {
              "color": "rgb(0, 0, 0)"
            }
          },
          {
            "types": [
              "constant",
              "char"
            ],
            "style": {
              "color": "rgb(129, 31, 63)"
            }
          },
          {
            "types": [
              "tag"
            ],
            "style": {
              "color": "rgb(128, 0, 0)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(255, 0, 0)"
            }
          },
          {
            "types": [
              "deleted",
              "string"
            ],
            "style": {
              "color": "rgb(163, 21, 21)"
            }
          },
          {
            "types": [
              "changed",
              "punctuation"
            ],
            "style": {
              "color": "rgb(4, 81, 165)"
            }
          },
          {
            "types": [
              "function",
              "keyword"
            ],
            "style": {
              "color": "rgb(0, 0, 255)"
            }
          },
          {
            "types": [
              "class-name"
            ],
            "style": {
              "color": "rgb(38, 127, 153)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "colorMode": {
      "disableSwitch": true,
      "defaultMode": "light",
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": []
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/susheelkumarpogaku/Documents/git/amorphicdata-community/sidebars.js"
        },
        "blog": {
          "blogTitle": "Blog title",
          "blogDescription": "Blog",
          "showReadingTime": true,
          "postsPerPage": 5,
          "blogSidebarCount": 3,
          "blogSidebarTitle": "Our blog posts",
          "feedOptions": {
            "type": "all",
            "copyright": "Copyright © 2021 Amorphic Data."
          }
        },
        "theme": {
          "customCss": "/Users/susheelkumarpogaku/Documents/git/amorphicdata-community/src/css/custom.scss"
        }
      }
    ]
  ],
  "plugins": [
    "docusaurus-plugin-sass",
    [
      "@docusaurus/plugin-ideal-image",
      {
        "quality": 70,
        "max": 1030,
        "min": 640,
        "steps": 2
      }
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        "id": "news",
        "path": "./news",
        "routeBasePath": "news",
        "blogTitle": "News title",
        "blogDescription": "News",
        "showReadingTime": true,
        "postsPerPage": 10,
        "blogSidebarCount": 3,
        "blogSidebarTitle": "Latest news",
        "feedOptions": {
          "type": "all",
          "copyright": "Copyright © 2021 Amorphic Data."
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};