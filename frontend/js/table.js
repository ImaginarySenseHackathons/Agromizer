$(document).ready(function() { //Inicio
  var myTable = $('#myTable').DataTable();

  $('#myTable tbody').on( 'click', 'tr', function () {
    $(this).toggleClass('selected');
  });
      
  //Contar filas seleccionadas
  $('#btnValoresSeleccionados').click(function() {
    //alert(myTable.rows().data().length+' row(s) selected' );
    
    //Recorre las filas de la tabla
    $('#myTable tbody tr').each(function(indexFila){
      //verifica si  la fila seleccionada tiene la clase 'selected'  
      if($(this).hasClass('selected')) { 
				alert("La fila: "+indexFila+" se ha seleccionado");
			}
      //Recorre las columnas de la tabla
      $(this).children('td').each(function(indexColumna){
        if(indexColumna==3){
          campo1=$(this).text()
          alert(campo1+" :children");
        };
      });
    });//fin de '#myTable tbody tr'

  });//fin (btnSeleccionados)
  // alert(myTable.rows('.selected').data().length+' row(s) selected' );

  //Obtener valor de las filas a las que se hace click
  var myFila= myTable.row( this ).data(); //Obtiene datos de una fila
  $.each(myFila,function(index, contenido) { //Recorre un array
     if(index==2) {
        alert(contenido);
     };
  }); 

} );//Fin