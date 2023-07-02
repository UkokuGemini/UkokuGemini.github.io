function bangumiWebApi (_url,_title,_type) {
  document.getElementById('_Thispage').innerHTML ="⚜" + _title
          var outD = "";
          var i;
          $.getJSON(_url, function (JsonData) {
          for(i = 0; i < JsonData.data.length && i < 5; i++) {
            outD += '<div><table frame=void width="100%" cellpadding="0" cellspacing="0" style="table-layout:fixed"><tr><td width="120px"><img height="150px" src="' + JsonData.data[i].subject.images.small + '"></td><td width="10px"></td><td><a target="_blank" href="https://bangumi.tv/subject/' + JsonData.data[i].subject_id + '/"><font size="4"><b>' +'· ' + JsonData.data[i].subject.name +'('+ JsonData.data[i].subject.name_cn  +')' +  '</b></font></a><div>'
            outD +='<font size="1"><b>    #简介:</b>' + JsonData.data[i].subject.short_summary + '</font><br></div></td></tr></table></div><hr>'
          }
        document.getElementById('bangumiList').innerHTML = outD
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
bangumiWebApi('https://api.bgm.tv/v0/users/ukokugemini/collections?subject_type=2&type=3&limit=10&offset=0','Bangumi【目前追番】',0)