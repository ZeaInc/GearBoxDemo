var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,o=arguments.length;t<o;t++)e+=arguments[t].length;for(var i=Array(e),r=0,t=0;t<o;t++)for(var n=arguments[t],s=0,a=n.length;s<a;s++,r++)i[r]=n[s];return i};System.register(["./p-6ab71ff6.system.js"],(function(e){"use strict";var t,o,i,r;return{setters:[function(e){t=e.r;o=e.h;i=e.d;r=e.c}],execute:function(){var n=".zea-dialog-share{color:var(--color-freground-1)}.scrollpane-container{width:100%;height:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}";var s=e("zea_dialog_share",function(){function e(e){t(this,e);this.shown=false}e.prototype.dialogCloseHandler=function(e){if(e.detail==this.dialog)this.shown=false};e.prototype.render=function(){var e=this;return o("zea-dialog",{ref:function(t){return e.dialog=t},width:"fit-content",class:"share-dialog",shown:this.shown},o("div",{slot:"title"},"Share"),o("div",{slot:"body"},o("div",{class:"scrollpane-container"},o("zea-scroll-pane",null,o("zea-tabs",{orientation:"horizontal",density:"small"},o("div",{slot:"tab-bar"},"Share Link"),o("div",null,o("zea-qr-code",{scale:4}),o("zea-copy-link",null)),o("div",{slot:"tab-bar"},"Send SMS"),o("div",null,"Tab Content 2"),o("div",{slot:"tab-bar"},"Send Email"),o("div",null,"Tab Content 3"))))))};return e}());s.style=n;var a=":host,input,button,select,textarea{font-family:'Roboto', sans-serif}.zea-input-search{color:var(--color-foreground-1);display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;width:2em;border-radius:3px;-webkit-transition:all 0.5s;transition:all 0.5s;background-color:transparent;border:1px solid transparent}path.icon{fill:var(--color-foreground-1)}.zea-input-search.active{width:100%;border:1px solid var(--color-grey-3);background-color:var(--color-background-1)}.zea-input-search-icon{height:2em;width:2em;display:inline-block;vertical-align:middle;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0.2em;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0}.zea-input-search-icon:hover{background-color:var(--color-primary-3);color:var(--color-button-text-1)}.zea-input-search.active .zea-input-search-icon:hover{background-color:var(--color-background-1)}input{display:block;height:100%;width:100%;border:none;background-color:transparent;outline:none;font-size:1em;color:var(--color-foreground-1)}.zea-input-search-text-container{height:2em;-ms-flex-positive:1;flex-grow:1;opacity:0;-webkit-transition:all 0.5s;transition:all 0.5s}.zea-input-search.active .zea-input-search-text-container{opacity:1}";var l=e("zea_input_search",function(){function e(e){t(this,e);this.placeholder=""}e.prototype.toggleSearchBox=function(){this.mainContainer.classList.toggle("active");this.mainInput.focus()};e.prototype.render=function(){var e=this;return o("div",{class:"zea-input-search",ref:function(t){e.mainContainer=t}},o("span",{class:"zea-input-search-icon",onClick:function(){e.toggleSearchBox()}},o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 24 24"},o("path",{class:"icon",d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),o("path",{d:"M0 0h24v24H0z",fill:"none"}))),o("span",{class:"zea-input-search-text-container"},o("input",{ref:function(t){e.mainInput=t},onBlur:function(){e.mainContainer.classList.remove("active")},onKeyDown:function(e){e.stopPropagation()},onKeyUp:function(e){e.stopPropagation()},class:"zea-input-search-text",type:"text",placeholder:this.placeholder})))};Object.defineProperty(e.prototype,"mainElement",{get:function(){return i(this)},enumerable:true,configurable:true});return e}());l.style=a;var c=":host{height:100%}:host,input,button,select,textarea{font-family:'Roboto', sans-serif}.zea-layout{color:var(--color-foreground-1);display:-ms-flexbox;display:flex;width:100%;height:100%}.zea-layout.vertical{-ms-flex-direction:column;flex-direction:column}.zea-layout-cell{-ms-flex-positive:1;flex-grow:1;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--color-background-1);width:100%;height:100%}.with-borders .zea-layout-cell{border:1px solid var(--color-grey-1)}.zea-layout-cell:nth-child(1){-ms-flex-positive:0;flex-grow:0;width:100px;height:auto}.zea-layout-cell:nth-child(3){-ms-flex-positive:0;flex-grow:0;width:100px;height:auto}.vertical .zea-layout-cell:nth-child(1){-ms-flex-positive:0;flex-grow:0;height:100px;width:auto}.vertical .zea-layout-cell:nth-child(3){-ms-flex-positive:0;flex-grow:0;height:100px;width:auto}.zea-resize-handle{position:absolute;display:block;content:'';width:6px;height:100%;background-color:transparent;background-repeat:no-repeat;background-position:center center;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAXCAYAAAAoRj52AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEFJREFUeNpinDRp0v+XL18yLF26lFFMTIwhJiYGzGf6/fs3w58/fxhgAMZnYsABRiWGrwQLCwsDMzMzXADGBwgwAF78GJLqRabNAAAAAElFTkSuQmCC);z-index:1000000;top:0;opacity:0.5;cursor:col-resize}.zea-resize-handle:hover{background-color:var(--color-background-2);opacity:1}.vertical .zea-resize-handle{left:0 !important;right:0 !important;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAGCAYAAAAooAWeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD1JREFUeNpinDhx4v8/f/4wUBuwsrIysLx8+ZLh79+/VDechYWFgVFBQYGBVoBFTEyMdoZHR0cPzTAHCDAAG7UW+bsxwNcAAAAASUVORK5CYII=')}.zea-layout-cell:nth-child(1) .zea-resize-handle{right:-1px}.zea-layout-cell:nth-child(3) .zea-resize-handle{left:-1px}.vertical .zea-resize-handle{position:absolute;width:100%;height:6px;cursor:row-resize;margin-left:0;left:0;background-repeat:no-repeat}.vertical .zea-layout-cell:nth-child(1) .zea-resize-handle{bottom:-1px;top:auto}.vertical .zea-layout-cell:nth-child(3) .zea-resize-handle{top:-1px}";var h=e("zea_layout",function(){function e(e){t(this,e);this.cellCount=3;this.orientation="horizontal";this.resizeCellA=true;this.resizeCellC=true;this.cellASize=100;this.cellCSize=100;this.resizeInterval=50;this.showBorders=true;this.error="";this.minimumGap=20;this.maximunGap=50}e.prototype.onHandleMouseDown=function(e){this.activeHandle=e.target;document.getElementsByTagName("body")[0].style.cursor=this.orientation==="vertical"?"row-resize":"col-resize";document.getElementsByTagName("body")[0].style.userSelect="none"};e.prototype.onHandleMouseUp=function(){this.activeHandle=null;document.getElementsByTagName("body")[0].style.cursor="default";document.getElementsByTagName("body")[0].style.userSelect="initial"};e.prototype.mouseMoveHandler=function(e){if(this.activeHandle){var t=this.activeHandle.classList.contains("zea-handle-a");if(this.orientation==="vertical"){if(t){this.processDrag(e,"Y","a")}else{this.processDrag(e,"Y","c")}}else{if(t){this.processDrag(e,"X","a")}else{this.processDrag(e,"X","c")}}}};e.prototype.processDrag=function(e,t,o){var i=this.activeHandle;var r=i.parentElement;var n=r.getBoundingClientRect();var s=i.getBoundingClientRect();var a=this.cellB.getBoundingClientRect();var l=t=="X"?"left":"top";var c=t=="X"?"width":"height";var h=a[c];var u=s[l]-e["client"+t];u=o=="a"?-u:u;var d=n[c]+u;r.style[c]=d+"px";if(d<this.minimumGap){d=this.minimumGap}var p=n[c]+h-this.minimumGap;if(d>p){d=p}var f=o=="a"?"cellASize":"cellCSize";this[f]=d;r.style[c]=d+"px";this.triggerResize(d)};e.prototype.triggerResize=function(e){window.dispatchEvent(new CustomEvent("resize",{bubbles:true,detail:e}))};e.prototype.layout=function(){var e;var t;if(this.orientation==="vertical"){e="height";t=this.layoutContainer.clientHeight}else{e="width";t=this.layoutContainer.clientWidth}var o=t-this.cellASize-this.cellCSize;this.cellA.style[e]=this.cellASize+"px";this.cellB.style[e]=o+"px";this.cellC.style[e]=this.cellCSize+"px"};e.prototype.componentDidLoad=function(){var e=this;this.mainElement.addEventListener("dragstart",(function(e){e.preventDefault();e.stopPropagation()}));window.addEventListener("resize",(function(){e.layout()}))};e.prototype.componentDidRender=function(){this.layout()};e.prototype.render=function(){var e=this;var t={};var i={};if(!this.cellASize){this.resizeCellA=false}if(!this.cellCSize){this.resizeCellC=false}if(this.cellASize!==undefined){if(this.orientation==="vertical"){t.height=this.cellASize+"px"}else{t.width=this.cellASize+"px"}}if(this.cellCSize!==undefined){if(this.orientation==="vertical"){i.height=this.cellCSize+"px"}else{i.width=this.cellCSize+"px"}}var r=o("div",{class:"zea-layout-cell cell-a",style:t,ref:function(t){return e.cellA=t}},this.resizeCellA&&o("div",{class:"zea-resize-handle zea-handle-a",onMouseDown:this.onHandleMouseDown.bind(this)}),o("slot",{name:"a"}));var n=o("div",{class:"zea-layout-cell cell-b",ref:function(t){return e.cellB=t}},o("slot",{name:"b"}));var s=this.cellCount>2&&o("div",{class:"zea-layout-cell cell-c",style:i,ref:function(t){return e.cellC=t}},this.resizeCellC&&o("div",{class:"zea-resize-handle zea-handle-c",onMouseDown:this.onHandleMouseDown.bind(this)}),o("slot",{name:"c"}));return o("div",{ref:function(t){return e.layoutContainer=t},class:"zea-layout "+this.orientation+" "+(this.showBorders?"with-borders":"")},this.error||[r,n,s])};Object.defineProperty(e.prototype,"mainElement",{get:function(){return i(this)},enumerable:true,configurable:true});return e}());h.style=c;var u=":host,input,button,select,textarea{font-family:'Roboto', sans-serif}.zea-navigation-drawer{color:var(--color-foreground-1);display:inline-block;vertical-align:middle}.drawer{position:fixed;top:0;left:0;-webkit-transform:translateX(-100%);transform:translateX(-100%);width:192px;height:100vh;background-color:var(--color-background-1);z-index:10000000;-webkit-transition:-webkit-transform 0.3s;transition:-webkit-transform 0.3s;transition:transform 0.3s;transition:transform 0.3s, -webkit-transform 0.3s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}.shown .drawer{left:0;-webkit-transform:translateX(0);transform:translateX(0)}.toggle{position:relative;z-index:10000010;margin-right:12px;margin-left:7px;background-color:transparent;border-radius:50%;padding:4px;display:inline-block}.toggle:hover{background-color:var(--color-grey-3)}.drawer-content{padding-top:80px;padding-left:9px;font-size:14px}@media only screen and (max-width: 667px){.drawer{width:80%}}";var d=e("zea_navigation_drawer",function(){function e(e){t(this,e);this.shown=false;this.navDrawerOpen=r(this,"navDrawerOpen",7);this.navDrawerClosed=r(this,"navDrawerClosed",7)}e.prototype.handleClick=function(e){if(!e.composedPath().includes(this.container)||!e.composedPath().includes(this.toggleButton)){this.shown=false;this.navDrawerClosed.emit(this)}};e.prototype.onToggleClick=function(){this.shown=!this.shown;if(this.shown){this.navDrawerOpen.emit(this)}else{this.navDrawerClosed.emit(this)}};e.prototype.render=function(){var e=this;return o("div",{ref:function(t){return e.container=t},class:{"zea-navigation-drawer":true,shown:this.shown}},o("div",{class:"drawer"},o("div",{class:"drawer-content"},o("slot",null))),o("div",{class:"toggle",ref:function(t){return e.toggleButton=t},onClick:this.onToggleClick.bind(this)},o("zea-icon",{size:30,name:"menu"})))};return e}());d.style=u;var p=".zea-panel-progress-bar{color:var(--color-freground-1);position:absolute;top:0;left:0;right:0;bottom:0;background-color:var(--color-shadow);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}";var f=e("zea_panel_progress_bar",function(){function e(e){t(this,e)}e.prototype.render=function(){var e=this;return o("div",{class:"zea-panel-progress-bar"},o("zea-dialog",{shown:true,allowClose:false,showTitle:false,fullScreenMobile:false,width:"300px"},o("div",{slot:"body"},o("slot",null),o("zea-progress-bar",{ref:function(t){return e.progressBar=t},type:"indeterminate"}))))};return e}());f.style=p;var g=":host,input,button,select,textarea{font-family:'Roboto', sans-serif}.zea-chip-set{color:var(--color-foreground-1);display:-ms-flexbox;display:flex;position:relative}zea-user-chip{margin-left:-8px;width:36px;height:36px;border:1px solid transparent;border-radius:19px}.overflow-thumb{border:2px solid var(--color-background-3);background-color:var(--color-background-3);width:36px;height:36px;color:var(--color-foreground-2);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:relative;font-size:13px;margin-left:-8px;border-radius:19px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.overflow-tooltip{position:absolute;top:35px;padding:4px 7px;border-radius:4px;font-size:12px;color:var(--color-foreground-1);background-color:var(--color-grey-3);z-index:10000;white-space:nowrap;display:none}.overflow-thumb:hover .overflow-tooltip{display:block}.overflow-list{max-height:calc(100vh - 60px);width:-webkit-min-content;width:-moz-min-content;width:min-content;overflow-y:auto;background-color:var(--color-background-2);display:none}.overflow-list.shown{display:block;position:absolute}.overflow-list zea-user-card{display:block;}.overflow-entry{display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch}.overflow-entry-collapser{padding-left:8px;padding-top:14px;padding-right:8px}";var v=e("zea_user_chip_set",function(){function e(e){t(this,e);this.showImages=true;this.initialZIndex=1e3;this.overflowLimit=5;this.overflowShown=false;this.shownOverflowEntry=null}e.prototype.sessionChanged=function(){this.setupSession()};e.prototype.componentWillLoad=function(){var e=this;setTimeout((function(){e.setupSession()}),500)};e.prototype.setupSession=function(){var e=this;if(this.session&&"sub"in this.session){var t=[];for(var o in this.session.users){if(this.session.users.hasOwnProperty(o)){t.push(this.session.users[o])}}this.userDatas=t;this.session.sub("user-joined",(function(t){if(!e.userDatas.find((function(e){return e.id==t.id}))){e.userDatas=__spreadArrays([t],e.userDatas)}}));this.session.sub("user-left",(function(t){var o=e.userDatas.findIndex((function(e){return e.id==t.id}));if(o==-1){console.warn("User id not in session:",t.id);return}var i=__spreadArrays(e.userDatas);i.splice(o,1);e.userDatas=i}));this.session.sub("userChanged",(function(t){e.session.users[t.id]=t;var o=[];for(var i in e.session.users){if(e.session.users.hasOwnProperty(i)){o.push(e.session.users[i])}}e.userDatas=o}))}else{this.userDatas=[]}};e.prototype.onChipClick=function(e){e.stopPropagation()};e.prototype.render=function(){var e=this;if(!this.userDatas)return;var t=this.userDatas.slice(0,this.overflowLimit);var i=this.userDatas.slice(this.overflowLimit);return o("div",{class:"zea-chip-set"},t&&t.map((function(t){return o("zea-user-chip",{showImages:e.showImages,key:t.id,userData:t,onClick:e.onChipClick.bind(e)})})),i.length>0&&o("div",{class:"overflow"},o("div",{class:"overflow-thumb",onClick:function(t){e.overflowShown=!e.overflowShown;t.stopPropagation()}},["+"+(this.userDatas.length-this.overflowLimit),!this.overflowShown&&o("div",{class:"overflow-tooltip"},"Show All")]),o("div",{class:{"overflow-list":true,shown:this.overflowShown}},i.map((function(t){return o("div",{key:t.id,class:{"overflow-entry":true,shown:e.shownOverflowEntry==t.id}},o("div",{class:"overflow-entry-collapser",onClick:function(o){e.shownOverflowEntry=e.shownOverflowEntry==t.id?null:t.id;o.currentTarget.scrollIntoView()}},o("zea-icon",{name:e.shownOverflowEntry==t.id?"chevron-up-outline":"chevron-down-outline",size:14})),o("zea-user-card",{userData:t,collapsible:false,density:e.shownOverflowEntry==t.id?"normal":"small"}))})))))};Object.defineProperty(e,"watchers",{get:function(){return{session:["sessionChanged"]}},enumerable:true,configurable:true});return e}());v.style=g}}}));