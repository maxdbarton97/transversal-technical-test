export default (str) => {
    const title = str.toLowerCase().split("_");
    for (let i = 0; i < title.length; i += 1) {
        title[i] = title[i][0].toUpperCase() + title[i].slice(1);
    }

    return title.join(" ");
};
