function doubane () 
{
  fetch('https://v1.hitokoto.cn')
    .then(response => response.json())
    .then(data => {
      if (true) {
          var out = "";
          var i;
          for(i = 0; i < data.length; i++) {
            out += '<a href="' + data[i].thumbnail + '">' + data[i].title + '</a><br>';
          }
        document.getElementById('douban').innerHTML = out
      }})
}doubane ()
