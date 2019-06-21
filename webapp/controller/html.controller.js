sap.ui.define([
	"sap/ui/core/mvc/Controller"

], function (Controller) {
	"use strict";

	return Controller.extend("com.altasnim.formtopdf.controller.html", {
		onInit: function () {

			// jQuery.sap.includeScript({
			// 	url: "https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js",
			// 	id: "jsPDF Library"
			// }).then(function () {

			// })
		},
		//Code
		//To save the particular div section as PDF
		submit: function () {

			var doc = new jsPDF('p', 'pt', 'a4');
			var elementHandler = {
				'#ignorePDF': function (element, renderer) {
					return true;
				}
			};
			var name = this.getView().byId("nameText").getValue();
			var location = this.getView().byId("location").getValue();
			var psid = this.getView().byId("psid").getValue();
			var company = this.getView().byId("company").getValue();

			var header =
				'<div id = "ignorePDF"><h1> Avoid me in PDF</h1></div><div><center><table  width="200" border="0" cellpadding="0" cellspacing="0">' +
				"<center><h1 style= 'color: #1b364c';><u>Common User Details</u></h1> </center>" +
				'<tr><td>Name</td> <td>' + name + '</td></tr><tr><td align="center">Location</td>' +
				"<td>" + location +
				"</td></tr><tr><td align='center'>PSID</td><td style ='padding-top: 18px;padding-left: 100px;'>" + psid +
				"</td></tr><tr><td>Company</td><td style ='padding-bottom: 10px;padding-top: 18px;padding-left: 100px;'>" + company +
				"</td></tr> </table><center></div> <br>";

			//<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1dnZp5wjsd7wKc8-_RjblfI3l-EYZ9gb1ZzzLnrv8GHUYzu-M" width="100" height="70"><center><table  width="200" border="0" cellpadding="0" cellspacing="0">
			// Paste the following url before <center> tag.		
			//var style = "<style>";
			//style = style + "table {width: 100%;font: 17px Calibri;}";
			//style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
			//style = style + "padding: 2px 3px;text-align: center;}";
			//style = style + "</style>";    
			var source = header;
			doc.fromHTML(source, 15, 15, {
					'width': 180,
					'elementHandlers': elementHandler
				},
				function (output) {
					// doc.output("dataurlnewwindow");

					doc.save('html.pdf');

				});
			// doc.download = "html.pdf";
			// doc.output("dataurlnewwindow");
			// doc.save('html.pdf');

		}
	});
});