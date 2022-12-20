function doubane () 
{
  //fetch('https://mouban.mythsman.com/guest/user_movie?id=71362174&action=wish')
  fetch('/json/douban.json')
    .then(responseD => responseD.json())
    .then(dataD => {
      if (true) {
          var outD = "";
          var i;
          for(i = 0; i < dataD.length; i++) {
            outD += '<div height="100"><img height="75" src="' + dataD[i].item.thumbnail + '"><br><p>' + dataD[i].item.title + '</p></div><br>';
          }
        document.getElementById('douban').innerHTML = outD
      }})
}doubane ()
