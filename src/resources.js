// typography
// photos/videos/icons, etc.
// design tools

const resources = {
  learntocode: {
    title: "Learn to Code",
    desc:
      "Learn the HTML, CSS, and JavaScript skills to become an even better web designer.",
    resourcesList: {
      flexboxFroggy: {
        title: "Flexbox Froggy",
        image: "flexbox-froggy.png",
        desc: "A fun game that helps you to learn CSS Flexbox.",
        link: "https://flexboxfroggy.com/"
      },
      cssGarden: {
        title: "Grid Garden",
        image: "css-grid-garden.png",
        desc: "A game to help you learn CSS Grid.",
        link: "https://cssgridgarden.com/"
      },
      freeCodeCamp: {
        title: "freeCodeCamp",
        image: "freecodecamp.png",
        desc:
          "Learn to code for free by building projects with HTML, CSS, and JS.",
        link: "https://www.freecodecamp.org/"
      }
    }
  },
  design: {
    title: "Inspiration",
    desc: "Find inspiration for your newest web design project.",
    resourcesList: {
      dribbble: {
        title: "Dribbble",
        image: "dribbble.png",
        desc: "Find inspiration from other designers and share your own work.",
        link: "https://dribbble.com/"
      },
      behance: {
        title: "Behance",
        image: "behance.png",
        desc: "Discover the latest work from top online portfolios.",
        link: "https://www.behance.net/"
      },
      httpster: {
        title: "Httpster",
        image: "httpster.png",
        desc:
          "An inspiration resource showcasing unpretentious website design.",
        link: "https://httpster.net"
      }
    }
  },
  accessibility: {
    title: "Accessibility",
    desc: "Learn about Accessibility.",
    resourcesList: {
      contrastRatio: {
        title: "Contrast Ratio",
        image: "contrast-ratio.png",
        desc: "Check the contrast ratio of the colors on your website.",
        link: "https://contrast-ratio.com/"
      }
    }
  },
  squarespace: {
    title: "Squarespace",
    desc: "Learn about Squarespace.",
    resourcesList: {
      ghostPlugins: {
        title: "Ghost Plugins",
        image: "ghostplugins.png",
        desc:
          "An ever growing library of plugins and template for Squarespace.",
        link: "https://www.ghostplugins.com/"
      },
      fontOptimizer: {
        title: "Squarespace Font Optimizer",
        image: "squarespace-font-optimizer.png",
        desc:
          "Give your website a performance boost by getting rid of unnecessary fonts.",
        link: "https://cheers-studios.com/squarespace-font-optimizer"
      },
      blockIdentifier: {
        title: "Squarespace Collection/Block Identifier",
        image: "squarespace-identifier.png",
        desc: "A Chrome extension that helps you to find collection/block IDs.",
        link:
          "https://chrome.google.com/webstore/detail/squarespace-collectionblo/bggpdfnccodbnmcndckmeehdjkjojkde"
      },
      toolsExtension: {
        title: "Squarespace Websites Tools Extension",
        image: "squarespace-tools-extension.png",
        desc:
          "A plugin that adds features and speeds up your workflow on Squarespace 7 sites.",
        link:
          "https://www.squarewebsites.org/squarespacewebsites-tools-extension"
      },
      sixty: {
        title: "Sixty",
        image: "usesixty.png",
        desc: "Get real-time help via screenshare with any Squarespace task.",
        link: "https://www.usesixty.com/"
      }
    }
  },
  wordpress: {
    title: "WordPress",
    desc: "Learn about WordPress.",
    resourcesList: {
      elementor: {
        title: "Elementor",
        image: "elementor.png",
        desc: "A WordPress page builder to customize your site without code.",
        link: "https://elementor.com/"
      },
      beaverBuilder: {
        title: "Beaver Builder",
        image: "beaver-builder.png",
        desc: "A drag and drop WordPress page builder.",
        link: "https://www.wpbeaverbuilder.com/"
      },
      studioPress: {
        title: "StudioPress",
        image: "studiopress.png",
        desc:
          "Buy a solid theme or build your own child theme based on the Genesis parent theme.",
        link: "https://www.studiopress.com/"
      },
      wordPressTv: {
        title: "WordPress.tv",
        image: "wordpresstv.png",
        desc:
          "Presentations, highlights, and more from WordCamps around the world.",
        link: "https://wordpress.tv/"
      },
      flywheel: {
        title: "Flywheel",
        image: "flywheel.png",
        desc:
          "Managed WordPress hosting build for designers and creative agencies.",
        link: "https://getflywheel.com/"
      },
      siteground: {
        title: "SiteGround",
        image: "siteground.png",
        desc:
          "Inexpensive, fast, and secure hosting for small to medium sites.",
        link: "https://www.siteground.com/"
      }
    }
  },
  shopify: {
    title: "Shopify",
    desc: "Learn about Shopify.",
    resourcesList: {}
  },
  productivity: {
    title: "Productivity",
    desc: "Keep your web design business running efficiently.",
    resourcesList: {
      boomerang: {
        title: "Boomerang for Gmail",
        image: "boomerang.png",
        desc:
          "Lets you take control of when you send and receive email messages.",
        link: "https://www.boomeranggmail.com/"
      },
      contentSnare: {
        title: "Content Snare",
        image: "contentsnare.png",
        desc:
          "Gather content and files in one place with automated client reminders.",
        link: "https://contentsnare.com/"
      },
      dubsado: {
        title: "Dubsado",
        image: "dubsado.png",
        desc:
          "A platform to build relationships, schedule appointments, streamline projects, and send invoices.",
        link: "https://www.dubsado.com/"
      },
      fireshot: {
        title: "Fireshot",
        image: "fireshot.png",
        desc:
          "A browser plugin to capture full web page screenshots instantly.",
        link: "https://getfireshot.com/"
      },
      gist: {
        title: "GitHub Gist",
        image: "gist.png",
        desc: "Instantly store and share code, notes and snippets.",
        link: "https://gist.github.com"
      },
      lastpass: {
        title: "LastPass",
        image: "lastpass.png",
        desc:
          "Generate and store passwords while only having to remember 1 master password.",
        link: "https://www.lastpass.com"
      },
      licecap: {
        title: "LICEcap",
        image: "LICEcap.png",
        desc:
          "Create simple animated screen captures and save them directly as gifs.",
        link: "https://www.cockos.com/licecap/"
      },
      loom: {
        title: "Loom",
        image: "loom.png",
        desc:
          "Easy and free screen recorder. Quickly share screenshare tutorials with clients.",
        link: "https://www.loom.com/"
      },
      namecheap: {
        title: "Namecheap",
        image: "namecheap.png",
        desc:
          "Easily buy domains and point it to hosting or email services elsewhere.",
        link: "https://www.namecheap.com/"
      },
      onetimesecret: {
        title: "One Time Secret",
        image: "onetimesecret.png",
        desc:
          "Share a secret link with sensitive information that is available only one time.",
        link: "https://onetimesecret.com/"
      },
      profitFirst: {
        title: "Profit First",
        image: "profit-first.png",
        desc:
          "A highly reviewed book that helps you to manage your business's finances.",
        link: "https://profitfirstbook.com/"
      },
      stripe: {
        title: "Stripe",
        image: "stripe.png",
        desc: "Online payment processing for internet businesses.",
        link: "https://stripe.com"
      },
      toggl: {
        title: "Toggl",
        image: "toggl.png",
        desc:
          "A free and simple time tracker with powerful reports that works across devices.",
        link: "https://stripe.com"
      },
      wave: {
        title: "Wave Financial",
        image: "wave.png",
        desc:
          "Free invoicing and accounting software with credit card processing and more.",
        link: "https://www.waveapps.com/"
      }
    }
  }
};

export default resources;
