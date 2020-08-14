import { r as registerInstance, c as createEvent, f as forceUpdate, h, d as getElement } from './index-12ee0265.js';

const zeaAppShellCss = ":host,.zea-app-shell{color:var(--color-freground-1);width:100%;height:100%}#brand{display:inline-block;vertical-align:middle;z-index:10000020;position:relative;background-size:contain;background-position:0px center;background-repeat:no-repeat;width:150px;height:34px}#left-panel-container,#right-panel-container,#center-panel-container{height:100%}header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:var(--color-grey-1)}#tools-container{-ms-flex-positive:1;flex-grow:1;text-align:right}header zea-user-chip{margin-right:10px}#main-search{width:300px;display:inline-block;text-align:right;margin:0 20px}@media only screen and (max-width: 667px){#main-search{width:auto}zea-user-chip-set{display:none}zea-user-chip-set.nav-drawer-open{display:block;-ms-flex-positive:1;flex-grow:1}#tools-container.nav-drawer-open{display:none}#brand{width:50px}}";

const ZeaAppShell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         */
        this.logoUrl = 'https://storage.googleapis.com/zea-web-components-assets/zea-logo.png';
        /**
         */
        this.userData = {};
        /**
         */
        this.session = {};
        /**
         */
        this.leftPanelWidth = '200';
        this.rightPanelWidth = '200';
        /**
         */
        this.leftProgressMessage = '';
        this.centerProgressMessage = '';
        this.rightProgressMessage = '';
        this.userAuthenticated = createEvent(this, "userAuthenticated", 7);
    }
    /**
     */
    userRegisteredHandler(event) {
        this.userData = event.detail;
        if (!this.userData['id']) {
            this.userData.id = Math.random().toString(36).slice(2, 12);
            this.userAuthenticated.emit(this.userData);
        }
        else if ('pub' in this.session) {
            this.session.pub('userChanged', this.userData);
        }
        this.registerDialog.shown = false;
        localStorage.setItem('zea-user-data', JSON.stringify(this.userData));
        // this.currentUserChip.forceUpdate()
        this.currentUserChip.userData = Object.assign({}, this.userData);
        forceUpdate(this.currentUserChip);
    }
    /**
     */
    navDrawerOpenHandler() {
        this.userChipSet.classList.add('nav-drawer-open');
        this.toolsContainer.classList.add('nav-drawer-open');
    }
    /**
     */
    navDrawerClosedHandler() {
        this.userChipSet.classList.remove('nav-drawer-open');
        this.toolsContainer.classList.remove('nav-drawer-open');
    }
    /**
     */
    async doUpdate() {
        console.log('Force updating shell');
        forceUpdate(this.hostElement);
        forceUpdate(this.userChipSet);
    }
    /**
     */
    componentWillLoad() {
        const storedUserData = localStorage.getItem('zea-user-data');
        if (storedUserData) {
            this.userData = JSON.parse(storedUserData);
        }
    }
    /**
     */
    componentDidLoad() {
        if ('id' in this.userData) {
            this.userAuthenticated.emit(this.userData);
        }
        else {
            this.registerDialog.shown = true;
        }
    }
    /**
     */
    onShareIconClick() {
        this.shareDialog.shown = true;
    }
    /**
     * Main render function
     *
     * @return {JSX} The generated html
     */
    render() {
        return [
            h("zea-layout", { orientation: "vertical", "cell-a-size": "40", "cell-c-size": "0", "resize-cell-a": "false", "resize-cell-c": "false", "show-borders": "false" }, h("header", { slot: "a" }, h("zea-navigation-drawer", { id: "navigation-drawer" }, h("zea-menu-item", { onClick: this.onShareIconClick.bind(this), type: "standalone" }, h("zea-icon", { name: "link-outline" }), "Share"), h("slot", { name: "nav-drawer" })), h("div", { id: "brand", style: { backgroundImage: `url(${this.logoUrl})` } }), h("zea-user-chip-set", { ref: (el) => {
                    this.userChipSet = el;
                }, id: "users-container", session: this.session }), h("div", { id: "tools-container", ref: (el) => {
                    this.toolsContainer = el;
                } }, h("div", { id: "main-search" }, h("zea-input-search", null))), h("zea-user-chip", { ref: (el) => {
                    this.currentUserChip = el;
                }, userData: Object.assign({}, this.userData), id: "current-user", "profile-card-align": "right", "is-current-user": "true" })), h("zea-layout", { slot: "b", "cell-a-size": this.leftPanelWidth, "cell-c-size": this.rightPanelWidth }, h("div", { slot: "a", id: "left-panel-container" }, this.leftProgressMessage && (h("zea-panel-progress-bar", { ref: (el) => (this.leftProgressBar = el) }, this.leftProgressMessage)), h("slot", { name: "left-panel" })), h("div", { slot: "b", id: "center-panel-container" }, this.centerProgressMessage && (h("zea-panel-progress-bar", { ref: (el) => (this.centerProgressBar = el) }, this.centerProgressMessage)), h("slot", { name: "center-panel" })), h("div", { slot: "c", id: "right-panel-container" }, this.rightProgressMessage && (h("zea-panel-progress-bar", { ref: (el) => (this.rightProgressBar = el) }, this.rightProgressMessage)), h("slot", { name: "right-panel" })))),
            h("zea-dialog-profile", { allowClose: false, ref: (el) => (this.registerDialog = el) }),
            h("zea-dialog-share", { ref: (el) => (this.shareDialog = el) }),
        ];
    }
    get hostElement() { return getElement(this); }
};
ZeaAppShell.style = zeaAppShellCss;

export { ZeaAppShell as zea_app_shell };
