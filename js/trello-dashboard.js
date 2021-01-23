'use strict';

import Board from './js/Board.js';

let boardConfig = localStorage.getItem( 'board' );
if( !boardConfig ) {
    boardConfig = {
        name: 'New board',
        taskLists: []
    };
} else {
    boardConfig = JSON.parse( boardConfig );
}

const board = new Board( boardConfig, document.querySelector( '.board-container' ) );
board.render();

console.log( board );