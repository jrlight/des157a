  (function(){
        "use strict"
        console.log('reading js');
        
        // const body = document.querySelector('#bodyImg');
        const hotSpots = document.querySelectorAll('#hotspots div');        
        const theImg = document.querySelector('#bodyImg img');
        let currentSpot;
        let currentSpotId;
        let currentDesc;
        let movingMouse;

        console.log(hotSpots);

        function highlightItem(event){
            currentSpot = event.target;
            currentSpotId = event.target.id;
            switch (currentSpotId){
                case 'skeleton': theImg.src = 'images/skeletonSceneV1cropped.jpg';
                    theImg.style.cursor = 'pointer';
                    break;
                case 'hefty': theImg.src = 'images/heftySceneV1cropped.jpg';
                    break;
                case 'erasers': theImg.src = 'images/erasersSceneV1cropped.jpg';
                    break;
                case 'hand': theImg.src = 'images/handSceneV1cropped.jpg';
                    break;
                case 'creamsicle': theImg.src = 'images/creamsicleSceneV1cropped.jpg';
                    break;
                case 'lorax': theImg.src = 'images/loraxSceneV1cropped.jpg';
                    break;
                case 'doggie': theImg.src = 'images/doggieSceneV1cropped.jpg';
                    break;
                case 'frame': theImg.src = 'images/frameSceneV1cropped.jpg';
                    break;
                case 'glug': theImg.src = 'images/glugSceneV1cropped.jpg';
                    break;
                case 'cowdragon': theImg.src = 'images/cowdragonSceneV1cropped.jpg';
                    break;
                case 'babybear': theImg.src = 'images/babybearSceneV1cropped.jpg';
                    break;
                case 'center': theImg.src = 'center';
                    break;
            }
            currentSpot.addEventListener('click', zoomPhoto);           
        }

        function zoomPhoto(event) {
            currentSpotId = event.target.id;
            console.log(`zooming into ${currentSpotId}`);
            currentDesc = document.querySelector(`#${currentSpotId}Desc`);
            switch (currentSpotId){
                case 'skeleton': theImg.className = 'skeleton';
                    currentDesc.style.display = 'block';
                    break;
                case 'hefty': theImg.className = 'hefty';
                    currentDesc.style.display = 'block';
                    break;
                case 'erasers': theImg.className = 'erasers';
                    currentDesc.style.display = 'block';
                    break;
                case 'hand': theImg.className = 'hand';
                    currentDesc.style.display = 'block';
                    break;
                case 'creamsicle': theImg.className = 'creamsicle';
                    currentDesc.style.display = 'block';
                    break;
                case 'lorax': theImg.className = 'lorax';
                    currentDesc.style.display = 'block';
                    break;
                case 'doggie': theImg.className = 'doggie';
                    currentDesc.style.display = 'block';
                    break;
                case 'frame': theImg.className = 'frame';
                    currentDesc.style.display = 'block';
                    break;
                case 'glug': theImg.className = 'glug';
                    currentDesc.style.display = 'block';
                    break;
                case 'cowdragon': theImg.className = 'cowdragon';
                    currentDesc.style.display = 'block';
                    break;
                case 'babybear': theImg.className = 'babybear';
                    currentDesc.style.display = 'block';
                    break;
                case 'center': theImg.className = 'center';
                    currentDesc.style.display = 'block';
                    break;
            }
        }

        hotSpots.forEach(function(eachSpot){
            eachSpot.addEventListener('mouseover', highlightItem);            

            eachSpot.addEventListener('mouseout', function(){
                currentSpotId = 'out';
                theImg.src = 'images/sceneV1cropped.jpg';
            })
        });

        // document.addEventListener('mousemove', function(){
        //     clearTimeout(movingMouse);
        //     if(currentSpotId === 'out'){
        //         movingMouse = setTimeout(function(){
        //             theImg.className = 'fullview';
        //             console.log('zooming out!');
        //         }, 1000);
        //     }
        // });

        const backBtns = document.querySelectorAll('.back');
        
        backBtns.forEach(function(back){
            back.addEventListener('click', function(event){
                event.preventDefault();
                currentDesc.style.display = 'none';
            });
        });

    })();