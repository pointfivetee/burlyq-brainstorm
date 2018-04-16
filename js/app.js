var app = {grammar : undefined};

$(document).ready(function() {

    const NUM_ACTS = 1;
    
    function loadGrammar() {
        $("#output").html("");

        app.grammar = tracery.createGrammar(burlyqGrammar);

        var grammar = app.grammar;
        grammar.addModifiers(baseEngModifiers);
        
        var total = NUM_ACTS;
        
        for (var i = 0; i < total; i++) {
            
            var s = grammar.flatten("#origin#");
            var div = $("<div/>", {
                class : "outputSample",
                html : s
            });
            
            $("#output").append(div);
            
        };
    }

    setTimeout(function() {
        loadGrammar();

    }, 10);

    $('.refresh-link').on('click', function() {
        loadGrammar();
    });

});
