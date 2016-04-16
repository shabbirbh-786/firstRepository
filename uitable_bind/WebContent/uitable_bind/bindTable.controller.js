sap.ui.controller("uitable_bind.bindTable", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf uitable_bind.bindTable
*/
	onInit: function() {
		var vData=[
		           {Name:"Bharath S", Rating:5},
		           {Name:"Arun M", Rating:3},
		           {Name:"Anitha", Rating:4},
		           {Name:"Ganesh", Rating:1},
		           {Name:"Ajai", Rating:4},
		           {Name:"Pranav", Rating:5}
		          ];
		
		var oModel = new sap.ui.model.json.JSONModel();              
	     oModel.setData({modelData: vData}); 
	     var oTable = this.byId("skillsTable");  
	     oTable.setModel(oModel);                                                                                  
	    
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf uitable_bind.bindTable
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf uitable_bind.bindTable
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf uitable_bind.bindTable
*/
//	onExit: function() {
//
//	}

});