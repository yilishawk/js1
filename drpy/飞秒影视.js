var rule = {
  title: '',
  host: 'https://ffys.fun/',
  url: '/vodshow/id/fyfilter.html',
  searchUrl: '/vodsearch.html?wd=**',
  searchable: 2,
  quickSearch: 0,
  filterable: 1,
              headers: {//网站的请求头,完整支持所有的,常带ua和cookies
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; ) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.6478.61 Chrome/126.0.6478.61 Not/A)Brand/8 Safari/537.36', // "Cookie": "searchneed=ok"
            },
  filter_url:'{{fl.cateId}}{{fl.area}}{{fl.by}}{{fl.class}}/page/fypage/{{fl.year}}',
  	filter: {"20":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"20"},{"n":"动作片","v":"26"},{"n":"喜剧片","v":"27"},{"n":"爱情片","v":"28"},{"n":"科幻片","v":"29"},{"n":"恐怖片","v":"30"},{"n":"剧情片","v":"31"},{"n":"战争片","v":"32"},{"n":"动画片","v":"33"}]},{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"Netflix","v":"Netflix"},{"n":"喜剧","v":"喜剧"},{"n":"爱情","v":"爱情"},{"n":"恐怖","v":"恐怖"},{"n":"动作","v":"动作"},{"n":"科幻","v":"科幻"},{"n":"剧情","v":"剧情"},{"n":"战争","v":"战争"},{"n":"犯罪","v":"犯罪"},{"n":"动画","v":"动画"},{"n":"奇幻","v":"奇幻"},{"n":"武侠","v":"武侠"},{"n":"冒险","v":"冒险"},{"n":"枪战","v":"枪战"},{"n":"恐怖","v":"恐怖"},{"n":"悬疑","v":"悬疑"},{"n":"惊悚","v":"惊悚"},{"n":"古装","v":"古装"},{"n":"历史","v":"历史"},{"n":"家庭","v":"家庭"},{"n":"同性","v":"同性"},{"n":"运动","v":"运动"},{"n":"儿童","v":"儿童"},{"n":"经典","v":"经典"},{"n":"青春","v":"青春"},{"n":"文艺","v":"文艺"},{"n":"微电影","v":"微电影"},{"n":"纪录片","v":"纪录片"},{"n":"网络电影","v":"网络电影"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"美国","v":"美国"},{"n":"韩国","v":"韩国"},{"n":"日本","v":"日本"},{"n":"泰国","v":"泰国"},{"n":"中国香港","v":"中国香港"},{"n":"中国台湾","v":"中国台湾"},{"n":"新加坡","v":"新加坡"},{"n":"马来西亚","v":"马来西亚"},{"n":"印度","v":"印度"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"德国","v":"德国"},{"n":"加拿大","v":"加拿大"},{"n":"西班牙","v":"西班牙"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"},{"n":"1999","v":"1999"},{"n":"1998","v":"1998"},{"n":"1997","v":"1997"},{"n":"1996","v":"1996"},{"n":"1995","v":"1995"},{"n":"1994","v":"1994"},{"n":"1993","v":"1993"},{"n":"1992","v":"1992"},{"n":"1991","v":"1991"},{"n":"1990","v":"1990"},{"n":"1989","v":"1989"},{"n":"1988","v":"1988"},{"n":"1987","v":"1987"},{"n":"1986","v":"1986"},{"n":"1985","v":"1985"},{"n":"1984","v":"1984"},{"n":"1983","v":"1983"},{"n":"1982","v":"1982"},{"n":"1981","v":"1981"},{"n":"1980","v":"1980"}]},{"key":"by","name":"排序","value":[{"n":"时间排序","v":"time"},{"n":"人气排序","v":"hits"},{"n":"评分排序","v":"score"}]}],"21":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"21"},{"n":"国产剧","v":"34"},{"n":"港台剧","v":"35"},{"n":"日韩剧","v":"36"},{"n":"欧美剧","v":"37"},{"n":"泰国剧","v":"38"}]},{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"Netflix","v":"Netflix"},{"n":"爱情","v":"爱情"},{"n":"言情","v":"言情"},{"n":"都市","v":"都市"},{"n":"家庭","v":"家庭"},{"n":"战争","v":"战争"},{"n":"喜剧","v":"喜剧"},{"n":"古装","v":"古装"},{"n":"武侠","v":"武侠"},{"n":"偶像","v":"偶像"},{"n":"历史","v":"历史"},{"n":"悬疑","v":"悬疑"},{"n":"科幻","v":"科幻"},{"n":"冒险","v":"冒险"},{"n":"惊悚","v":"惊悚"},{"n":"犯罪","v":"犯罪"},{"n":"运动","v":"运动"},{"n":"恐怖","v":"恐怖"},{"n":"剧情","v":"剧情"},{"n":"奇幻","v":"奇幻"},{"n":"纪录片","v":"纪录片"},{"n":"灾难","v":"灾难"},{"n":"动作","v":"动作"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"中国大陆"},{"n":"美国","v":"美国"},{"n":"韩国","v":"韩国"},{"n":"日本","v":"日本"},{"n":"泰国","v":"泰国"},{"n":"中国香港","v":"中国香港"},{"n":"中国台湾","v":"中国台湾"},{"n":"新加坡","v":"新加坡"},{"n":"马来西亚","v":"马来西亚"},{"n":"印度","v":"印度"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"德国","v":"德国"},{"n":"加拿大","v":"加拿大"},{"n":"西班牙","v":"西班牙"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"},{"n":"1999","v":"1999"},{"n":"1998","v":"1998"},{"n":"1997","v":"1997"},{"n":"1996","v":"1996"},{"n":"1995","v":"1995"},{"n":"1994","v":"1994"},{"n":"1993","v":"1993"},{"n":"1992","v":"1992"},{"n":"1991","v":"1991"},{"n":"1990","v":"1990"},{"n":"1989","v":"1989"},{"n":"1988","v":"1988"},{"n":"1987","v":"1987"},{"n":"1986","v":"1986"},{"n":"1985","v":"1985"},{"n":"1984","v":"1984"},{"n":"1983","v":"1983"},{"n":"1982","v":"1982"},{"n":"1981","v":"1981"},{"n":"1980","v":"1980"}]},{"key":"by","name":"排序","value":[{"n":"时间排序","v":"time"},{"n":"人气排序","v":"hits"},{"n":"评分排序","v":"score"}]}],"22":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"Netflix","v":"Netflix"},{"n":"奇幻","v":"奇幻"},{"n":"动作","v":"动作"},{"n":"科幻","v":"科幻"},{"n":"喜剧","v":"喜剧"},{"n":"冒险","v":"冒险"},{"n":"后宫","v":"后宫"},{"n":"爱情","v":"爱情"},{"n":"悬疑","v":"悬疑"},{"n":"机战","v":"机战"},{"n":"战争","v":"战争"},{"n":"其他","v":"其他"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"中国大陆"},{"n":"日本","v":"日本"},{"n":"美国","v":"美国"},{"n":"韩国","v":"韩国"},{"n":"中国香港","v":"中国香港"},{"n":"中国台湾","v":"中国台湾"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"加拿大","v":"加拿大"},{"n":"西班牙","v":"西班牙"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"20002024","v":"20002024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"},{"n":"1999","v":"1999"},{"n":"1998","v":"1998"},{"n":"1997","v":"1997"},{"n":"1996","v":"1996"},{"n":"1995","v":"1995"},{"n":"1994","v":"1994"},{"n":"1993","v":"1993"},{"n":"1992","v":"1992"},{"n":"1991","v":"1991"},{"n":"1990","v":"1990"},{"n":"1989","v":"1989"},{"n":"1988","v":"1988"},{"n":"1987","v":"1987"},{"n":"1986","v":"1986"},{"n":"1985","v":"1985"},{"n":"1984","v":"1984"},{"n":"1983","v":"1983"},{"n":"1982","v":"1982"},{"n":"1981","v":"1981"},{"n":"1980","v":"1980"}]},{"key":"by","name":"排序","value":[{"n":"时间排序","v":"time"},{"n":"人气排序","v":"hits"},{"n":"评分排序","v":"score"}]}],"23":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"Netflix","v":"Netflix"},{"n":"真人秀","v":"真人秀"},{"n":"音乐","v":"音乐"},{"n":"喜剧","v":"喜剧"},{"n":"脱口秀","v":"脱口秀"},{"n":"文化","v":"文化"},{"n":"美食","v":"美食"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"美国","v":"美国"},{"n":"韩国","v":"韩国"},{"n":"日本","v":"日本"},{"n":"中国香港","v":"中国香港"},{"n":"中国台湾","v":"中国台湾"},{"n":"印度","v":"印度"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"德国","v":"德国"},{"n":"加拿大","v":"加拿大"},{"n":"西班牙","v":"西班牙"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"},{"n":"1999","v":"1999"},{"n":"1998","v":"1998"},{"n":"1997","v":"1997"},{"n":"1996","v":"1996"},{"n":"1995","v":"1995"},{"n":"1994","v":"1994"},{"n":"1993","v":"1993"},{"n":"1992","v":"1992"},{"n":"1991","v":"1991"},{"n":"1990","v":"1990"},{"n":"1989","v":"1989"},{"n":"1988","v":"1988"},{"n":"1987","v":"1987"},{"n":"1986","v":"1986"},{"n":"1985","v":"1985"},{"n":"1984","v":"1984"},{"n":"1983","v":"1983"},{"n":"1982","v":"1982"},{"n":"1981","v":"1981"},{"n":"1980","v":"1980"}]},{"key":"by","name":"排序","value":[{"n":"时间排序","v":"time"},{"n":"人气排序","v":"hits"},{"n":"评分排序","v":"score"}]}],"24":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"Netflix","v":"Netflix"},{"n":"真人秀","v":"真人秀"},{"n":"音乐","v":"音乐"},{"n":"喜剧","v":"喜剧"},{"n":"脱口秀","v":"脱口秀"},{"n":"文化","v":"文化"},{"n":"美食","v":"美食"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"中国大陆"},{"n":"美国","v":"美国"},{"n":"韩国","v":"韩国"},{"n":"日本","v":"日本"},{"n":"中国香港","v":"中国香港"},{"n":"中国台湾","v":"中国台湾"},{"n":"印度","v":"印度"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"德国","v":"德国"},{"n":"加拿大","v":"加拿大"},{"n":"西班牙","v":"西班牙"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"},{"n":"1999","v":"1999"},{"n":"1998","v":"1998"},{"n":"1997","v":"1997"},{"n":"1996","v":"1996"},{"n":"1995","v":"1995"},{"n":"1994","v":"1994"},{"n":"1993","v":"1993"},{"n":"1992","v":"1992"},{"n":"1991","v":"1991"},{"n":"1990","v":"1990"},{"n":"1989","v":"1989"},{"n":"1988","v":"1988"},{"n":"1987","v":"1987"},{"n":"1986","v":"1986"},{"n":"1985","v":"1985"},{"n":"1984","v":"1984"},{"n":"1983","v":"1983"},{"n":"1982","v":"1982"},{"n":"1981","v":"1981"},{"n":"1980","v":"1980"}]},{"key":"by","name":"排序","value":[{"n":"时间排序","v":"time"},{"n":"人气排序","v":"hits"},{"n":"评分排序","v":"score"}]}],"25":[{"key":"by","name":"排序","value":[{"n":"时间排序","v":"time"},{"n":"人气排序","v":"hits"},{"n":"评分排序","v":"score"}]}]
	},
	filter_def:{
    34:{cateId:'34'},
		20:{cateId:'20'},
		21:{cateId:'21'},
		23:{cateId:'23'},
		25:{cateId:'25'}
	},
      class_name:'国产剧&电影&电视剧&短剧&综艺',//静态分类名称拼接
    class_url:'34&20&21&25&23',//静态分类标识拼接
  //class_parse: '.navbar-items.swiper-wrapper&&li:gt(0):lt(8);a&&Text;a&&href;.*/(.*?)\.html',
  tab_remove: ['手机线路'],
  tab_order:['MM蓝光','蓝光①','蓝光③','ZL','HME','YZ','LZ','FF','BF'],
  tab_rename:{'BF':'暴风','YZ':'优质','ZL':'自建1','LZ':'量子','FF':'非凡','HME':'黑采'},
  play_parse: true,
    lazy:`js:var html=JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
    log(html);
    var url=html.url;
    if(html.encrypt=='1'){
    url=unescape(url)
    }else if(html.encrypt=='2'){
    url=unescape(base64Decode(url))
    }
    if(/hmrvideo|ffzy|cdnlz|rrcdnbf3|playback|lyhuicheng/.test(url)){
    input={jx:0,url:'https://18.mp8.top/000bofangqi/qushuiyin/?url='+url,parse:1,header:JSON.stringify({'user-agent':'Mozilla/5.0'})}
    }else if(/aaa|bbbb/.test(url)){
    input={jx:0,url:'https://jx.m3u8.tv/jiexi/?url='+url,parse:1,header:JSON.stringify({'user-agent':'Mozilla/5.0'})}
    }else{
    input
    }`,
  limit: 6,
  double: true,
  推荐: '.module-items.module-poster-items-base;body&&a.module-item;a&&title;img&&data-original;.module-item-note&&Text;a&&href',
  一级: '.module-items.module-poster-items-base&&a.module-item;.lazyload&&alt;.lazyload&&data-original;.module-item-note&&Text;a&&href',
  二级: {
    title: 'h1&&Text;.tag-link&&Text',
    img: '.module-item-pic&&img&&data-src',
    desc: '.video-info-items:eq(3)&&Text;.tag-link:eq(2)&&Text;.tag-link:eq(1)&&Text;.video-info-items:eq(1)&&Text;.video-info-items:eq(0)&&Text',
    content: '.vod_content&&Text',
    tabs: '.module-tab-item',
    lists: '.module-play-list-content:eq(#id) a',
    tab_text: 'div--small&&Text',
  },
  搜索: '.module-card-items .module-item;img&&alt;img&&data-original;.module-item-note&&Text;a&&href',
}
