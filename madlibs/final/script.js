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
    console.log(allInputs.length);

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
        }
    });

})();
