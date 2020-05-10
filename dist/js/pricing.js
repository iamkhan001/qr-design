var dateStart = null;
var dateEnd = null;
$(document).ready(function(){

      showIndiaPricing();
      showInternaltionPricing()

});

function showIndiaPricing() {
    var view_india = "<table class='table table-hover text-nowrap'>"+
                    "<thead>"+
                        "<tr>"+
                            "<th>ID</th>"+
                            "<th>Plan</th>"+
                            "<th>Total Space</th>"+
                            "<th>Max QRs</th>"+
                            "<th>Validity</th>"+
                            "<th>Price</th>"+
                            "<th>Actions</th>"+
                        "</tr>"+
                    "</thead>"+
                    "<tbody>"+
                        "<tr>"+
                            "<td>1</td>"+
                            "<td>Free</td>"+
                            "<td>5 MB</td>"+
                            "<td>1</td>"+
                            "<td>1 Day</td>"+
                            "<td>INR 0</td>"+
                            "<td>"+
                                "<a href='javascript:edit(\""+1+"\")'>"+
                                    "<i class='fas fa-edit'></i> Edit"+
                                "</a>"+
                            "</td>"+
                        "</tr>"+
                        "<tr>"+
                            "<td>2</td>"+
                            "<td>Monthly</td>"+
                            "<td>300 MB</td>"+
                            "<td>20</td>"+
                            "<td>30 Day</td>"+
                            "<td>INR 700</td>"+
                            "<td>"+
                                "<a href='javascript:edit(\""+1+"\")'>"+
                                    "<i class='fas fa-edit'></i> Edit"+
                                "</a>"+
                            "</td>"+
                        "</tr>"+
                        "<tr>"+
                        "<td>3</td>"+
                        "<td>Annual</td>"+
                        "<td>1 GB</td>"+
                        "<td>200</td>"+
                        "<td>365 Day</td>"+
                        "<td>INR 7000</td>"+
                        "<td>"+
                            "<a href='javascript:edit(\""+1+"\")'>"+
                                "<i class='fas fa-edit'></i> Edit"+
                            "</a>"+
                        "</td>"+
                    "</tr>"+
                    "</tbody>"+
                "</table>";
    document.getElementById('view_india').innerHTML = view_india;
  }

  function showInternaltionPricing() {
    var view_international =   "<table class='table table-hover text-nowrap'>"+
                                "<thead>"+
                                    "<tr>"+
                                        "<th>ID</th>"+
                                        "<th>Plan</th>"+
                                        "<th>Total Space</th>"+
                                        "<th>Max QRs</th>"+
                                        "<th>Validity</th>"+
                                        "<th>Price</th>"+
                                        "<th>Actions</th>"+
                                    "</tr>"+
                                "</thead>"+
                                "<tbody>"+
                                    "<tr>"+
                                        "<td>1</td>"+
                                        "<td>Free</td>"+
                                        "<td>5 MB</td>"+
                                        "<td>1</td>"+
                                        "<td>1 Day</td>"+
                                        "<td>USD 0</td>"+
                                        "<td>"+
                                            "<a href='javascript:edit(\""+1+"\")'>"+
                                                "<i class='fas fa-edit'></i> Edit"+
                                            "</a>"+
                                        "</td>"+
                                    "</tr>"+
                                    "<tr>"+
                                        "<td>2</td>"+
                                        "<td>Monthly</td>"+
                                        "<td>300 MB</td>"+
                                        "<td>20</td>"+
                                        "<td>30 Day</td>"+
                                        "<td>USD 10</td>"+
                                        "<td>"+
                                            "<a href='javascript:edit(\""+1+"\")'>"+
                                                "<i class='fas fa-edit'></i> Edit"+
                                            "</a>"+
                                        "</td>"+
                                    "</tr>"+
                                    "<tr>"+
                                    "<td>3</td>"+
                                    "<td>Annual</td>"+
                                    "<td>1 GB</td>"+
                                    "<td>200</td>"+
                                    "<td>365 Day</td>"+
                                    "<td>USD 100</td>"+
                                    "<td>"+
                                        "<a href='javascript:edit(\""+1+"\")'>"+
                                            "<i class='fas fa-edit'></i> Edit"+
                                        "</a>"+
                                    "</td>"+
                                "</tr>"+
                                "</tbody>"+
                            "</table>";
    
    document.getElementById('view_international').innerHTML = view_international;
  }

  function edit(id) {
      console.log('id: '+id);
      document.getElementById('inSpace').value = '5';
      document.getElementById('inQR').value = '1';
      document.getElementById('inValidity').value = '1';
      document.getElementById('inPrice').value = '1';
      $('#modal-plan').modal('toggle');
  }


