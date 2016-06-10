jQuery(document).ready(function ($) {
	$('#tabs').tab();
	ConnectionHelper.init();
	Renderer.init();
	Renderer.initNavMenu();

    /** 
        Case insensitive search
        Source: http://css-tricks.com/snippets/jquery/make-jquery-contains-case-insensitive/
     **/
  
    $.expr[":"].contains = $.expr.createPseudo(function(arg) {
        return function( elem ) {
            return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
        };
    });
	
    if (location.protocol.indexOf('http') >= 0) { // Auto connect
        $('#name').val(location.hostname);
        $('#ajaxEndPoint').val(location.origin);
        $('#socketEndPoint').val('ws://' + location.hostname + ':9090');
        Renderer.loadSourceFromNewForm();
    }

    //TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
    //Auto connect using the connection's form default values
    //Renderer.loadSourceFromNewForm();
    //TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
});