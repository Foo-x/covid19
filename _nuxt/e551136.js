(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{354:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({props:{title:{type:String,required:!1,default:""},lText:{type:String,required:!1,default:""},sText:{type:String,required:!0},sTextUnder:{type:String,required:!1,default:""},unit:{type:String,required:!1,default:""}}}),o=(n(363),n(6)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DataView-DataSet"},[t.title?n("span",{staticClass:"DataView-DataSet-title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),n("div",{staticClass:"DataView-DataSet-info"},[t.lText?[n("span",{staticClass:"DataView-DataSet-summary"},[t._v("\n        "+t._s(t.lText)+"\n        "),n("small",{staticClass:"DataView-DataSet-summary-unit"},[t._v(t._s(t.unit))])]),t._v(" "),n("br")]:t._e(),t._v(" "),n("small",{staticClass:"DataView-DataSet-date"},[t._v(t._s(t.sText))]),t._v(" "),t.sTextUnder?[n("br"),t._v(" "),n("small",{staticClass:"DataView-DataSet-date"},[t._v(t._s(t.sTextUnder))])]:t._e()],2)])}),[],!1,null,null,null);e.default=component.exports},358:function(t,e,n){var content=n(364);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("0e424632",content,!0,{sourceMap:!1})},359:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(46),l=r.a.extend({components:{AppLink:o.default},props:{url:{type:String,default:""}}}),d=(n(375),n(6)),component=Object(d.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("app-link",{attrs:{to:this.url}},[this._v("\n  "+this._s(this.$t("オープンデータを入手"))+"\n")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppLink:n(46).default})},360:function(t,e,n){"use strict";n(81),n(366);var r=n(12),o=n.n(r),l=n(125),d=n(357);function c(t,e){var n=e(t);switch(Math.sign(t)){case 1:return"+".concat(n);case-1:default:return"".concat(n)}}e.a=function(t){var e=t.displayData,n=t.dataIndex,r=void 0===n?0:n,f=t.digit,h=void 0===f?0:f,y=e.labels.slice(-1)[0],data=e.datasets[r].data,x=data.slice(-1)[0],m=x-data.slice(-2)[0],v=Object(d.a)(h);return{lastDay:o()(Object(l.d)(y)).toDate(),lastDayData:v(x),dayBeforeRatio:c(m,v)}}},363:function(t,e,n){"use strict";n(358)},364:function(t,e,n){(e=n(17)(!1)).push([t.i,".DataView-DataSet{display:flex;flex-flow:column;margin-bottom:10px}@media screen and (min-width:1171px){.DataView-DataSet{justify-content:space-between;flex-flow:row}}.DataView-DataSet-title{font-size:2rem;flex:1 1 50%;margin-bottom:10px}.DataView-DataSet-info{flex:1 1 50%}@media screen and (min-width:1171px){.DataView-DataSet-info{text-align:right}}.DataView-DataSet-summary{display:inline-block;color:#4d4d4d;white-space:nowrap;font-family:Hiragino Sans,sans-serif;font-style:normal;line-height:30px;font-size:3rem}.DataView-DataSet-summary-unit{width:100%;font-size:1.8rem}.DataView-DataSet-date{display:inline-block;width:100%;color:#707070;line-height:normal;font-size:1.2rem}",""]),t.exports=e},365:function(t,e,n){var content=n(376);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("be2676e6",content,!0,{sourceMap:!1})},366:function(t,e,n){n(4)({target:"Math",stat:!0},{sign:n(236)})},375:function(t,e,n){"use strict";n(365)},376:function(t,e,n){(e=n(17)(!1)).push([t.i,".OpenDataLink{text-decoration:none}.OpenDataLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=e},407:function(t,e,n){var content=n(518);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("50ce08ad",content,!0,{sourceMap:!1})},446:function(t,e,n){"use strict";n.r(e);n(19),n(33),n(123),n(81);var r=n(3),o=n(100),l=n(12),d=n.n(l),c=n(0),f=n(353),h=n(354),y=n(356),x=n(359),m=n(355),v=n(124),D=n(360),k=n(361),w={created:function(){this.canvas=!0},components:{DataView:f.default,DataViewTable:y.default,DataViewDataSetPanel:h.default,ScrollableChart:m.default,OpenDataLink:x.default},props:{title:{type:String,default:""},titleId:{type:String,required:!1,default:"monitoring-number-of-reports-to-covid19-consultation-desk"},chartId:{type:String,default:"monitoring-consultation-desk-report-chart"},chartData:{type:Array,required:!1,default:function(){return[]}},date:{type:String,required:!0,default:""},url:{type:String,default:""},labels:{type:Array,default:function(){return[]}},dataLabels:{type:Array,default:function(){return[]}},unit:{type:String,default:""}},data:function(){return{displayLegends:[!0,!0],colors:[Object(k.a)("B"),Object(k.a)("A")],canvas:!0,yAxesBgPlugin:v.b}},computed:{displayInfo:function(){var t=Object(D.a)({displayData:this.displayData,dataIndex:1}),e=t.lastDay,n=t.lastDayData,r=t.dayBeforeRatio;return[{lText:n,sText:"".concat(this.$t("{date} の数値",{date:this.$d(e,"date")}),"（").concat(this.$t("７日間移動平均"),"）"),sTextUnder:"（".concat(this.$t("前日比"),": ").concat(r," ").concat(this.unit,"）"),unit:this.unit}]},displayData:function(){return{labels:this.labels,datasets:[{type:"bar",label:this.dataLabels[0],data:this.chartData[0],backgroundColor:this.colors[0].fillColor,borderColor:this.colors[0].strokeColor,borderWidth:1,order:3},{type:"line",label:this.dataLabels[1],data:this.chartData[1],pointBackgroundColor:"rgba(0,0,0,0)",pointBorderColor:"rgba(0,0,0,0)",borderColor:this.colors[1].fillColor,borderWidth:3,fill:!1,order:2,lineTension:0}]}},tableHeaders:function(){return[{text:this.$t("日付"),value:"text"}].concat(Object(o.a)(this.dataLabels.map((function(text,i){return{text:text,value:String(i),align:"end"}}))))},tableData:function(){var t=this;return this.labels.map((function(label,i){return Object.assign.apply(Object,[{text:label}].concat(Object(o.a)(t.dataLabels.map((function(e,n){var o;return Object(r.a)({},n,null===(o=t.chartData[n][i])||void 0===o?void 0:o.toLocaleString())})))))})).sort((function(a,b){return d()(a.text).unix()-d()(b.text).unix()})).reverse()},displayOption:function(){var t=this,e=this.unit,n={tooltips:{displayColors:!1,callbacks:{label:function(n){var r=t.dataLabels[n.datasetIndex],o=parseInt(n.value).toLocaleString();return"".concat(r," : ").concat(o," ").concat(e)},title:function(e,data){var label=data.labels[e[0].index];return t.$d(new Date(label),"date")}}},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"#808080",maxRotation:0,callback:function(label){return d()(label).format("D")}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold"},type:"time",time:{unit:"month",displayFormats:{month:"YYYY-MM"}}}],yAxes:[{position:"left",gridLines:{display:!0,drawOnChartArea:!0,color:"#E5E5E5"},ticks:{maxTicksLimit:8,fontColor:"#808080",suggestedMin:0,suggestedMax:this.scaledTicksYAxisMax}}]}};return"true"===this.$route.query.ogp&&Object.assign(n,{animation:{duration:0}}),n},displayDataHeader:function(){return{labels:["2020-01-01"],datasets:this.dataLabels.map((function(t){return{data:[],backgroundColor:"transparent",borderWidth:0}}))}},displayOptionHeader:function(){return{tooltips:{enabled:!1},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"transparent",maxRotation:0,callback:function(label){return d()(label).format("D")}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!1,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"transparent",padding:13,fontStyle:"bold"},type:"time",time:{unit:"month",displayFormats:{month:"YYYY-MM"}}}],yAxes:[{position:"left",gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{maxTicksLimit:8,fontColor:"#808080",suggestedMin:0,suggestedMax:this.scaledTicksYAxisMax}}]},animation:{duration:0}}},scaledTicksYAxisMax:function(){return this.chartData.reduce((function(t,data){return Math.max.apply(Math,[t].concat(Object(o.a)(data)))}),0)}},methods:{onClickLegend:function(i){this.displayLegends[i]=!this.displayLegends[i],this.displayLegends=this.displayLegends.slice()},makeLineData:function(t){return this.chartData[0].map((function(e){return t}))}},mounted:function(){var canvas=this.$refs.barChart.$el.querySelector("canvas"),t="".concat(this.titleId,"-graph");canvas&&(canvas.setAttribute("role","img"),canvas.setAttribute("aria-labelledby",t))}},_=c.a.extend(w),L=n(517),C=n(6);var component=Object(C.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"dataTable",fn:function(){return[n("client-only",[n("data-view-table",{attrs:{headers:t.tableHeaders,items:t.tableData}})],1)]},proxy:!0},{key:"description",fn:function(){return[t._t("description")]},proxy:!0},{key:"additionalDescription",fn:function(){return[t._t("additionalDescription")]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-data-set-panel",{attrs:{"l-text":t.displayInfo[0].lText,"s-text":t.displayInfo[0].sText,"s-text-under":t.displayInfo[0].sTextUnder,unit:t.displayInfo[0].unit}})]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{directives:[{name:"show",rawName:"v-show",value:t.url,expression:"url"}],attrs:{url:t.url}})]},proxy:!0}],null,!0)},[n("ul",{class:t.$style.GraphLegend,style:{display:t.canvas?"block":"none"}},t._l(t.dataLabels,(function(e,i){return n("li",{key:i,on:{click:function(e){return t.onClickLegend(i)}}},[n("button",[n("div",1===i?{style:{backgroundColor:t.colors[i].fillColor,border:0,height:"3px"}}:{style:{backgroundColor:t.colors[i].fillColor,borderColor:t.colors[i].strokeColor}}),t._v(" "),n("span",{style:{textDecoration:t.displayLegends[i]?"none":"line-through"}},[t._v(t._s(e))])])])})),0),t._v(" "),n("h4",{staticClass:"visually-hidden",attrs:{id:t.titleId+"-graph"}},[t._v("\n    "+t._s(t.$t("{title}のグラフ",{title:t.title}))+"\n  ")]),t._v(" "),n("scrollable-chart",{directives:[{name:"show",rawName:"v-show",value:t.canvas,expression:"canvas"}],attrs:{"display-data":t.displayData},scopedSlots:t._u([{key:"chart",fn:function(e){var r=e.chartWidth;return[n("bar",{ref:"barChart",attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.displayOption,"display-legends":t.displayLegends,height:240,width:r}})]}},{key:"sticky-chart",fn:function(){return[n("bar",{staticClass:"sticky-legend",attrs:{"chart-id":t.chartId+"-header-right","chart-data":t.displayDataHeader,options:t.displayOptionHeader,plugins:t.yAxesBgPlugin,"display-legends":t.displayLegends,height:240}})]},proxy:!0}])})],1)}),[],!1,(function(t){this.$style=L.default.locals||L.default}),null,null);e.default=component.exports;installComponents(component,{ScrollableChart:n(355).default,DataViewTable:n(356).default,DataViewDataSetPanel:n(354).default,OpenDataLink:n(359).default,DataView:n(353).default})},517:function(t,e,n){"use strict";var r=n(407),o=n.n(r);n.d(e,"default",(function(){return o.a}))},518:function(t,e,n){(e=n(17)(!1)).push([t.i,".GraphLegend_1z43V{text-align:center;list-style:none;padding:0!important}.GraphLegend_1z43V li{display:inline-block;margin:0 3px}.GraphLegend_1z43V li div{height:12px;margin:2px 4px;width:40px;display:inline-block;vertical-align:middle;border-width:1px;border-style:solid}.GraphLegend_1z43V li button{color:#707070;font-size:1.2rem}",""]),e.locals={GraphLegend:"GraphLegend_1z43V"},t.exports=e},561:function(t,e,n){"use strict";n.r(e);n(123);var r=n(5),o=n(46),l=n(446),d=n(166),c={components:{MonitoringConsultationDeskReportChart:l.default,AppLink:o.default},data:function(){var t=d.querents.data.reduce((function(t,data){return t[0].push(data["小計"]),t[1].push(data["７日間平均"]),t[2].push(data["日付"]),t}),[[],[],[]]),e=Object(r.a)(t,3),n=e[0],o=e[1],l=e[2],c=[n,o],f=[this.$t("相談件数"),this.$t("７日間移動平均")];return{chartData:c,date:d.querents.date,labels:l,dataLabels:f}}},f=n(6),h=n(32),y=n.n(h),x=n(586),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("monitoring-consultation-desk-report-chart",{attrs:{title:t.$t("受診相談窓口における相談件数"),"title-id":"monitoring-number-of-reports-to-covid19-consultation-desk","chart-id":"monitoring-consultation-desk-report-chart","chart-data":t.chartData,date:t.date,labels:t.labels,"data-labels":t.dataLabels,unit:t.$t("件.reports"),url:"https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000070"},scopedSlots:t._u([{key:"description",fn:function(){return[n("p",[t._v("\n          "+t._s(t.$t("「東京都発熱相談センター」の開設に伴い、「新型コロナ受診相談窓口」は終了したため、10月30日（金曜日）17時をもって本グラフの数値更新を終了しました。"))+"\n          "),n("app-link",{attrs:{to:"/cards/number-of-reports-to-tokyo-fever-consultation-center"}},[t._v("\n            "+t._s(t.$t("「東京都発熱相談センターにおける相談件数グラフ」はこちら。"))+"\n          ")])],1)]},proxy:!0},{key:"additionalDescription",fn:function(){return[n("span",[t._v(t._s(t.$t("（注）")))]),t._v(" "),n("ul",[n("li",[t._v("\n            "+t._s(t.$t("曜日などによる数値のばらつきにより、日々の結果が変動するため、こうしたばらつきを平準化し全体の傾向を見る趣旨から、過去７日間の移動平均値を折れ線グラフで示す（例えば、5月7日の移動平均値は、5月1日から5月7日までの実績値を平均したもの）"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("新型コロナ受診相談窓口 （帰国者・接触者電話相談センター）を開設した2月7日から作成"))+"\n          ")])])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{AppLink:n(46).default,MonitoringConsultationDeskReportChart:n(446).default}),y()(component,{VCol:x.a})}}]);