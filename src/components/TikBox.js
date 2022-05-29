import React, { useState } from "react";
import "./style.css";
let playerOneClick = [];
let playerTwoClick = [];
let totalClicks = 0;

const TikBox = () => {
    const [isGameEnded, setIsGameEnded] = useState(false);
    const [result, setresult] = useState("");
    const [isClicked1, setisClicked1] = useState(false);
    const [isClicked2, setisClicked2] = useState(false);
    const [isClicked3, setisClicked3] = useState(false);
    const [isClicked4, setisClicked4] = useState(false);
    const [isClicked5, setisClicked5] = useState(false);
    const [isClicked6, setisClicked6] = useState(false);
    const [isClicked7, setisClicked7] = useState(false);
    const [isClicked8, setisClicked8] = useState(false);
    const [isClicked9, setisClicked9] = useState(false);
    const [divContent1, setdivContent1] = useState("");
    const [divContent2, setdivContent2] = useState("");
    const [divContent3, setdivContent3] = useState("");
    const [divContent4, setdivContent4] = useState("");
    const [divContent5, setdivContent5] = useState("");
    const [divContent6, setdivContent6] = useState("");
    const [divContent7, setdivContent7] = useState("");
    const [divContent8, setdivContent8] = useState("");
    const [divContent9, setdivContent9] = useState("");
    const player1 = "0";
    const player2 = "X";
    const [currentPlayer, setCurrentPlayer] = useState(player1);
    const setAndChangePlayer = (storeInDiv, boxNum) => {
        totalClicks++;
        if (currentPlayer === player1) {
            storeInDiv("0");
            playerOneClick.push(boxNum);
            setCurrentPlayer(player2);
        } else {
            storeInDiv("X");
            playerTwoClick.push(boxNum);
            setCurrentPlayer(player1);
        }
        if (playerOneClick.length >= 3 || playerTwoClick.length >= 3) {
            findWinner();
        }
    };

    const findWinner = () => {
        let winningSequences = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 7],
            [1, 5, 9],
            [3, 5, 7],
        ];
        if (currentPlayer === player1) {
            winningSequences.map((singleSeq) => {
                let check1 = playerOneClick.includes(singleSeq[0]);
                let check2 = playerOneClick.includes(singleSeq[1]);
                let check3 = playerOneClick.includes(singleSeq[2]);
                if (check1 && check2 && check3) {
                    setresult("Player1 Wins!!");
                    setIsGameEnded(true);
                }
            });
        } else {
            winningSequences.map((singleSeq) => {
                let check1 = playerTwoClick.includes(singleSeq[0]);
                let check2 = playerTwoClick.includes(singleSeq[1]);
                let check3 = playerTwoClick.includes(singleSeq[2]);
                if (check1 && check2 && check3) {
                    setresult("Player2 Wins!! ");
                    setIsGameEnded(true);
                }
            });
        }
        if (totalClicks >= 9) {
            setresult("It's a draw!!");
            setIsGameEnded(true);
        }
    };

    const refreshComponent = () => {
        window.location.reload(false);
    };

    return (
        <div className="tikBody">
            <div className="boxHolder">
                <div
                    className="boxOne"
                    disabled={true}
                    onClick={() => {
                        if (isClicked1 === false && isGameEnded === false) {
                            setisClicked1(true);
                            setAndChangePlayer(setdivContent1, 1);
                        }
                    }}
                >
                    {isClicked1 ? <p>{divContent1}</p> : <p></p>}
                </div>
                <div
                    className="boxTwo"
                    onClick={() => {
                        if (isClicked2 === false && isGameEnded === false) {
                            setisClicked2(true);
                            setAndChangePlayer(setdivContent2, 2);
                        }
                    }}
                >
                    {isClicked2 ? <p>{divContent2}</p> : <p></p>}
                </div>
                <div
                    className="boxThr"
                    onClick={() => {
                        if (isClicked3 === false && isGameEnded === false) {
                            setisClicked3(true);
                            setAndChangePlayer(setdivContent3, 3);
                        }
                    }}
                >
                    {isClicked3 ? <p>{divContent3}</p> : <p></p>}
                </div>
                <div
                    className="boxFou"
                    onClick={() => {
                        if (isClicked4 === false && isGameEnded === false) {
                            setisClicked4(true);
                            setAndChangePlayer(setdivContent4, 4);
                        }
                    }}
                >
                    {isClicked4 ? <p>{divContent4}</p> : <p></p>}
                </div>
                <div
                    className="boxFiv"
                    onClick={() => {
                        if (isClicked5 === false && isGameEnded === false) {
                            setisClicked5(true);
                            setAndChangePlayer(setdivContent5, 5);
                        }
                    }}
                >
                    {isClicked5 ? <p>{divContent5}</p> : <p></p>}
                </div>
                <div
                    className="boxSix"
                    onClick={() => {
                        if (isClicked6 === false && isGameEnded === false) {
                            setisClicked6(true);
                            setAndChangePlayer(setdivContent6, 6);
                        }
                    }}
                >
                    {isClicked6 ? <p>{divContent6}</p> : <p></p>}
                </div>
                <div
                    className="boxSev"
                    onClick={() => {
                        if (isClicked7 === false && isGameEnded === false) {
                            setisClicked7(true);
                            setAndChangePlayer(setdivContent7, 7);
                        }
                    }}
                >
                    {isClicked7 ? <p>{divContent7}</p> : <p></p>}
                </div>
                <div
                    className="boxEig"
                    onClick={() => {
                        if (isClicked8 === false && isGameEnded === false) {
                            setisClicked8(true);
                            setAndChangePlayer(setdivContent8, 8);
                        }
                    }}
                >
                    {isClicked8 ? <p>{divContent8}</p> : <p></p>}
                </div>
                <div
                    className="boxNin"
                    onClick={() => {
                        if (isClicked9 === false && isGameEnded === false) {
                            setisClicked9(true);
                            setAndChangePlayer(setdivContent9, 9);
                        }
                    }}
                >
                    {isClicked9 ? <p>{divContent9}</p> : <p></p>}
                </div>
            </div>
            <div className="winner">
                {isGameEnded && (<p>Result: {result}</p> )}
                {isGameEnded && (<button onClick={() => refreshComponent()}>Restart Game</button>)}
            </div>
        </div>
    );
};

export default TikBox;
