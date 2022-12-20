function doubanApi (code) 
{
  var _url=""
  switch(code){
    case 0:
        _url="https://mouban.mythsman.com/guest/user_movie?id=71362174&action=wish";
        break;
    case 1:
        _url="https://mouban.mythsman.com/guest/user_movie?id=71362174&action=collect";
        break;
    case 2:
      _url="/json/douban_movie_wish.json";
      break;
    default:
        break;}  
  fetch(_url)
    .then(responseD => responseD.json())
    .then(dataD => {
      if (true) {
          var outD = "";
          var i;
          for(i = 0; i < dataD.result.comment.length && i < 5; i++) {
            outD += '<div><table frame=void><tr><td><img height="100" src="https://images.weserv.nl/?url=' + dataD.result.comment[i].item.thumbnail.substring(7) + '"></td><td weight="20"></td><td><a href="https://movie.douban.com/subject/' + dataD.result.comment[i].item.douban_id + '/"><font size="4"><b>' +'· ' + dataD.result.comment[i].item.title + '</b></font></a><div><font size="1"><b>    #演职员:</b>' + dataD.result.comment[i].item.actor + '</font><br><font size="1"><b>    #添加日期:</b>'+ dataD.result.comment[i].mark_date +'</font></div></td></tr></table></div><hr>';
          }
        document.getElementById('douban').innerHTML = outD
      }})
}
//# 将 {your_douban_id} 改为你的豆瓣数字ID

//# 用户录入/更新
//https://mouban.mythsman.com/guest/check_user?id={your_douban_id}

//# 查询用户的读书评论
//https://mouban.mythsman.com/guest/user_book?id={your_douban_id}&action=wish
//https://mouban.mythsman.com/guest/user_book?id={your_douban_id}&action=do
//https://mouban.mythsman.com/guest/user_book?id={your_douban_id}&action=collect

//# 查询用户的电影评论
//https://mouban.mythsman.com/guest/user_movie?id={your_douban_id}&action=wish
//https://mouban.mythsman.com/guest/user_movie?id={your_douban_id}&action=do
//https://mouban.mythsman.com/guest/user_movie?id={your_douban_id}&action=collect

//# 查询用户的游戏评论
//https://mouban.mythsman.com/guest/user_game?id={your_douban_id}&action=wish
//https://mouban.mythsman.com/guest/user_game?id={your_douban_id}&action=do
//https://mouban.mythsman.com/guest/user_game?id={your_douban_id}&action=collect

//# 查询用户的音乐评论
//https://mouban.mythsman.com/guest/user_song?id={your_douban_id}&action=wish
//https://mouban.mythsman.com/guest/user_song?id={your_douban_id}&action=do
//https://mouban.mythsman.com/guest/user_song?id={your_douban_id}&action=collect