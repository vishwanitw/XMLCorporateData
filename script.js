$(document).ready(function () {
    $('#tabs')
    .tabs()
    .addClass('ui-tabs-vertical ui-helper-clearfix');

    customerData();
  });

function customerData(){
	$.ajax({
		url : "customer.xml",
		dataType : "xml",
		success : function(data) {

			$(data).find("employee").each(function(){

				var addInfo ='<li>Name: '+$(this).find("name").text()+'</li>' + '<br/>'+
                       		'<li>Age: '+$(this).find("age").text()+'</li>' +'<br/>' +
                       		'<li>Company: '+$(this).find("company").text()+'</li>';
 
			  				$("#a").append(addInfo).addClass('view');
			});
		},
		error: function() { 
			$("#a").children().remove(); 
			$("#a").append("<li>There was an error in ur code!</li>"); 
		}
	});
}