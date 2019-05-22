/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function logicChecker(chessSymbol) {
    if ($(chessSymbol).attr("Type") === "ROOK") {
        var curXPos = getNumberOfX($(chessSymbol).attr("XPos"));
        var curYPos = parseInt($(chessSymbol).attr("YPos"));
        if ((curXPos - 1) !== 0) {
            for (var i = curXPos - 1; i > 0; i--) {
                var reObj = squareCheck(i, curYPos);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        hilightIfValid(i, curYPos, true);
                    }
                    break;
                }
                hilightIfValid(i, curYPos, false);
            }
            for (var i = curXPos + 1; i <= 8; i++) {
                var reObj = squareCheck(i, curYPos);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        hilightIfValid(i, curYPos, true);
                    }
                    break;
                }
                hilightIfValid(i, curYPos, false);
            }
        } else {
            for (var i = 2; i <= 8; i++) {
                var reObj = squareCheck(i, curYPos);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        hilightIfValid(i, curYPos, true);
                    }
                    break;
                }
                hilightIfValid(i, curYPos, false);
            }
        }
        if ((curYPos - 1) !== 0) {

            for (var i = curYPos - 1; i > 0; i--) {
                var reObj = squareCheck(curXPos, i);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        hilightIfValid(curXPos, i, true);
                    }
                    break;
                }
                hilightIfValid(curXPos, i, false);
            }
            for (var i = (curYPos + 1); i <= 8; i++) {
                var reObj = squareCheck(curXPos, i);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        hilightIfValid(curXPos, i, true);
                    }
                    break;
                }
                hilightIfValid(curXPos, i, false);
            }
        } else {
            for (var i = 2; i <= 8; i++) {
                var reObj = squareCheck(curXPos, i);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        hilightIfValid(curXPos, i, true);
                    }
                    break;
                }
                hilightIfValid(curXPos, i, false);
            }
        }
    } else if ($(chessSymbol).attr("Type") === "KNIGHT") {
        var curXPos = getNumberOfX($(chessSymbol).attr("XPos"));
        var curYPos = parseInt($(chessSymbol).attr("YPos"));
        if (curXPos - 2 > 0) {
            if (curYPos + 1 < 9) {
                var reObj = squareCheck(curXPos - 2, curYPos + 1);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        hilightIfValid(curXPos - 2, curYPos + 1, true);
                    }
                } else {
                    hilightIfValid(curXPos - 2, curYPos + 1, false);
                }
            }
            if (curYPos - 1 > 0) {
                var reObj = squareCheck(curXPos - 2, curYPos - 1);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        hilightIfValid(curXPos - 2, curYPos - 1, true);
                    }
                } else {
                    hilightIfValid(curXPos - 2, curYPos - 1, false);
                }
            }
        }

        if (curXPos + 2 > 0) {
            if (curYPos + 1 < 9) {
                var reObj = squareCheck(curXPos + 2, curYPos + 1);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        hilightIfValid(curXPos + 2, curYPos + 1, true);
                    }
                } else {
                    hilightIfValid(curXPos + 2, curYPos + 1, false);
                }
            }
            if (curYPos - 1 > 0) {
                var reObj = squareCheck(curXPos + 2, curYPos - 1);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        hilightIfValid(curXPos + 2, curYPos - 1, true);
                    }
                } else {
                    hilightIfValid(curXPos + 2, curYPos - 1, false);
                }
            }
        }

        if (curYPos - 2 > 0) {
            if (curXPos + 1 < 9) {
                var reObj = squareCheck(curXPos + 1, curYPos - 2);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        hilightIfValid(curXPos + 1, curYPos - 2, true);
                    }
                } else {
                    hilightIfValid(curXPos + 1, curYPos - 2, false);
                }
            }
            if (curXPos - 1 > 0) {
                var reObj = squareCheck(curXPos - 1, curYPos - 2);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        hilightIfValid(curXPos - 1, curYPos - 2, true);
                    }
                } else {
                    hilightIfValid(curXPos - 1, curYPos - 2, false);
                }
            }
        }

        if (curYPos + 2 > 0) {
            if (curXPos + 1 < 9) {
                var reObj = squareCheck(curXPos + 1, curYPos + 2);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        hilightIfValid(curXPos + 1, curYPos + 2, true);
                    }
                } else {
                    hilightIfValid(curXPos + 1, curYPos + 2, false);
                }
            }
            if (curXPos - 1 > 0) {
                var reObj = squareCheck(curXPos - 1, curYPos + 2);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        hilightIfValid(curXPos - 1, curYPos + 2, true);
                    }
                } else {
                    hilightIfValid(curXPos - 1, curYPos + 2, false);
                }
            }
        }
    } else if ($(chessSymbol).attr("Type") === "BISHOP") {
        var curXPos = getNumberOfX($(chessSymbol).attr("XPos"));
        var curYPos = parseInt($(chessSymbol).attr("YPos"));
        var tmpYPos = curYPos;
        for (var x = curXPos + 1; x <= 8; x++) {
            tmpYPos++;
            if (tmpYPos > 8)
                break;
            var reObj = squareCheck(x, tmpYPos);
            if (reObj.is) {
                if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                    hilightIfValid(x, tmpYPos, true);
                }
                break;
            } else {
                hilightIfValid(x, tmpYPos, false);
            }
        }
        tmpYPos = curYPos;
        for (var x = curXPos - 1; x >= 1; x--) {
            tmpYPos++;
            if (tmpYPos > 8)
                break;
            var reObj = squareCheck(x, tmpYPos);
            if (reObj.is) {
                if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                    hilightIfValid(x, tmpYPos, true);
                }
                break;
            } else {
                hilightIfValid(x, tmpYPos, false);
            }
        }
        tmpYPos = curYPos;
        for (var x = curXPos - 1; x >= 1; x--) {
            tmpYPos--;
            if (tmpYPos < 1)
                break;
            var reObj = squareCheck(x, tmpYPos);
            if (reObj.is) {
                if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                    hilightIfValid(x, tmpYPos, true);
                }
                break;
            } else {
                hilightIfValid(x, tmpYPos, false);
            }
        }
        tmpYPos = curYPos;
        for (var x = curXPos + 1; x <= 8; x++) {
            tmpYPos--;
            if (tmpYPos < 1)
                break;
            var reObj = squareCheck(x, tmpYPos);
            if (reObj.is) {
                if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                    hilightIfValid(x, tmpYPos, true);
                }
                break;
            } else {
                hilightIfValid(x, tmpYPos, false);
            }
        }
    } else if ($(chessSymbol).attr("Type") === "QUEEN") {
        var curXPos = getNumberOfX($(chessSymbol).attr("XPos"));
        var curYPos = parseInt($(chessSymbol).attr("YPos"));
        if ((curXPos - 1) !== 0) {
            for (var i = curXPos - 1; i > 0; i--) {
                var reObj = squareCheck(i, curYPos);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        hilightIfValid(i, curYPos, true);
                    }
                    break;
                }
                hilightIfValid(i, curYPos, false);

            }
            for (var i = curXPos + 1; i <= 8; i++) {
                var reObj = squareCheck(i, curYPos);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        hilightIfValid(i, curYPos, true);
                    }
                    break;
                }
                hilightIfValid(i, curYPos, false);

            }
        } else {
            for (var i = 2; i <= 8; i++) {
                var reObj = squareCheck(i, curYPos);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        hilightIfValid(i, curYPos, true);
                    }
                    break;
                }
                hilightIfValid(i, curYPos, false);

            }
        }

        if ((curYPos - 1) !== 0) {

            for (var i = curYPos - 1; i > 0; i--) {
                var reObj = squareCheck(curXPos, i);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        hilightIfValid(curXPos, i, true);
                    }
                    break;
                }
                hilightIfValid(curXPos, i, false);
            }


            for (var i = (curYPos + 1); i <= 8; i++) {
                var reObj = squareCheck(curXPos, i);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        hilightIfValid(curXPos, i, true);
                    }
                    break;
                }
                hilightIfValid(curXPos, i, false);
            }
        } else {
            for (var i = 2; i <= 8; i++) {
                var reObj = squareCheck(curXPos, i);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        hilightIfValid(curXPos, i, true);
                    }
                    break;
                }
                hilightIfValid(curXPos, i, false);
            }
        }

        var tmpYPos = curYPos;
        for (var x = curXPos + 1; x <= 8; x++) {
            tmpYPos++;
            if (tmpYPos > 8)
                break;
            var reObj = squareCheck(x, tmpYPos);
            if (reObj.is) {
                if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                    hilightIfValid(x, tmpYPos, true);
                }
                break;
            } else {
                hilightIfValid(x, tmpYPos, false);
            }
        }

        tmpYPos = curYPos;
        for (var x = curXPos - 1; x >= 1; x--) {
            tmpYPos++;
            if (tmpYPos > 8)
                break;
            var reObj = squareCheck(x, tmpYPos);
            if (reObj.is) {
                if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                    hilightIfValid(x, tmpYPos, true);
                }
                break;
            } else {
                hilightIfValid(x, tmpYPos, false);
            }
        }

        tmpYPos = curYPos;
        for (var x = curXPos - 1; x >= 1; x--) {
            tmpYPos--;
            if (tmpYPos < 1)
                break;
            var reObj = squareCheck(x, tmpYPos);
            if (reObj.is) {
                if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                    hilightIfValid(x, tmpYPos, true);
                }
                break;
            } else {
                hilightIfValid(x, tmpYPos, false);
            }
        }

        tmpYPos = curYPos;
        for (var x = curXPos + 1; x <= 8; x++) {
            tmpYPos--;
            if (tmpYPos < 1)
                break;
            var reObj = squareCheck(x, tmpYPos);
            if (reObj.is) {
                if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                    hilightIfValid(x, tmpYPos, true);
                }
                break;
            } else {
                hilightIfValid(x, tmpYPos, false);
            }
        }

    } else if ($(chessSymbol).attr("Type") === "KING") {

        var curXPos = getNumberOfX($(chessSymbol).attr("XPos"));
        var curYPos = parseInt($(chessSymbol).attr("YPos"));
        if (curYPos + 1 < 9) {
            var reObj = squareCheck(curXPos, curYPos + 1);
            if (reObj.is) {
                if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                    hilightIfValid(curXPos, curYPos + 1, true);
                }
            } else {
                hilightIfValid(curXPos, curYPos + 1, false);
            }
        }
        if (curYPos - 1 > 0) {
            var reObj = squareCheck(curXPos, curYPos - 1);
            if (reObj.is) {
                if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                    hilightIfValid(curXPos, curYPos - 1, true);
                }
            } else {
                hilightIfValid(curXPos, curYPos - 1, false);
            }
        }

        if (curXPos + 1 < 9) {

            var reObj = squareCheck(curXPos + 1, curYPos);
            if (reObj.is) {
                if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                    hilightIfValid(curXPos + 1, curYPos, true);
                }
            } else {
                hilightIfValid(curXPos + 1, curYPos, false);
            }

            reObj = squareCheck(curXPos + 1, curYPos + 1);
            if (reObj.is) {
                if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                    hilightIfValid(curXPos + 1, curYPos + 1, true);
                }
            } else {
                hilightIfValid(curXPos + 1, curYPos + 1, false);
            }
            reObj = squareCheck(curXPos + 1, curYPos - 1);
            if (reObj.is) {
                if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                    hilightIfValid(curXPos + 1, curYPos - 1, true);
                }
            } else {
                hilightIfValid(curXPos + 1, curYPos - 1, false);
            }
        }

        if (curXPos + 1 < 9) {

            var reObj = squareCheck(curXPos - 1, curYPos);
            if (reObj.is) {
                if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                    hilightIfValid(curXPos - 1, curYPos, true);
                }
            } else {
                hilightIfValid(curXPos - 1, curYPos, false);
            }

            reObj = squareCheck(curXPos - 1, curYPos + 1);
            if (reObj.is) {
                if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                    hilightIfValid(curXPos - 1, curYPos + 1, true);
                }
            } else {
                hilightIfValid(curXPos - 1, curYPos + 1, false);
            }

            reObj = squareCheck(curXPos - 1, curYPos - 1);
            if (reObj.is) {
                if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                    hilightIfValid(curXPos - 1, curYPos - 1, true);
                }
            } else {
                hilightIfValid(curXPos - 1, curYPos - 1, false);
            }
        }
    } else {
        var curXPos = getNumberOfX($(chessSymbol).attr("XPos"));
        var curYPos = parseInt($(chessSymbol).attr("YPos"));

        if (curYPos + 1 < 9) {

            if ($(chessSymbol).attr("Team") === "WHITE") {
                var reObj = squareCheck(curXPos, curYPos + 1);
                if (!reObj.is) {
                    hilightIfValid(curXPos, curYPos + 1, false);
                    if (curYPos === 2) {
                        reObj = squareCheck(curXPos, curYPos + 2);
                        if (!reObj.is) {
                            hilightIfValid(curXPos, curYPos + 2, false);
                        }
                    }
                }
            }
            if (curXPos - 1 > 0) {
                reObj = squareCheck(curXPos - 1, curYPos + 1);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        hilightIfValid(curXPos - 1, curYPos + 1, true);
                    }
                }
            }
            if (curXPos + 1 < 9) {
                reObj = squareCheck(curXPos + 1, curYPos + 1);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        hilightIfValid(curXPos + 1, curYPos + 1, true);
                    }
                }
            }
        }
        if (curYPos - 1 > 0) {

            if ($(chessSymbol).attr("Team") === "BLACK") {
                var reObj = squareCheck(curXPos, curYPos - 1);
                if (!reObj.is) {
                    hilightIfValid(curXPos, curYPos - 1, false);
                    if (curYPos === 7) {
                        reObj = squareCheck(curXPos, curYPos - 2);
                        if (!reObj.is) {
                            hilightIfValid(curXPos, curYPos - 2, false);
                        }
                    }
                }
            }
            if (curXPos - 1 > 0) {
                reObj = squareCheck(curXPos - 1, curYPos - 1);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        hilightIfValid(curXPos - 1, curYPos - 1, true);
                    }
                }
            }
            if (curXPos + 1 < 9) {
                reObj = squareCheck(curXPos + 1, curYPos - 1);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        hilightIfValid(curXPos + 1, curYPos - 1, true);
                    }
                }
            }
        }
    }
}
