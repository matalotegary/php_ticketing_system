

function get(url, key){
	return $.ajax({	
		url:url,
	    type: "GET",
	    data: {"key": key},
	    timeout: 500,     // timeout millisecond
	    success: function (data, status){   // success callback function
		    return data;
		},
	    error: function (jqXhr, textStatus, errorMessage){ // error callback
	        return errorMessage;
	    }
	});
}


function post(url, data){
    return $.ajax({
	 	type: "POST",
	  	url: url,
	  	data: data,
	  	success: function(result) {
	  		return result;
	  	},
		error : function(result) {
	  		return result;
	  	},
	});
}


function formToObject(formId) {
	var formObj = {};
	var inputs = $('#'+formId).serializeArray();
    $.each(inputs, function (i, input) {
        formObj[input.name] = input.value;
    });

    return formObj;
}