// jQuery = jQuery.noConflict();
// var $ = jQuery;
// try {
//     if (document.URL.indexOf("rpsg_sww") != '-1') {
//         var config = {
//             SITEPATH: "http://" + location.host + "/development/rpsg_sww/",
//             IMGPATH: "http://" + location.host + "/development/rpsg_sww/resources/images/",
//             SONGTOKENAPIPATH: "http://cds.saregama.com/api/",
//             JPLAYER: this.SITEPATH + "resources/jPlayer/",
//             CDSAPI: "http://cds.saregama.com/",
//             SWFPATH: "/development/sare_site/resources/swf/",
//             RADIOURL: "http://radio.saregama.com/",
// 			IMGSTORAGEPATH : "http://ss.saregama.com/image/",
//         }
//     } else if(document.URL.indexOf("sww.rpsg.in") != '-1'){
//         var config = {
//             SITEPATH: document.location.protocol+"//" + location.host + "/",
//             IMGPATH: document.location.protocol+"//" + location.host + "/resources/images/",
//             SONGTOKENAPIPATH: document.location.protocol+"//scds.saregama.com/api/",
//             JPLAYER: this.SITEPATH + "resources/jPlayer/",
//             CDSAPI: document.location.protocol+"//scds.saregama.com/",
//             SWFPATH: "/resources/swf/",
//             RADIOURL: "http://radio.saregama.com/",
// 			IMGSTORAGEPATH : document.location.protocol+"//s.saregama.com/image/",
// 		}
// 	}else {
// 		var config = {
// 			SITEPATH: document.location.protocol+"//" + location.host + "/",
// 			IMGPATH: document.location.protocol+"//" + location.host + "/resources/images/",
// 			SONGTOKENAPIPATH: document.location.protocol+"//cds.saregama.com/api/",
// 			JPLAYER: this.SITEPATH + "resources/jPlayer/",
// 			CDSAPI: document.location.protocol+"//cds.saregama.com/",
// 			SWFPATH: "/resources/swf/",
// 			RADIOURL: "http://radio.saregama.com/",
// 			IMGSTORAGEPATH : document.location.protocol+"//s.saregama.com/image/",
// 	}
//     }
// } catch (e) {
//     var config = {
//         SITEPATH: document.location.protocol+"//" + location.host + "/",
//         IMGPATH: document.location.protocol+"//" + location.host + "/resources/images/",
//         SONGTOKENAPIPATH: "http://cds.saregama.com/api/",
//         JPLAYER: this.SITEPATH + "resources/jPlayer/",
//         CDSAPI: "http://cds.saregama.com/",
//         SWFPATH: "/resources/swf/",
//         RADIOURL: "http://radio.saregama.com/",
// 		IMGSTORAGEPATH : document.location.protocol+"//s.saregama.com/image/",
//     }
// }
// var rpsg = {
//         getStock: function(obj) {
// 			//var name = obj.name;
// 			//var stock = obj.stock;
// 			//$(".stock_bse_"+name).hide();
// 			//$(".stock_nse_"+name).hide();
// 			//$(".div_"+name).hide();
// 			$.getJSON(config.SITEPATH + "ajax?action=view&type=stock", {}, function(data) {
// 				//data = JSON.parse(data);
//                 if (data != 0 && data != null) {
// 					$.each( data, function( name, value ) {
// 					    $(".stock_bse_"+name).html("BSE : "+value.bse);
// 						$(".stock_nse_"+name).html("NSE : "+value.nse);
// 						$(".div_"+name).show();
// 						if(value.bse!="0.00"){
// 							$(".stock_bse_"+name).show();
// 						}
// 						if(value.nse!="0.00"){
// 							$(".stock_nse_"+name).show();
// 						}
// 						if(value.bse=="0.00" && value.nse=="0.00"){
// 							$(".div_"+name).hide();
// 						}
// 					});
//                 }
//             });
// 		},
// 		submitCareers: function(obj) {
// 			$form = $('#carForm');
//             $form.parsley().validate();
//             if($form.parsley().validate()){
// 				$('#thankYouModal').modal('show');
//             	var form_data = new FormData(document.getElementById("carForm"));
//                 $.ajax({
//                     url: config.SITEPATH +"ajax?action=view&type=careers_upload",
//                     method: "post",
//                     data: form_data,
//                     dataType:'JSON',
//                     contentType: false,
//                     cache: false,
//                     processData: false,
//                     success: function(data){
//                         console.log('success');
//                         $form.reset();
//                     },
//                     error: function(jqXHR, textStatus, errorThrown){ 
//                         // What to do if we fail
//                         // console.log(JSON.stringify(jqXHR));
//                         // console.log("AJAX error: " + textStatus + ' : ' + errorThrown);
//                     }
//                 });
//             }
// 		},
// 		submitContactUs: function(obj) {
// 			var emailId=$("#email").val();
// 			var name=$("#name").val();
// 			var phone=$("#phone").val();
// 			var company_name=$("#company_name").val();
// 			var designation=$("#designation").val();
// 			var message=$("#message").val();
// 			var type=$("#type").val();
			
// 			if(name == ''){
// 				$("#nameError").html("Please enter name.");
// 				setTimeout(function(){$('#nameError').html("")},3000);
// 				$("#name").focus();	
// 				return false;
// 			 }
// 			 if(emailId == ''){
// 				$("#emailError").html("Please enter email id");
// 				setTimeout(function(){$('#emailError').html("")},3000);
// 				$("#email").focus();
// 				return false;
// 			 }
// 			 if(emailId != ''){
// 				var atpos=emailId.indexOf("@");
// 				var dotpos=emailId.lastIndexOf(".");
// 				if(atpos<1||dotpos<atpos+2||dotpos+2>=emailId.length){
// 					$("#emailError").html("Please enter a valid email id");
// 					setTimeout(function(){$('#emailError').html("")},3000);
// 					$("#email").focus();
// 					return false;
// 				}
// 			}
// 			if(phone == ''){
// 				$("#phoneError").html("Please enter phone no.");
// 				setTimeout(function(){$('#phoneError').html("")},3000);
// 				$("#phone").focus();	
// 				return false;
// 			 }
// 			 if (phone) {
//                 if (phone.length != 10) {
//                     $("#phoneError").html("Please enter a valid phone no.");
// 					setTimeout(function(){$('#phoneError').html("")},3000);
// 					$("#phone").focus();	
//                     return false;
//                 }
// 			}
// 			if(type=='Media'){
// 				if(company_name == ''){
// 					$("#company_nameError").html("Please company name.");
// 					setTimeout(function(){$('#company_nameError').html("")},3000);
// 					$("#company_name").focus();	
// 					return false;
// 			 	}
// 				if(designation == ''){
// 					$("#designationError").html("Please enter name.");
// 					setTimeout(function(){$('#designationError').html("")},3000);
// 					$("#designation").focus();	
// 					return false;
// 			 	}
// 			}
// 			if(message == ''){
// 				$("#messageError").html("Please enter message.");
// 				setTimeout(function(){$('#messageError').html("")},3000);
// 				$("#message").focus();	
// 				return false;
// 			}
// 			$('#contactForm').modal('hide');
// 			$('#thankYouModal').modal('show');
// 			$.post(config.SITEPATH + "ajax?action=view&type=contact_us", {
//                 'name': name,
//                 'email': emailId,
//                 'phone': phone,
//                 'company_name': company_name,
//                 'designation': designation,
//                 'message': message,
//                 'ctype': type
//             }, function(data) {
//                 return false;
//             });
// 		}
// }