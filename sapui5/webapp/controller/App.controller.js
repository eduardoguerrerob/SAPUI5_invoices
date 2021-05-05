sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.m.MessageToast} MessageToast 
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel 

     */
    function (Controller, MessageToast, Models, ResourceModel) {
        "use strict";
        return Controller.extend("egb.sapui5.controller.App", {
            
            onInit: function() {

            },

            onShowHello: function () {
                var oBundleI18n = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundleI18n.getText("helloMessage",[sRecipient]);
                MessageToast.show(sMsg);
            }
        })
    });