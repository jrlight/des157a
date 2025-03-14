(function(){
    'use strict'
    console.log('reading JS');

    //vars
    const startGame = document.querySelector('#startGame');
    const gameControl = document.querySelector('#gameControl');
    const whoseTurn = document.querySelector('#dice div h2');
    const shownLetters = document.querySelectorAll('span.letters')
    const diceContainers = document.querySelectorAll('.diceRoll span');
    const actionArea = document.querySelector('#actions');
    const announcements = document.querySelector('#announcements')
    const dribble = new Audio('audio/oneDribble.m4a')
    const thunk = new Audio('audio/thunk.m4a')

    //objects
    const gameData = {
        dice: ['d1.svg', 'd2.svg', 'd3.svg', 'd4.svg', 'd5.svg', 'd6.svg'],
        players: ['P1', 'P2'],
        score: [0,0],
        currentLetterIndex: [0,0],
        letters: ['p.', 'i.', 'g.'],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        prevRollSum: 0,
        index: 0,
        gameEnd: 29
    };
    
    //events
    startGame.addEventListener('click', function(){
        //random player start (gameData.index)
        gameData.index = Math.round(Math.random());
        // console.log(gameData.index);
        

        gameControl.innerHTML = '<button id="quit">Wanna Quit?</button>';

        document.querySelector('#quit').addEventListener('click', function(){
            location.reload();
        });

        // console.log('set up the turn');
        setUpTurn();
    })

    //functions
    function setUpTurn(){
        whoseTurn.innerHTML = `<p>${gameData.players[gameData.index]}'s turn</p>`;
        actionArea.innerHTML = '<button id="roll">Take your shot!</button>';
        document.querySelector('#roll').addEventListener('click', function(){
            freeShot();  
        })
    }

    function setUpShotContest(){
        whoseTurn.innerHTML = `<p>${gameData.players[gameData.index]}'s turn</p>`;
        actionArea.innerHTML = '<button id="roll">Take your shot!</button>';
        document.querySelector('#roll').addEventListener('click', function(){
            shotContest();  
        })
    }

    function freeShot(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random()*6)+ 1;
        gameData.roll2 = Math.floor(Math.random()*6)+ 1;
        whoseTurn.innerHTML = `<p>${gameData.players[gameData.index]}'s turn</p>`;

        diceContainers[gameData.index].innerHTML = `<img src="images/${gameData.dice[(gameData.roll1 - 1)]}"> <img src="images/${gameData.dice[(gameData.roll2 - 1)]}"> `;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        if((gameData.rollSum % 3) == 0){ 
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            //^ this switches the index: if index is 1 (truthy), its changed to 0; if index is 0 (falsey), its changed to 1
            whoseTurn.innerHTML += `<p>Made it!</p>`;
            dribble.play();
            gameData.prevRollSum = gameData.rollSum;
            setTimeout(setUpShotContest, 1000);
        }
        else{
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            //^ this switches the index: if index is 1 (truthy), its changed to 0; if index is 0 (falsey), its changed to 1
            whoseTurn.innerHTML += `<p>Missed!</p>`;
            thunk.play();
            setTimeout(setUpTurn, 1000);
        }
        
            // checkWinningCondition();
        
        // console.log(gameData.score[gameData.index]);
    }
    
    function shotContest(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random()*6)+ 1;
        gameData.roll2 = Math.floor(Math.random()*6)+ 1;
        whoseTurn.innerHTML = `<p>${gameData.players[gameData.index]}'s turn</p>`;

        diceContainers[gameData.index].innerHTML = `<img src="images/${gameData.dice[(gameData.roll1 - 1)]}" alt="${gameData.roll1}"> <img src="images/${gameData.dice[(gameData.roll2 - 1)]}" alt="${gameData.roll1}"> `;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        if(gameData.rollSum > gameData.prevRollSum){
            whoseTurn.innerHTML += `<p>Made it!</p>`;
            dribble.play();

            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            setTimeout(setUpTurn, 1000);
        }
        else{
            whoseTurn.innerHTML += `<p>Missed!</p>`;
            thunk.play();

            shownLetters[gameData.index].innerHTML += gameData.letters[gameData.currentLetterIndex[gameData.index]];
            gameData.currentLetterIndex[gameData.index] += 1;
            if(gameData.currentLetterIndex[gameData.index] > 2){
                youWon();
            }
            else{
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setTimeout(setUpTurn, 1000);
            }
        }
        
            // checkWinningCondition();
        
        // console.log(gameData.score[gameData.index]);
    }

    function youWon(){
        gameData.index ? (gameData.index = 0) : (gameData.index = 1);

        announcements.innerHTML = `<h2 class="win">${gameData.players[gameData.index]} wins!</h2>`
        actionArea.innerHTML = '';
        document.querySelector('#quit').innerHTML = 'Start a New Game?';
    }

    // function showCurrentScore(){
    //     gameData.index ? (gameData.index = 0) : (gameData.index = 1);

    //     score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}:
    //     ${gameData.score[0]}</strong> and <strong>${gameData.players[1]}: 
    //     ${gameData.score[1]}</strong></p>`;
    // }
})();