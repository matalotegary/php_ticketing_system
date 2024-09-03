var lrTable = $('#lr_table_data').DataTable();

//
$("#lr_tab_id").click(function(){
	// CLEAR TABLE
	lrTable.clear().draw();
	
    loadStatistics();
    loadAllLRDataTable();

});
    

// 
function loadStatistics() {
    // GET STATISTICS DATA
    var getLRStatistics = get('../../backend/lrForm/lrStatisticsController.php');
    getLRStatistics.then(function(data){
        var ret = JSON.parse(data);
        var lrStatics = JSON.parse(ret.data);
        $("#lr_request_review_count_id").text(lrStatics.requestReview);
        $("#lr_acknowledged_request_count_id").text(lrStatics.acknowledgedRequest);
        $("#lr_active_request_count_id").text(lrStatics.activeRequest);
        $("#lr_closed_request_count_id").text(lrStatics.closedRequest);
    });
}

function loadAllLRDataTable() {
    //GET TABLE DATA
    var getLRData = get('../../backend/lrForm/lrTableDataController.php');
    getLRData.then(function(data){
        var ret = JSON.parse(data);
        var lrData = ret.data;
        $.each(lrData, function (i, rowData) {
          lrTable.row.add([
            rowData.id,
            rowData.requestor,
            rowData.support,
            rowData.title,
            rowData.dateOpened,
            rowData.dateRequired,
            rowData.status,
            '<button type="button" class="btn btn-primary btn-sm">VIEW</button>'
          ]).draw( false );
        });
    });
}


// CLICK BUTTON ON ROW ON 
$('#lr_table_data tbody').on( 'click', 'button', function() {
    var tableData = lrTable.row( $(this).parents('tr')).data();
    //alert("Request Number is "+ data[0]);
    var formObj = {"id":'"'+tableData[0]+'"'};
	
    var promise = post('../../backend/lrForm/lrViewDataController.php', formObj);
    promise.then(function (data) { //data - result from backend
        var ret = JSON.parse(data); //parse method is used to convert string to JSON OBJECT to access the result variables
        if(ret.code == 200) {
            if (ret.isOk) {  
                
				setLRViewButtons(tableData[6], ret.userRole);
				
				$('#id_lr_view').val(ret.data[0].id_); 
				
                $('#lrReqTitle_view').val(ret.data[0].lr_req_title_); 
                $('#requestor_lr_view').val(ret.data[0].requestor_);
                $('#strategy_lr_view').val(ret.data[0].strategy1_);
                $('#ple_prj_lr_view').val(ret.data[0].ple_prj_);
				$('#generic_lr_view').val(ret.data[0].generic_);
                $('#inputPriority_lr_view').val(ret.data[0].inputPriority_);
				$('#mobile_number_lr_view').val(ret.data[0].mobile_number_);
				$('#date_opened_lr_view').val(ret.data[0].date_opened_);
				$('#date_required_lr_view').val(ret.data[0].date_required_);
				$('#start_time_lr_view').val(ret.data[0].start_time_);
				
				$('#lr1_view').val(ret.data[0].lr); 
				$('#other_req1_lr_view').val(ret.data[0].other_req1_);
				$('#material1_lr_view').val(ret.data[0].material1_);
				$('#other_mat1_lr_view').val(ret.data[0].other_mat1_);
				$('#notes1_lr_view').val(ret.data[0].notes1_);
				
				$('#lr2_view').val(ret.data[0].lr2);
				$('#other_req2_lr_view').val(ret.data[0].other_req2_);
				$('#material2_lr_view').val(ret.data[0].material2_);
				$('#other_mat2_lr_view').val(ret.data[0].other_mat2_);
				$('#notes2_lr_view').val(ret.data[0].notes2_);
				
				$('#lr3_view').val(ret.data[0].lr3);
				$('#other_req3_lr_view').val(ret.data[0].other_req3_);
				$('#material3_lr_view').val(ret.data[0].material3_);
				$('#other_mat3_lr_view').val(ret.data[0].other_mat3_);
				$('#notes3_lr_view').val(ret.data[0].notes3_);
				
				$('#lr4_view').val(ret.data[0].lr4);
				$('#other_req4_lr_view').val(ret.data[0].other_req4_);
				$('#material4_lr_view').val(ret.data[0].material4_);
				$('#other_mat4_lr_view').val(ret.data[0].other_mat4_);
				$('#notes4_lr_view').val(ret.data[0].notes4_);
				
				$('#lr5_view').val(ret.data[0].lr5);
				$('#other_req5_lr_view').val(ret.data[0].other_req5_);
				$('#material5_lr_view').val(ret.data[0].material5_);
				$('#other_mat5_lr_view').val(ret.data[0].other_mat5_);
				$('#notes5_lr_view').val(ret.data[0].notes5_);
				
				$('#special_instructions_lr_view').val(ret.data[0].special_instructions_);
									
				// OPEN THE MODAL HERE
				$('#LR_Req_view').modal('show');
            } else {
                alert(ret.msg);
            }
        } 
    });
});


function setLRViewButtons(status, userRole) {
	//alert("SET BUTTONS OF STATUS : " + status);
	
    if (userRole == 2) {
        if (status === "REQUEST REVIEW") {
            $("#button_lr_view_acknowledge").show();
            $("#button_lr_view_active").hide();
            $("#button_lr_view_close").hide();
        } else if (status === "ACKNOWLEDGED REQUEST") {
            $("#button_lr_view_acknowledge").hide();
            $("#button_lr_view_active").show();
            $("#button_lr_view_close").hide();
        } else if (status === "ACTIVE REQUESTS") {
            $("#button_lr_view_acknowledge").hide();
            $("#button_lr_view_active").hide();
            $("#button_lr_view_close").show();
        } else {
            $("#button_lr_view_acknowledge").hide();
            $("#button_lr_view_active").hide();
            $("#button_lr_view_close").hide();
            // Call a funtion that will set all inputs of modal to disable or readonly
        }
    } else if (userRole == 3) {
        if (status === "REQUEST REVIEW") {
            $("#button_lr_view_edit").show();
        } else {
            $("#button_lr_view_edit").hide();
        }
    }

		
};

// PASS THE FORM OF
$('#form_lr_id').submit(function(event){
    event.preventDefault();
    var formObj = formToObject('form_lr_id');
    var promise = post('../../backend/lrForm/lrInsertController.php', formObj);
    promise.then(function (data) {
        var ret = JSON.parse(data);
        if(ret.code == 200) {
          if (ret.isOk) {
            $("#lr_tab_id").trigger("click");
            $('#LR_Req').modal('toggle'); 
            $("#form_lr_id").trigger( "reset" );
            alert(ret.msg);
          } else {
            alert(ret.msg);
          }
        }
    });
});


// Acknowledge LR
$('#button_lr_view_acknowledge').click(function(event){
    event.preventDefault();
    var formObj = formToObject('form_lr_view');
    var promise = post('../../backend/lrForm/lrAcknowledgeDataController.php', formObj);
    promise.then(function (data) {
        var ret = JSON.parse(data);
        if(ret.code == 200) {
          if (ret.isOk) {
            $('#LR_Req_view').modal('toggle');
            //$("#lr_tab_id").trigger("click");
            //$("#card_lr_acknowledged").trigger("click");
            //alert(ret.msg);
          } else {
            alert(ret.msg);
          }
        }
    });
});


// Active LR
$('#button_lr_view_active').click(function(event){
	//alert("SET REQUEST TO ACTIVE ONGOING STATUS");
     event.preventDefault();
    var formObj = formToObject('form_lr_view');
    var promise = post('../../backend/lrForm/lrActiveRequestDataController.php', formObj);
    promise.then(function (data) {
        var ret = JSON.parse(data);
        if(ret.code == 200) {
          if (ret.isOk) {
            alert(ret.msg);
            $('#LR_Req_view').modal('toggle');
            //$("#lr_tab_id").trigger("click");
            loadStatistics();
            $("#card_lr_acknowledged").trigger("click");
            //lr_tab_id.reload();
          } else {
            alert(ret.msg);
          }
        }
    });


});

// Close LR
$('#button_lr_view_close').click(function(event){
	//alert("SET REQUEST TO CLOSE STATUS");
      event.preventDefault();
    var formObj = formToObject('form_lr_view');
    var promise = post('../../backend/lrForm/lrCLoseRequestDataController.php', formObj);
    promise.then(function (data) {
        var ret = JSON.parse(data);
        if(ret.code == 200) {
          if (ret.isOk) {
            $("#lr_tab_id").trigger("click");
            $('#LR_Req_view').modal('toggle'); 
            alert(ret.msg);
          } else {
            alert(ret.msg);
          }
        }
    });
});
	


// WHEN REQUEST CARD IS PRESS
$("#card_lr_review").click(function(){
	//alert("GET ALL REQUEST REVIEW");
	// CLEAR TABLE
	lrTable.clear().draw();
	
	//GET TABLE DATA FOR ALL REQUEST REVIEW ONLY
    var getLRData = get('../../backend/lrForm/lrTableDataController.php', "REQUEST REVIEW");
    getLRData.then(function(data){
        var ret = JSON.parse(data);
        var lrData = ret.data;
        $.each(lrData, function (i, rowData) {
          lrTable.row.add([
            rowData.id,
			rowData.requestor,
            rowData.support,
            rowData.title,
            rowData.dateOpened,
            rowData.dateRequired,
            rowData.status,
            '<button type="button" class="btn btn-primary btn-sm">VIEW</button>'
          ]).draw( false );
        });
    });
});

// WHEN ACKNOWLEDGED CARD IS PRESS
$("#card_lr_acknowledged").click(function(){
	// CLEAR TABLE
	lrTable.clear().draw();
	
	//GET TABLE DATA FOR ALL ACKNOWLEDGED REQUEST ONLY
    var getLRData = get('../../backend/lrForm/lrTableDataController.php', "ACKNOWLEDGED REQUEST");
    getLRData.then(function(data){
        var ret = JSON.parse(data);
        var lrData = ret.data;
        $.each(lrData, function (i, rowData) {
          lrTable.row.add([
            rowData.id,
			rowData.requestor,	
            rowData.support,
            rowData.title,
            rowData.dateOpened,
            rowData.dateRequired,
            rowData.status,
            '<button type="button" class="btn btn-primary btn-sm">VIEW</button>'
          ]).draw( false );
        });
    });
});

// WHEN ACTIVE CARD IS PRESS
$("#card_lr_active").click(function(){
    //alert("GET ALL ACTIVE REQUEST");
    // CLEAR TABLE
    lrTable.clear().draw();
    
    
    //GET TABLE DATA FOR ALL ACTIVE REQUEST ONLY
    var getLRData = get('../../backend/lrForm/lrTableDataController.php', "ACTIVE REQUESTS");
    getLRData.then(function(data){
        var ret = JSON.parse(data);
        var lrData = ret.data;
        $.each(lrData, function (i, rowData) {
          lrTable.row.add([
            rowData.id,
            rowData.requestor,  
            rowData.support,
            rowData.title,
            rowData.dateOpened,
            rowData.dateRequired,
            rowData.status,
            '<button type="button" class="btn btn-primary btn-sm">VIEW</button>'
          ]).draw( false );
        });
    });
});

// WHEN CLOSED CARD IS PRESS
$("#card_lr_closed").click(function(){
    //alert("GET ALL CLOSED REQUEST");
    // CLEAR TABLE
    lrTable.clear().draw();
    
    
    //GET TABLE DATA FOR ALL ACTIVE REQUEST ONLY
    var getLRData = get('../../backend/lrForm/lrTableDataController.php', "CLOSED REQUESTS");
    getLRData.then(function(data){
        var ret = JSON.parse(data);
        var lrData = ret.data;
        $.each(lrData, function (i, rowData) {
          lrTable.row.add([
            rowData.id,
            rowData.requestor,  
            rowData.support,
            rowData.title,
            rowData.dateOpened,
            rowData.dateRequired,
            rowData.status,
            '<button type="button" class="btn btn-primary btn-sm">VIEW</button>'
          ]).draw( false );
        });
    });
});




function fillDefaultValueForLRModal() {
	alert("AUTO FILL DATA");
    $('#LR_Req').modal('toggle'); 

};
