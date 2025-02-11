(function(){
    "use strict"
    console.log('reading js');

    const inputs = document.querySelector('#inputs');
    const madLib = document.querySelector('#madlib');

    const formPg1 = document.querySelector('#formPg1');
    const formPg2 = document.querySelector('#formPg2');

    formPg1.addEventListener('submit', function(event){
        event.preventDefault;

        

        pg1.classname = 'hidden';
        pg2.classname = 'shown';

    });

    // document.querySelector('#send-pg1').addEventListener('click', function(event){
    //     event.preventDefault;

    // });

})();
