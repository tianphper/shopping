(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0af677"],{"0dd1":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"header-name"},[e._v(" 折线图 ")]),a("el-card",[a("el-col",{staticStyle:{height:"400px"},attrs:{span:12,id:"myChart1"}}),a("el-col",{staticStyle:{height:"400px"},attrs:{span:12,id:"myChart2"}})],1)],1)},i=[],n=a("313e"),r={components:{},data:function(){return{activeNames:["1"]}},mounted:function(){this.drawLine1(),this.drawLine2()},methods:{drawLine1:function(){var e=n["init"](document.getElementById("myChart1")),t={xAxis:{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[820,932,901,934,1290,1330,1320],type:"line",areaStyle:{}}]};e.setOption(t)},drawLine2:function(){var e=n["init"](document.getElementById("myChart2")),t={title:{text:"堆叠区域图"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["邮件营销","联盟广告","视频广告","直接访问","搜索引擎"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]}],yAxis:[{type:"value"}],series:[{name:"邮件营销",type:"line",stack:"总量",areaStyle:{},emphasis:{focus:"series"},data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"line",stack:"总量",areaStyle:{},emphasis:{focus:"series"},data:[220,182,191,234,290,330,310]},{name:"视频广告",type:"line",stack:"总量",areaStyle:{},emphasis:{focus:"series"},data:[150,232,201,154,190,330,410]},{name:"直接访问",type:"line",stack:"总量",areaStyle:{},emphasis:{focus:"series"},data:[320,332,301,334,390,330,320]},{name:"搜索引擎",type:"line",stack:"总量",label:{show:!0,position:"top"},areaStyle:{},emphasis:{focus:"series"},data:[820,932,901,934,1290,1330,1320]}]};e.setOption(t)}}},o=r,l=a("2877"),c=Object(l["a"])(o,s,i,!1,null,"55244d1c",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0af677.795e9f54.js.map