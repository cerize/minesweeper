const getInitialBoard = () => {
    return {
        11: { open: false, hasBomb: true, bombsNear: 0 },
        12: { open: false, hasBomb: false, bombsNear: 2 },
        13: { open: false, hasBomb: false, bombsNear: 1 },
        21: { open: false, hasBomb: false, bombsNear: 1 },
        22: { open: false, hasBomb: false, bombsNear: 2 },
        23: { open: false, hasBomb: true, bombsNear: 0 },
        31: { open: false, hasBomb: false, bombsNear: 0 },
        32: { open: false, hasBomb: false, bombsNear: 1 },
        33: { open: false, hasBomb: false, bombsNear: 1 }
    };
};

export default getInitialBoard;