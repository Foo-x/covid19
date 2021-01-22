(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{366:function(t,e,n){n(4)({target:"Math",stat:!0},{sign:n(236)})},455:function(t,e,n){"use strict";n.r(e);n(19),n(33);var r=n(100),o=n(12),l=n.n(o),d=n(0),c=n(353),f=n(354),h=n(356),y=n(359),m=n(355),x=n(124),v=n(360),k=n(361),D={created:function(){this.canvas=!0},components:{DataView:c.default,DataViewTable:h.default,DataViewDataSetPanel:f.default,ScrollableChart:m.default,OpenDataLink:y.default},props:{title:{type:String,default:""},titleId:{type:String,default:""},infoTitles:{type:Array,default:function(){return[]}},chartId:{type:String,default:"time-bar-chart"},chartData:{type:Array,default:function(){return[]}},date:{type:String,required:!0},unit:{type:String,default:""},yAxesBgPlugin:{type:Array,default:function(){return x.b}}},data:function(){return{canvas:!0}},computed:{displayInfo:function(){var t=Object(v.a)({displayData:this.displayData}),e=t.lastDay,n=t.lastDayData,r=t.dayBeforeRatio;return[{lText:n,sText:"".concat(this.$t("{date} の数値",{date:this.$d(e,"date")}),"（").concat(this.$t("前日比"),": ").concat(r," ").concat(this.unit,"）"),unit:this.unit}]},displayData:function(){var style=Object(k.b)(1)[0];return{labels:this.chartData.map((function(t){return t.label})),datasets:[{data:this.chartData.map((function(t){return t.transition})),backgroundColor:style.fillColor,borderColor:style.strokeColor,borderWidth:1}]}},displayOption:function(){var t=this,e=this.unit,n={tooltips:{displayColors:!1,callbacks:{label:function(t){return"".concat(parseInt(t.value).toLocaleString()," ").concat(e)},title:function(e,data){var label=data.labels[e[0].index];return t.$d(new Date(label),"date")}}},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"#808080",maxRotation:0,callback:function(label){return l()(label).format("D")}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold"},type:"time",time:{unit:"month",displayFormats:{month:"YYYY-MM"}}}],yAxes:[{position:"left",gridLines:{display:!0,drawOnChartArea:!0,color:"#E5E5E5"},ticks:{maxTicksLimit:8,fontColor:"#808080",suggestedMin:0,suggestedMax:this.scaledTicksYAxisMax}}]}};return"true"===this.$route.query.ogp&&Object.assign(n,{animation:{duration:0}}),n},displayDataHeader:function(){return{labels:["2020-01-01","2020-01-02"],datasets:[{data:[Math.max.apply(Math,Object(r.a)(this.chartData.map((function(t){return t.transition})))),Math.min.apply(Math,Object(r.a)(this.chartData.map((function(t){return t.transition}))))],backgroundColor:"transparent",borderWidth:0}]}},displayOptionHeader:function(){return{tooltips:{enabled:!1},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"transparent",maxRotation:0,callback:function(label){return l()(label).format("D")}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!1,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"transparent",padding:13,fontStyle:"bold"},type:"time",time:{unit:"month",displayFormats:{month:"YYYY-MM"}}}],yAxes:[{position:"left",gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{maxTicksLimit:8,fontColor:"#808080",suggestedMin:0,suggestedMax:this.scaledTicksYAxisMax}}]},animation:{duration:0}}},scaledTicksYAxisMax:function(){var t=this.chartData.map((function(t){return t.transition}));return Math.max.apply(Math,Object(r.a)(t))},tableHeaders:function(){return[{text:this.$t("日付"),value:"text"},{text:"".concat(this.$t("重症患者数")," (").concat(this.$t("日別"),")"),value:"transition",align:"end"}]},tableData:function(){return this.chartData.map((function(t,e){return{text:t.label,transition:t.transition.toLocaleString()}})).sort((function(a,b){return l()(a.text).unix()-l()(b.text).unix()})).reverse()}},mounted:function(){var canvas=this.$refs.barChart.$el.querySelector("canvas"),t="".concat(this.titleId,"-graph");canvas&&(canvas.setAttribute("role","img"),canvas.setAttribute("aria-labelledby",t))}},w=d.a.extend(D),C=n(6),component=Object(C.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date,"head-title":t.title+t.infoTitles.join(",")},scopedSlots:t._u([{key:"additionalDescription",fn:function(){return[t._t("additionalDescription")]},proxy:!0},{key:"dataTable",fn:function(){return[n("client-only",[n("data-view-table",{attrs:{headers:t.tableHeaders,items:t.tableData}})],1)]},proxy:!0},{key:"dataSetPanel",fn:function(){return[n("data-view-data-set-panel",{attrs:{title:t.infoTitles[0],"l-text":t.displayInfo[0].lText,"s-text":t.displayInfo[0].sText,unit:t.displayInfo[0].unit}})]},proxy:!0}],null,!0)},[n("h4",{staticClass:"visually-hidden",attrs:{id:t.titleId+"-graph"}},[t._v("\n    "+t._s(t.$t("{title}のグラフ",{title:t.title}))+"\n  ")]),t._v(" "),n("scrollable-chart",{directives:[{name:"show",rawName:"v-show",value:t.canvas,expression:"canvas"}],attrs:{"display-data":t.displayData},scopedSlots:t._u([{key:"chart",fn:function(e){var r=e.chartWidth;return[n("bar",{ref:"barChart",attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.displayOption,height:240,width:r}})]}},{key:"sticky-chart",fn:function(){return[n("bar",{staticClass:"sticky-legend",attrs:{"chart-id":t.chartId+"-header","chart-data":t.displayDataHeader,options:t.displayOptionHeader,plugins:t.yAxesBgPlugin,height:240}})]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ScrollableChart:n(355).default,DataViewTable:n(356).default,DataViewDataSetPanel:n(354).default,DataView:n(353).default})},571:function(t,e,n){"use strict";n.r(e);n(62),n(33);var r=n(46),o=n(455),l=n(437),d=n(125),c={components:{SevereCaseBarChart:o.default,AppLink:r.default},data:function(){var t=l.date;return{graphData:l.data.filter((function(t){return new Date(t.date)>new Date("2020-04-26")})).filter((function(t){return!isNaN(t.severe_case)})).map((function(t){return{label:Object(d.a)(t.date),transition:t.severe_case}})),date:t}}},f=n(6),h=n(32),y=n.n(h),m=n(586),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("severe-case-bar-chart",{attrs:{title:t.$t("モニタリング項目(7)"),"title-id":"positive-status-severe-case","info-titles":[t.$t("重症患者数")],"chart-id":"time-bar-chart-positive-status-severe-case","chart-data":t.graphData,date:t.date,unit:t.$t("人")},scopedSlots:t._u([{key:"additionalDescription",fn:function(){return[n("span",[t._v(t._s(t.$t("（注）")))]),t._v(" "),n("ul",[n("li",[t._v("\n            "+t._s(t.$t("入院患者数のうち、人工呼吸器管理（ECMOを含む）が必要な患者数を計上。"))+"\n            "),n("app-link",{attrs:{to:"https://www.bousai.metro.tokyo.lg.jp/_res/projects/default_project/_page_/001/011/435/7kai/202008207.pdf"}},[t._v("\n              "+t._s(t.$t("重症基準の考え方はこちら"))+"\n            ")])],1),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("上記の考え方で重症患者数の計上を開始した4月27日から作成"))+"\n          ")])])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{AppLink:n(46).default,SevereCaseBarChart:n(455).default}),y()(component,{VCol:m.a})}}]);