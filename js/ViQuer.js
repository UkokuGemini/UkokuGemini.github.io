function doubanWebApi (_url,_type,_title) {
    document.getElementById('_Thispage').innerHTML ="⚜" + _title
            var outD = "";
            var i;
            $.getJSON(_url, function (JsonData) {
            for(i = 0; i < JsonData.result.comment.length && i < 5; i++) {
              outD += '<div><table frame=void width="100%" cellpadding="0" cellspacing="0" style="table-layout:fixed"><tr><td width="120px"><img height="150px" src="https://images.weserv.nl/?url=' + JsonData.result.comment[i].item.thumbnail.substring(7) + '"></td><td width="10px"></td><td><a target="_blank" href="https://movie.douban.com/subject/' + JsonData.result.comment[i].item.douban_id + '/"><font size="4"><b>' +'· ' + JsonData.result.comment[i].item.title + '</b></font></a><div>'
              switch(_type){
                case 0:
                  outD +='<font size="1"><b>    #演员:</b>' + JsonData.result.comment[i].item.actor + '</font><br>';
                  break;
                case 1:
                  outD +='<font size="1"><b>    #作者:</b>' + JsonData.result.comment[i].item.author + '</font><br>';
                  break;
                default:
                  break;
              }
              outD +='<font size="1"><b>    #添加日期:</b>'+ JsonData.result.comment[i].mark_date +'</font></div></td></tr></table></div><hr>'
            }
          document.getElementById('ViList').innerHTML = outD
        })
  }
  function doubanLocalApi (_url,_type,_title) 
  {
    document.getElementById('_Thispage').innerHTML ="⚜" + _title
    fetch(_url)
      .then(responseD => responseD.json())
      .then(dataD => {
        if (true) {
            var outD = "";
            var i;
            for(i = 0; i < dataD.result.comment.length && i < 5; i++) {
              outD += '<div><table frame=void width="100%" cellpadding="0" cellspacing="0" style="table-layout:fixed"><tr><td width="120px"><img height="150px" src="https://images.weserv.nl/?url=' + dataD.result.comment[i].item.thumbnail.substring(7) + '"></td><td width="10px"></td><td><a target="_blank" href="https://movie.douban.com/subject/' + dataD.result.comment[i].item.douban_id + '/"><font size="4"><b>' +'· ' + dataD.result.comment[i].item.title + '</b></font></a><div>'
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
          document.getElementById('ViList').innerHTML = outD
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
  function bangumiWebApi (_url,_title,_type) {
    document.getElementById('_Thispage').innerHTML ="⚜" + _title
            var outD = "";
            var i;
            $.getJSON(_url, function (JsonData) {
            for(i = 0; i < JsonData.data.length && i < 5; i++) {
              outD += '<div><table frame=void width="100%" cellpadding="0" cellspacing="0" style="table-layout:fixed"><tr><td width="120px"><img height="150px" src="' + JsonData.data[i].subject.images.small + '"></td><td width="10px"></td><td><a target="_blank" href="https://bangumi.tv/subject/' + JsonData.data[i].subject_id + '/"><font size="4"><b>' +'· ' + JsonData.data[i].subject.name +'('+ JsonData.data[i].subject.name_cn  +')' +  '</b></font></a><div>'
              outD +='<font size="1"><b>    #简介:</b>' + JsonData.data[i].subject.short_summary + '</font><br></div></td></tr></table></div><hr>'
            }
          document.getElementById('ViList').innerHTML = outD
          switch(_type){
            case 0:
              document.getElementById('anime_do_n').innerHTML = JsonData.total;
              break;
            case 1:
              document.getElementById('anime_collect_n').innerHTML = JsonData.total;
              break;
            default:
              break;
          }
        })
  }
  function bangumiWebApi_Count () 
  {
    $.getJSON('https://api.bgm.tv/v0/users/ukokugemini/collections?subject_type=2&type=3&limit=1&offset=0', function (JsonData) {
      document.getElementById('anime_do_n').innerHTML = JsonData.total;})
    $.getJSON('https://api.bgm.tv/v0/users/ukokugemini/collections?subject_type=2&type=2&limit=10&offset=0', function (JsonData) {
      document.getElementById('anime_collect_n').innerHTML = JsonData.total;})
  }
  bangumiWebApi_Count ();
  
  doubanMain('/DoubanJson/json/douban.json');
  doubanLocalApi('/DoubanJson/json/douban_movie_wish_small.json',0,'豆瓣电影【想看】');
  bangumiWebApi('https://api.bgm.tv/v0/users/ukokugemini/collections?subject_type=2&type=3&limit=10&offset=0','Bangumi【目前追番】',0)