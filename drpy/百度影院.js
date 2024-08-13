var rule = {
  title: '',
  host: 'http://cechi7.com/',
  编码:'gb2312',
  搜索编码:'gb2312',
  url: '/fyclass/indexfypage.html[/fyclass/index.html]',
  searchUrl: '/search.asp?searchword=**',
  searchable: 0,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'MOBILE_UA',
  },
  class_name:'电影&电视剧&动漫&综艺',
   class_url:'dianying/dongzuopian&dianshiju/guochanju&3&4',
  play_parse: true,
  lazy: '',
  limit: 6,
  //cate_exclude:'国产剧|午夜剧场|wuyejuchang|xiezhen|伦理片|写真',
  推荐: 'ul.myui-vodlist.clearfix;li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
  double: true,
  一级: '.myui-vodlist li:not(:contains(伦理片));a&&title;a&&data-original;.pic-text&&Text;a&&href',
  二级: {
    title: '.myui-content__detail .title&&Text;.myui-content__detail p:not(:contains(主播)).data&&Text',
    img: '.myui-content__thumb .lazyload&&data-original',
    desc: '.myui-content__detail p:eq(0)&&Text;.myui-content__detail p:eq(1)&&Text;.myui-content__detail p:eq(2)&&Text',
    content: '.content&&Text',
    tabs: '.nav-tabs:eq(0) li',
    lists: '.myui-content__list:eq(#id) li',
  },
  搜索: '#searchList li:not(:contains(http://cechi7.com/wuyejuchang/));a&&title;.lazyload&&data-original;.text-muted&&Text;a&&href;.text-muted:eq(-1)&&Text',
}
