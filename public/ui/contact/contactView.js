define(function (require, exports, module) {

	var BaseView = require('framework/view');
	var mediator = require('framework/mediator');

	require('css!./contactView');
	var contactTemplate = require('html!./contactTemplate');

	var FormValidator = require("jquery_form_validator");


	return Backbone.View.extend({

		el: ".contact-container",

		initialize: function(){

			this.render();

		},

		render: function(){

			this.$el.html(contactTemplate({}));

			$("#contact-form").validate({
		    rules : {
	        contactEmail : {
	        	required : true,
	        	email : true,
	        },
	        contactName : {
						required: true,
          },
					contactMessage : {
						required: true,
					},
		    },
		    messages: {
          contactEmail: {
          	required: "Please enter your email address",
          },
					contactName: {
						required: "Please enter your name",
					},
					contactMessage: {
						required: "Please enter a message"
					}
	      },
		    submitHandler: function(form) {

					// disable submit button
					$("#submitBtn").prop("disabled", true);
					$("#submitBtn").text("Sending Message...");
					// grab the data
					var data = $("#contact-form").serialize();

					// make the ajax call
					$.ajax({
						type: "POST",
						url: "http://davecollier.io/resources/php/contact.php",
						data: data,
						dataType: "json",
						success: function(data) {

							if (data.success == "true") {
								$("#submitBtn").text("Message Sent");
								window.setTimeout(function(){
									$("#contact-form")[0].reset();
									$("#submitBtn").prop("disabled", false);
									$("#submitBtn").text("Send Message");
								}, 3000);

							}

						},
						error: function(data) {

						}
					});
					return;
				}

			});

		}
	});

});
