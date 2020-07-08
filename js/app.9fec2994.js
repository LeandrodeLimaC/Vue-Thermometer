(function(e){function t(t){for(var n,l,o=t[0],u=t[1],i=t[2],f=0,p=[];f<o.length;f++)l=o[f],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&p.push(a[l][0]),a[l]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);c&&c(t);while(p.length)p.shift()();return s.push.apply(s,i||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(s.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},a={app:0},s=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/Vue-Thermometer/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var c=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},1441:function(e,t,r){},"2ed9":function(e,t,r){"use strict";var n=r("1441"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{style:{background:this.Temperature_current.bg_color},attrs:{id:"app"}},[r("h1",[e._v(" It feels "),r("mark",{class:this.Temperature_current.text_class},[e._v(" "+e._s(this.Temperature_current.name)+" ")])]),r("div",{staticClass:"wrapper",staticStyle:{"flex-flow":"column"}},[r("Thermometer",{attrs:{rangeBar_value:this.current_barValue}})],1),r("h3",{staticClass:"footer-text"},[e._v(" Drag the slider to increase or decrease the temperature")]),r("rangeBar",{attrs:{bg_color:this.Temperature_current.bg_color},on:{Bar_Value:function(t){return e.sendBarValue(t)}}}),r("h3",[e._v(" Click "),r("a",{class:this.Temperature_current.text_class,attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.alertValue()}}},[e._v(" here ")]),e._v(" to alert the value ")])],1)},s=[],l=(r("4de4"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{height:"300px"},attrs:{id:"Thermometer"}},[r("svg",{staticClass:"thermometer-glass",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"200",height:"300",viewBox:"0 0 298 1097"}},[r("g",{attrs:{transform:"translate(11715 3885)"}},[r("circle",{attrs:{cx:"123",cy:"123",r:"123",transform:"translate(-11689 -3057)",fill:"#000d33"}}),r("g",{attrs:{transform:"translate(-11715 -3951)",fill:"none"}},[r("path",{attrs:{d:"M0,1014v-.286A148.759,148.759,0,0,1,58.072,895.667V156.928a90.928,90.928,0,1,1,181.857,0V895.667A148.76,148.76,0,0,1,298,1013.714V1014a149,149,0,0,1-298,0Z",stroke:"none"}}),r("path",{attrs:{d:"M 149.0004577636719 1133.999755859375 C 215.16845703125 1133.999755859375 268.9999389648438 1080.168334960938 268.9999389648438 1013.714172363281 C 268.9999389648438 976.22314453125 251.9474487304688 941.5657958984375 222.2146148681641 918.628662109375 L 210.9282836914063 909.921630859375 L 210.9282836914063 895.6671752929688 L 210.9282836914063 156.9284820556641 C 210.9282836914063 122.7808151245117 183.1476135253906 94.99964904785156 149.0004577636719 94.99964904785156 C 114.8527908325195 94.99964904785156 87.07161712646484 122.7808151245117 87.07161712646484 156.9284820556641 L 87.07161712646484 895.6672973632813 L 87.07161712646484 909.9218139648438 L 75.78528594970703 918.6288452148438 C 46.05245590209961 941.5659790039063 28.99995422363281 976.2233276367188 28.99995422363281 1014.000305175781 C 28.99995422363281 1080.168334960938 82.83195495605469 1133.999755859375 149.0004577636719 1133.999755859375 M 149.0004577636719 1162.999755859375 C 66.70978546142578 1162.999755859375 -4.57763671875e-05 1096.291015625 -4.57763671875e-05 1014.000305175781 L -4.57763671875e-05 1013.714172363281 C -4.57763671875e-05 965.6581420898438 22.75345420837402 922.9135131835938 58.07162094116211 895.6672973632813 L 58.07162094116211 156.9284820556641 C 58.07162094116211 106.710319519043 98.78128814697266 65.99964904785156 149.0004577636719 65.99964904785156 C 199.2186279296875 65.99964904785156 239.9282836914063 106.710319519043 239.9282836914063 156.9284820556641 L 239.9282836914063 895.6671752929688 C 275.2464599609375 922.913330078125 297.9999389648438 965.6581420898438 297.9999389648438 1013.714172363281 L 297.9999389648438 1014.000305175781 C 297.9999389648438 1096.291015625 231.2901153564453 1162.999755859375 149.0004577636719 1162.999755859375 Z",stroke:"none",fill:"#fff"}})]),r("line",{attrs:{x2:"51.672",transform:"translate(-11634.5 -3157.5)",fill:"none",stroke:"#fff","stroke-width":"8"}}),r("line",{attrs:{x2:"51.672",transform:"translate(-11634.5 -3357.5)",fill:"none",stroke:"#fff","stroke-width":"8"}}),r("line",{attrs:{x2:"30",transform:"translate(-11634.5 -3257.5)",fill:"none",stroke:"#fff","stroke-width":"8"}}),r("line",{attrs:{x2:"30",transform:"translate(-11634.5 -3457.5)",fill:"none",stroke:"#fff","stroke-width":"8"}}),r("line",{attrs:{x2:"51.672",transform:"translate(-11634.5 -3557.5)",fill:"none",stroke:"#fff","stroke-width":"8"}}),r("line",{attrs:{x2:"30",transform:"translate(-11634.5 -3657.5)",fill:"none",stroke:"#fff","stroke-width":"8"}})])]),r("div",{staticClass:"l-thermometer-inside"},[r("span",{staticClass:"thermometer-inside",style:{height:e.rangeBar_value+"%"},attrs:{"data-bar_value":e.rangeBar_value+" ºC"}})])])}),o=[],u=(r("a9e3"),{props:{rangeBar_value:Number}}),i=u,c=(r("ff62"),r("2877")),f=Object(c["a"])(i,l,o,!1,null,null,null),p=f.exports,d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("input",{directives:[{name:"model",rawName:"v-model",value:e.Value,expression:"Value"}],staticClass:"range-slider__range slider",style:e.cssVars,attrs:{id:"rangeBar",type:"range"},domProps:{value:e.Value},on:{input:function(t){return e.sendValue()},__r:function(t){e.Value=t.target.value}}})},h=[],m={props:{returnBar_Value:Number,bg_color:String},data:function(){return{Value:0}},methods:{sendValue:function(){this.$emit("Bar_Value",Number(this.Value))}},computed:{cssVars:function(){return{"--bg-color":this.bg_color}}}},_=m,v=(r("2ed9"),Object(c["a"])(_,d,h,!1,null,"22d795e3",null)),g=v.exports,b=[{name:"Cold",text_class:"cold-mark",bg_color:"rgb(190, 228, 255)"},{name:"Hot",text_class:"hot-mark",bg_color:"rgb(255, 202, 225)"}],V={name:"App",components:{Thermometer:p,rangeBar:g},data:function(){return{current_barValue:0,Temperature_current:b[0]}},methods:{sendBarValue:function(e){var t=this;this.current_barValue=e;var r=100/b.length;this.Temperature_current=b.filter((function(e,n){return n*r<=t.current_barValue&&(n+1)*r>=t.current_barValue})),this.Temperature_current=this.Temperature_current[0]},alertValue:function(){alert("The current range value is "+this.current_barValue)}}},w=V,x=(r("034f"),Object(c["a"])(w,a,s,!1,null,null,null)),y=x.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(y)}}).$mount("#app")},"85ec":function(e,t,r){},c6d1:function(e,t,r){},ff62:function(e,t,r){"use strict";var n=r("c6d1"),a=r.n(n);a.a}});
//# sourceMappingURL=app.9fec2994.js.map