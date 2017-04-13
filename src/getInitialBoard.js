const getInitialBoard = () => {
    return {
        11: { isOpen: false, hasBomb: true, bombsNear: 0 },
        12: { isOpen: false, hasBomb: false, bombsNear: 2 },
        13: { isOpen: false, hasBomb: false, bombsNear: 1 },
        21: { isOpen: false, hasBomb: false, bombsNear: 1 },
        22: { isOpen: false, hasBomb: false, bombsNear: 2 },
        23: { isOpen: true, hasBomb: true, bombsNear: 0 },
        31: { isOpen: false, hasBomb: false, bombsNear: 0 },
        32: { isOpen: false, hasBomb: false, bombsNear: 1 },
        33: { isOpen: true, hasBomb: false, bombsNear: 1 }
    };
};

export default getInitialBoard;