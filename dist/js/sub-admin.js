$(document).ready(function(){
    loadSubAdminList();
});


  function loadSubAdminList() {
       var list =  "<div class='card'>"+
            "<div class='card-header'>"+
                "<h3 class='card-title'>Sub Admins</h3>"+
                "<div class='card-tools'>"+
                    "<button type='button' onclick='showAdminCreate()' class='btn btn-block btn-success btn-sm '><i class='fas fa-plus'></i>&nbsp;&nbsp;Create</button>"+
                "</div>"+
            "</div>"+
            "<div class='card-body table-responsive p-0'>"+
                "<div class='card-body table-responsive p-0'>"+
                    "<table class='table table-hover text-nowrap'>"+
                        "<thead>"+
                            "<tr>"+
                                "<th>ID</th>"+
                                "<th>Name</th>"+
                                "<th>Created On</th>"+
                                "<th>Region</th>"+
                                "<th>Actions</th>"+
                            "</tr>"+
                        "</thead>"+
                        "<tbody>"+
                            "<tr>"+
                                "<td>183</td>"+
                                "<td><a href='javascript:showAdminDetails(\""+1+"\")'>Zubair Khan</a></td>"+
                                "<td>11-7-2014</td>"+
                                "<td>Aurangabad</td>"+
                                "<td>"+
                                    "<a href='javascript:showAdminDetails(\""+1+"\")'>"+
                                        "<i class='fas fa-info'></i> Info"+
                                    "</a>&nbsp; | &nbsp;"+
                                    "<a href='javascript:showAdminEdit(\""+1+"\")'>"+
                                        "<i class='fas fa-edit'></i> Edit"+
                                    "</a>&nbsp; | &nbsp;"+
                                    "<a href='javascript:showAdminDeactivate(\""+1+"\",\"Imran\")'>"+
                                        "<i class='fas fa-ban'></i> Deactivate"+
                                    "</a>"+
                                "</td>"+
                            "</tr>"+
                        "</tbody>"+
                    "</table>"+
                "</div>";      
            "</div>"+
        "</div>";
    
    
    document.getElementById('content-block').innerHTML = list;
  }

  function showAdminDetails(id) {
    var info = "<div class='card'>"+
        "<div class='card-header d-flex p-0'>"+
            "<h3 class='card-title p-3'><a href='javascript:loadSubAdminList()'><i class='fas fa-chevron-left'></i></a> &nbsp; Zubair</h3>"+
            "<ul class='nav nav-pills ml-auto p-2'>"+
                "<li class='nav-item'><a class='nav-link active' href='#profile' data-toggle='tab'>Profile</a></li>"+
                "<li class='nav-item'><a class='nav-link' href='#users' data-toggle='tab'>Users</a></li>"+
                "<li class='nav-item'><a class='nav-link' href='#qr_gen' data-toggle='tab'>Generated Codes</a></li>"+
                "<li class='nav-item'><a class='nav-link' href='#qr_scan' data-toggle='tab'>Scanned Codes</a></li>"+
            "</ul>"+
        "</div>"+
        "<div class='card-body'>"+
            "<div class='tab-content'>"+
                "<div class='tab-pane active' id='profile'>"+             
                "</div>"+
                "<div class='tab-pane' id='users'>"+             
                "</div>"+
                "<div class='tab-pane' id='qr_gen'>"+            
                "</div>"+
                "<div class='tab-pane' id='qr_scan'>"+
                "</div>"+
            "</div>"+
        "</div>";
    document.getElementById('content-block').innerHTML = info;
    showProfile(id);
    showAdminUsers(id);
    showQRGenerated(id);
    showQRScanned(id);
  }

  function showProfile(id) {
    var profile =  "<div class='card-body box-profile'>"+
                    "<h3 class='profile-username '>Imran</h3>"+
                    "<ul class='list-group list-group-unbordered mb-3'>"+
                        "<li class='list-group-item'>"+
                            "<small>Email</small> <p class='text-normal '>zubair@gmail.com</p>"+
                        "</li>"+
                        "<li class='list-group-item'>"+
                            "<small>Mobile</small> <p class='text-normal '>8999315879</p>"+
                        "</li>"+
                        "<li class='list-group-item'>"+
                            "<small>Country</small> <p class='text-normal '>India</p>"+
                        "</li>"+
                        "<li class='list-group-item'>"+
                            "<small>Region</small> <p class='text-normal '>Aurangabad</p>"+
                        "</li>"+
                        "<li class='list-group-item'>"+
                            "<table>"+
                                "<tr>"+
                                    "<td>"+
                                        "<button type='button' onclick='showAdminEdit(\""+1+"\")'  class='btn btn-block btn-primary btn-sm ' style='width: 100px;'><i class='fas fa-edit'></i>&nbsp;&nbsp;Edit</button>"+
                                    "</td>"+
                                    "<td>"+
                                        "<button type='button' onclick='showAdminDeactivate(\""+1+"\",\"Imran\")' class='btn btn-block btn-secondary btn-sm ' style='width: 100px;'><i class='fas fa-ban'></i>&nbsp;&nbsp;Deactivate</button>"+
                                    "</td>"+
                                "</tr>"+
                            "</table>"+                                  
                        "</li>"+
                    "</ul>"+
                "</div>";
    document.getElementById('profile').innerHTML = profile;

  }

  function showAdminUsers(id) {
    var users =  "<table class='table table-hover text-nowrap'>"+
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
                    "</table>";
    document.getElementById('users').innerHTML = users;
  }

  function showQRGenerated(id) {
    var qr_gen = "<table class='table table-hover text-nowrap'>"+
                    "<thead>"+
                        "<tr>"+
                            "<th>ID</th>"+
                            "<th>QR ID</th>"+
                            "<th>Created On</th>"+
                            "<th>Name</th>"+
                            "<th>Size</th>"+
                            "<th>Status</th>"+
                            "<th>Actions</th>"+
                        "</tr>"+
                    "</thead>"+
                    "<tbody>"+
                        "<tr>"+
                            "<td>1</td>"+
                            "<td>585</td>"+
                            "<td>11-7-2014</td>"+
                            "<td>Imran</td>"+
                            "<td>4 MB</td>"+
                            "<td>active</td>"+
                            "<td>"+
                                "<a href='#'>"+
                                    "<i class='fas fa-download'></i> Download"+
                                "</a>"+
                            "</td>"+
                        "</tr>"+
                    "</tbody>"+
                "</table>";
    document.getElementById('qr_gen').innerHTML = qr_gen;
  }

  function showQRScanned(id) {
    var qr_scan =  "<table class='table table-hover text-nowrap'>"+
                        "<thead>"+
                            "<tr>"+
                                "<th>ID</th>"+
                                "<th>QR ID</th>"+
                                "<th>Scanned On</th>"+
                                "<th>Scanned By</th>"+
                                "<th>Email</th>"+
                                "<th>Phone</th>"+
                                "<th>Actions</th>"+
                            "</tr>"+
                        "</thead>"+
                        "<tbody>"+
                            "<tr>"+
                                "<td>1</td>"+
                                "<td>585</td>"+
                                "<td>11-7-2014</td>"+
                                "<td>Imran</td>"+
                                "<td>imran@gmail.com</td>"+
                                "<td>9876543210</td>"+
                                "<td>"+
                                    "<a href='#'>"+
                                        "<i class='fas fa-download'></i> Download"+
                                    "</a>"+
                                "</td>"+
                            "</tr>"+
                        "</tbody>"+
                    "</table>";
    
    document.getElementById('qr_scan').innerHTML = qr_scan;
  }
  
  function showAdminCreate() {
        document.getElementById('create-admin-title').innerHTML = 'Create Sub Admin';
        document.getElementById('inName').value = '';
        document.getElementById('inRegion').value = '';
        document.getElementById('inPhone').value = '';
        document.getElementById('inEmail').value = '';
        document.getElementById('inPassword').value = '';
        
        $('#modal-admin').modal('toggle');
  }

  function showAdminEdit(user_id) {
        document.getElementById('create-admin-title').innerHTML = 'Edit Sub Admin';
        document.getElementById('inName').value = 'Imran Khan';
        document.getElementById('inRegion').value = 'Aurangabad';
        document.getElementById('inPhone').value = '9876543210';
        document.getElementById('inEmail').value = 'imran@qr.com';
        document.getElementById('inPassword').value = 'imran123';
        $('#modal-admin').modal('toggle');
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

  function showAdminDeactivate(user_id, name) {
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

