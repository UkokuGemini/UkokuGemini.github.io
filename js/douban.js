function doubane () 
{
  fetch('https://v1.hitokoto.cn')
    .then(response => response.json())
    .then(data => {
      if (true) {
alert(data.hitokoto)
      } else {
      }
    })
}