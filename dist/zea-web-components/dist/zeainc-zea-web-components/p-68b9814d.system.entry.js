var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,i=arguments.length;t<i;t++)e+=arguments[t].length;for(var s=Array(e),r=0,t=0;t<i;t++)for(var n=arguments[t],l=0,a=n.length;l<a;l++,r++)s[r]=n[l];return s};System.register(["./p-6ab71ff6.system.js","./p-95ff8c2d.system.js","./p-29030769.system.js","./p-bd53c535.system.js","./p-df24b8bd.system.js"],(function(e){"use strict";var t,i,s,r,n;return{setters:[function(e){t=e.r;i=e.h;s=e.d},function(){},function(){},function(){},function(e){r=e.y;n=e.N}],execute:function(){var l=":host{display:block;font-size:14px}:host,input,button,select,textarea{font-family:'Roboto', sans-serif}.wrap{opacity:0.7;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.wrap.visible{opacity:1}.header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:4px 0;position:relative;left:-7px}.arrow{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;cursor:pointer;padding:2px}.label{white-space:nowrap}.toggle{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:1.2em;margin:0 1px 0 4px}.children{padding-left:19px;border-left:1px dotted gray}zea-tree-item-element{margin-left:16px}zea-tree-item-element.has-children{margin-left:0}.zea-tree-item-label{padding:3px 5px;border-radius:4px;border:1px solid transparent;margin-left:22px;white-space:nowrap}.is-tree-item .zea-tree-item-label{margin-left:0}.highlighted .zea-tree-item-label{background-color:var(\r\n    --treeview-highlight-bg-color,\r\n    var(--color-secondary-3)\r\n  );border:1px solid var(--treeview-highlight-color, var(--color-secondary-1))}.selected .zea-tree-item-label{background-color:var(--treeview-highlight-color, var(--color-secondary-1));border:1px solid var(--treeview-highlight-color, var(--color-secondary-1))}";var a=e("zea_tree_item_element",function(){function e(e){t(this,e);this.label="Loading...";this.isRoot=false;this.isTreeItem=false;this.isSelected=false;this.isVisible=false;this.isHighlighted=false;this.isExpanded=false;this.childItems=[]}e.prototype.treeItemChanged=function(){if(this.treeItem){this.initTreeItem()}};e.prototype.componentWillLoad=function(){if(this.treeItem){this.initTreeItem()}};e.prototype.componentDidLoad=function(){if(this.treeItem){this.updateSelected();this.updateVisibility();this.updateHighlight();if(this.childItems.length)this.rootElement.classList.add("has-children");else this.rootElement.classList.remove("has-children");this.treeItem.titleElement=this.rootElement}};e.prototype.initTreeItem=function(){var e=this;this.label=this.treeItem.getName();this.nameChangedId=this.treeItem.on("nameChanged",(function(){e.label=e.treeItem.getName()}));this.updateSelectedId=this.treeItem.on("selectedChanged",this.updateSelected.bind(this));if(typeof this.treeItem.getChildren==="function"){this.isTreeItem=true;this.childItems=__spreadArrays(this.treeItem.getChildren());this.childAddedId=this.treeItem.on("childAdded",(function(){e.childItems=__spreadArrays(e.treeItem.getChildren())}));this.childRemovedId=this.treeItem.on("childRemoved",(function(){e.childItems=__spreadArrays(e.treeItem.getChildren())}));this.updateVisibilityId=this.treeItem.on("visibilityChanged",this.updateVisibility.bind(this))}else{this.isTreeItem=false;this.isVisible=true}this.updateHighlightId=this.treeItem.on("highlightChanged",this.updateHighlight.bind(this))};e.prototype.updateSelected=function(){if(this.treeItem&&"getSelected"in this.treeItem)this.isSelected=this.treeItem.getSelected()};e.prototype.updateVisibility=function(){if(this.treeItem&&"getVisible"in this.treeItem){this.isVisible=this.treeItem.getVisible()}};e.prototype.updateHighlight=function(){if(this.treeItem&&"isHighlighted"in this.treeItem){this.isHighlighted=this.treeItem.isHighlighted();if(this.isHighlighted&&"getHighlight"in this.treeItem){var e=this.treeItem.getHighlight();var t=e.lerp(new r(.75,.75,.75,0),.5);this.itemContainer.style.setProperty("--treeview-highlight-bg-color",t.toHex()+"60");this.itemContainer.style.setProperty("--treeview-highlight-color",e.toHex())}}};e.prototype.toggleChildren=function(){this.isExpanded=!this.isExpanded};e.prototype.onVisibilityToggleClick=function(){var e=this.treeItem.getParameter("Visible");if(this.appData&&this.appData.undoRedoManager){var t=new n(e,!e.getValue());this.appData.undoRedoManager.addChange(t)}else{e.setValue(!e.getValue())}};e.prototype.onLabelClick=function(e){if(!this.appData||!this.appData.selectionManager){this.treeItem.setSelected(!this.treeItem.getSelected());return}if(this.appData.selectionManager.pickingModeActive()){this.appData.selectionManager.pick(this.treeItem);return}this.appData.selectionManager.toggleItemSelection(this.treeItem,!e.ctrlKey)};e.prototype.render=function(){var e=this;return i("div",{class:{wrap:true,"has-children":this.childItems.length,selected:this.isSelected,visible:this.isVisible,highlighted:this.isHighlighted,"is-tree-item":this.isTreeItem},style:{display:"block"},ref:function(t){return e.itemContainer=t}},i("div",{class:"header"},i("div",{class:"arrow",style:{display:this.childItems.length>0?"block":"none"},onClick:function(){return e.toggleChildren()}},i("span",null,this.isExpanded?i("zea-icon",{name:"caret-down",size:12}):i("zea-icon",{name:"caret-forward",size:12}))),this.isTreeItem&&i("div",{class:"toggle",onClick:this.onVisibilityToggleClick.bind(this)},i("zea-icon",{name:this.isVisible?"eye-outline":"eye-off-outline",ref:function(t){return e.visibilityIcon=t},size:16})),i("div",{class:"zea-tree-item-label",onClick:this.onLabelClick.bind(this)},this.label)),this.isTreeItem&&i("div",{class:"children",style:{display:this.isExpanded?"block":"none"}},this.isExpanded&&this.childItems.map((function(t){return i("zea-tree-item-element",{treeItem:t,appData:e.appData})}))))};Object.defineProperty(e.prototype,"rootElement",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{treeItem:["treeItemChanged"]}},enumerable:true,configurable:true});return e}());a.style=l}}}));