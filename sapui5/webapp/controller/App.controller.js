// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     */
    function (Controller, MessageToast, Models, ResourceModel) {
        "use strict";
        return Controller.extend("egb.sapui5.controller.App", {
            
            onInit: function() {

            },

            onOpenDialogHeader: function(){
                this.getOwnerComponent().openHelloDialog();
            }

        })
    });