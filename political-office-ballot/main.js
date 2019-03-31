"use strict";

$(()=>{
    $.get("http://michiganelections.io/api/positions/?active_election=false&election_id=&format=json&precinct_county=&precinct_id=1217&precinct_jurisdiction=&precinct_number=&precinct_ward=", (data)=>{
        console.log(data);
        $.each(data.results, function (n){
            let child = $(this)[n];  // right now this is just the first child of data..?
            let office = $(this)[n].name; // Political office being run for
            let candidateArray = $(this)[n].candidates; // returns array of objects, length 10, (5 undefined), each child contains .name .party
            let candidateNameArray = [];  // array of candidate names
            let candidatePartyArray = []; // corresponding array of candidate party affiliation
                candidateArray.forEach(child => {
                    if (child!==undefined){  // filters out undefined children from the API
                        candidateNameArray.push(child.name);
                        candidatePartyArray.push(child.party.name);
                    }
                });
            

            console.warn(child);
            console.log(office);  // good
            console.warn(candidateArray);
            console.log(candidateNameArray);
            console.warn(candidatePartyArray);
            // $("#flex-columns").append(`<div class="prop-box" id="prop${n}-box"></div>`);
            // $(`#prop${n}-box`).append(`<h1 class="prop-title" id="prop${n}-title">Proposal ${propNumber}</h1><br>`);
            // $(`#prop${n}-box`).append(`<h1 class="prop-description" id="prop${n}-description">${propSummary}</h1>`);
            // $(`#prop${n}-box`).append(`<p class="prop-explanation" id="prop${n}-explanation">${propDescriptionArray.join("\n")}</p>`);
        });
    })
});