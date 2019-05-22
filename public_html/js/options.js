/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function relo(){
     location.reload();
}

//=====================================================//
function rotate() {
    $('table').addClass('chess');
    $('table').addClass('td');
    $('table').css("transform", 'rotate(180deg)');
    $('td').css("transform", 'rotate(180deg)');
}
//========================================================//
$('body').keypress(function rback(e) {
    if (e.which == 32) {
        $('table').addClass('chess');
        $('table').addClass('td');
        $('table').css("transform", 'rotate(360deg)');
        $('td').css("transform", 'rotate(360deg)');
    }
});

//============================
$(document).ready(function () {
    var colNumbers = document.getElementById("divNums");
    for (var i = 8; i >= 1; i--) {
        colNumbers.innerHTML = colNumbers.innerHTML + "<div style='line-height:65px;'>" + i + "</div>";
    }
    var divTemp = document.getElementById("divChars");
    var charArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    for (var i = 1; i <= 8; i++) {
        divTemp.innerHTML = divTemp.innerHTML + "<span style='width:65px;display:inline-block;text-align:center'>" + charArray[i - 1] + "</span>";
    } 

});

//this is fource rotate back fuction
function rotateB() {
    $('table').addClass('chess');
    $('table').addClass('td');
    $('table').css("transform", 'rotate(360deg)');
    $('td').css("transform", 'rotate(360deg)');
}



function squareInitialize() {
    $("td.higlightedBoxes").droppable('destroy');
    $("td.enemyBoxes").droppable('destroy');
    var divBoxes = $(".higlightedBoxes");
    for (var i = 0; i < divBoxes.length; i++) {
        $(divBoxes[i]).removeClass("higlightedBoxes");
    }
    divBoxes = $(".enemyBoxes");
    for (var i = 0; i < divBoxes.length; i++) {
        $(divBoxes[i]).removeClass("enemyBoxes");
    }
    divBoxes = $(".colorOwnBox");
    for (var i = 0; i < divBoxes.length; i++) {
        $(divBoxes[i]).removeClass("colorOwnBox");
    }
}

function squareCheck(xPos, yPos) {
    var chessPieces = $(".chessPieces");
    var returnObject = new Object();
    returnObject.who = null;
    returnObject.is = false;
    for (var i = 0; i < chessPieces.length; i++) {
        if ((getNumberOfX($(chessPieces[i]).attr("XPos")) === xPos) &&
                (parseInt($(chessPieces[i]).attr("YPos")) === yPos)) {
            returnObject.is = true;
            returnObject.who = $(chessPieces[i]);
            return returnObject;
        }
    }
    return returnObject;
}

function hilightIfValid(xPos, yPos, enemy) {
    var divName = "#tr" + yPos + " td.box";
    var divBoxes = $(divName);
    for (var i = 0; i < divBoxes.length; i++) {
        if ((i + 1) === xPos) {
            if (!enemy) {
                $(divBoxes[i]).addClass("higlightedBoxes");
            } else {
                $(divBoxes[i]).addClass("enemyBoxes");
            }
            break;
        }
    }
}


function getNumberOfX(charXPos) {
    switch (charXPos) {
        case "a":
        {
            return 1;
            break;
        }
        case "b":
        {
            return 2;
            break;
        }
        case "c":
        {
            return 3;
            break;
        }
        case "d":
        {
            return 4;
            break;
        }
        case "e":
        {
            return 5;
            break;
        }
        case "f":
        {
            return 6;
            break;
        }
        case "g":
        {
            return 7;
            break;
        }
        case "h":
        {
            return 8;
            break;
        }
    }
}

function onStr() {
    $('table').addClass('str');
    $('table').css("transform", 'rotate(1440deg)');
    $('#wel').addClass('wel');
    $('#wel').fadeOut(7000);


}

function fadeO(){
    $('#sds').fadeOut(5000);
}
function fadeI(){
     $('#sds').fadeIn(1);
}