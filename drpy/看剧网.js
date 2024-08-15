var rule = {
  title: '',
  host: 'http://wenhi.com/',
  url: '/fyclass/indexfypage.html[/fyclass/index.html]',
  searchUrl: '/search.php?page=fypage&searchword=**&searchtype=',
  searchable: 0,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 13; SM-A536E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36 uacq',
  },
   class_parse: 'ul.type-slide.clearfix li;a&&Text;a&&href;.*/(.*?)/index.html',
  //class_name:'电影&电视剧&动漫&综艺',
   //class_url:'dianying/dongzuopian&dianshiju/guochanju&3&4',
  play_parse: true,
lazy: "js:\n  let html = request(input);\n  let hconf = html.match(/r player_.*?=(.*?)</)[1];\n  let json = JSON5.parse(hconf);\n  let url = json.url;\n  if (json.encrypt == '1') {\n    url = unescape(url);\n  } else if (json.encrypt == '2') {\n    url = unescape(base64Decode(url));\n  }\n  if (/\\.(m3u8|mp4|m4a|mp3)/.test(url)) {\n    input = {\n      parse: 0,\n      jx: 0,\n      url: url,\n    };\n  } else {\n    input = url && url.startsWith('http') && tellIsJx(url) ? {parse:0,jx:1,url:url}:input;\n  }",
  limit: 6,
  //cate_exclude:'国产剧|午夜剧场|wuyejuchang|xiezhen|伦理片|写真',
  推荐: 'ul.stui-vodlist.clearfix;li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
  double: true,
  一级: '.stui-vodlist.clearfix li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
  二级: {
    title: 'h1&&Text;.stui-content__detail p:eq(3)&&a:eq(0)&&Text',
    img: '.stui-content__thumb .lazyload&&data-original',
    desc: '.stui-content__detail p:eq(0)&&Text;.stui-content__detail p:eq(3)&&a:eq(3)&&Text;.stui-content__detail p:eq(3)&&a:eq(2)&&Text',
    content: '.stui-content__detail p:eq()&&span:eq(1)&&Text',
    tabs: '.stui-pannel__head.bottom-line:eq(0) h3',
    lists: '.stui-pannel-box .stui-pannel_bd.col-pd.clearfix:eq(#id) li',
  },
      //是否启用辅助嗅探: 1,0
    sniffer:1,
    // 辅助嗅探规则
    isVideo:"http((?!http).){26,}\\.(m3u8|mp4|flv|avi|mkv|wmv|mpg|mpeg|mov|ts|3gp|rm|rmvb|asf|m4a|mp3|wma)",
    // 辅助嗅探规则js写法
    isVideo:`js:
    log(input);
    if(/m3u8/.test(input)){
    input = true
    }else{
    input = false
    }
    `,
  搜索: '.stui-vodlist__media.col-pd.clearfix li;a&&title;.lazyload&&data-original;.pic-text.text-right&&Text;a&&href',
}