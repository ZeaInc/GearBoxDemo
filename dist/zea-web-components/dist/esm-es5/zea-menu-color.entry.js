import { r as registerInstance, h } from './index-12ee0265.js';
var zeaMenuColorCss = ":host,input,button,select,textarea{font-family:'Roboto', sans-serif}.zea-menu-color{--zea-menu-color-color:var(--theme-color);color:var(--zea-menu-color-color)}.zea-menu-color{width:24px;height:24px;border-radius:12px;display:block}";
var ZeaMenuColor = /** @class */ (function () {
    function ZeaMenuColor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The color assigned to this item
         */
        this.color = '';
        /**
         * The color of the foreground (icon) for the tool
         */
        this.fgColor = '';
    }
    /**
     * Main render method for the component
     * @return {JSX} The generated markup
     */
    ZeaMenuColor.prototype.render = function () {
        return (h("div", { class: "zea-menu-color", style: { backgroundColor: this.color } }));
    };
    return ZeaMenuColor;
}());
ZeaMenuColor.style = zeaMenuColorCss;
export { ZeaMenuColor as zea_menu_color };