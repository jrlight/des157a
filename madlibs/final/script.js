(function(){
    "use strict"
    console.log('reading js');

    const inputs = document.querySelector('#inputs');
    const madLib = document.querySelector('#madlib');
    const postIt = document.querySelector('#postIt');

    const formPg1 = document.querySelector('#formPg1');
    const formPg2 = document.querySelector('#formPg2');
    const form = document.querySelector('form');

    const navs = document.querySelectorAll('.nav');
    const pg1next = navs[0];
    const pg2prev = navs[1];
    const pg2submit = navs[2];
    const pg3tryAgain = navs[3];

    const allInputs = form.elements;    

    let emptyCounter = 0;
    console.log(emptyCounter);


    pg1next.addEventListener('click', function(event){
        event.preventDefault;
        
        formPg1.className = 'hidden';
        formPg2.className = 'shown';
    });

    pg2prev.addEventListener('click', function(event){
        event.preventDefault;
        
        formPg2.className = 'hidden';
        formPg1.className = 'shown';
    });

    form.addEventListener('submit', function(event){
        event.preventDefault;
        
        console.log('i ran!');

        for(let i = 0; i<allInputs.length; i++){
            if(allInputs[i] === '' || allInputs[i] === null){
                emptyCounter++;
            }
        }

        if (emptyCounter === 1){
            postIt.children[0].className = 'hidden';
            postIt.children[2].className = 'shown';
            
        }
        else if(emptyCounter > 1){
            postIt.children[0].className = 'hidden';
            postIt.children[1].className = 'shown';

        }
        else{
            inputs.className = 'hidden';
            madLib.className = 'shown';

            const allValues = document.querySelectorAll('input[type="text"]');
            
            //these ones are use multiple times so i'm naming them
            const fam = allValues[0].value;
            const newJob = allValues[8].value;
            const action = allValues[13].value;
            const goodAdj = allValues[14].value;
            const oddName = allValues[15].value;
            const badAdj = allValues[16].value;

            const set = document.querySelector('#set');
            const madLibPs = [document.createElement('p'), document.createElement('p'), document.createElement('p'), document.createElement('p'), document.createElement('p')];

            const pTexts = [
                document.createTextNode(`So my ${fam} is an ${allValues[1].value}. It’s pretty ${allValues[2].value}. The thing is, nowadays she doesn’t spend her time ${allValues[3].value} at ${allValues[4].value}, and instead spends her time ${allValues[5].value} at ${allValues[6].value} ${allValues[7].value} ${allValues[8].value}.`),

                document.createTextNode(`…She’s now a ${newJob} of ${allValues[10].value} and ${allValues[11].value}.`),

                document.createTextNode(` Now, that means I can look her up on RateMy${newJob}. It’s very ${allValues[12].value}, cuz then I can ${action} at all the ${goodAdj} reviews and go “THAT’S MY ${fam} YOU ${oddName}!” And then I ${action} at the ${badAdj} reviews and I’m like “aww, that’s my ${fam}, you ${oddName} ^-^”`),

                document.createTextNode(`Now, she has a lot of ${goodAdj} reviews— not to brag, but her average is over ${allValues[17].value} stars.`),

                document.createTextNode(`But I was reading this one ${badAdj} review and it starts off “She will ${allValues[18].value} you for ${allValues[19].value} ${allValues[20].value} about ‘what has already been ${allValues[21].value}”, to which I was like “........ I can see it. As someone who was ${allValues[22].value} by this ${allValues[23].value}..... I can see it.”`)
            ];

            for(let i = 0; i < pTexts.length; i++){
                madLibPs[i].appendChild(pTexts[i]);
            }

            for(let i = 0; i < madLibPs.length; i++){
                set.appendChild(madLibPs[i]);
            }

            //clear values from form
            for(const element of allValues){
                element.value = '';
            }
        }
    });

})();
