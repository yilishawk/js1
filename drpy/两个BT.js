var rule = {
  title: '',
  host: 'https://bttwo.vip/',
  hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});HOST = jsp.pdfh(html,"body&&li:eq(0)&&a&&href");log(HOST);',
  url: '/fyclass/page/fypage',
  searchUrl: '/xssssearch?q=**',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'MOBILE_UA',
  },
class_name:'国产剧&电影&欧美剧&港台剧',
class_url:'zgjun&new-movie&meiju&jpsrtv',
  play_parse: true,
lazy: "js:\n  let html = request(input);\n  let hconf = html.match(/r player_.*?=(.*?)</)[1];\n  let json = JSON5.parse(hconf);\n  let url = json.url;\n  if (json.encrypt == '1') {\n    url = unescape(url);\n  } else if (json.encrypt == '2') {\n    url = unescape(base64Decode(url));\n  }\n  if (/\\.(m3u8|mp4|m4a|mp3)/.test(url)) {\n    input = {\n      parse: 0,\n      jx: 0,\n      url: url,\n    };\n  } else {\n    input = url && url.startsWith('http') && tellIsJx(url) ? {parse:0,jx:1,url:url}:input;\n  }",
  limit: 6,
  //图片来源:'@Referer=https://www.subaibaiys.com/@User-Agent=MOBILE_UA',
  推荐: '.bt_img ul;li;img&&alt;.lazy&&data-original;.hdinfo&&Text;a&&href',
  double: true,
  一级: '.bt_img&&ul&&li;img&&alt;img&&data-original;.jidi&&Text;a&&href',
  二级: {
    title: 'h1&&Text;.moviedteail_list&&li:eq(0)&&Text',
    img: '.dyimg&&img&&src',
    desc: '.moviedteail_list&&li:eq(1)&&a&&Text;.moviedteail_list&&li:eq(5)&&a&&title;.moviedteail_list&&li:eq(7)&&a&&title',
    content: '.yp_context&&Text',
    tabs: '.mi_paly_box .ypxingq_t',
    lists: '.paly_list_btn:eq(#id) a',
        //是否启用辅助嗅探: 1,0
    sniffer:1,
    // 辅助嗅探规则
    isVideo:"http((?!http).){26,}\\.(myvideos.info|wangchuanxin.top|mp4|flv|avi|mkv|wmv|mpg|mpeg|mov|ts|3gp|rm|rmvb|asf|m4a|mp3|wma)",
  },
  搜索: '.search_list&&ul&&li:eq(0);img&&alt;img&&data-original;.jidi&&Text;a&&href;.module-info-item-content&&Text',
}