const _getNeighbours = (position, boardSize) => {
    const neighboursArr = [];
    const i = +position.charAt(0);
    const j = +position.charAt(1);

    const n1 = `${i - 1}${j}`;
    const n2 = `${i - 1}${j + 1}`;
    const n3 = `${i}${j + 1}`;
    const n4 = `${i + 1}${j + 1}`;
    const n5 = `${i + 1}${j}`;
    const n6 = `${i + 1}${j - 1}`;
    const n7 = `${i}${j - 1}`;
    const n8 = `${i - 1}${j - 1}`;

    neighboursArr.push(n1, n2, n3, n4, n5, n6, n7, n8);

    const validNeighboursArr = neighboursArr.filter((elem) => {
        return !(~elem.indexOf('0') || ~elem.indexOf(`${boardSize + 1}`));
    });

    return validNeighboursArr;
};



const _getFace = (position, boardSize, bombsPositions) => {
    if (bombsPositions.indexOf(position) !== -1) {
        return 'bomb';
    }
    const neighbours = _getNeighbours(position, boardSize);

    const face = bombsPositions.reduce((total, elem) => {
        if (neighbours.indexOf(elem) !== -1) {
            return total + 1;
        }
        return total;
    }, 0);

    return face;
};

const _getBombsPosition = (nBombs, boardSize) => {
    const bombsArr = [];
    while (bombsArr.length < nBombs) {
        const p1 = Math.ceil(Math.random() * boardSize);
        const p2 = Math.ceil(Math.random() * boardSize);
        const position = `${p1}${p2}`;
        if (bombsArr.indexOf(position) === -1) {
            bombsArr.push(position);
        }
    }
    return bombsArr;
};


const getInitialBoard = (boardSize) => {
    const squares = {};
    // Get the number of bombs in the board - 20% of the squares
    const nBombs = Math.floor(boardSize * boardSize * 0.2);
    // Assign positions to the bombs
    const bombPositions = _getBombsPosition(nBombs, boardSize); 
    
    console.log('bombPositions', bombPositions);

    for (let i = 1; i <= boardSize; i += 1) {
        for (let j = 1; j <= boardSize; j += 1) {
            const position = `${i}${j}`;
            squares[position] = { position, status: 'closed', face: _getFace(position, boardSize, bombPositions), question: 'Which javascript built-in object allow you to intercept operations and implement custom behavior?', answer: 'proxy' };
        }
    }

    return {
        state: 'initial',
        nBombs,
        squares
    };
};

// TODO: can open a cat - prize: open a few squares
export default getInitialBoard;