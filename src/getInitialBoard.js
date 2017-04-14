const getInitialBoard = () => {
    return {
        11: { position: 11, isOpen: false, face: '0' },
        12: { position: 12, isOpen: false, face: 'cat' },
        13: { position: 13, isOpen: false, face: '1' },
        21: { position: 21, isOpen: false, face: '1' },
        22: { position: 22, isOpen: false, face: '2' },
        23: { position: 23, isOpen: true, face: '0' },
        31: { position: 31, isOpen: false, face: 'bomb' },
        32: { position: 32, isOpen: false, face: '1' },
        33: { position: 33, isOpen: true, face: '1' }
    };
};

// can open a cat - prize: open a few squares
export default getInitialBoard;