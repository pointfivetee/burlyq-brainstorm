var app = {grammar : undefined};

$(document).ready(function() {
    
    function loadGrammar() {
        $("#output").html("");

        app.grammar = tracery.createGrammar(burlyqGrammar);

        var grammar = app.grammar;
        grammar.addModifiers(baseEngModifiers);
        
        var total = 20;
        
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

    $('#grammarSelect').on('change', function() {
        loadGrammar(this.value);
    });

});
