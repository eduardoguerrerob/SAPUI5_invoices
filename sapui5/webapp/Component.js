sap.ui.define([
    "sap/ui/core/UIComponent",
    "egb/sapui5/model/Models",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent 
     * @param {typeof egb.sapui5.model.Models} Models
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (UIComponent, Models, ResourceModel) {

        return UIComponent.extend("egb.sapui5.Component", {

            metadata: {
                manifest: "json"
            },

            init: function () {
                // call paarent´s init
                UIComponent.prototype.init.apply(this, arguments);
                // set data model to view
                this.setModel(Models.createRecipient());
                // set i18n model to view
                var i18nModel = new ResourceModel({ bundleName: "egb.sapui5.i18n.i18n" });
                this.setModel(i18nModel, "i18n");
            }
        })

    });