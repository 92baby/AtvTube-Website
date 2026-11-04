(function () {
  var cfg = window.ATVTUBE_CONFIG || {};
  var email = cfg.contactEmail || "";
  var price = cfg.licensePrice || "USD $9.99";

  function setHref(sel, href) {
    document.querySelectorAll(sel).forEach(function (el) {
      if (href) {
        el.setAttribute("href", href);
        el.removeAttribute("hidden");
      }
    });
  }

  function setText(sel, text) {
    document.querySelectorAll(sel).forEach(function (el) {
      el.textContent = text;
    });
  }

  if (email) {
    var mail = "mailto:" + email;
    setHref("a[data-contact]", mail);
    setText("[data-contact-text]", email);
  }

  setText("[data-price]", price);
  if (cfg.licensePriceNote) setText("[data-price-note]", cfg.licensePriceNote);

  if (cfg.downloads) {
    if (cfg.downloads.arm64) setHref("a[data-dl-arm64]", cfg.downloads.arm64);
    if (cfg.downloads.arm) setHref("a[data-dl-arm]", cfg.downloads.arm);
  }

  if (cfg.version) {
    setText("[data-version]", cfg.version);
    document.querySelectorAll("[data-version-wrap]").forEach(function (el) {
      el.hidden = false;
    });
  }

  var y = document.querySelectorAll("[data-year]");
  var year = String(new Date().getFullYear());
  y.forEach(function (el) {
    el.textContent = year;
  });

  // Decorative TV mock-up: show the visitor's local time.
  var clock = document.querySelectorAll("[data-clock]");
  if (clock.length) {
    var tick = function () {
      var d = new Date();
      var t = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
      clock.forEach(function (el) { el.textContent = t; });
    };
    tick();
    setInterval(tick, 20000);
  }
})();
