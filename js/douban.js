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
            outD += '<div height="100"><img height="75" src="https://images.weserv.nl/?url=' + dataD[i].item.thumbnail.substring(7) + '"><br><a href="https://movie.douban.com/subject/' + dataD[i].item.douban_id + '/">' + dataD[i].item.title + '</a><br><a>' + dataD[i].item.actor + '</a></div><hr>';
          }
        document.getElementById('douban').innerHTML = outD
      }})
}doubane ()
