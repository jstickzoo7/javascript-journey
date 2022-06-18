/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let roundScore, scores, activePlayer, gameState,is_six;
Init();


// Roll dice function
document.querySelector('.btn-roll').addEventListener('click', function(){
   if (gameState){
        // let dice = Math.floor(Math.random() * 6) + 1 ;
        let dice = 6;
        diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = '../images/dice-' + dice + '.png'

        is_six.push(dice)
        if (is_six.length === 2){
             if (is_six[0]===6 && is_six[1] === 6){
                document.querySelector('#score-' + activePlayer).textContent = '0';
                document.querySelector('#current-' + activePlayer).textContent = '0';
                is_six = [];
                nextplayer();
             };
        }
        else{
             // if NOT 1 add to to current score
                if (dice !== 1){
                    roundScore += dice ;
                    document.querySelector('#current-' + activePlayer).textContent = roundScore;
                }else{

                nextplayer();
                }
            };
        };
       
   
    });



// Hold dice function
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gameState){

    
    scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 20){
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gameState = false;
        }else{
            nextplayer();
        }

    }
});

    // New game funtion
document.querySelector('.btn-new').addEventListener('click', Init);






function Init(){

    activePlayer = 0;
    roundScore = 0;
    scores = [0,0];
    gameState = true;
    is_six = [];


    // Reset all scores to Zero

    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';

    // Hide dice
    document.querySelector('.dice').style.display = 'none';

    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
  
}

function nextplayer(){

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
};

 