System.register(["./p-6ab71ff6.system.js","./p-b9eed61c.system.js","./p-23c063d8.system.js","./p-05e839f8.system.js"],(function(e){"use strict";var i,t,n;return{setters:[function(e){i=e.r;t=e.h},function(){},function(){},function(e){n=e.Z}],execute:function(){var s=".zea-form-drawing-setup{color:var(--color-foreground-1);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;width:100%;overflow:hidden}.discipline-row{display:-ms-flexbox;display:flex;width:100%;-ms-flex-align:center;align-items:center}.discipline-row:hover{background-color:var(--color-grey-2)}.discipline-name{-ms-flex-positive:1;flex-grow:1}.discipline-abbreviation{text-transform:uppercase;padding:8px;width:15px;height:15px;line-height:15px;text-align:center;border-radius:20px;margin:5px 10px 5px 5px;white-space:nowrap;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.input-container{margin-bottom:1em}zea-input-select-item:hover{background-color:var(--color-grey-2)}.scale-row{padding:5px}.inputs{-ms-flex-positive:1;flex-grow:1;padding:1em}.buttons{display:-ms-flexbox;display:flex;padding:1em}.buttons zea-button{margin:5px}.buttons div:nth-child(1){-ms-flex-positive:1;flex-grow:1}";var l=e("zea_form_drawing_setup",function(){function e(e){i(this,e);this.disciplines=[];this.scales=[];this.db=new n}e.prototype.onDisciplinesSelect=function(e){console.log("value",e)};e.prototype.onScalesSelect=function(e){console.log("value",e)};e.prototype.componentWillLoad=function(){var e=this;this.db.getDocs({type:"disciplines",limit:100}).then((function(i){e.disciplines=i.docs}));this.scales=[{_id:"scale1",name:"1/32' = 1'0\""},{_id:"scale2",name:"1/16' = 1'0\""},{_id:"scale3",name:"1/8' = 1'0\""},{_id:"scale4",name:"1/4' = 1'0\""},{_id:"scale5",name:"3/8' = 1'0\""},{_id:"scale6",name:"1/32 = 1'0\""},{_id:"scale7",name:"1/32 = 1'0\""},{_id:"scale8",name:"1/32 = 1'0\""},{_id:"scale9",name:"1/32 = 1'0\""},{_id:"scale10",name:"1/32 = 1'0\""}]};e.prototype.render=function(){var e=this;return t("div",{class:"zea-form-drawing-setup"},t("div",{class:"inputs"},t("div",{class:"input-container"},t("zea-input-text",{ref:function(i){return e.drawingNumberInput=i},label:"Drawing Number",id:"drawing-number-input"})),t("div",{class:"input-container"},t("zea-input-text",{ref:function(i){return e.titleInput=i},label:"Title",id:"title-input"})),t("div",{class:"input-container"},t("zea-input-select",{selectCallback:this.onDisciplinesSelect.bind(this),label:"Discipline",id:"discipline-input"},this.disciplines.map((function(e){return t("zea-input-select-item",{value:e},t("div",{class:"discipline-row",id:e._id,key:e._id},t("div",{class:"discipline-abbreviation",style:{backgroundColor:e.color}},e.abbreviation),t("div",{class:"discipline-name"},e.name)))})))),t("div",{class:"input-container"},t("zea-input-select",{selectCallback:this.onScalesSelect.bind(this),label:"Scale",id:"scale-input"},this.scales.map((function(e){return t("zea-input-select-item",{value:e},t("div",{class:"select-item-wrap scale-row",id:e._id,key:e._id},t("div",{class:"scale-name"},e.name)))}))))),t("div",{class:"buttons"},t("div",null,t("zea-button",{density:"small"},"FINISHED ALL")),t("div",null,t("zea-button",{density:"small"},"PREVIOUS"),t("zea-button",{density:"small"},"NEXT"))))};return e}());l.style=s}}}));