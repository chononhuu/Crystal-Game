$(document).ready(function() {

    //Initial Values
    var playerScore = 0;
    var wins = 0;
    var losses = 0;
    
    //Generating Random Target Number
    var targetNum = Math.floor(Math.random()*101+19);
    $('#targetNumber').text(targetNum);
    
    //Crystal Number Options
    var crystal1 = Math.floor(Math.random()*11+1)
    var crystal2 = Math.floor(Math.random()*11+1)
    var crystal3 = Math.floor(Math.random()*11+1)
    var crystal4 = Math.floor(Math.random()*11+1)
    
    //Creating Crystal Image Every Number Options
    var imgCrystal1 = $('<img>');     
        imgCrystal1.attr('data-num', crystal1);
        imgCrystal1.attr('src', 'assets/images/blue.png');
        imgCrystal1.attr('alt', 'crystals');
        imgCrystal1.addClass('crystalImage col-md-3');
        $('#crystals').append(imgCrystal1);

    var imgCrystal2 = $('<img>');     
        imgCrystal2.attr('data-num', crystal2);
        imgCrystal2.attr('src', 'assets/images/green.png');
        imgCrystal2.attr('alt', 'crystals');
        imgCrystal2.addClass('crystalImage col-md-3');
        $('#crystals').append(imgCrystal2);

    var imgCrystal3 = $('<img>');     
        imgCrystal3.attr('data-num', crystal3);
        imgCrystal3.attr('src', 'assets/images/red.png');
        imgCrystal3.attr('alt', 'crystals');
        imgCrystal3.addClass('crystalImage col-md-3');
        $('#crystals').append(imgCrystal3);

    var imgCrystal4 = $('<img>');     
        imgCrystal4.attr('data-num', crystal4);
        imgCrystal4.attr('src', 'assets/images/yellow.png');
        imgCrystal4.attr('alt', 'crystals');
        imgCrystal4.addClass('crystalImage col-md-3');
        $('#crystals').append(imgCrystal4);
    
    //Function 1: Restart
    function restart() {
        targetNum = Math.floor(Math.random()*101+19);
        $('#targetNumber').text(targetNum);    
        crystal1 = Math.floor(Math.random()*11+1);
        crystal2 = Math.floor(Math.random()*11+1);
        crystal3 = Math.floor(Math.random()*11+1);
        crystal4 = Math.floor(Math.random()*11+1);
        playerScore = 0;
        $('#playerScore').text(playerScore)    
    }
    
    //Function 2: Win
    function win() {
        wins++;
        $('#wins').text(wins);
        restart();
    }
    
    //Function 3: Lose
    function lose() {
        losses++;
        $('#losses').text(losses);
        restart();
    }
    
    //Function 4: On Click Crystal Images
    $('.crystalImage').on('click', function(){
        playerScore += parseInt($(this).data('num'));
        $('#playerScore').text(playerScore) 
        if (playerScore === targetNum) {
            win();
        }
        else if (playerScore > targetNum) {
            lose();
        }
    })

});