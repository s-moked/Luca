import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material"; 
import Board from './Board.jsx';


const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        const newWinner = calculateWinner(board);
        if (newWinner) {  
            setWinner(newWinner);
        }
    }, [board]);

    const handleClick = (index) => {
        if (board[index] || winner) return;
        const newBoard = board.slice();
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let line of lines) {
            const [a, b, c] = line;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    return (
        <div>
            <Typography variant="h3">Morpion</Typography>
            <Board squares={board} onClick={handleClick} />
            {winner && <Typography variant="h4">Le gagnant est : {winner}</Typography>}
        </div>
    );
};

export default Game;