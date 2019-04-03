"use strict";

$(()=>{
    $.get("https://michiganelections.io/api/proposals/?active_election=false&election_id=&format=json&precinct_county=&precinct_id=5980&precinct_jurisdiction=&precinct_number=&precinct_ward=", (data)=>{

        $.each(data.results, function (n){
            let propNumber = data.results[n].name;
            let propDescriptionArray = data.results[n].description.split("\n");
            let propSummary = propDescriptionArray.shift();

            // $("#columns").append(`<div class="prop-box" id="prop${n}-box"></div>`);
            $("#columns").append(`<br>`);
            $("#columns").append(`<h1 class="prop-title" id="prop${n}-title">Proposal ${propNumber}</h1><br>`);
            $("#columns").append(`<h1 class="prop-description padding" id="prop${n}-description">${propSummary}</h1>`);
            $("#columns").append(`<p class="prop-explanation padding" id="prop${n}-explanation">${propDescriptionArray.join("\n")}</p>`);
            $("#columns").append(`<br><div class="flex-wrapper"><h2 class="yes-no">YES   <div class="oval"></p></h2></div>`);
            $("#columns").append(`<div class="flex-wrapper"><h2 class="yes-no">NO   <div class="oval"></p></h2></div>`);
            $("#columns").append(`<hr class="line-break">`);
        });
    })
});