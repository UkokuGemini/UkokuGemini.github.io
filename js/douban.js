function doubanApi (_url,_type,_title) 
{
  document.getElementById('_Thispage').innerHTML ="⚜" + _title
  fetch(_url)
    .then(responseD => responseD.json())
    .then(dataD => {
      if (true) {
          var outD = "";
          var i;
          for(i = 0; i < dataD.result.comment.length && i < 5; i++) {
            outD += '<div><table frame=void width="100%" border="1" cellpadding="0" cellspacing="0" style="table-layout:fixed"><tr><td weight="150"><img height="100" src="https://images.weserv.nl/?url=' + dataD.result.comment[i].item.thumbnail.substring(7) + '"></td><td weight="20"></td><td><a href="https://movie.douban.com/subject/' + dataD.result.comment[i].item.douban_id + '/"><font size="4"><b>' +'· ' + dataD.result.comment[i].item.title + '</b></font></a><div>'
            switch(_type){
              case 0:
                outD +='<font size="1"><b>    #演员:</b>' + dataD.result.comment[i].item.actor + '</font><br>';
                break;
              case 1:
                outD +='<font size="1"><b>    #作者:</b>' + dataD.result.comment[i].item.author + '</font><br>';
                break;
              default:
                break;
            }
            outD +='<font size="1"><b>    #添加日期:</b>'+ dataD.result.comment[i].mark_date +'</font></div></td></tr></table></div><hr>'
          }
        document.getElementById('doubanlist').innerHTML = outD
      }})
}
function doubanMain(_MainUrl) 
{ 
  fetch(_MainUrl)
    .then(responseMD => responseMD.json())
    .then(dataMD => {
      if (true) {
        document.getElementById('movie_wish_n').innerHTML = dataMD.result.movie_wish
        document.getElementById('movie_collect_n').innerHTML= dataMD.result.movie_collect
        document.getElementById('movie_do_n').innerHTML= dataMD.result.movie_do
        document.getElementById('book_wish_n').innerHTML = dataMD.result.book_wish
        document.getElementById('book_collect_n').innerHTML= dataMD.result.book_collect
        document.getElementById('book_do_n').innerHTML= dataMD.result.book_do
      }})
}doubanMain('/json/douban.json');doubanApi('/json/douban_movie_wish_small.json',0,'豆瓣电影【想看】');
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