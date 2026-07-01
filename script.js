/* ============================================================
   Sklenyký — landing page interactions
   ============================================================ */
(function () {
  "use strict";

  /* --------------------------------------------------------
     CONFIG — connect the form to a no-backend service (optional)
     --------------------------------------------------------
     This site has no backend. By default the form shows a
     "Thank you" message on submit.

     To actually collect applications without a server, paste an
     endpoint from a forms service below (e.g. Formspree or
     Web3Forms). When set, the form will POST the data there.

       Formspree:  https://formspree.io/f/XXXXXXXX
       Web3Forms:  https://api.web3forms.com/submit
                   (also set ACCESS_KEY below)
  */
  var FORM_ENDPOINT = ""; // e.g. "https://formspree.io/f/abcdwxyz"
  var WEB3FORMS_ACCESS_KEY = ""; // only for Web3Forms

  /* ========================================================
     INTERNATIONALISATION (i18n) — English (default) + Czech
     ======================================================== */
  var I18N = {
    en: {
      "meta.title": "Sklenyký — Fresh herbs, always within reach",
      "meta.desc": "An automated indoor growing cabinet for modern restaurants. Fresh basil, parsley and mint on demand, with almost zero maintenance. Apply to the pilot program.",
      "a11y.skip": "Skip to content",
      "brand.aria": "Sklenyký — home",

      "nav.solution": "Solution",
      "nav.benefits": "Benefits",
      "nav.pilot": "Pilot Program",
      "nav.faq": "FAQ",
      "nav.cta": "Become a Pilot",
      "nav.menuOpen": "Open menu",
      "nav.menuClose": "Close menu",
      "lang.aria": "Switch language",

      "hero.eyebrow": "Pilot Program — now accepting restaurants",
      "hero.title": "Fresh herbs.<br />Always within reach.",
      "hero.sub": "Automated indoor growing cabinet designed for modern restaurants.",
      "hero.desc": "Grow basil, parsley, mint and more with almost zero maintenance.",
      "hero.ctaPrimary": "Become a Pilot Restaurant",
      "hero.ctaSecondary": "See How It Works",
      "hero.trust1": "No plumbing required",
      "hero.trust2": "Plug & grow",
      "hero.trust3": "Harvest in days",
      "hero.cabinetAlt": "Automated growing cabinet with fresh herbs",

      "problem.kicker": "The problem",
      "problem.title": "Fresh herbs shouldn't be unpredictable.",
      "problem.c1t": "They spoil quickly",
      "problem.c1d": "Fresh herbs lose their quality within days, and most of the batch ends up in the bin.",
      "problem.c2t": "Deliveries cost more",
      "problem.c2d": "Daily deliveries to stay fresh quietly add up — in money, time and coordination.",
      "problem.c3t": "Running out mid-service",
      "problem.c3d": "Running out of basil during dinner service isn't an option your kitchen can afford.",
      "problem.foot": "Restaurants deserve a better solution.",

      "solution.kicker": "The solution",
      "solution.title": "Meet the Growing Cabinet.",
      "solution.cabinetAlt": "Growing cabinet",
      "solution.s1t": "Plug it in",
      "solution.s1d": "Standard power socket. No plumbing, no installation crew.",
      "solution.s2t": "Insert seed capsule",
      "solution.s2d": "Pre-seeded capsules drop in. Nothing to measure or mix.",
      "solution.s3t": "Select herb",
      "solution.s3d": "Pick the herb and the cabinet loads the right growing recipe.",
      "solution.s4t": "Harvest fresh herbs",
      "solution.s4d": "Cut what you need, right before it reaches the plate.",
      "solution.foot": "Everything else is automated.",

      "features.kicker": "Built in",
      "features.title": "Everything it needs to grow.",
      "features.f1t": "Automatic lighting",
      "features.f1d": "Full-spectrum light, tuned to each herb and time of day.",
      "features.f2t": "Automatic irrigation",
      "features.f2d": "Plants are watered precisely. You never touch a tank by hand.",
      "features.f3t": "Optimized recipes",
      "features.f3d": "Each herb grows on a recipe refined for flavor and yield.",
      "features.f4t": "Smart monitoring",
      "features.f4d": "The cabinet watches conditions and adjusts on its own.",
      "features.f5t": "Low maintenance",
      "features.f5d": "A few minutes a week. No green thumb required.",
      "features.f6t": "Compact footprint",
      "features.f6d": "Designed to slot neatly into a working kitchen.",

      "benefits.kicker": "Why kitchens love it",
      "benefits.title": "Designed for modern kitchens.",
      "benefits.b1t": "Fresh every day",
      "benefits.b1d": "Herbs at their peak, harvested moments before serving.",
      "benefits.b2t": "No last-minute shopping",
      "benefits.b2d": "The supply is already in your kitchen, ready to cut.",
      "benefits.b3t": "Reduced food waste",
      "benefits.b3d": "Harvest only what you need. Nothing wilts in the fridge.",
      "benefits.b4t": "Premium guest experience",
      "benefits.b4d": "A visible signal of freshness and craft on every plate.",
      "benefits.b5t": "Consistent quality",
      "benefits.b5d": "The same flavor and look, every single service.",
      "benefits.b6t": "Always available",
      "benefits.b6d": "No seasons, no shortages, no supplier surprises.",

      "showcase.kicker": "The product",
      "showcase.title": "A premium appliance, not a planter.",
      "showcase.cabinetAlt": "Detailed view of the growing cabinet",
      "showcase.c1t": "Glass door",
      "showcase.c1d": "See the harvest at a glance",
      "showcase.c2t": "Tuned LED light",
      "showcase.c2d": "Full-spectrum, per shelf",
      "showcase.c3t": "Quiet & sealed",
      "showcase.c3d": "Belongs in a kitchen",

      "pilot.kicker": "Pilot Program",
      "pilot.title": "Become one of our first pilot restaurants.",
      "pilot.text": "We're currently selecting restaurants interested in testing the first generation of our automated growing cabinet. Pilot partners will directly influence the final product.",
      "pilot.l1": "Early access",
      "pilot.l2": "Direct communication",
      "pilot.l3": "Priority pricing",
      "pilot.l4": "Shape the future product",
      "pilot.cta": "Apply for Pilot Program",

      "apply.kicker": "Apply",
      "apply.title": "Apply to the Pilot Program.",
      "apply.lead": "Tell us about your restaurant. If it's a fit, we'll be in touch with the next steps. It takes about two minutes.",
      "apply.p1": "No commitment to apply",
      "apply.p2": "Limited number of pilots",
      "apply.p3": "We reply personally",

      "form.restaurant": "Restaurant name",
      "form.owner": "Owner / chef name",
      "form.email": "Email",
      "form.optional": "(optional)",
      "form.city": "City",
      "form.capacity": "Restaurant capacity",
      "form.seats": "(seats)",
      "form.supplier": "Current herb supplier",
      "form.message": "Message",
      "form.messagePlaceholder": "Anything you'd like us to know?",
      "form.optIn": "I'd like to participate in the Pilot Program.",
      "form.submit": "Apply",
      "form.sending": "Sending…",
      "form.note": "We'll only use your details to contact you about the pilot.",
      "form.successTitle": "Thank you.",
      "form.successText": "We'll contact you shortly.",
      "form.errorAlert": "Something went wrong sending your application. Please email us at hello@sklenyky.cz.",
      "err.restaurant": "Please enter your restaurant name.",
      "err.owner": "Please enter the owner or chef name.",
      "err.email": "Please enter a valid email address.",
      "err.city": "Please enter your city.",

      "faq.kicker": "FAQ",
      "faq.title": "Questions, answered.",
      "faq.q1": "When will it launch?",
      "faq.a1": "We're rolling out the first generation through the pilot program now. Pilot restaurants get the cabinet first, before general availability.",
      "faq.q2": "How much maintenance is required?",
      "faq.a2": "Almost none. Lighting and watering are automated. You spend a few minutes a week refilling water and harvesting.",
      "faq.q3": "Which herbs can be grown?",
      "faq.a3": "Basil, parsley, mint, coriander and other popular kitchen herbs — each with its own optimized growing recipe.",
      "faq.q4": "Does it require plumbing?",
      "faq.a4": "No plumbing. The cabinet has its own reservoir — you simply top it up. It only needs a standard power socket.",
      "faq.q5": "How much electricity does it use?",
      "faq.a5": "It's designed to be efficient, running on energy-saving LEDs. Exact figures are part of what we'll validate together during the pilot.",
      "faq.q6": "Can I become a pilot partner?",
      "faq.a6": "Yes — that's exactly who this is for. <a href=\"#apply\">Apply above</a> and we'll be in touch if it's a fit.",

      "footer.slogan": "Fresh herbs, always within reach.",
      "footer.rights": "All rights reserved.",
      "footer.made": "Made for modern kitchens."
    },

    cs: {
      "meta.title": "Sklenyký — Čerstvé bylinky, vždy po ruce",
      "meta.desc": "Automatická pěstební skříň pro moderní restaurace. Čerstvá bazalka, petržel a máta kdykoli, s téměř nulovou údržbou. Přihlaste se do pilotního programu.",
      "a11y.skip": "Přejít na obsah",
      "brand.aria": "Sklenyký — domů",

      "nav.solution": "Řešení",
      "nav.benefits": "Výhody",
      "nav.pilot": "Pilotní program",
      "nav.faq": "Dotazy",
      "nav.cta": "Stát se pilotem",
      "nav.menuOpen": "Otevřít menu",
      "nav.menuClose": "Zavřít menu",
      "lang.aria": "Přepnout jazyk",

      "hero.eyebrow": "Pilotní program — přijímáme restaurace",
      "hero.title": "Čerstvé bylinky.<br />Vždy po ruce.",
      "hero.sub": "Automatická pěstební skříň navržená pro moderní restaurace.",
      "hero.desc": "Pěstujte bazalku, petržel, mátu a další s téměř nulovou údržbou.",
      "hero.ctaPrimary": "Stát se pilotní restaurací",
      "hero.ctaSecondary": "Jak to funguje",
      "hero.trust1": "Bez připojení na vodu",
      "hero.trust2": "Zapojte a pěstujte",
      "hero.trust3": "Sklizeň během dnů",
      "hero.cabinetAlt": "Automatická pěstební skříň s čerstvými bylinkami",

      "problem.kicker": "Problém",
      "problem.title": "Čerstvé bylinky by neměly být nevyzpytatelné.",
      "problem.c1t": "Rychle se kazí",
      "problem.c1d": "Čerstvé bylinky ztrácejí kvalitu během několika dní a většina dávky skončí v koši.",
      "problem.c2t": "Rozvozy stojí víc",
      "problem.c2d": "Každodenní rozvozy kvůli čerstvosti se nenápadně sčítají — v penězích, čase i koordinaci.",
      "problem.c3t": "Dojde uprostřed provozu",
      "problem.c3d": "Že vám během večerního provozu dojde bazalka, si vaše kuchyně nemůže dovolit.",
      "problem.foot": "Restaurace si zaslouží lepší řešení.",

      "solution.kicker": "Řešení",
      "solution.title": "Představujeme pěstební skříň.",
      "solution.cabinetAlt": "Pěstební skříň",
      "solution.s1t": "Zapojte ji",
      "solution.s1d": "Běžná zásuvka. Žádná voda v síti, žádná instalační četa.",
      "solution.s2t": "Vložte kapsli se semínky",
      "solution.s2d": "Připravené kapsle stačí vložit. Nic se neměří ani nemíchá.",
      "solution.s3t": "Vyberte bylinku",
      "solution.s3d": "Zvolte bylinku a skříň načte správný pěstební recept.",
      "solution.s4t": "Sklízejte čerstvé bylinky",
      "solution.s4d": "Ustřihněte, co potřebujete, těsně než to půjde na talíř.",
      "solution.foot": "Vše ostatní je automatické.",

      "features.kicker": "Vestavěno",
      "features.title": "Vše, co potřebuje k růstu.",
      "features.f1t": "Automatické osvětlení",
      "features.f1d": "Plnospektrální světlo, vyladěné pro každou bylinku a denní dobu.",
      "features.f2t": "Automatické zavlažování",
      "features.f2d": "Rostliny jsou přesně zalévány. Nádrže se nikdy nedotknete rukou.",
      "features.f3t": "Optimalizované recepty",
      "features.f3d": "Každá bylinka roste podle receptu vyladěného na chuť a výnos.",
      "features.f4t": "Chytré sledování",
      "features.f4d": "Skříň sleduje podmínky a sama se přizpůsobuje.",
      "features.f5t": "Nízká údržba",
      "features.f5d": "Pár minut týdně. Žádná zahradnická zkušenost není potřeba.",
      "features.f6t": "Kompaktní rozměry",
      "features.f6d": "Navrženo tak, aby úhledně zapadlo do provozní kuchyně.",

      "benefits.kicker": "Proč si ji kuchyně oblíbí",
      "benefits.title": "Navrženo pro moderní kuchyně.",
      "benefits.b1t": "Čerstvé každý den",
      "benefits.b1d": "Bylinky v nejlepší kondici, sklizené chvíli před podáváním.",
      "benefits.b2t": "Žádné nákupy na poslední chvíli",
      "benefits.b2d": "Zásoba už je ve vaší kuchyni, připravená k ustřižení.",
      "benefits.b3t": "Méně plýtvání",
      "benefits.b3d": "Sklízejte jen to, co potřebujete. Nic neuvadne v lednici.",
      "benefits.b4t": "Prémiový zážitek pro hosty",
      "benefits.b4d": "Viditelný signál čerstvosti a řemesla na každém talíři.",
      "benefits.b5t": "Stálá kvalita",
      "benefits.b5d": "Stejná chuť i vzhled, každý jednotlivý provoz.",
      "benefits.b6t": "Vždy k dispozici",
      "benefits.b6d": "Žádné sezóny, žádné výpadky, žádná překvapení od dodavatelů.",

      "showcase.kicker": "Produkt",
      "showcase.title": "Prémiový spotřebič, ne květináč.",
      "showcase.cabinetAlt": "Detailní pohled na pěstební skříň",
      "showcase.c1t": "Skleněné dveře",
      "showcase.c1d": "Sklizeň na první pohled",
      "showcase.c2t": "Vyladěné LED světlo",
      "showcase.c2d": "Plné spektrum, pro každou polici",
      "showcase.c3t": "Tiché a uzavřené",
      "showcase.c3d": "Patří do kuchyně",

      "pilot.kicker": "Pilotní program",
      "pilot.title": "Staňte se jednou z našich prvních pilotních restaurací.",
      "pilot.text": "Právě vybíráme restaurace, které mají zájem otestovat první generaci naší automatické pěstební skříně. Pilotní partneři přímo ovlivní finální podobu produktu.",
      "pilot.l1": "Přednostní přístup",
      "pilot.l2": "Přímá komunikace",
      "pilot.l3": "Zvýhodněná cena",
      "pilot.l4": "Podílejte se na budoucím produktu",
      "pilot.cta": "Přihlásit se do pilotního programu",

      "apply.kicker": "Přihláška",
      "apply.title": "Přihlaste se do pilotního programu.",
      "apply.lead": "Řekněte nám o své restauraci. Pokud se budeme hodit, ozveme se s dalšími kroky. Zabere to asi dvě minuty.",
      "apply.p1": "Přihláška k ničemu nezavazuje",
      "apply.p2": "Omezený počet míst",
      "apply.p3": "Odpovídáme osobně",

      "form.restaurant": "Název restaurace",
      "form.owner": "Majitel / šéfkuchař",
      "form.email": "E-mail",
      "form.optional": "(nepovinné)",
      "form.city": "Město",
      "form.capacity": "Kapacita restaurace",
      "form.seats": "(míst)",
      "form.supplier": "Současný dodavatel bylinek",
      "form.message": "Zpráva",
      "form.messagePlaceholder": "Chcete nám něco sdělit?",
      "form.optIn": "Chci se zúčastnit pilotního programu.",
      "form.submit": "Odeslat přihlášku",
      "form.sending": "Odesílám…",
      "form.note": "Vaše údaje použijeme pouze pro kontakt ohledně pilotního programu.",
      "form.successTitle": "Děkujeme.",
      "form.successText": "Brzy se vám ozveme.",
      "form.errorAlert": "Při odesílání přihlášky se něco pokazilo. Napište nám prosím na hello@sklenyky.cz.",
      "err.restaurant": "Zadejte prosím název restaurace.",
      "err.owner": "Zadejte prosím jméno majitele nebo šéfkuchaře.",
      "err.email": "Zadejte prosím platnou e-mailovou adresu.",
      "err.city": "Zadejte prosím město.",

      "faq.kicker": "Časté dotazy",
      "faq.title": "Odpovědi na vaše otázky.",
      "faq.q1": "Kdy to bude spuštěno?",
      "faq.a1": "První generaci právě uvádíme prostřednictvím pilotního programu. Pilotní restaurace získají skříň jako první, před obecnou dostupností.",
      "faq.q2": "Kolik údržby to vyžaduje?",
      "faq.a2": "Téměř žádnou. Osvětlení i zalévání jsou automatické. Pár minut týdně strávíte doplněním vody a sklizní.",
      "faq.q3": "Jaké bylinky lze pěstovat?",
      "faq.a3": "Bazalku, petržel, mátu, koriandr a další oblíbené kuchyňské bylinky — každou s vlastním optimalizovaným receptem.",
      "faq.q4": "Vyžaduje připojení na vodu?",
      "faq.a4": "Žádné připojení na vodu. Skříň má vlastní nádrž — stačí ji doplnit. Potřebuje pouze běžnou zásuvku.",
      "faq.q5": "Kolik spotřebuje elektřiny?",
      "faq.a5": "Je navržena úsporně a využívá energeticky efektivní LED. Přesná čísla jsou součástí toho, co společně ověříme během pilotu.",
      "faq.q6": "Mohu se stát pilotním partnerem?",
      "faq.a6": "Ano — přesně pro vás to je. <a href=\"#apply\">Přihlaste se výše</a> a my se ozveme, pokud se budeme hodit.",

      "footer.slogan": "Čerstvé bylinky, vždy po ruce.",
      "footer.rights": "Všechna práva vyhrazena.",
      "footer.made": "Vytvořeno pro moderní kuchyně."
    }
  };

  var SUPPORTED = ["en", "cs"];
  var DEFAULT_LANG = "en";
  var LANG = DEFAULT_LANG;

  var t = function (key) {
    var pack = I18N[LANG] || I18N[DEFAULT_LANG];
    if (pack && pack[key] != null) return pack[key];
    return (I18N[DEFAULT_LANG] && I18N[DEFAULT_LANG][key]) || "";
  };

  var langButtons = document.querySelectorAll(".lang__btn");

  var applyLang = function (lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = DEFAULT_LANG;
    LANG = lang;

    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n"));
      if (v) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n-html"));
      if (v) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n-placeholder"));
      if (v) el.setAttribute("placeholder", v);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n-aria"));
      if (v) el.setAttribute("aria-label", v);
    });

    // Document title + meta description
    document.title = t("meta.title");
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t("meta.desc"));

    // Reflect active language on the switch buttons
    langButtons.forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    try {
      localStorage.setItem("lang", lang);
    } catch (e) {}
  };

  var initLang = function () {
    var stored = null;
    try {
      stored = localStorage.getItem("lang");
    } catch (e) {}
    applyLang(SUPPORTED.indexOf(stored) !== -1 ? stored : DEFAULT_LANG);
  };

  langButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang"));
    });
  });

  initLang();

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Navbar: scrolled state ---------- */
  var nav = document.getElementById("nav");
  var onScroll = function () {
    if (!nav) return;
    nav.classList.toggle("nav--scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile menu ---------- */
  var toggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");

  var closeMenu = function () {
    if (!nav) return;
    nav.classList.remove("nav--open");
    if (toggle) {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", t("nav.menuOpen"));
    }
  };
  var openMenu = function () {
    if (!nav) return;
    nav.classList.add("nav--open");
    if (toggle) {
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", t("nav.menuClose"));
    }
  };

  if (toggle) {
    toggle.addEventListener("click", function () {
      if (nav && nav.classList.contains("nav--open")) closeMenu();
      else openMenu();
    });
  }
  if (navLinks) {
    navLinks.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 760) closeMenu();
  });

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("in-view");
    });
  }

  /* ---------- FAQ: accordion (close others) ---------- */
  var faqItems = document.querySelectorAll(".faq__item");
  faqItems.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (!item.open) return;
      faqItems.forEach(function (other) {
        if (other !== item) other.open = false;
      });
    });
  });

  /* ---------- Application form ---------- */
  var form = document.getElementById("pilotForm");
  var success = document.getElementById("formSuccess");

  var isEmail = function (v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  };

  var setError = function (field, message) {
    field.classList.add("has-error");
    var input = field.querySelector("input, textarea");
    var msg = field.querySelector(".field__error");
    if (msg) msg.textContent = message || "";
    if (input) input.setAttribute("aria-invalid", "true");
  };
  var clearError = function (field) {
    field.classList.remove("has-error");
    var input = field.querySelector("input, textarea");
    var msg = field.querySelector(".field__error");
    if (msg) msg.textContent = "";
    if (input) input.removeAttribute("aria-invalid");
  };

  var validate = function () {
    var firstInvalid = null;
    var required = [
      ["restaurant", "err.restaurant"],
      ["owner", "err.owner"],
      ["email", "err.email"],
      ["city", "err.city"],
    ];

    required.forEach(function (pair) {
      var input = document.getElementById(pair[0]);
      if (!input) return;
      var field = input.closest(".field");
      var value = input.value.trim();
      var invalid = !value || (pair[0] === "email" && !isEmail(value));
      if (invalid) {
        setError(field, t(pair[1]));
        if (!firstInvalid) firstInvalid = input;
      } else {
        clearError(field);
      }
    });

    return firstInvalid;
  };

  // Clear an error as soon as the user fixes the field.
  if (form) {
    form.addEventListener("input", function (e) {
      var field = e.target.closest(".field");
      if (field && field.classList.contains("has-error")) clearError(field);
    });
  }

  var showSuccess = function () {
    if (form) form.hidden = true;
    if (success) {
      success.hidden = false;
      success.setAttribute("tabindex", "-1");
      success.focus({ preventScroll: true });
      success.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var firstInvalid = validate();
      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      var submitBtn = form.querySelector('button[type="submit"]');

      // No endpoint configured → confirm locally (static, no backend).
      if (!FORM_ENDPOINT) {
        showSuccess();
        return;
      }

      // Endpoint configured → send the application.
      var data = new FormData(form);
      if (WEB3FORMS_ACCESS_KEY) data.append("access_key", WEB3FORMS_ACCESS_KEY);

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = t("form.sending");
      }

      fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })
        .then(function (res) {
          if (!res.ok) throw new Error("Request failed");
          showSuccess();
        })
        .catch(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = t("form.submit");
          }
          window.alert(t("form.errorAlert"));
        });
    });
  }
})();
