const addCounter = (list) => {
    return [...list, 0];
    // use above or below method to add not push
    // push modifies the original array - mutable
    // return list.concat([0]);
}

const removeCounter = (list, index) => {
    return list
        .slice(0, index)
        .concat(list.slice(index + 1));

    /*
    return [
        ...list.slice(0, index),
        ...list.slice(index + 1)
    ];
    */
}

const incrementCounter = (list, index) => {
    return list
        .slice(0, index)
        .concat([list[index] + 1])
        .concat(list.slice(index + 1));

    /*
    return [
        ...list.slice(0, index),
        list[index] + 1,
        ...list.slice(index + 1)
    ];
    */
}

module.exports = {addCounter, removeCounter, incrementCounter};
