"use strict";

$(()=>{
    $.get("https://michiganelections.io/api/proposals/?active_election=false&election_id=&format=json&precinct_county=&precinct_id=1217&precinct_jurisdiction=&precinct_number=&precinct_ward=", (data)=>{
        console.log(data);
        const proposalCount = data.count;
        $.each(data.results, function (n){
            let propNumber = data.results[n].name;
            let propDescription = data.results[n].description;
            let propDescriptionArray = data.results[n].description.split("\n");
            let propSummary = propDescriptionArray.shift();

            console.warn(`${propDescriptionArray.length}`);
            console.log(`${propNumber},\n ${propDescription},\n ${propDescriptionArray[0]}`);

        // this is what I'm currently working on:

            function appendTheDescriptionParagraph(){
                if (n=i){
                    let i = 1;
                    while (i<propDescriptionArray.length) {
                        $(`#prop${n}-box`).append(`<p id="prop${n}-description">${propDescriptionArray[i]}</p>`);
                    };
                }
            // What i want this to do is append all of propDecriptionArray sans [0]

            };

            $("#flex-columns").append(`<div class="prop-box" id="prop${n}-box"></div>`);
            $(`#prop${n}-box`).append(`<h1 class="prop-title" id="prop${n}-title">Proposal ${propNumber}</h1><br>`);
            // $(`#prop${n}-box`).append(`<h1 id="prop${n}-description">${propDescriptionArray[0]}</h1>`);
            $(`#prop${n}-box`).append(`<h1 class="prop-description" id="prop${n}-description">${propSummary}</h1>`);
            // $(`#prop${n}-box`).append(`<p id="prop${n}-explanation">${propDescription}</p>`);
            $(`#prop${n}-box`).append(`<p class="prop-explanation" id="prop${n}-explanation">${propDescriptionArray.join("\n")}</p>`);


            // .css("font-size", "1.5em").css("text-align", "center").css("font-weight", "900");
    
    
            /*
                I'm going to need to split propDescription by \n and style lines that way
                -assuming that the # of new lines are consistent.
            */
        });
    })
});
