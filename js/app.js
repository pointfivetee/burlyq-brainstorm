var app = {grammar : undefined};

$(document).ready(function() {

    const NUM_ACTS = 1;
    
    function loadGrammar() {
        $("#output").html("");

        app.grammar = tracery.createGrammar(burlyqGrammar);

        var grammar = app.grammar;
        grammar.addModifiers(baseEngModifiers);
        
        var total = NUM_ACTS;
        
        var startTime = Date.now();
        for (var i = 0; i < total; i++) {
            
            var s = grammar.flatten("#origin#");
            console.log(s);
            var div = $("<div/>", {
                class : "outputSample",
                html : s
            });
            
            $("#output").append(div);
            
        };
        var totalTime = Date.now() - startTime;
        console.log("Produced " + total + " texts in " + totalTime + " ms.");

        console.log(grammar);
        var holder = $("#visualization .holder");
        grammar.distributionVisualization(holder);

        // $("#grammar").html(grammar.toText());

    }

    setTimeout(function() {
        loadGrammar();

    }, 10);

    $('.refresh-link').on('click', function() {
        loadGrammar();
    });

});
