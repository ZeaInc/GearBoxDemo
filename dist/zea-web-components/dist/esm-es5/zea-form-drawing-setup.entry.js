import { r as registerInstance, h } from './index-12ee0265.js';
import './global-eddac5e6.js';
import './events-a71dfb91.js';
import { Z as ZeaWcDataConnector } from './ZeaWcDataConnector-0e46a9e5.js';
var zeaFormDrawingSetupCss = ".zea-form-drawing-setup{color:var(--color-foreground-1);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;width:100%;overflow:hidden}.discipline-row{display:-ms-flexbox;display:flex;width:100%;-ms-flex-align:center;align-items:center}.discipline-row:hover{background-color:var(--color-grey-2)}.discipline-name{-ms-flex-positive:1;flex-grow:1}.discipline-abbreviation{text-transform:uppercase;padding:8px;width:15px;height:15px;line-height:15px;text-align:center;border-radius:20px;margin:5px 10px 5px 5px;white-space:nowrap;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.input-container{margin-bottom:1em}zea-input-select-item:hover{background-color:var(--color-grey-2)}.scale-row{padding:5px}.inputs{-ms-flex-positive:1;flex-grow:1;padding:1em}.buttons{display:-ms-flexbox;display:flex;padding:1em}.buttons zea-button{margin:5px}.buttons div:nth-child(1){-ms-flex-positive:1;flex-grow:1}";
var ZeaFormDrawingSetup = /** @class */ (function () {
    function ZeaFormDrawingSetup(hostRef) {
        registerInstance(this, hostRef);
        /**
         */
        this.disciplines = [];
        /**
         */
        this.scales = [];
        this.db = new ZeaWcDataConnector();
    }
    /**
     *
     */
    ZeaFormDrawingSetup.prototype.onDisciplinesSelect = function (value) {
        console.log('value', value);
    };
    /**
     *
     */
    ZeaFormDrawingSetup.prototype.onScalesSelect = function (value) {
        console.log('value', value);
    };
    /**
     *
     */
    ZeaFormDrawingSetup.prototype.componentWillLoad = function () {
        var _this = this;
        this.db
            .getDocs({ type: 'disciplines', limit: 100 })
            .then(function (disciplines) {
            _this.disciplines = disciplines.docs;
        });
        this.scales = [
            { _id: 'scale1', name: "1/32' = 1'0\"" },
            { _id: 'scale2', name: "1/16' = 1'0\"" },
            { _id: 'scale3', name: "1/8' = 1'0\"" },
            { _id: 'scale4', name: "1/4' = 1'0\"" },
            { _id: 'scale5', name: "3/8' = 1'0\"" },
            { _id: 'scale6', name: "1/32 = 1'0\"" },
            { _id: 'scale7', name: "1/32 = 1'0\"" },
            { _id: 'scale8', name: "1/32 = 1'0\"" },
            { _id: 'scale9', name: "1/32 = 1'0\"" },
            { _id: 'scale10', name: "1/32 = 1'0\"" },
        ];
    };
    /**
     */
    ZeaFormDrawingSetup.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "zea-form-drawing-setup" }, h("div", { class: "inputs" }, h("div", { class: "input-container" }, h("zea-input-text", { ref: function (el) { return (_this.drawingNumberInput = el); }, label: "Drawing Number", id: "drawing-number-input" })), h("div", { class: "input-container" }, h("zea-input-text", { ref: function (el) { return (_this.titleInput = el); }, label: "Title", id: "title-input" })), h("div", { class: "input-container" }, h("zea-input-select", { selectCallback: this.onDisciplinesSelect.bind(this), label: "Discipline", id: "discipline-input" }, this.disciplines.map(function (discipline) {
            return (h("zea-input-select-item", { value: discipline }, h("div", { class: "discipline-row", id: discipline._id, key: discipline._id }, h("div", { class: "discipline-abbreviation", style: { backgroundColor: discipline.color } }, discipline.abbreviation), h("div", { class: "discipline-name" }, discipline.name))));
        }))), h("div", { class: "input-container" }, h("zea-input-select", { selectCallback: this.onScalesSelect.bind(this), label: "Scale", id: "scale-input" }, this.scales.map(function (scale) {
            return (h("zea-input-select-item", { value: scale }, h("div", { class: "select-item-wrap scale-row", id: scale._id, key: scale._id }, h("div", { class: "scale-name" }, scale.name))));
        })))), h("div", { class: "buttons" }, h("div", null, h("zea-button", { density: "small" }, "FINISHED ALL")), h("div", null, h("zea-button", { density: "small" }, "PREVIOUS"), h("zea-button", { density: "small" }, "NEXT")))));
    };
    return ZeaFormDrawingSetup;
}());
ZeaFormDrawingSetup.style = zeaFormDrawingSetupCss;
export { ZeaFormDrawingSetup as zea_form_drawing_setup };