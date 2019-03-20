"use strict";

$(()=>{
    $.get("https://michiganelections.io/api/proposals/?active_election=false&election_id=&format=json&precinct_county=&precinct_id=1217&precinct_jurisdiction=&precinct_number=&precinct_ward=", (data)=>{
        console.log(data);
        let n=0;
        const proposalCount = data.count;
        $.each(data.results, function (n){
            let propNumber = data.results[n].name;
            let propDescription = data.results[n].description;
            console.log(`${proposalCount}, ${propNumber}, ${propDescription}`);
            $("#flex-columns").append(`<div class="proposal" id="prop${n}-box"></div>`);
            $(`#prop${n}-box`).append(`<h1 id="prop${n}-title">Proposal ${propNumber}</h1>`);
            $(`#prop${n}-box`).append(`<p id="prop${n}-description">${propDescription}</p>`);

            /*
                I'm going to need to split propDescription by \n and style lines that way
                -assuming that the # of new lines are consistent.
            */
        });
    })
});
