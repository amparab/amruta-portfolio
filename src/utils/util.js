export const handleDownload = () => {
    const link = "https://raw.githubusercontent.com/amparab/amruta-portfolio/master/src/Amruta-Parab-Resume.pdf";
    window.open(link, '_blank');
};

export const svgWidth = () => {
    return 350;
};

export const svgHeight = () => {
    return Math.min(window.innerHeight/2, 350);
    //return 350;
};

export const getSkylineStart = () => {
    return 100 + 0.395257 * (window.innerHeight - 700);
};

export const getSkylineEnd = () => {
    // For extra large screens
    return window.innerHeight < 1030 ? 0.395257 * (window.innerHeight - 700) : 0.48 * (window.innerHeight - 700);
};

export const getGirlStart = () => {
    // For extra large screens
    return window.innerHeight < 1030 ? 50 + 0.197628 * (window.innerHeight - 700) : 0.27668 * (window.innerHeight - 100)
};

export const getGirlEnd = () => {
    //return 0.27668 * (window.innerHeight - 700);
    return window.innerHeight < 1030 ? 0.27668 * (window.innerHeight - 700) : 50 + 0.197628 * (window.innerHeight);
};