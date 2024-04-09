export const handleDownload = () => {
    const link = "https://raw.githubusercontent.com/amparab/amruta-portfolio/feature/experience/src/Amruta-Resume-v3.pdf";
    window.open(link, '_blank');
};

export const getSkylineStart = () => {
    return 100 + 0.395257 * (window.innerHeight - 700);
};

export const getSkylineEnd = () => {
    return 0.395257 * (window.innerHeight - 700);
};

export const getGirlStart = () => {
    return 50 + 0.197628 * (window.innerHeight - 700)
};

export const getGirlEnd = () => {
    return 0.27668 * (window.innerHeight - 700);
};