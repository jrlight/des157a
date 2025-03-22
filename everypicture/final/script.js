  (function(){
        "use strict"
        console.log('reading js');
        
        const hotSpots = document.querySelectorAll('#hotspots div');        
        const theImg = document.querySelector('#bodyImg img');
        let currentSpot;
        let currentSpotId;
        let currentDesc;
        let endgameNow = false;
        let itemTracker = [false, false, false, false, false, false, false, false, false, false, false];

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
            }
            currentSpot.addEventListener('click', zoomPhoto);           
        }

        function zoomPhoto(event) {
            currentSpotId = event.target.id;
            console.log(`zooming into ${currentSpotId}`);
            currentDesc = document.querySelector(`#${currentSpotId}Desc`);
            theImg.style.width = '2500px';
            switch (currentSpotId){
                case 'skeleton': theImg.className = 'skeleton';
                    currentDesc.style.display = 'block';
                    itemTracker[0] = true;
                    break;
                case 'hefty': theImg.className = 'hefty';
                    currentDesc.style.display = 'block';
                    itemTracker[1] = true;
                    break;
                case 'erasers': theImg.className = 'erasers';
                    currentDesc.style.display = 'block';
                    itemTracker[2] = true;
                    break;
                case 'hand': theImg.className = 'hand';
                    currentDesc.style.display = 'block';
                    itemTracker[3] = true;
                    break;
                case 'creamsicle': theImg.className = 'creamsicle';
                    currentDesc.style.display = 'block';
                    itemTracker[4] = true;
                    break;
                case 'lorax': theImg.className = 'lorax';
                    currentDesc.style.display = 'block';
                    itemTracker[5] = true;
                    break;
                case 'doggie': theImg.className = 'doggie';
                    currentDesc.style.display = 'block';
                    itemTracker[6] = true;
                    break;
                case 'frame': theImg.className = 'frame';
                    currentDesc.style.display = 'block';
                    itemTracker[7] = true;
                    break;
                case 'glug': theImg.className = 'glug';
                    currentDesc.style.display = 'block';
                    itemTracker[8] = true;
                    break;
                case 'cowdragon': theImg.className = 'cowdragon';
                    currentDesc.style.display = 'block';
                    itemTracker[9] = true;
                    break;
                case 'babybear': theImg.className = 'babybear';
                    currentDesc.style.display = 'block';
                    itemTracker[10] = true;
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

        const backBtns = document.querySelectorAll('.back');
        
        backBtns.forEach(function(back){
            back.addEventListener('click', function(event){
                event.preventDefault();
                currentDesc.style.display = 'none';
                zoomOut();
                if(endgameNow === false){
                    checkItems(itemTracker);
                }
            });
        });

        function zoomOut(){
            theImg.className = 'fullview';
            theImg.style.width = '1100px';
        }

        function checkItems(itemTracker){
            //i'm sure there's MUCH better ways of doing this but i'm tired and this works
            if(itemTracker[0]){
                if(itemTracker[1]){
                    if(itemTracker[2]){
                        if(itemTracker[3]){
                            if(itemTracker[4]){
                                if(itemTracker[5]){
                                    if(itemTracker[6]){
                                        if(itemTracker[7]){
                                            if(itemTracker[8]){
                                                if(itemTracker[9]){
                                                    if(itemTracker[10]){
                                                        shadowAnnouncement();
                                                        endgameNow = true;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        function shadowAnnouncement() {
            currentDesc = document.querySelector('#announcement')
            currentDesc.style.display = 'block';
            shadowclickable();
        }

        function shadowclickable(){
            hotSpots[12].addEventListener('mouseover', function(event){
                currentSpot = event.target;
                currentSpotId = event.target.id;
                theImg.src = 'images/shadowSceneV1cropped.jpg';
                
                currentSpot.addEventListener('click', function(event){
                    currentDesc = document.querySelector(`#${currentSpotId}Desc`);
                    currentDesc.style.display = 'block';
                });
            })
        }
    })();