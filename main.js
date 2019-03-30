"use strict";

$(()=>{
    $.get("https://michiganelections.io/api/proposals/?active_election=false&election_id=&format=json&precinct_county=&precinct_id=1217&precinct_jurisdiction=&precinct_number=&precinct_ward=", (data)=>{

        $.each(data.results, function (n){
            let propNumber = data.results[n].name;
            let propDescriptionArray = data.results[n].description.split("\n");
            let propSummary = propDescriptionArray.shift();

            $("#flex-columns").append(`<div class="prop-box" id="prop${n}-box"></div>`);
            $(`#prop${n}-box`).append(`<h1 class="prop-title" id="prop${n}-title">Proposal ${propNumber}</h1><br>`);
            $(`#prop${n}-box`).append(`<h1 class="prop-description" id="prop${n}-description">${propSummary}</h1>`);
            $(`#prop${n}-box`).append(`<p class="prop-explanation" id="prop${n}-explanation">${propDescriptionArray.join("\n")}</p>`);
        });
    })
});
