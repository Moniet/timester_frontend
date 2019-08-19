let width = document.documentElement.clientWidth

const gridSize = {
    sm: 25,
    md: 50,
    lg: 70
}

const getGridSize = () => { // returns grid size based on break points [320, 576, 768, 992, 1200]
    if (width > 992) return gridSize.lg;
    if (width > 768) return gridSize.md;
    if (width > 576) return gridSize.sm;
    if (width > 320) return gridSize.sm;
}

export {
    gridSize,
    getGridSize
}