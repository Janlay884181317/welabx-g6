(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/kZE":function(e,t,n){var a=n("LboF"),o=n("hXKb");"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};a(o,i);e.exports=o.locals||{}},CncF:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"root"},[n("div",{class:{hidden:e.headVisible},attrs:{id:"headPanel"}},[n("span",{staticClass:"logo"},[e._v("Vue 生命周期图示")]),e._v(" "),n("i",{staticClass:"gb-toggle-btn",on:{click:function(t){e.headVisible=!e.headVisible}}})]),e._v(" "),n("item-panel",{attrs:{graph:e.graph},on:{"canvas-add-node":e.addNode}}),e._v(" "),n("div",{attrs:{id:"canvasPanel"},on:{dragover:function(e){e.preventDefault()}}}),e._v(" "),n("div",{class:{hidden:!e.configVisible},attrs:{id:"configPanel"}},[n("i",{staticClass:"gb-toggle-btn",on:{click:function(t){e.configVisible=!e.configVisible}}}),e._v(" "),n("h2",{staticClass:"panel-title"},[e._v("数据配置")]),e._v(" "),n("div",{staticClass:"config-data"},[e._v("\n      id: "+e._s(e.config.id)+", data: "+e._s(e.config.data)+"\n    ")]),e._v(" "),n("h2",{staticClass:"panel-title"},[e._v("节点样式配置")]),e._v(" "),n("div",{staticClass:"config-data"},[n("div",{staticClass:"config-item"},[e._v("\n        形状: "),n("select",e._l(e.nodeShapes,(function(t,a){return n("option",{key:a,domProps:{value:t.shape}},[e._v("\n            "+e._s(t.name)+"\n          ")])})),0)]),e._v(" "),n("div",{staticClass:"config-item"},[e._v("\n        背景色: "),n("input",{domProps:{value:e.node.fill}})]),e._v(" "),n("div",{staticClass:"config-item"},[e._v("\n        边框虚线: "),n("input",{domProps:{value:e.node.lineDash}})]),e._v(" "),n("div",{staticClass:"config-item"},[e._v("\n        边框颜色: "),n("input",{domProps:{value:e.node.borderColor}})]),e._v(" "),n("div",{staticClass:"config-item"},[e._v("\n        宽: "),n("input",{domProps:{value:e.node.width}}),e._v("px\n      ")]),e._v(" "),n("div",{staticClass:"config-item"},[e._v("\n        高: "),n("input",{domProps:{value:e.node.height}}),e._v("px\n      ")])]),e._v(" "),n("h2",{staticClass:"panel-title"},[e._v("文字样式配置")]),e._v(" "),n("div",{staticClass:"config-data"},[n("div",{staticClass:"config-item"},[e._v("\n        文字: "),n("input",{domProps:{value:e.label}})]),e._v(" "),n("div",{staticClass:"config-item"},[e._v("\n        字体大小: "),n("input",{domProps:{value:e.labelCfg.fontSize}})]),e._v(" "),n("div",{staticClass:"config-item"},[e._v("\n        颜色: "),n("input",{domProps:{value:e.labelCfg.fill}})])]),e._v(" "),n("button",{on:{click:function(t){e.configVisible=!1}}},[e._v("取消")]),e._v(" "),n("button",{staticClass:"save",on:{click:e.save}},[e._v("\n      保存\n    ")])]),e._v(" "),e.tooltip?n("div",{staticClass:"g6-tooltip",style:"top: "+e.top+"px; left: "+e.left+"px;"},[e._v("\n    id: "+e._s(e.tooltip)+"\n  ")]):e._e()],1)};a._withStripped=!0;n("bHtr");var o=n("qlJx"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"itemPanel",class:{hidden:e.itemVisible},attrs:{id:"itemPanel"}},[n("i",{staticClass:"iconfont icon-h-drag"}),e._v(" "),n("div",{staticClass:"icon-tool"},[n("i",{staticClass:"iconfont icon-circle",attrs:{draggable:"true","data-type":"node","data-shape":"circle-node"}}),e._v(" "),n("i",{staticClass:"iconfont icon-rect",attrs:{draggable:"true","data-type":"node","data-shape":"rect-node"}}),e._v(" "),n("i",{staticClass:"iconfont icon-ellipse",attrs:{draggable:"true","data-type":"node","data-shape":"ellipse-node"}}),e._v(" "),n("i",{staticClass:"iconfont icon-diamond",attrs:{draggable:"true","data-type":"node","data-shape":"diamond-node"}}),e._v(" "),n("i",{staticClass:"iconfont icon-model-rect",attrs:{draggable:"true","data-type":"node","data-shape":"modelRect"}}),e._v(" "),n("i",{staticClass:"split"}),e._v(" "),n("i",{staticClass:"gb-toggle-btn",attrs:{draggable:"true"},on:{click:function(t){e.itemVisible=!e.itemVisible}}})])])};i._withStripped=!0;n("rGqo"),n("8+KV");var r=n("dfwq"),s={name:"ItemPanel",props:{graph:{type:Object,default:function(){}}},data:function(){return{itemVisible:!1}},mounted:function(){var e=this;Object(r.a)(this.$refs.itemPanel.querySelector(".icon-tool").querySelectorAll(".iconfont")).forEach((function(t){t.addEventListener("click",(function(t){e.$emit("canvas-add-".concat(t.target.dataset.type),t)})),t.addEventListener("dragend",(function(t){e.$emit("canvas-add-".concat(t.target.dataset.type),t)}))})),document.addEventListener("drop",(function(e){e.preventDefault()}),!1)},methods:{addEdge:function(e){}}},c=n("KHd+"),d=Object(c.a)(s,i,[],!1,null,null,null);d.options.__file="src/pages/graph/ItemPanel.vue";var l=d.exports,h={nodes:[{id:"1",data:{action:"初始化"},x:500,y:100,style:{fill:"#39495b",lineDash:[1,2],shadowOffsetX:0,shadowOffsetY:2,shadowColor:"#666",shadowBlur:10,width:160,height:70},label:"new Vue()",labelCfg:{fill:"#fff",textAlign:"center",textBaseline:"middle",fontWeight:"bold",fontSize:24},nodeStateStyles:{"nodeState:default":{fill:"#39495b"},"nodeState:hover":{fill:"#ffbd17"},"nodeState:selected":{fill:"#f1ac00"}},anchorPoints:[[0,0],[.5,0],[0,1],[.5,1],[1,0],[1,1]]},{id:"2",type:"circle-node",style:{r:50,width:230,height:60,fill:"#65b586",lineWidth:0},x:500,y:250,label:"初始化\n事件和生命周期",labelCfg:{stroke:"#ccc",lineWidth:2,fontSize:18,fill:"#fff",textAlign:"center"}},{id:"3",type:"rect-node",style:{fill:"#fff",stroke:"#c96164",lineWidth:3,width:180,height:60},x:200,y:170,label:"beforeCreate",labelCfg:{fill:"#c96164",width:200,height:60,fontSize:20,fontWeight:"700"},anchorHotsoptStyles:{r:11,fill:"green"},anchorPointStyles:{r:4,fill:"#fff",stroke:"#1890FF",lineWidth:2}},{id:"4",x:500,y:450,type:"triangle-node",label:"初始化\n注入 & 校验",style:{fill:"#65b586",size:[100,160],lineWidth:0},labelCfg:{fontSize:12,fill:"#fff",stroke:"#65b586",textAlign:"left",x:-30,y:-20}},{id:"5",x:200,y:360,label:"created",type:"rect-node",style:{fill:"#fff",stroke:"#c96164",lineWidth:3,width:180,height:60},labelCfg:{fill:"#c96164",fontSize:20}},{id:"6",x:500,y:600,type:"diamond-node",label:'是否指定 "el" 选项?',style:{size:[160,100],fill:"#f1b953",stroke:"#f1b953"},labelCfg:{fill:"#fff",stroke:"#f1b953",fontSize:20}},{id:"7",x:800,y:700,label:"当调用 vm.$mount(el) 函数时",style:{size:[130,100]},type:"ellipse-node"},{x:500,y:800,id:"8",label:'是否指定 "template" 选项'},{id:"9",x:250,y:900,label:"将 template 编译\n到 render 函数中"},{id:"10",x:800,y:900,label:"将 el 外部的 HTML\n作为 template 编译"}],edges:[{source:"1",target:"2",sourceAnchor:3,data:{type:"A",amount:"100,000 元",date:"2019-08-03"},label:"新建 Vue 实例",shape:"cubic-edge",style:{stroke:"red",lineDash:[5,2],lineWidth:2,lineAppendWidth:10,cursor:"hand"},labelCfg:{position:"center",autoRotate:!0,style:{stroke:"white",fill:"#722ed1",lineWidth:5}},edgeStateStyles:{"edgeState:default":{strokeOpacity:1,cursor:"default"},"edgeState:hover":{strokeOpacity:.6,cursor:"pointer"},"edgeState:selected":{strokeOpacity:1,cursor:"pointer"}}},{source:"1",target:"3",sourceAnchor:3,targetAnchor:4,data:{type:"B",amount:"100,000 元",date:"2019-08-03"},label:"",edgeStateStyles:{"edgeState:default":{strokeOpacity:1,cursor:"default"},"edgeState:hover":{strokeOpacity:.6,cursor:"pointer"},"edgeState:selected":{strokeOpacity:1,cursor:"pointer"}}},{source:"2",target:"4",data:{type:"C",amount:"100,000 元",date:"2019-08-03"},label:"",edgeStateStyles:{"edgeState:default":{strokeOpacity:1,animate:!1},"edgeState:hover":{strokeOpacity:.6,stroke:"#ccc",animate:!1},"edgeState:selected":{strokeOpacity:1,stroke:"#ccc"}}},{source:"2",target:"5",sourceAnchor:2,targetAnchor:1,data:{type:"C",amount:"100,000 元",date:"2019-08-03"},label:"准备"},{source:"4",target:"6",data:{type:"B",amount:"100,000 元",date:"2019-08-03"},label:"继续"},{source:"6",target:"7",data:{type:"C",amount:"100,000 元",date:"2019-08-03"}},{source:"6",target:"8",data:{type:"C",amount:"100,000 元",date:"2019-08-03"}},{source:"8",target:"9",data:{type:"C",amount:"100,000 元",date:"2019-08-03"}},{source:"8",target:"10",data:{type:"C",amount:"100,000 元",date:"2019-08-03"}}]},g={components:{ItemPanel:l},data:function(){return{graph:{},highLight:{undo:!1,redo:!1},lineStyle:{type:"line",width:1},label:"",labelCfg:{fontSize:12,fill:"#fff"},node:{fill:"",lineDash:"none",borderColor:"",width:160,height:60,shape:"rect-node"},nodeShapes:[{name:"矩形",shape:"rect-node"},{name:"圆形",shape:"circle-node"},{name:"椭圆",shape:"ellipise-node"},{name:"菱形",shape:"diamond-node"}],headVisible:!1,configVisible:!1,config:"",tooltip:"",top:0,left:0,canvasOffset:{x:0,y:0}}},mounted:function(){var e=this;this.$nextTick((function(){e.createGraphic(),e.initGraphEvent()}))},beforeDestroy:function(){this.graph.destroy()},methods:{createGraphic:function(){var e=new o.a({width:window.innerWidth-40,height:window.innerHeight-40,layout:{type:"xxx"},defaultNode:{type:"rect-node",style:{radius:10},labelCfg:{fontSize:20}},nodeStateStyles:{"nodeState:default":{opacity:1},"nodeState:hover":{opacity:.8},"nodeState:selected":{opacity:.9}},edgeStateStyles:{"edgeState:default":{stroke:"#aab7c3"},"edgeState:selected":{stroke:"#1890FF"},"edgeState:hover":{stroke:"#1890FF",animate:!0}},registerFactory:function(e,t){var n=new e.Minimap({size:[200,100]});return t.plugins=[n],new e.Graph(t)}});this.graph=e.instance,this.graph.read(h),this.graph.paint()},copyNode:function(){},paste:function(){},addNode:function(e){var t={text:"node",type:e.target.dataset.shape,x:e.clientX-this.canvasOffset.x-50,y:e.clientY-this.canvasOffset.y-40};this.graph.addItem("node",t)},initGraphEvent:function(){var e=this;this.graph.on("on-canvas-dragend",(function(t){e.canvasOffset.x=t.dx,e.canvasOffset.y=t.dy})),this.graph.on("on-node-mouseenter",(function(e){e&&e.item})),this.graph.on("after-node-selected",(function(t){if(e.configVisible=!!t,t&&t.item){var n=t.item.get("model");e.config=n,e.label=n.label,e.labelCfg={fill:n.labelCfg.fill,fontSize:n.labelCfg.fontSize},e.node={fill:n.style.fill,borderColor:n.style.stroke,lineDash:n.style.lineDash||"none",width:n.style.width,height:n.style.height,shape:n.type}}})),this.graph.on("after-edge-selected",(function(t){e.configVisible=!!t,t&&t.item&&(e.config=t.item.get("model").id,e.graph.updateItem(t.item,{style:{radius:10,lineWidth:2}}))})),this.graph.on("on-edge-mousemove",(function(t){t&&t.item&&(e.tooltip=t.item.get("model").label,e.left=t.clientX+40,e.top=t.clientY-20)})),this.graph.on("on-node-mousemove",(function(t){t&&t.item&&(e.tooltip=t.item.get("model").id,e.left=t.clientX+40,e.top=t.clientY-20)})),this.graph.on("on-node-mouseleave",(function(t){t&&t.item&&(e.tooltip="")})),this.graph.on("on-edge-mouseleave",(function(t){t&&t.item&&(e.tooltip="")})),this.graph.on("before-node-removed",(function(e){e.target;var t=e.callback;setTimeout((function(){t(!0)}),1e3)})),this.graph.on("after-node-dblclick",(function(e){e&&e.item})),this.graph.on("before-edge-add",(function(t){var n=t.source,a=t.target,o=t.sourceAnchor,i=t.targetAnchor;setTimeout((function(){e.graph.addItem("edge",{source:n.get("id"),target:a.get("id"),sourceAnchor:o,targetAnchor:i})}),100)}))},save:function(){}}},f=(n("eGKd"),Object(c.a)(g,a,[],!1,null,null,null));f.options.__file="src/pages/graph/graph.vue";t.default=f.exports},eGKd:function(e,t,n){"use strict";var a=n("/kZE");n.n(a).a},hXKb:function(e,t,n){(t=n("JPst")(!1)).push([e.i,".g6-tooltip{position:fixed;top:0;left:0;font-size:12px;color:#545454;-webkit-border-radius:4px;border-radius:4px;border:1px solid #e2e2e2;background-color:rgba(255,255,255,.9);-webkit-box-shadow:#aeaeae 0 0 10px;box-shadow:#aeaeae 0 0 10px;padding:10px 8px}.g6-minimap{position:absolute;right:0;bottom:0}",""]),e.exports=t},qlJx:function(e,t,n){"use strict";var a=n("0iUn"),o=n("sLSF"),i=n("fD4D"),r=(n("HAE/"),n("WLL4"),n("jm62"),n("RW0V"),n("f3/d"),n("Z2Ku"),n("dRSK"),n("0l/t"),n("rGqo"),n("8+KV"),n("vYYK"));n("Vd3H");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n,a){e.attr(t),n&&n.attr(a)}function l(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"hover",a=t.get("item"),o=t.getFirst().attr(),i="node"===e?a.get("originStyle"):a.get("originStyle")["edge-shape"],r=o["".concat(e,"State:").concat(n)],s=o["".concat(e,"State:default")];return"edge"===e&&s&&null==s.lineWidth&&(s.lineWidth=1),{activeStyle:r,defaultStyle:s,originStyle:i}}var h={anchorShow:function(e,t){e?t.showAnchor(t):t.clearAnchor(t)},anchorActived:function(e,t){if(e){var n=t.get("item").getModel(),a=n.anchorPoints,o=n.anchorHotsoptStyles;t.showAnchor(t),this.getAnchorPoints({anchorPoints:a}).forEach((function(e,n){var a=t.get("children")[0].getBBox(),i=t.addShape("circle",{zIndex:0,attrs:c({x:a.minX+a.width*e[0],y:a.minY+a.height*e[1],r:0,opacity:.5,fill:"#1890ff"},o),nodeId:t.get("item").get("id"),className:"node-anchor-bg",draggable:!0,isAnchor:!0,index:n});i.animate({r:11},{duration:200}),t.sort(),t.anchorShapes.push(i)})),t.anchorShapes.filter((function(e){"node-anchor"===e.get("className")&&e.toFront(),"node-anchor-group"===e.get("className")&&(e.attr({r:(o&&o.r||11)+2}),e.toFront())}))}else t.clearAnchor(t)},nodeState:function(e,t){h["nodeState:".concat(e)].call(this,e,t)},"nodeState:default":function(e,t){e&&d(t.getChildByIndex(0),l.call(this,"node",t).defaultStyle)},"nodeState:selected":function(e,t){var n=t.getChildByIndex(0),a=l.call(this,"node",t,"selected"),o=a.activeStyle,i=a.defaultStyle;o&&d(n,e?o:i)},"nodeState:hover":function(e,t){var n=t.getChildByIndex(0),a=l.call(this,"node",t,"hover"),o=a.activeStyle,i=a.defaultStyle;o&&d(n,e?o:i)},edgeState:function(e,t){h["edgeState:".concat(e)].call(this,e,t)},"edgeState:default":function(e,t){if(e){var n=l.call(this,"edge",t).defaultStyle,a=t.getChildByIndex(0);n&&(this.stopAnimate(t),d(a,n))}},"edgeState:hover":function(e,t){var n=t.getChildByIndex(0),a=n.get("attrs").endArrow,o=l.call(this,"edge",t,"hover"),i=o.activeStyle,r=o.defaultStyle,s=o.originStyle;i&&(e?!0===i.animate?this.runAnimate(t):"function"==typeof i.animate?i.animate.call(this,t):(d(n,i),a&&n.attr("endArrow",{path:a.path,fill:i.stroke||s.stroke})):!0===i.animate?this.stopAnimate(t):"function"==typeof i.animate?i.animate.call(this,t,"stop"):(d(n,r),a&&n.attr("endArrow",{path:a.path,fill:r.stroke||i.stroke||s.stroke})))},"edgeState:selected":function(e,t){var n=t.getChildByIndex(0),a=n.get("attrs").endArrow,o=l.call(this,"edge",t,"selected"),i=o.activeStyle,r=o.defaultStyle,s=o.originStyle;i&&(e?!0===i.animate?this.runAnimate(t):"function"==typeof i.animate?i.animate.call(this,t):(d(n,i),a&&n.attr("endArrow",{path:a.path,fill:i.stroke||s.stroke})):!0===i.animate?this.stopAnimate(t):"function"==typeof i.animate?i.animate.call(this,t,"stop"):(d(n,r),a&&n.attr("endArrow",{path:a.path,fill:r.stroke||i.stroke||s.stroke})))}},g=h,f=n("dfwq"),u=[],p=null;function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=function(e){e.registerNode("base-node",{drawIcon:function(e,t){var n=t.getFirst().attr();if(n.icon){var a=y({},e.iconStyles);t.icon=t.addShape("image",{attrs:{img:n.icon,x:a.left,y:a.top,width:a.width,height:a.height},className:"".concat(n.type,"-icon")}),n.hideIcon&&t.icon.hide()}},initAnchor:function(e,t){var n=this;t.anchorShapes=[],t.showAnchor=function(t){n.drawAnchor(e,t)},t.clearAnchor=function(e){e.anchorShapes&&e.anchorShapes.forEach((function(e){return e.remove()})),e.anchorShapes=[]}},drawAnchor:function(e,t){var n=t.getFirst().attr(),a=n.type,o=n.direction,i=n.anchorPointStyles,r=t.get("children")[0].getBBox();this.getAnchorPoints(e).forEach((function(e,n){var s="triangle-node"===a?"up"===o?1:0:.5,c=r.width*(e[0]-.5),d=r.height*(e[1]-s),l=t.addShape("circle",{attrs:y({x:c,y:d},i),zIndex:1,nodeId:t.get("id"),className:"node-anchor",draggable:!0,isAnchor:!0,index:n}),h=t.addShape("circle",{attrs:{x:c,y:d,r:11,fill:"#000",opacity:0},zIndex:2,nodeId:t.get("id"),className:"node-anchor-group",draggable:!0,isAnchor:!0,index:n});!function(e,t,n){e.on("mouseenter",(function(){e.attr({cursor:"crosshair"})})),e.on("dragstart",(function(e){if(null==p){var a=t.getFirst().attr(),o=a.type,i=a.direction,r="triangle-node"===o?"up"===i?1:0:.5,s=t.get("item").getBBox(),c=t.get("item").get("id"),d=[s.width*(n[0]-.5),s.height*(n[1]-r)];u=[e.x,e.y];var l=t.addShape("path",{attrs:{stroke:"#1890FF",lineDash:[5,5],path:[["M"].concat(d),["L"].concat(d)]},className:"dashed-line",pointStart:d});t.toFront(),l.toFront(),p=c}})),e.on("drag",(function(e){var n=t.getFirst().attr(),a=n.type,o=n.direction,i=t.get("children")[0].get("canvasBox"),r="triangle-node"===a?"up"===o?i.height:0:i.height/2,s=t.getItem("dashed-line"),c=s.get("pointStart"),d=[e.x-i.x-i.width/2,e.y-i.y-r];s.toFront(),Math.sqrt(Math.pow(Math.abs(u[0])-Math.abs(e.x),2)+Math.pow(Math.abs(u[1])-Math.abs(e.y),2))>=10&&(e.x>=u[0]?(e.y,u[1],d[0]-=1,d[1]-=1):(e.y,u[1],d[0]+=1,d[1]+=1)),s.attr({path:[["M"].concat(Object(f.a)(c)),["L",d[0],d[1]]]})})),e.on("dragend",(function(e){t.getItem("dashed-line").remove(),p=null})),e.on("dragenter",(function(e){if(e.target.cfg.nodeId!==p){var n=e.target.cfg.index;t.getAllAnchorBg()[n]&&t.getAllAnchorBg()[n].attr("fillOpacity",.7)}})),e.on("dragleave",(function(e){if(e.target.cfg.nodeId!==p){var n=e.target.cfg.index;t.getAllAnchorBg()[n]&&t.getAllAnchorBg()[n].attr("fillOpacity",.5)}}))}(h,t,e),t.anchorShapes.push(l),t.anchorShapes.push(h)})),t.getAllAnchors=function(){return t.anchorShapes.filter((function(e){return!0===e.get("isAnchor")}))},t.getAnchor=function(e){return t.anchorShapes.filter((function(t){return"node-anchor"===t.get("className")&&t.get("index")===e}))},t.getAllAnchorBg=function(){return t.anchorShapes.filter((function(e){return"node-anchor-bg"===e.get("className")}))}},addLabel:function(e,t){var n=t.getFirst().attr(),a=n.label,o=n.labelCfg;t.addShape("text",{attrs:y({x:0,y:0,text:a||""},o),className:"node-text",draggable:!0})},draw:function(e,t){var n=this.getShapeStyle(e,t),a=t.addShape(this.shapeType,{className:"".concat(this.shapeType,"-shape"),draggable:!0,attrs:n});return t.getItem=function(e){return t.get("children").find((function(t){return t.get("className")===e}))},this.addLabel(e,t),this.drawIcon(e,t),this.initAnchor(e,t),a},update:function(e,t){var n=t.get("model"),a=t.get("keyShape").attrs,o=t.get("group").getItem("node-text"),i=t.get("group").get("children")[0];setTimeout((function(){o&&o.attr({text:n.label,labelCfg:a.labelCfg}),i.attr(y(y({},a),n.style))}))},setState:function(e,t,n){var a=n.getContainer();["anchorShow","anchorActived","nodeState","nodeState:default","nodeState:selected","nodeState:hover","nodeOnDragStart","nodeOnDrag","nodeOnDragEnd"].includes(e)&&g[e].call(this,t,a)},getAnchorPoints:function(e){return e.anchorPoints||[[.5,0],[1,.5],[.5,1],[0,.5]]}},"single-node")};function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t){var n=Object.assign({},this.getShapeStyle(e),S({},e.edgeStateStyles));return t.addShape("path",{className:"edge-shape",name:"edge-shape",attrs:n})}function w(e,t,n){var a=n.getContainer();["edgeState","edgeState:default","edgeState:selected","edgeState:hover"].includes(e)&&g[e].call(this,t,a)}function x(e){if(!this.running){this.running=!0;var t=e.get("children")[0],n=t.get("endArrowShape"),a=n?Math.max(n.get("bbox").width,n.get("bbox").height):0,o=t.getPoint(0),i=t.getTotalLength(),r=Math.floor(i/100)||1;if(!(i<=40))for(var s=0;s<r;s++){var c=setTimeout((function(){var n=e.addShape("circle",{attrs:{x:o.x,y:o.y,fill:"#1890ff",r:2},className:"edge-runner",name:"edge-runner"});n.animate((function(e){var o=t.getPoint(e),r=i-i*e>=a?1:0;return n.set("hasChanged",!1),S(S({},o),{},{opacity:r})}),{duration:i>=100?3*i:5*i,repeat:!0})}),s*i);this.runners.push(c)}}}function C(e){var t=[];e.get("children").forEach((function(e){"edge-runner"===e.get("className")&&(e.stopAnimate(),t.push(e))})),t.forEach((function(e){return e.remove()})),this.runners.forEach((function(e){clearTimeout(e)})),this.running=!1}var k=function(e){["line","polyline","quadratic","cubic","arc"].forEach((function(t){!function(e,t){e.registerEdge("".concat(t,"-edge"),{running:!1,runners:[],drawShape:O,setState:w,runAnimate:x,stopAnimate:C},t)}(e,t)}))};function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j={width:20,height:20,left:0,top:0},_={fill:"#E7F7FE",stroke:"#1890FF",lineWidth:1},E={r:4,fill:"#fff",stroke:"#1890FF",lineWidth:1},D={cursor:"default",fill:"#666",textAlign:"center",textBaseline:"middle",fontSize:12};function F(e,t){return P(P(P(P(P(P({},t),_),e),t.style),{},{labelCfg:P(P({},D),t.labelCfg),iconStyles:P(P({},j),t.iconStyles),anchorPointStyles:P(P({},E),t.anchorPointStyles)},t.nodeStateStyles),{},{anchorHotsoptStyles:t.anchorHotsoptStyles})}var M=function(e){m(e),function(e){e.registerNode("rect-node",{shapeType:"rect",getShapeStyle:function(e){var t=e.style.width||80,n=e.style.height||40;return F.call(this,{width:t,height:n,radius:5,x:-t/2,y:-n/2},e)}},"base-node"),e.registerNode("circle-node",{shapeType:"circle",getShapeStyle:function(e){var t=e.style.r||30;return F.call(this,{r:t,x:0,y:0},e)}},"base-node"),e.registerNode("ellipse-node",{shapeType:"ellipse",getShapeStyle:function(e){return F.call(this,{rx:50,ry:30,x:0,y:0},e)}},"base-node"),e.registerNode("diamond-node",{shapeType:"path",getShapeStyle:function(e){var t=this.getPath(e);return F.call(this,{path:t,x:0,y:0},e)},getPath:function(e){var t=e.style.size||[100,100],n=t[0],a=t[1];return[["M",0,-a/2],["L",n/2,0],["L",0,a/2],["L",-n/2,0],["Z"]]}},"base-node"),e.registerNode("triangle-node",{shapeType:"path",getShapeStyle:function(e){var t=this.getPath(e);return F.call(this,{direction:e.direction||"up",path:t,x:0,y:0},e)},getPath:function(e){var t=e.direction||"up",n=e.style.size||[60,100],a=n[0],o=n[1],i=[["Z"]];return"up"===t?i.unshift(["M",0,-o/2],["L",-a/2,0],["L",a/2,0]):i.unshift(["M",0,o/2],["L",-a/2,0],["L",a/2,0]),i},getAnchorPoints:function(e){return e.anchorPoints||[[.5,0],[0,1],[1,1]]}},"base-node")}(e),k(e)};function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=function(e){!function(e){e.registerBehavior("canvas-event",{getDefaultCfg:function(){return{originOffset:[],offset:[]}},getEvents:function(){return{"canvas:mousemove":"onCanvasMouseMove","canvas:mousedown":"onCanvasMouseDown","canvas:mouseup":"onCanvasMouseUp","canvas:dragstart":"onCanvasDragStart","canvas:dragend":"onCanvasDragEnd"}},onCanvasMouseMove:function(e){e.target.get("el").style.cursor="grab"},onCanvasMouseDown:function(e){e.target.get("el").style.cursor="grabbing"},onCanvasMouseUp:function(e){e.target.get("el").style.cursor="grab"},onCanvasDragStart:function(e){var t=e.target.cfg.el,n=+t.getAttribute("dx"),a=+t.getAttribute("dy");this.originOffset=[n,a],this.offset=[e.clientX,e.clientY]},onCanvasDragEnd:function(e){e.target.get("el").style.cursor="grab";var t=e.target.cfg.el,n=this.originOffset[0]+e.clientX-this.offset[0],a=this.originOffset[1]+e.clientY-this.offset[1];t.setAttribute("dx",n),t.setAttribute("dy",a),this.graph.emit("on-canvas-dragend",B(B({},e),{},{dx:n,dy:a}))}})}(e),function(e){e.registerBehavior("select-node",{getDefaultCfg:function(){return{multiple:!1}},getEvents:function(){return{"node:click":"onNodeClick","node:dblclick":"ondblClick","canvas:click":"onCanvasClick","node:mouseenter":"onNodeMouseEnter","node:mousemove":"onNodeMouseMove","node:mouseleave":"onNodeMouseLeave"}},onNodeClick:function(e){this._clearSelected(),e.item.toFront(),e.item.setState("nodeState","selected"),this.graph.emit("after-node-selected",e)},ondblClick:function(e){this._clearSelected(),e.item.toFront(),e.item.setState("nodeState","selected"),this.graph.emit("after-node-dblclick",e)},onCanvasClick:function(e){this._clearSelected(),this.graph.emit("on-canvas-click",e)},onNodeMouseEnter:function(e){e.item.hasState("nodeState:selected")||e.item.setState("nodeState","hover"),this.graph.emit("on-node-mouseenter",e)},onNodeMouseMove:function(e){this.graph.emit("on-node-mousemove",e)},onNodeMouseLeave:function(e){e.item.hasState("nodeState:selected")||e.item.clearStates("nodeState:hover"),this.graph.emit("on-node-mouseleave",e)},_clearSelected:function(){this.graph.findAllByState("node","nodeState:selected").forEach((function(e){e.clearStates(["nodeState:selected","nodeState:hover"])})),this.graph.findAllByState("edge","edgeState:selected").forEach((function(e){e.clearStates(["edgeState:selected","edgeState:hover"])})),this.graph.emit("after-node-selected")}})}(e),function(e){e.registerBehavior("delete-item",{getEvents:function(){return{keydown:"onKeydown"}},onKeydown:function(e){var t=this.graph;if("true"===t.cfg.canvas.cfg.el.getAttribute("isFocused")&&8===e.keyCode){var n=t.findAllByState("node","nodeState:selected");if(n&&n.length){var a=n[0].getContainer().get("item");t.emit("before-node-removed",{target:a,callback:function(e){e&&(t.remove(a),t.set("after-node-selected",[]),t.emit("after-node-selected"),t.emit("after-node-removed",a))}})}var o=t.findAllByState("edge","edgeState:selected");if(o&&o.length){var i=o[0].getContainer().get("item");t.emit("before-node-removed",{target:i,callback:function(e){e&&(t.remove(i),t.set("after-edge-selected",[]),t.emit("after-edge-selected"),t.emit("after-edge-removed",i))}})}}}})}(e),function(e){e.registerBehavior("active-edge",{getDefaultCfg:function(){return{}},getEvents:function(){return{"canvas:click":"onCanvasClick","edge:click":"onEdgeClick","edge:dblclick":"ondblEdgeClick","edge:mouseenter":"onMouseEnter","edge:mousemove":"onMouseMove","edge:mouseleave":"onMouseLeave"}},onCanvasClick:function(e){this._clearSelected()},onEdgeClick:function(e){this._clearSelected(),e.item.setState("edgeState","selected"),this.graph.emit("after-edge-selected",e)},ondblEdgeClick:function(e){this._clearSelected(),e.item.setState("edgeState","selected"),this.graph.emit("after-edge-dblclick",e)},onMouseEnter:function(e){e.item.hasState("edgeState:hover")||e.item.hasState("edgeState:selected")||e.item.setState("edgeState","hover"),this.graph.emit("on-edge-mouseenter",e)},onMouseMove:function(e){this.graph.emit("on-edge-mousemove",e)},onMouseLeave:function(e){e.item.hasState("edgeState:selected")||e.item.setState("edgeState","default"),this.graph.emit("on-edge-mouseleave",e)},_clearSelected:function(){this.graph.findAllByState("node","nodeState:selected").forEach((function(e){e.clearStates("nodeState:selected")})),this.graph.findAllByState("edge","edgeState:selected").forEach((function(e){e.clearStates("edgeState:selected")})),this.graph.emit("after-edge-selected")}})}(e),function(e){e.registerBehavior("hover-node",{getEvents:function(){return{"node:mouseenter":"onNodeEnter","node:mouseleave":"onNodeLeave"}},onNodeEnter:function(e){e.item.setState("anchorShow",!0)},onNodeLeave:function(e){e.item.setState("anchorShow",!1)}})}(e),function(e){e.registerBehavior("drag-node",{getDefaultCfg:function(){return{sourceAnchorIndex:0,dragTarget:"node",dragStartNode:{},distance:[]}},getEvents:function(){return{"node:mousedown":"onMousedown","node:mouseup":"onMouseup","node:dragstart":"onDragStart","node:drag":"onDrag","node:dragend":"onDragEnd","node:drop":"onDrop"}},onMousedown:function(e){(this._clearSelected(e),e.target.cfg.isAnchor)&&(this.dragTarget="anchor",this.dragStartNode=L(L({},e.item._cfg),{},{anchorIndex:e.target.cfg.index}),this.graph.findAll("node",(function(e){return e})).forEach((function(e){e.setState("anchorActived",!0)})));this.graph.emit("on-node-mousedown",e)},onMouseup:function(e){"anchor"===this.dragTarget&&this.graph.findAll("node",(function(e){return e})).forEach((function(e){e.clearStates("anchorActived")}));this.graph.emit("on-node-mouseup",e)},onDragStart:function(e){e.target.get("isAnchor")?this.sourceAnchorIndex=e.target.get("index"):(e.item.toFront(),this.dragTarget="node",this._nodeOnDragStart(e,e.item.getContainer())),this.graph.emit("on-node-dragstart",e)},onDrag:function(e){"node"===this.dragTarget&&this._nodeOnDrag(e,e.item.getContainer()),this.graph.emit("on-node-drag",e)},onDragEnd:function(e){var t=e.item.getContainer();"anchor"===this.dragTarget?this.graph.findAll("node",(function(e){return e})).forEach((function(e){e.clearStates("anchorActived")})):"node"===this.dragTarget&&this._nodeOnDragEnd(e,t);this.graph.emit("on-node-dragend",e)},onDrop:function(e){var t=this;if(this.dragStartNode.id&&e.target.cfg.isAnchor&&this.dragStartNode.id!==e.target.cfg.nodeId){var n=this.dragStartNode.group.get("item"),a=e.target.get("index");n.getOutEdges().find((function(e){if(e.get("sourceAnchorIndex")===t.sourceAnchorIndex&&e.get("targetAnchorIndex")===a)return!0}))||this.graph.emit("before-edge-add",{source:n,target:e.item.getContainer().get("item"),sourceAnchor:this.dragStartNode.anchorIndex,targetAnchor:e.target.cfg.index})}this.graph.emit("on-node-drop",e)},_nodeOnDragStart:function(e,t){var n=t.get("item"),a=n.get("originStyle").radius,o=n.get("currentShape"),i=n.getBBox(),r=i.width,s=i.height,c=i.centerX,d=i.centerY,l=n.get("shapeFactory")[o].shapeType,h={fillOpacity:.1,fill:"#1890FF",stroke:"#1890FF",cursor:"move",lineDash:[4,4],width:r,height:s};switch(l){case"circle":this.distance=[e.x-c,e.y-d],h=L(L({},h),{},{x:0,y:0,r:r/2});break;case"rect":this.distance=[e.x-c+r/2,e.y-d+s/2],h=L(L({},h),{},{x:-r/2,y:-s/2,r:r/2}),a&&(h.radius=a);break;case"ellipse":this.distance=[e.x-c,e.y-d],h=L(L({},h),{},{x:0,y:0,rx:r/2,ry:s/2});break;case"path":this.distance=[e.x-c,e.y-d],h.path=n.get("keyShape").attrs.path,h.size=[r,s],h.x=0,h.y=0}t.addShape(l,{className:"shadow-node",attrs:h}).toFront()},_nodeOnDrag:function(e,t){var n=t.get("item"),a=t.getFirst(),o=n.getBBox(),i=o.width,r=o.height,s=o.centerX,c=o.centerY,d=n.get("currentShape"),l=n.get("shapeFactory")[d].shapeType,h=t.getItem("shadow-node");if("path"===l){var g=a.get("attrs"),f=g.type,u=g.direction,p=e.x-s-this.distance[0],v=e.y-c-this.distance[1],y=[["Z"]];switch(f){case"diamond-node":y.unshift(["M",p,v-r/2],["L",p+i/2,v],["L",p,v+r/2],["L",p-i/2,v]);break;case"triangle-node":y.unshift(["L",p+i/2,v],["L",p-i/2,v]),"up"===u?y.unshift(["M",p,v-r]):y.unshift(["M",p,v+r])}h.attr({path:y})}else h.attr({x:e.x-s-this.distance[0],y:e.y-c-this.distance[1]});h.toFront()},_nodeOnDragEnd:function(e,t){var n=t.get("item"),a=n.getBBox(),o=a.width,i=a.height,r=t.getItem("shadow-node"),s=n.get("currentShape"),c=n.get("shapeFactory")[s].shapeType,d=t.getFirst().get("attrs"),l=d.type,h=d.direction,g={x:0,y:0};switch(c){case"ellipse":case"circle":g.x=e.x-this.distance[0],g.y=e.y-this.distance[1];break;case"rect":g.x=e.x-this.distance[0]+o/2,g.y=e.y-this.distance[1]+i/2;break;case"path":g.x=e.x-this.distance[0],g.y=e.y-this.distance[1],"triangle-node"===l&&("up"===h?g.y+=i/2:g.y-=i/2)}r.remove(),n.updatePosition(g),this.graph.refreshPositions()},_clearSelected:function(e){this.graph.findAllByState("edge","edgeState:selected").forEach((function(e){e.clearStates(["edgeState:selected","edgeState:hover"])}))}})}(e)},z=function(e){M(e),T(e)},V=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(a.a)(this,e),t.registerFactory&&(z(i.a),this.init(t))}return Object(o.a)(e,[{key:"init",value:function(e){var t=Object.assign({container:"canvasPanel",width:window.innerWidth,height:window.innerHeight,fitViewPadding:20,animate:!0,animateCfg:{duration:500,easing:"linearEasing"},layout:{type:"dagre",nodesep:30,ranksep:30},modes:{default:["drag-canvas","canvas-event","delete-item","select-node","hover-node","drag-node","active-edge"]},defaultNode:{type:"rect-node",style:{radius:10}},defaultEdge:{type:"polyline-edge",style:{radius:6,offset:15,stroke:"#aab7c3",lineAppendWidth:10,endArrow:{path:"M 0,0 L 8,4 L 7,0 L 8,-4 Z",fill:"#aab7c3"}}},nodeStateStyles:{"nodeState:default":{fill:"#E7F7FE",stroke:"#1890FF"},"nodeState:hover":{fill:"#d5f1fd"},"nodeState:selected":{fill:"#caebf9",stroke:"#1890FF"}},edgeStateStyles:{"edgeState:default":{stroke:"#aab7c3"},"edgeState:selected":{stroke:"#1890FF"},"edgeState:hover":{stroke:"#1890FF"}}},e);delete t.registerFactory;var n=e.registerFactory(i.a,t);if(n){this.instance=n;var a=this.instance.cfg.canvas.cfg.el;a.id="".concat(t.container,"-canvas"),a.setAttribute("dx",0),a.setAttribute("dy",0),document.addEventListener("click",(function(e){a.setAttribute("isFocused",e.target.id===a.id)}))}}},{key:"destroy",value:function(){this.instance.destroy(),this.instance=null}}]),e}();t.a=V}}]);