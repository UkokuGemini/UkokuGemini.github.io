function subtitleType () {
    fetch('https://v1.hitokoto.cn')
      .then(response => response.json())
      .then(data => {
        if (true) {
          const from = '  ·谨言出自:  ' + data.from +"/" + data.from_who
          const sub = []
          sub.unshift("  ·此刻谨言: " + data.hitokoto + " ^5000", from.replace("/null",""))
          window.typed = new Typed('#hitokoto', {
            strings: sub,
            startDelay: 300,
            typeSpeed: 150,
            loop: true,
            backSpeed: 75,
          })
        } else {
          document.getElementById('hitokoto').innerHTML = "  ·此刻谨言: " + data.hitokoto
        }
      })
  }
  if (true) {
    if (typeof Typed === 'function') {
      subtitleType()
    } else {
      getScript('https://cdn.jsdelivr.net/npm/typed.js/lib/typed.min.js').then(subtitleType)
    }
  } else {
    subtitleType()
  }