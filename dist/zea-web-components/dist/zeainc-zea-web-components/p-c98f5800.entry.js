import{r as e,h as s,H as o,d as n}from"./p-da09bae5.js";import{g as t,c as a,a as i}from"./p-382b6e3d.js";const _=class{constructor(s){e(this,s)}componentDidLoad(){p(()=>{const e=i(window,"hybrid");a.getBoolean("_testing")||__sc_import_zeainc_zea_web_components("./p-d1e384e9.js").then(e=>e.startTapClick(a)),a.getBoolean("statusTap",e)&&__sc_import_zeainc_zea_web_components("./p-14ebcef1.js").then(e=>e.startStatusTap()),a.getBoolean("inputShims",c())&&__sc_import_zeainc_zea_web_components("./p-f347eca0.js").then(e=>e.startInputShims(a)),a.getBoolean("hardwareBackButton",e)&&__sc_import_zeainc_zea_web_components("./p-7261e130.js").then(e=>e.startHardwareBackButton()),__sc_import_zeainc_zea_web_components("./p-b62e8f49.js").then(e=>e.startFocusVisible())})}render(){const e=t(this);return s(o,{class:{[e]:!0,"ion-page":!0,"force-statusbar-padding":a.getBoolean("_forceStatusbarPadding")}})}get el(){return n(this)}},c=()=>i(window,"ios")&&i(window,"mobile"),p=e=>{"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,32)};_.style="html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";export{_ as ion_app}