function doubanApi (_url) 
{
  fetch(_url)
    .then(responseD => responseD.json())
    .then(dataD => {
      if (true) {
          var outD = "";
          var i;
          for(i = 0; i < dataD.result.comment.length && i < 5; i++) {
            outD += '<div><table frame=void><tr><td><img height="100" src="https://images.weserv.nl/?url=' + dataD.result.comment[i].item.thumbnail.substring(7) + '"></td><td weight="20"></td><td><a href="https://movie.douban.com/subject/' + dataD.result.comment[i].item.douban_id + '/"><font size="4"><b>' +'· ' + dataD.result.comment[i].item.title + '</b></font></a><div><font size="1"><b>    #演职员:</b>' + dataD.result.comment[i].item.actor + '</font><br><font size="1"><b>    #添加日期:</b>'+ dataD.result.comment[i].mark_date +'</font></div></td></tr></table></div><hr>';
          }
        document.getElementById('doubanlist').innerHTML = outD
      }})
}
//# 将 71362174 改为你的豆瓣数字ID

//# 用户录入/更新
//https://mouban.mythsman.com/guest/check_user?id=71362174

//# 查询用户的读书评论
//https://mouban.mythsman.com/guest/user_book?id=71362174&action=wish
//https://mouban.mythsman.com/guest/user_book?id=71362174&action=do
//https://mouban.mythsman.com/guest/user_book?id=71362174&action=collect

//# 查询用户的电影评论
//https://mouban.mythsman.com/guest/user_movie?id=71362174&action=wish
//https://mouban.mythsman.com/guest/user_movie?id=71362174&action=do
//https://mouban.mythsman.com/guest/user_movie?id=71362174&action=collect

//# 查询用户的游戏评论
//https://mouban.mythsman.com/guest/user_game?id=71362174&action=wish
//https://mouban.mythsman.com/guest/user_game?id=71362174&action=do
//https://mouban.mythsman.com/guest/user_game?id=71362174&action=collect

//# 查询用户的音乐评论
//https://mouban.mythsman.com/guest/user_song?id=71362174&action=wish
//https://mouban.mythsman.com/guest/user_song?id=71362174&action=do
//https://mouban.mythsman.com/guest/user_song?id=71362174&action=collect
function doubanMain(_MainUrl) 
{ 
  fetch(_MainUrl)
    .then(responseMD => responseMD.json())
    .then(dataMD => {
      if (true) {
        document.getElementById('_wish_n').innerHTML = dataMD.result.movie_wish
        document.getElementById('_collect_n').innerHTML= 5// dataMD.result.movie_collect
    document.getElementById('doubanlist').innerHTML = '<div><table frame=void><tr><td><img height="100" src="https://images.weserv.nl/?url=' + dataMD.result.thumbnail.substring(7) + '"></td><td weight="20"></td><td><font size="5"><b>' +'· ' + dataMD.result.name + '</b></font></td></tr></table></div><hr>';
      }})
}doubanMain('/json/douban.json')