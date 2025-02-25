  (function(){
        "use strict"
        console.log('reading js');
        
        const hotSpots = document.querySelectorAll('#hotspots div');
        const theImg = document.querySelector('#bodyImg img');
        let currentSpot;
        let movingMouse;

        function zoomPhoto(event) {
            currentSpot = event.target.id;
            console.log(`zooming into ${currentSpot}`);
            switch (currentSpot){
                case 'skeleton': theImg.className = 'skeleton';
                    break;

                case 'center': theImg.className = 'center';
                    break;
            }
        }

        hotSpots.forEach(function(eachSpot){
            eachSpot.addEventListener('mouseover', zoomPhoto);

            eachSpot.addEventListener('mouseout', function(){
                currentSpot = 'out';
                console.log(currentSpot);
            })
        });

        document.addEventListener('mousemove', function(){
            clearTimeout(movingMouse);
            if(currentSpot === 'out'){
                movingMouse = setTimeout(function(){
                    theImg.className = 'fullview';
                    console.log('zooming out!');
                }, 1000);
            }
        });

    })();