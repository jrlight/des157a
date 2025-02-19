(function(){
    'use strict';
    console.log('reading js');

    const container = document.querySelector('#container');
    const zoomSpots = document.querySelectorAll('#container div');
    const theImg = document.querySelector('div img');

    zoomSpots[0].addEventListener('mouseover', zoomPhoto);
    zoomSpots[0].addEventListener('mouseout', function(){
        theImg.className = 'fullview';
    });

    function zoomPhoto(event) {
        const thisSpot = event.target.id;
        switch(thisSpot){
            case 'poop': theImg.className='poop';
                break;
        }
    }


})();