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
      showIndiaPricing();
});

function showIndiaPricing() {
    var finance = "<table class='table table-hover text-nowrap'>"+
                    "<thead>"+
                        "<tr>"+
                            "<th>ID</th>"+
                            "<th>Name</th>"+
                            "<th>Plan</th>"+                           
                            "<th>Amount</th>"+
                            "<th>Actions</th>"+
                        "</tr>"+
                    "</thead>"+
                    "<tbody>"+
                        "<tr>"+
                            "<td>1</td>"+
                            "<td>Imran Khan</td>"+
                            "<td>Free</td>"+
                            "<td>INR 0</td>"+
                            "<td>"+
                                "<a href='javascript:edit(\""+1+"\")'>"+
                                    "<i class='fas fa-eye'></i> View"+
                                "</a>"+
                            "</td>"+
                        "</tr>"+
                        "<tr>"+
                            "<td>2</td>"+
                            "<td>Zubair</td>"+
                            "<td>Monthly</td>"+                           
                            "<td>INR 700</td>"+
                            "<td>"+
                                "<a href='javascript:edit(\""+1+"\")'>"+
                                    "<i class='fas fa-eye'></i> View"+
                                "</a>"+
                            "</td>"+
                        "</tr>"+
                            "<td>3</td>"+
                            "<td>Neel</td>"+
                            "<td>Annual</td>"+                           
                            "<td>INR 7000</td>"+
                            "<td>"+
                                "<a href='javascript:edit(\""+1+"\")'>"+
                                    "<i class='fas fa-eye'></i> View"+
                                "</a>"+
                            "</td>"+
                        "</tr>"+
                    "</tbody>"+
                "</table>";
    document.getElementById('finance-data').innerHTML = finance;
  }




