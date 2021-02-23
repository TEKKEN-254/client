/* DUPLICATE OBJECT */
const duplicateObject = (object, duplicate) => {
    for (let key in object) {
        duplicate[key] = object[key];
    }
}

/* GET GAME FUNCTION */
const getGame = () => {
    let url = window.location.href;
    if (url.includes("/circuit/tekken")) {
        return "tekken";
    } else if (url.includes("/circuit/mk")) {
        return "mk";
    }
}

/* EXPORTING FUNCTIONS */
export { duplicateObject, getGame };