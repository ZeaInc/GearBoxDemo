import{r as registerInstance,h,d as getElement,c as createEvent}from"./p-da09bae5.js";const zeaMenuCss="*{cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host{display:inline-block;vertical-align:middle}:host,input,button,select,textarea{font-family:'Roboto', sans-serif}.zea-menu{color:var(--color-foreground-1);-ms-flex-direction:column;flex-direction:column}.zea-menu .items{display:none}.menu-anchor{color:var(--color-foreground-1)}.zea-menu.shown{color:var(--color-foreground-1);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.zea-menu.shown .items{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column}.dropdown slot{display:-ms-flexbox;display:flex}.zea-menu.contextual{position:relative}.contextual.menu-wrap{display:inline-block;position:relative;vertical-align:middle}.contextual .items{position:absolute;margin-top:25px;z-index:1000}.contextual.top-right .items{-webkit-transform:translateX(-100%);transform:translateX(-100%);margin-left:100%}.toolbar{background-color:var(--color-background-2);position:fixed;border-radius:30px}.dropdown .items,.contextual .items{background-color:var(--color-background-2)}",ZeaMenu=class{constructor(e){registerInstance(this,e),this.offset=[0,0],this.leftOffset="",this.topOffset="",this.type="dropdown",this.shown=!1,this.showAnchor=!1,this.anchorIcon="ellipsis-vertical-circle-outline",this.contextualAlign="top-left"}handleClick(e){e.currentTarget!=this.anchorElement?("contextual"!=this.type||this.isDescendant(this.hostElement,e.target)||(this.shown=!1),this.mouseIsDown=!1):this.shown=!this.shown}isDescendant(e,t){let s=t.parentNode;for(;null!=s;){if(s==e)return!0;s=s.parentNode}return!1}handleItemClick(e){"contextual"!=this.type||e.detail.hasSubitems||(this.shown=!1)}mousedownHandler(e){"toolbar"==this.type&&"ZEA-MENU"==e.currentTarget.tagName&&(this.mouseIsDown=!0,this.offset=[this.menuElement.offsetLeft-e.clientX,this.menuElement.offsetTop-e.clientY])}mousemoveHandler(e){"toolbar"==this.type&&this.mouseIsDown&&(this.menuElement.style.left=e.clientX+this.offset[0]+"px",this.menuElement.style.top=e.clientY+this.offset[1]+"px")}handleAnchorClick(e){this.handleClick(e),e.stopPropagation()}componentDidLoad(){"contextual"!=this.type&&(this.shown=!0)}componentDidRender(){this.setupChildren()}setupChildren(){this.itemsContainer.querySelector("slot").assignedNodes().forEach(e=>{"type"in e&&(e.type=this.type),"itemParent"in e&&(e.itemParent=this.hostElement),"rootMenu"in e&&(e.rootMenu=this.hostElement)})}render(){const e="contextual"==this.type&&this.showAnchor?h("div",{onMouseUp:this.handleAnchorClick.bind(this),class:"menu-anchor",ref:e=>this.anchorElement=e},h("zea-icon",{name:this.anchorIcon})):null,t={"zea-menu":!0};return t[this.type]=!0,t.shown=this.shown,t[this.contextualAlign]=!0,h("div",{class:t,ref:e=>this.menuElement=e},e,h("div",{ref:e=>this.itemsContainer=e,class:"items",style:{top:this.topOffset,left:this.leftOffset}},h("slot",null)))}get hostElement(){return getElement(this)}};ZeaMenu.style=zeaMenuCss;const zeaMenuItemCss="*{cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host,input,button,select,textarea{font-family:'Roboto', sans-serif}.zea-menu-item{position:relative}.outer-wrap{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:var(--color-foreground-1);position:relative}.toolbar .outer-wrap{background-color:transparent;border-radius:30px;margin:5px}.pressed .outer-wrap{background-color:var(--color-grey-3)}.active .outer-wrap{background-color:var(--color-grey-3)}.standalone:hover .outer-wrap{background-color:var(--color-grey-3)}.toolbar.pressed .outer-wrap{background-color:var(--color-background-2)}.toolbar.active .outer-wrap{background-color:var(--toolbar-active-bg-color, var(--color-grey-3));color:var(--toolbar-active-fg-color, var(--color-foreground-1))}.inner-wrap{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:12px;padding:0 10px;min-height:40px;white-space:nowrap;-ms-flex-positive:1;flex-grow:1}zea-switch{margin-left:0.5em;pointer-events:none}zea-checkbox{margin-right:0.5em;pointer-events:none}::slotted(zea-icon){margin-right:5px;font-size:10px;pointer-events:none}.toolbar .inner-wrap{padding:5px;min-height:auto}.toolbar ::slotted(zea-icon){margin-right:0}.hotkey{display:block;opacity:0.75;font-size:0.8em;padding-left:10px;pointer-events:none}.keyboard-key{border:1px solid var(--color-grey-3);padding:2px;border-radius:5px;font-size:0.8em;text-align:center;min-width:10px;display:inline-block;background-color:var(--color-background-1);text-transform:uppercase;margin:0 2px}",ZeaMenuItem=class{constructor(e){registerInstance(this,e),this.switch=!1,this.active=!1,this.hasCheckbox=!1,this.checked=!1,this.shown=!1,this.allowHover=!1,this.hotkey="",this.type="",this.hasSubitems=!1,this.zeaMenuItemClick=createEvent(this,"zeaMenuItemClick",7),this.zeaMenuItemPressed=createEvent(this,"zeaMenuItemPressed",7)}windowClickHandler(e){this.active=!1,e.detail.active=!0,e.detail.hasSubitems||"toolbar"==this.type||(this.active=!1)}handleWindowMouseup(e){this.isDescendant(this.rootMenu,e.target)||"toolbar"==this.type||(this.active=!1)}isDescendant(e,t){let s=t.parentNode;for(;null!=s;){if(s==e)return!0;s=s.parentNode}return!1}componentDidRender(){}watchHandler(){this.setupChildren()}setupChildren(){this.container.querySelector("slot").assignedElements().forEach(e=>{"ZEA-MENU-SUBITEMS"==e.tagName&&(this.hasSubitems=!0,this.subitemsElement=e,this.subitemsElement.rootMenu=this.rootMenu,this.subitemsElement.parentItem=this.hostElement,this.subitemsElement.type=this.hostElement.parentElement.type,this.outerWrap.appendChild(this.subitemsElement),this.container.classList.add("has-subitems"),"ZEA-MENU"==this.hostElement.parentElement.tagName&&(this.subitemsElement.belongsToRoot=!0))})}handleItemClick(e){this.zeaMenuItemClick.emit(this.hostElement),this.active=!0,this.runCallback(e)}handleItemMouseDown(){this.container.classList.add("pressed"),this.zeaMenuItemPressed.emit(this.hostElement),this.checked=!this.checked}handleItemMouseUp(e){this.container.classList.remove("pressed"),this.handleItemClick(e),this.hasSubitems||"toolbar"==this.type||(this.active=!1)}runCallback(payLoad){this.callback&&("string"==typeof this.callback?eval(this.callback):this.callback(payLoad))}keydownHandler(e){if(e.target instanceof HTMLInputElement)return;const t=[];e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.metaKey&&t.push("ctrl"),e.ctrlKey&&t.push("ctrl"),"Alt"!=e.key&&"Control"!=e.key&&"Ctrl"!=e.key&&"Shift"!=e.key&&t.push(e.key),t.join("+").toLowerCase()==this.hotkey.toLowerCase()&&this.handleItemClick(new MouseEvent("click")),e.preventDefault()}keyComboAsHtml(){const e=this.hotkey.split("+"),t=[];return e.forEach(e=>{"ctrl"==(e=e.toLowerCase())?(t.push(h("span",{class:"keyboard-key"},"Ctrl")),t.push("+")):"alt"==e?(t.push(h("span",{class:"keyboard-key"},"Alt")),t.push("+")):"shift"==e?(t.push(h("span",{class:"keyboard-key"},"Shift")),t.push("+")):t.push(h("span",{class:"keyboard-key"},e))}),t}render(){return h("div",{ref:e=>this.container=e,class:`zea-menu-item ${this.type} ${this.active?"active":""} ${this.allowHover?"allow-hover":""}`},h("div",{class:"outer-wrap",ref:e=>this.outerWrap=e},h("div",{class:"inner-wrap",onMouseDown:this.handleItemMouseDown.bind(this),onMouseUp:this.handleItemMouseUp.bind(this)},this.hasCheckbox?h("zea-checkbox",{checked:this.checked,ref:e=>this.checkboxElement=e}):null,h("slot",null),this.switch?h("zea-switch",{checked:this.checked}):null,this.hotkey?h("span",{class:"hotkey"},this.keyComboAsHtml()):null)))}get hostElement(){return getElement(this)}static get watchers(){return{rootMenu:["watchHandler"]}}};ZeaMenuItem.style=zeaMenuItemCss;const zeaMenuSeparatorCss=".ruler{overflow:hidden;margin:5px auto;height:1px;background-color:var(--color-grey-3)}.zea-menu-separator{}.zea-menu-separator.vertical{height:24px;width:21px}.vertical .ruler{width:1px;margin:0 10px;height:100%}.dropdown .ruler{height:100%;width:1px}",ZeaMenuSeparator=class{constructor(e){registerInstance(this,e),this.class="",this.orientation="horizontal"}render(){return h("div",{class:`zea-menu-separator ${this.class} ${this.orientation}`},h("div",{class:"ruler"}))}};ZeaMenuSeparator.style=zeaMenuSeparatorCss;export{ZeaMenu as zea_menu,ZeaMenuItem as zea_menu_item,ZeaMenuSeparator as zea_menu_separator}