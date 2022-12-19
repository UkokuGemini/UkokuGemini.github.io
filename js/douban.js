function douban () {
    fetch('https://v1.hitokoto.cn')
      .then(response => response.json())
      .then(data => {
        if (true) {alert('  ·谨言出自:  ' + data.from +"/" + data.from_who)})}