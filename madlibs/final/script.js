(function(){
    "use strict"
    console.log('reading js');

    const inputs = document.querySelector('#inputs');
    const madLib = document.querySelector('#madlib');

    const formPg1 = document.querySelector('#formPg1');
    const formPg2 = document.querySelector('#formPg2');
    const form = document.querySelector('form');

    const navs = document.querySelectorAll('.nav');
    const pg1next = navs[0];
    const pg2prev = navs[1];
    const pg2submit = navs[2];
    const pg3tryAgain = navs[3];

    pg1next.addEventListener('click', function(event){
        event.preventDefault;
        formPg1.classname = 'hidden';
        formPg2.classname = 'shown';
        console.log('i was clicked');
    });

    form.addEventListener('submit', function(event){
        event.preventDefault;

        

        pg1.classname = 'hidden';
        pg2.classname = 'hidden';

    });

})();
