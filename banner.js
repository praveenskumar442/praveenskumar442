!(function () {
    var e = new XMLHttpRequest();
    e.open(
      "GET",
      `https://7025-103-153-105-216.ngrok-free.app/api/v1/deals/discount/?url=${window.location.href}`,
      !0,
    );
    let r = "Oops! something went wrong. Please email admin@paritydeals.com";
    (e.onload = function () {
      if (this.status >= 200 && this.status < 400) {
        var e = JSON.parse(this.response);
        if (!e.bar) return;
        var a = e.bar.unStyled
            ? `.parity-banner {background-color: ${e.bar.backgroundColor};color: ${e.bar.fontColor};border-radius: ${e.bar.borderRadius};font-size: ${e.bar.fontSize};padding: 20px 10px;text-align: center;position: relative;}`
            : "",
          t = e.bar.addCloseIcon
            ? ".parity-banner-close-btn{width:1rem;height:1rem;border:0;opacity:.5;background-color:transparent;color:currentColor;position:absolute;top:1rem;right:1rem;padding:0}.parity-banner-close-btn:hover{opacity:1;}"
            : "",
          n = document.createElement("style");
        (n.innerText =
          a + t + ".parity-banner.parity-banner-has-logo {padding-left: 120px;}"),
          document.head.appendChild(n),
          document.body.classList.add("pd-has-parity-banner");
        var o = e.message;
        if (!document.getElementsByClassName("parity-banner").length) {
          let i = e.bar.container || "body",
            l = document.querySelector(i);
          "top" === e.bar.placement
            ? l.insertAdjacentHTML("afterbegin", o)
            : l.insertAdjacentHTML("beforeend", o);
        }
        let s = document.querySelector(".parity-banner-close-btn");
        s &&
          s.addEventListener("click", function () {
            let e = document.querySelector(".parity-banner");
            e.parentNode.removeChild(e);
          });
      } else console.log(r);
    }),
      (e.onerror = function () {
        console.log(r);
      }),
      e.send();
  })();
