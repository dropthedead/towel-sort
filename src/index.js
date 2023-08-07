module.exports = function towelSort(matrix) {
    let arr = [];
    if (!matrix) {
        return [];
    } else
        matrix.forEach((item, index) => {
            if (index % 2 == 1) {
                item.reverse();
            }
            arr.push(item);
        });
    return [].concat(...arr);
};
