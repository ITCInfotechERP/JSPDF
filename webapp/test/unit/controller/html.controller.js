/*global QUnit*/

sap.ui.define([
	"com/altasnim/formtopdf/controller/html.controller"
], function (oController) {
	"use strict";

	QUnit.module("html Controller");

	QUnit.test("I should test the html controller", function (assert) {
		var oAppController = new oController();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});