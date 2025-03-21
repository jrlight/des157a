  (function(){
        "use strict"
        console.log('reading js');
        
        const hotSpots = document.querySelectorAll('area');        
        const theImg = document.querySelector('#bodyImg img');
        let currentSpot;
        let movingMouse;

        console.log(hotSpots);

        const test = document.querySelector('#hefty');
        console.log(test);
        

        hotSpots[0].addEventListener('mouseover', function(){
            console.log('you went over me');
        });

        hotSpots[1].addEventListener('mouseover', function(){
            console.log('you went over me');
        });

        hotSpots[3].addEventListener('mouseover', function(){
            console.log('you went over me');
        });
        //^ for debugging, did not get this to trigger

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