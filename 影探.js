var rule = {
  title: '',
  host: 'https://subaibai.vip',
  hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});HOST = jsp.pdfh(html,".link&&a&&href");log(HOST);',
  url: '/fyclass/page/fypage',
  searchUrl: '/vodsearch/**----------fypage---.html',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'MOBILE_UA',
  },
class_name:'国产剧&电影&电视剧&热门电影&高分电影&动漫电影&香港电影&欧美剧&港台剧',
class_url:'domestic-drama&new-movie&tv-drama&hot-month&high-movie&cartoon-movie&hongkong-movie&american-drama&korean-drama',
  play_parse: true,
  lazy: '',
  limit: 6,
  图片来源:'@Referer=https://www.subaibaiys.com/@User-Agent=MOBILE_UA',
  推荐: '.bt_img;ul&&li;.lazy&&alt;.lazy&&data-original;.jidi&&span&&Text;.dytit&&a&&href',
  double: true,
  一级: '.bt_img&&ul&&li;img&&alt;img&&data-original;.qb&&Text;a&&href',
  二级: {
    title: 'h1&&Text',
    img: '.dyimg&&img&&src',
    desc: '.moviedteail_list&&li:eq(1)&&a&&Text;.moviedteail_list&&li:eq(5)&&a&&title;.moviedteail_list&&li:eq(7)&&a&&title',
    content: '.yp_context&&Text',
    tabs: '.mi_paly_box .ypxingq_t',
    lists: '.paly_list_btn:eq(#id) a',
        //是否启用辅助嗅探: 1,0
    sniffer:1,
    // 辅助嗅探规则
    isVideo:"http((?!http).){26,}\\.(wangchuanxin.top|m3u8|mp4|flv|avi|mkv|wmv|mpg|mpeg|mov|ts|3gp|rm|rmvb|asf|m4a|mp3|wma)",
  },
  搜索: 'body .module-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href;.module-info-item-content&&Text',
}