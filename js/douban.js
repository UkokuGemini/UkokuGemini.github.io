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
            outD += '<div><table frame=void><tr><td><img height="100" src="https://images.weserv.nl/?url=' + dataD[i].item.thumbnail.substring(7) + '"></td><td weight="20"></td><td><a href="https://movie.douban.com/subject/' + dataD[i].item.douban_id + '/"><font size="4"><b>' +'· ' + dataD[i].item.title + '</b></font></a><p><font size="1"><b>    #演职员:</b>' + dataD[i].item.actor + '</font><br><font size="1"><b>    #添加日期:</b>'+ dataD[i].mark_date +'</font></p></td></tr></table></div><hr>';
          }
        document.getElementById('douban').innerHTML = outD
      }})
}doubane ()
