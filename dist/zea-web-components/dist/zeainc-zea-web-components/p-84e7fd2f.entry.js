import{r as t,c as i,h as s,H as e,d as o}from"./p-da09bae5.js";const n=class{constructor(s){t(this,s),this.transitioning=!1,this.useRouter=!1,this.onTabClicked=t=>{const{href:i,tab:s}=t.detail;if(this.useRouter&&void 0!==i){const t=document.querySelector("ion-router");t&&t.push(i)}else this.select(s)},this.ionNavWillLoad=i(this,"ionNavWillLoad",7),this.ionTabsWillChange=i(this,"ionTabsWillChange",3),this.ionTabsDidChange=i(this,"ionTabsDidChange",3)}async componentWillLoad(){if(this.useRouter||(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]")),!this.useRouter){const t=this.tabs;t.length>0&&await this.select(t[0])}this.ionNavWillLoad.emit()}componentWillRender(){const t=this.el.querySelector("ion-tab-bar");t&&(t.selectedTab=this.selectedTab?this.selectedTab.tab:void 0)}async select(t){const i=h(this.tabs,t);return!!this.shouldSwitch(i)&&(await this.setActive(i),await this.notifyRouter(),this.tabSwitch(),!0)}async getTab(t){return h(this.tabs,t)}getSelected(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)}async setRouteId(t){const i=h(this.tabs,t);return this.shouldSwitch(i)?(await this.setActive(i),{changed:!0,element:this.selectedTab,markVisible:()=>this.tabSwitch()}):{changed:!1,element:this.selectedTab}}async getRouteId(){const t=this.selectedTab&&this.selectedTab.tab;return void 0!==t?{id:t,element:this.selectedTab}:void 0}setActive(t){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=t,this.ionTabsWillChange.emit({tab:t.tab}),t.active=!0,Promise.resolve())}tabSwitch(){const t=this.selectedTab,i=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,t&&i!==t&&(i&&(i.active=!1),this.ionTabsDidChange.emit({tab:t.tab}))}notifyRouter(){if(this.useRouter){const t=document.querySelector("ion-router");if(t)return t.navChanged("forward")}return Promise.resolve(!1)}shouldSwitch(t){return void 0!==t&&t!==this.selectedTab&&!this.transitioning}get tabs(){return Array.from(this.el.querySelectorAll("ion-tab"))}render(){return s(e,{onIonTabButtonClick:this.onTabClicked},s("slot",{name:"top"}),s("div",{class:"tabs-inner"},s("slot",null)),s("slot",{name:"bottom"}))}get el(){return o(this)}},h=(t,i)=>{const s="string"==typeof i?t.find(t=>t.tab===i):i;return s||console.error(`tab with id: "${s}" does not exist`),s};n.style=":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}";export{n as ion_tabs}