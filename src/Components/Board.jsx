
import React from 'react';
import Square from './Square';
import Grid from '@mui/material/Grid';


const Board = ({ squares, onClick }) => {
    return (
        <Grid container spacing={1} style={{ width: '300px', margin: 'auto' }}>
            {squares.map((square, index) => (
                <Grid item xs={4} key={index}>
                    <Square value={square} onClick={() => onClick(index)} />
                </Grid>
        ))}
        </Grid>
    );
};
export default Board;