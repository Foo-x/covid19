(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{359:function(t,e,n){"use strict";n.r(e);var r=n(0),l=n(46),o=r.a.extend({components:{AppLink:l.default},props:{url:{type:String,default:""}}}),d=(n(375),n(6)),component=Object(d.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("app-link",{attrs:{to:this.url}},[this._v("\n  "+this._s(this.$t("オープンデータを入手"))+"\n")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppLink:n(46).default})},365:function(t,e,n){var content=n(376);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("be2676e6",content,!0,{sourceMap:!1})},366:function(t,e,n){n(4)({target:"Math",stat:!0},{sign:n(236)})},375:function(t,e,n){"use strict";n(365)},376:function(t,e,n){(e=n(17)(!1)).push([t.i,".OpenDataLink{text-decoration:none}.OpenDataLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=e},403:function(t,e,n){var content=n(498);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("2de417ed",content,!0,{sourceMap:!1})},450:function(t,e,n){"use strict";n.r(e);n(19),n(33),n(123),n(81);var r=n(3),l=n(100),o=n(12),d=n.n(o),c=n(0),f=n(353),h=n(354),y=n(356),m=n(359),x=n(355),k=n(124),v=n(360),L=n(361),C=n(357),_={created:function(){this.canvas=!0},components:{DataView:f.default,DataViewTable:y.default,DataViewDataSetPanel:h.default,ScrollableChart:x.default,OpenDataLink:m.default},props:{title:{type:String,default:""},titleId:{type:String,required:!1,default:"monitoring-number-of-confirmed-cases"},infoTitles:{type:Array,required:!1,default:function(){return[]}},chartId:{type:String,default:"monitoring-confirmed-cases-chart"},chartData:{type:Array,required:!1,default:function(){return[]}},getFormatter:{type:Function,required:!1,default:function(t){return Object(C.c)()}},date:{type:String,required:!0,default:""},url:{type:String,default:""},labels:{type:Array,default:function(){return[]}},dataLabels:{type:Array,default:function(){return[]}},tableLabels:{type:Array,default:function(){return[]}},unit:{type:String,default:""}},data:function(){return{displayLegends:[!0,!0],colors:[Object(L.a)("C"),Object(L.a)("E")],canvas:!0,yAxesBgPlugin:k.b}},computed:{displayInfo:function(){var t=Object(v.a)({displayData:this.displayData,dataIndex:1,digit:1}),e=t.lastDay,n=t.lastDayData,r=t.dayBeforeRatio;return[{lText:n,sText:"".concat(this.$t("{date} の数値",{date:this.$d(e,"date")}),"（").concat(this.$t("７日間移動平均"),"）"),sTextUnder:"（".concat(this.$t("前日比"),": ").concat(r," ").concat(this.unit,"）"),unit:this.unit}]},displayData:function(){return{labels:this.labels,datasets:[{type:"bar",label:this.dataLabels[0],data:this.chartData[0],backgroundColor:this.colors[0].fillColor,borderColor:this.colors[0].strokeColor,borderWidth:1,order:3},{type:"line",label:this.dataLabels[1],data:this.chartData[1],pointBackgroundColor:"rgba(0,0,0,0)",pointBorderColor:"rgba(0,0,0,0)",borderColor:this.colors[1].fillColor,borderWidth:3,fill:!1,order:2,lineTension:0}]}},tableHeaders:function(){return[{text:this.$t("日付"),value:"text"}].concat(Object(l.a)(this.tableLabels.map((function(text,i){return{text:text,value:"".concat(i),align:"end"}}))))},tableData:function(){var t=this;return this.labels.map((function(label,i){return Object.assign.apply(Object,[{text:label}].concat(Object(l.a)(t.tableLabels.map((function(e,n){return Object(r.a)({},n,t.getFormatter(n)(t.chartData[n][i]))})))))})).sort((function(a,b){return d()(a.text).unix()-d()(b.text).unix()})).reverse()},displayOption:function(){var t=this,e=this.unit,n={tooltips:{displayColors:!1,callbacks:{label:function(n){var r=t.getFormatter(n.datasetIndex)(parseFloat(n.value));return"".concat(t.dataLabels[n.datasetIndex]," : ").concat(r," ").concat(e)},title:function(e,data){if(e[0].datasetIndex<2){var label=data.labels[e[0].index];return t.$d(new Date(label),"date")}return""}}},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"#808080",maxRotation:0,callback:function(label){return d()(label).format("D")}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold"},type:"time",time:{unit:"month",displayFormats:{month:"YYYY-MM"}}}],yAxes:[{position:"left",gridLines:{display:!0,drawOnChartArea:!0,color:"#E5E5E5"},ticks:{maxTicksLimit:8,fontColor:"#808080",suggestedMin:0,suggestedMax:this.scaledTicksYAxisMax}}]}};return"true"===this.$route.query.ogp&&Object.assign(n,{animation:{duration:0}}),n},displayDataHeader:function(){return{labels:["2020-01-01"],datasets:this.dataLabels.map((function(t){return{data:[],backgroundColor:"transparent",borderWidth:0}}))}},displayOptionHeader:function(){return{tooltips:{enabled:!1},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"transparent",maxRotation:0,callback:function(label){return d()(label).format("D")}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!1,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"transparent",padding:13,fontStyle:"bold"},type:"time",time:{unit:"month",displayFormats:{month:"YYYY-MM"}}}],yAxes:[{position:"left",gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{maxTicksLimit:8,fontColor:"#808080",suggestedMin:0,suggestedMax:this.scaledTicksYAxisMax}}]},animation:{duration:0}}},scaledTicksYAxisMax:function(){return this.chartData.reduce((function(t,data){return Math.max.apply(Math,[t].concat(Object(l.a)(data)))}),0)}},methods:{onClickLegend:function(i){this.displayLegends[i]=!this.displayLegends[i],this.displayLegends=this.displayLegends.slice()},makeLineData:function(t){return this.chartData[0].map((function(e){return t}))}},mounted:function(){var canvas=this.$refs.barChart.$el.querySelector("canvas"),t="".concat(this.titleId,"-graph");canvas&&(canvas.setAttribute("role","img"),canvas.setAttribute("aria-labelledby",t))}},D=c.a.extend(_),w=n(497),O=n(6);var component=Object(O.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date,"head-title":t.title+t.infoTitles.join(",")},scopedSlots:t._u([{key:"additionalDescription",fn:function(){return[t._t("additionalDescription")]},proxy:!0},{key:"dataTable",fn:function(){return[n("client-only",[n("data-view-table",{attrs:{headers:t.tableHeaders,items:t.tableData}})],1)]},proxy:!0},{key:"dataSetPanel",fn:function(){return[n("data-view-data-set-panel",{attrs:{title:t.infoTitles[0],"l-text":t.displayInfo[0].lText,"s-text":t.displayInfo[0].sText,"s-text-under":t.displayInfo[0].sTextUnder,unit:t.displayInfo[0].unit}})]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{directives:[{name:"show",rawName:"v-show",value:t.url,expression:"url"}],attrs:{url:t.url}})]},proxy:!0}],null,!0)},[n("ul",{class:t.$style.GraphLegend,style:{display:t.canvas?"block":"none"}},t._l(t.dataLabels,(function(e,i){return n("li",{key:i,on:{click:function(e){return t.onClickLegend(i)}}},[n("button",[n("div",1===i?{style:{background:t.colors[i].fillColor,border:0,height:"3px"}}:{style:{backgroundColor:t.colors[i].fillColor,borderColor:t.colors[i].strokeColor}}),t._v(" "),n("span",{style:{textDecoration:t.displayLegends[i]?"none":"line-through"}},[t._v(t._s(e))])])])})),0),t._v(" "),n("h4",{staticClass:"visually-hidden",attrs:{id:t.titleId+"-graph"}},[t._v("\n    "+t._s(t.$t("{title}のグラフ",{title:t.title}))+"\n  ")]),t._v(" "),n("scrollable-chart",{directives:[{name:"show",rawName:"v-show",value:t.canvas,expression:"canvas"}],attrs:{"display-data":t.displayData},scopedSlots:t._u([{key:"chart",fn:function(e){var r=e.chartWidth;return[n("bar",{ref:"barChart",attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.displayOption,"display-legends":t.displayLegends,height:240,width:r}})]}},{key:"sticky-chart",fn:function(){return[n("bar",{staticClass:"sticky-legend",attrs:{"chart-id":t.chartId+"-header-right","chart-data":t.displayDataHeader,options:t.displayOptionHeader,plugins:t.yAxesBgPlugin,"display-legends":t.displayLegends,height:240}})]},proxy:!0}])})],1)}),[],!1,(function(t){this.$style=w.default.locals||w.default}),null,null);e.default=component.exports;installComponents(component,{ScrollableChart:n(355).default,DataViewTable:n(356).default,DataViewDataSetPanel:n(354).default,OpenDataLink:n(359).default,DataView:n(353).default})},497:function(t,e,n){"use strict";var r=n(403),l=n.n(r);n.d(e,"default",(function(){return l.a}))},498:function(t,e,n){(e=n(17)(!1)).push([t.i,".GraphLegend_3HeTz{text-align:center;list-style:none;padding:0!important}.GraphLegend_3HeTz li{display:inline-block;margin:0 3px}.GraphLegend_3HeTz li div{height:12px;margin:2px 4px;width:40px;display:inline-block;vertical-align:middle;border-width:1px;border-style:solid}.GraphLegend_3HeTz li button{color:#707070;font-size:1.2rem}",""]),e.locals={GraphLegend:"GraphLegend_3HeTz"},t.exports=e},566:function(t,e,n){"use strict";n.r(e);n(123);var r=n(5),l=n(450),o=n(434),d=n(357),c={components:{MonitoringConfirmedCasesChart:l.default},data:function(){var t=o.data.reduce((function(t,data){return t[0].push(data.count),t[1].push(data.weekly_average_count),t[2].push(data.diagnosed_date),t}),[[],[],[]]),e=Object(r.a)(t,3),n=e[0],l=e[1],c=e[2],f=[n,l],h=[this.$t("陽性者数"),this.$t("７日間移動平均")],y=[this.$t("陽性者数"),this.$t("７日間移動平均")];return{chartData:f,date:o.date,labels:c,dataLabels:h,tableLabels:y,getFormatter:function(t){return 1===t?Object(d.b)(1):Object(d.c)()}}}},f=n(6),h=n(32),y=n.n(h),m=n(586),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("monitoring-confirmed-cases-chart",{attrs:{title:t.$t("モニタリング項目(1)"),"title-id":"monitoring-number-of-confirmed-cases","info-titles":[t.$t("新規陽性者数")],"chart-id":"monitoring-confirmed-cases-chart","chart-data":t.chartData,"get-formatter":t.getFormatter,date:t.date,labels:t.labels,"data-labels":t.dataLabels,"table-labels":t.tableLabels,unit:t.$t("人"),url:"https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000068"},scopedSlots:t._u([{key:"additionalDescription",fn:function(){return[n("span",[t._v(t._s(t.$t("（注）")))]),t._v(" "),n("ul",[n("li",[t._v("\n            "+t._s(t.$t("保健所から発生届が提出された日を基準とする"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("医療機関等が行った検査も含む"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("チャーター機帰国者、クルーズ船乗客等は含まれていない"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("集団感染発生や曜日による数値のばらつきにより、日々の結果が変動するため、こうしたばらつきを平準化し全体の傾向を見る趣旨から、過去７日間の移動平均値を折れ線グラフで示す（例えば、5月7日の移動平均値は、5月1日から5月7日までの実績値を平均したもの）"))+"\n          ")])])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{MonitoringConfirmedCasesChart:n(450).default}),y()(component,{VCol:m.a})}}]);