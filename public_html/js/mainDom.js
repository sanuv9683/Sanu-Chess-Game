function setPieces() {
//================== BLACK PIECES  ================
    var divTemp = $("#tr8 td .chessPieces");
    for (var i = 1; i <= divTemp.length; i++) {
        if ((i === 1) || (i === 8)) {
            if (i === 1) {
                $(divTemp[i - 1]).attr({
                    Type: "ROOK",
                    Team: "BLACK",
                    XPos: "a",
                    YPos: 8
                });
            } else {
                $(divTemp[i - 1]).attr({
                    Type: "ROOK",
                    Team: "BLACK",
                    XPos: "h",
                    YPos: 8
                });
            }
        } else if ((i === 2) || (i === 7)) {
            if (i === 2) {
                $(divTemp[i - 1]).attr({
                    Type: "KNIGHT",
                    Team: "BLACK",
                    XPos: "b",
                    YPos: 8
                });
            } else {
                $(divTemp[i - 1]).attr({
                    Type: "KNIGHT",
                    Team: "BLACK",
                    XPos: "g",
                    YPos: 8
                });
            }
        } else if ((i === 3) || (i === 6)) {
            if (i === 3) {
                $(divTemp[i - 1]).attr({
                    Type: "BISHOP",
                    Team: "BLACK",
                    XPos: "c",
                    YPos: 8
                });
            } else {
                $(divTemp[i - 1]).attr({
                    Type: "BISHOP",
                    Team: "BLACK",
                    XPos: "f",
                    YPos: 8
                });
            }
        } else if (i === 4) {
            $(divTemp[i - 1]).attr({
                Type: "QUEEN",
                Team: "BLACK",
                XPos: "d",
                YPos: 8
            });
        } else {
            $(divTemp[i - 1]).attr({
                Type: "KING",
                Team: "BLACK",
                XPos: "e",
                YPos: 8
            });
        }
    }
    divTemp = $("#tr7 td .chessPieces");
    for (var i = 1; i <= divTemp.length; i++) {
        var xPosS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        $(divTemp[i - 1]).attr({
            Type: "PAWN",
            Team: "BLACK",
            XPos: xPosS[i - 1],
            YPos: 7
        });
    }

    //TEAM WHITE
    divTemp = $("#tr1 td .chessPieces");
    for (var i = 1; i <= divTemp.length; i++) {
        if ((i === 1) || (i === 8)) {
            if (i === 1) {
                $(divTemp[i - 1]).attr({
                    Type: "ROOK",
                    Team: "WHITE",
                    XPos: "a",
                    YPos: 1
                });
            } else {
                $(divTemp[i - 1]).attr({
                    Type: "ROOK",
                    Team: "WHITE",
                    XPos: "h",
                    YPos: 1
                });
            }
        } else if ((i === 2) || (i === 7)) {
            if (i === 2) {
                $(divTemp[i - 1]).attr({
                    Type: "KNIGHT",
                    Team: "WHITE",
                    XPos: "b",
                    YPos: 1
                });
            } else {
                $(divTemp[i - 1]).attr({
                    Type: "KNIGHT",
                    Team: "WHITE",
                    XPos: "g",
                    YPos: 1
                });
            }
        } else if ((i === 3) || (i === 6)) {
            if (i === 3) {
                $(divTemp[i - 1]).attr({
                    Type: "BISHOP",
                    Team: "WHITE",
                    XPos: "c",
                    YPos: 1
                });
            } else {
                $(divTemp[i - 1]).attr({
                    Type: "BISHOP",
                    Team: "WHITE",
                    XPos: "f",
                    YPos: 1
                });
            }
        } else if (i === 4) {
            $(divTemp[i - 1]).attr({
                Type: "QUEEN",
                Team: "WHITE",
                XPos: "d",
                YPos: 1
            });
        } else {
            $(divTemp[i - 1]).attr({
                Type: "KING",
                Team: "WHITE",
                XPos: "e",
                YPos: 1
            });
        }
    }
    divTemp = $("#tr2 td .chessPieces");
    for (var i = 1; i <= divTemp.length; i++) {
        var xPosS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        $(divTemp[i - 1]).attr({
            Type: "PAWN",
            Team: "WHITE",
            XPos: xPosS[i - 1],
            YPos: 2
        });
    }
}
//===================================================================================//
//this is for get each 8 rows and acses there each boxes(coloms)
function setSquares() {
    for (var i = 1; i <= 8; i++) {
        var divTemp = $("#tr" + i + " td.box");
        for (var j = 0; j < divTemp.length; j++) {
            var xPosS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
            $(divTemp[j]).attr({
                XPos: xPosS[j],
                YPos: i
            });
        }
    }
}
//===============================================================================//
function colorOwn(Me) {
    var curXPos = getNumberOfX($(Me).attr("XPos"));
    var curYPos = parseInt($(Me).attr("YPos"));
    var divName = "#tr" + curYPos + " td.box";
    var divBoxes = $(divName);
    for (var i = 0; i < divBoxes.length; i++) {
        if ((i + 1) === curXPos) {
            $(divBoxes[i]).addClass("colorOwnBox");
            break;
        }
    }
}
//====================================================================================//
$(function () {
    setSquares();
    setPieces();
    var side = 1;
    $("td.box").mousedown(function () {
        var curX = $(this).attr("XPos");
        var curY = $(this).attr("YPos");
        console.log(curY, curX);
        var tmpChessSymbols = $(".chessPieces");
        var bInit = true;
        for (var i = 0; i < tmpChessSymbols.length; i++) {
            if ($(tmpChessSymbols[i]).attr("XPos") === curX) {
                if ($(tmpChessSymbols[i]).attr("YPos") === curY) {
                    bInit = false;
                    break;
                }
            }
        }
        if (bInit) {
            squareInitialize();
        }
    });
//=======================================================================================//
    $(".chessPieces").mousedown(function () {
        squareInitialize();
        logicChecker(this);
        colorOwn(this);
        $("td.higlightedBoxes").droppable({
            drop: function (event, ui) {
                switch (side) {
                    case 1 :
                    {
                        rotate();
                        side = 2;
                        $("#disp").html(' ');
                        $("#disp").append("White Tern");
                        fadeI();
                         fadeO();
                        break;
                    }
                    case 2:
                    {
                        rotateB();
                        side = 1;
                        fadeI();
                         fadeO();
                         $("#disp").html(' ');
                         $("#disp").append("Black Tern");
                        break;
                    }

                }

            }
        });
        $("td.enemyBoxes").droppable({
            drop: function (event, ui) {
                switch (side) {
                    case 1 :
                    {
                        rotate();
                        side = 2;
                        $("#disp").html(' ');
                        $("#disp").append("White Tern");
                        fadeI();
                         fadeO();
                       

                        break;
                    }
                    case 2:
                    {
                        rotateB();
                        side = 1;
                         $("#disp").html(' ');
                         $("#disp").append("Black Tern");
                         fadeI();
                         fadeO();
                        break;
                    }

                }
            }
        });
    });

//=========================================================================//
    $(".chessPieces").mouseup(function () {
        $(this).draggable({
            revert: function (obj) {
                if (obj) {
                    var tmpBoxes = $("td.box");
                    var child = null;
                    for (var i = 0; i < tmpBoxes.length; i++) {
                        var curXPos = $(this).attr("XPos");
                        var curYPos = $(this).attr("YPos");
                        if ($(tmpBoxes[i]).attr("XPos") === curXPos) {
                            if ($(tmpBoxes[i]).attr("YPos") === curYPos) {
                                child = $(tmpBoxes[i]).children().detach();
                                break;
                            }
                        }
                    }
                    for (var i = 0; i < tmpBoxes.length; i++) {
                        var curXPos = $(obj).attr("XPos");
                        var curYPos = $(obj).attr("YPos");
                        if ($(tmpBoxes[i]).attr("XPos") === curXPos) {
                            if ($(tmpBoxes[i]).attr("YPos") === curYPos) {
                                if ($(tmpBoxes[i]).hasClass('enemyBoxes')) {
                                    $(tmpBoxes[i]).children().fadeOut(1000);
                                    setTimeout(function () {
                                        $(tmpBoxes[i]).children().detach();
                                        $(child).css('left', 0);
                                        $(child).css('top', 0);
                                        $(tmpBoxes[i]).prepend(child);
                                    }, 1000);
                                } else {
                                    $(child).css('left', 0);
                                    $(child).css('top', 0);
                                    $(tmpBoxes[i]).prepend(child);
                                }
                                break;
                            }
                        }
                    }
                    $(this).attr("XPos", $(obj).attr("XPos"));
                    $(this).attr("YPos", $(obj).attr("YPos"));
                    $(this).draggable('destroy');
                    squareInitialize();
                    return false;
                }
                return true;
            }
        }
        );
    });
});





