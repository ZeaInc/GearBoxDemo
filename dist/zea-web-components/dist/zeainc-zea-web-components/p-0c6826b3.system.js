System.register(["./p-6ab71ff6.system.js","./p-df24b8bd.system.js","./p-d59836f6.system.js"],(function(e){"use strict";var t,r,i,a,n,s;return{setters:[function(e){t=e.r;r=e.h},function(e){i=e.E;a=e.N;n=e.Z},function(e){s=e.u}],execute:function(){var o=":host,input,button,select,textarea{font-family:'Roboto', sans-serif}.zea-param-widget-number{color:var(--color-foreground-1);background-color:var(--color-background-2);max-width:400px}.user-edited{-webkit-box-shadow:0 0 8px var(--color-success-1);box-shadow:0 0 8px var(--color-success-1);margin:0px}.zea-param-widget-number input{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--color-foreground-1);background-color:var(--color-background-3)}input[type='number']{padding:0.3em;font-size:0.9em;border:1px solid var(--color-grey-3);text-align:right}";var u=e("Z",function(){function e(e){t(this,e);this.inputChanged=this.inputChanged.bind(this)}e.prototype.parameterChangeHandler=function(){this.setUpInput()};e.prototype.componentDidLoad=function(){if(this.parameter){this.setUpInput()}};e.prototype.setUpInput=function(){var e=this;this.range=this.parameter.getRange();this.step=this.parameter.getStep();this.setInputValue();this.parameter.on("valueChanged",(function(t){console.log("value changed");e.setInputValue();if(t.mode==i.REMOTEUSER_SETVALUE){e.inputField.classList.add("user-edited");if(e.remoteUserEditedHighlightId)clearTimeout(e.remoteUserEditedHighlightId);e.remoteUserEditedHighlightId=setTimeout((function(){e.inputField.classList.remove("user-edited");e.remoteUserEditedHighlightId=null}),1500)}}))};e.prototype.setInputValue=function(){if(this.range){this.value=(this.parameter.getValue()-this.range[0])/(this.range[1]-this.range[0])*200}else{this.value=this.parameter.getValue()}};e.prototype.inputChanged=function(){var e=this.round(this.inputField.valueAsNumber);if(this.range){e=this.range[0]+e/200*(this.range[1]-this.range[0]);e=this.clamp(e,this.range[0],this.range[1])}if(this.appData.undoRedoManager){var t=new a(this.parameter,e);this.appData.undoRedoManager.addChange(t)}else{this.parameter.setValue(e)}};e.prototype.round=function(e,t){if(t===void 0){t=6}return Number(Math.round(Number(e+"e"+t))+"e-"+t)};e.prototype.clamp=function(e,t,r){return Math.max(Math.min(e,Math.max(t,r)),Math.min(t,r))};e.prototype.render=function(){var e=this;if(this.range){return r("div",{class:"zea-param-widget-number"},r("input",{onChange:this.inputChanged,ref:function(t){return e.inputField=t},class:"mdl-slider mdl-js-slider",type:"range",min:"0",max:"200",step:this.step?this.step:1,id:this.parameter.getName(),value:this.value,tabindex:"0"}))}return r("div",{class:"zea-param-widget-number"},r("input",{onChange:this.inputChanged,ref:function(t){return e.inputField=t},type:"number",pattern:"-?[0-9]*(.[0-9]+)?",id:this.parameter.getName(),value:this.value,tabindex:"0"}))};Object.defineProperty(e,"watchers",{get:function(){return{parameter:["parameterChangeHandler"]}},enumerable:true,configurable:true});return e}());s.registerWidget("zea-param-widget-number",(function(e){return e.constructor.name==n.name}));u.style=o}}}));