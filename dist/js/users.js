$(document).ready(function(){
    loadSubAdminList();
});


  function loadSubAdminList() {
       var list =  "<div class='card'>"+
            "<div class='card-body table-responsive p-0'>"+
                "<div class='card-body table-responsive p-0'>"+
                "<table class='table table-hover text-nowrap'>"+
                    "<thead>"+
                        "<tr>"+
                            "<th>ID</th>"+
                            "<th>Name</th>"+
                            "<th>Created On</th>"+
                            "<th>Phone No</th>"+
                            "<th>Actions</th>"+
                        "</tr>"+
                    "</thead>"+
                    "<tbody>"+
                        "<tr>"+
                            "<td>183</td>"+
                            "<td>Imran Khan</td>"+
                            "<td>11-7-2014</td>"+
                            "<td>9876543210</td>"+
                            "<td>"+                                 
                                "<a href='javascript:showUserEdit(\""+1+"\")'>"+
                                    "<i class='fas fa-edit'></i> Edit"+
                                "</a>&nbsp; | &nbsp;"+
                                "<a href='javascript:showUserDeactivate(\""+1+"\",\"Imran\")'>"+
                                    "<i class='fas fa-ban'></i> Deactivate"+
                                "</a>"+
                            "</td>"+
                        "</tr>"+
                    "</tbody>"+
                "</table>"                
                "</div>";      
            "</div>"+
        "</div>";
    
    
    document.getElementById('content-block').innerHTML = list;
  }
  
  function showUserEdit(user_id) {
    document.getElementById('userName').value = 'Imran Khan';
    document.getElementById('userPhone').value = '9876543210';
    document.getElementById('userEmail').value = 'imran@qr.com';
    document.getElementById('userPassword').value = 'imran123';
    document.getElementById('select-user').value = "India";
    $('#modal-user').modal('toggle');
}

function showUserDeactivate(user_id, name) {
    swal({
        title: "Deactivate "+name+"?",
        text: "Click on OK if you want to deactivate this this user.",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
            swal("Deativated", {
                icon: "success",
            });          
        } 
      });
  }

