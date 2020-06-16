import{r as t,h as e}from"./p-da09bae5.js";import{E as i,c as s,N as r,f as a}from"./p-d3472632.js";import{u as o}from"./p-c1d211b7.js";const n=class{constructor(e){t(this,e),this.onInput=this.onInput.bind(this),this.onChange=this.onChange.bind(this)}parameterChangeHandler(){this.setUpInputs()}componentDidLoad(){this.parameter&&(this.setUpInputs(),this.onValueChanged(0))}setUpInputs(){this.parameter.on("valueChanged",t=>{this.onValueChanged(t.mode)})}onValueChanged(t){if(!this.change){const e=this.parameter.getValue();this.xField.value=""+this.round(e.x),this.yField.value=""+this.round(e.y),this.zField.value=""+this.round(e.z),t==i.REMOTEUSER_SETVALUE&&(this.container.classList.add("user-edited"),this.remoteUserEditedHighlightId&&clearTimeout(this.remoteUserEditedHighlightId),this.remoteUserEditedHighlightId=setTimeout(()=>{this.container.classList.remove("user-edited"),this.remoteUserEditedHighlightId=null},1500))}}onInput(){const t=new s(this.xField.valueAsNumber,this.yField.valueAsNumber,this.zField.valueAsNumber);this.change?this.change.update({value:t}):(this.change=new r(this.parameter,t),this.appData.undoRedoManager.addChange(this.change))}onChange(){this.onInput(),this.change=void 0}round(t,e=6){return Number(Math.round(Number(t+"e"+e))+"e-"+e)}render(){return e("div",{class:"zea-param-widget-vec3",ref:t=>this.container=t},e("div",{class:"vector-input-wrap"},e("label",null,"X"),e("input",{onInput:this.onInput,onChange:this.onChange,ref:t=>this.xField=t,id:this.parameter.getName(),type:"number",pattern:"-?[0-9]*(.[0-9]+)?",tabindex:"0",value:this.xValue})),e("div",{class:"vector-input-wrap"},e("label",null,"Y"),e("input",{onInput:this.onInput,onChange:this.onChange,ref:t=>this.yField=t,id:this.parameter.getName(),type:"number",pattern:"-?[0-9]*(.[0-9]+)?",tabindex:"0",value:this.yValue})),e("div",{class:"vector-input-wrap"},e("label",null,"Z"),e("input",{onInput:this.onInput,onChange:this.onChange,ref:t=>this.zField=t,id:this.parameter.getName(),type:"number",pattern:"-?[0-9]*(.[0-9]+)?",tabindex:"0",value:this.zValue})))}static get watchers(){return{parameter:["parameterChangeHandler"]}}};o.registerWidget("zea-param-widget-vec3",t=>t.constructor.name==a.name),n.style=":host,input,button,select,textarea{font-family:'Roboto', sans-serif}.zea-param-widget-vec3{color:var(--color-foreground-1);background-color:var(--color-background-2);max-width:400px}.zea-param-widget-vec3 input{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;margin-bottom:0.5em;color:var(--color-foreground-1);background-color:var(--color-background-3)}.zea-param-widget-vec3 input:last-child{margin-bottom:0}.user-edited{-webkit-box-shadow:0 0 8px var(--color-success-1);box-shadow:0 0 8px var(--color-success-1);margin:0px}.vector-input-wrap{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:0.5em}.vector-input-wrap label{font-size:0.7em;padding:0.3em 1em 0.3em 0.3em;opacity:0.5}input[type='number']{padding:0.3em;font-size:0.9em;border:1px solid var(--color-grey-3);text-align:right}";export{n as Z}