var dateStart = null;
var dateEnd = null;
$(document).ready(function(){

    $(function() {

        var start = moment().subtract(3, 'days');
        var end = moment();
    
        function cb(start, end) {
            $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
            dateStart =  start.format('YYYY-MM-DD')+" 00:00:00";
            dateEnd = end.format('YYYY-MM-DD')+" 23:59:59.999999";
        }
    
        $('#reportrange').daterangepicker({
            startDate: start,
            endDate: end,
            ranges: {
               'Today': [moment(), moment()],
               'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
               'Last 7 Days': [moment().subtract(6, 'days'), moment()],
               'Last 30 Days': [moment().subtract(29, 'days'), moment()],
               'This Month': [moment().startOf('month'), moment().endOf('month')],
               'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        }, cb);
    
        cb(start, end);
    
      });
  
      document.getElementById('select-country').value = "India";
      showQRScanned();
      showQRGenerated()

});

function showQRGenerated() {
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

  function showQRScanned() {
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



