
// const list = [1, 3, 5, 4, -25, -4, -8, -6, -8];
function  findingBadData(list) {
    const badData = [];
    for (let i = 0; i < list.length; i++) {
        const element = list[i];

        if (element < 0) {
            badData.push(element);
        }
    }
    return badData.length;
}

// const result = findingBadData(list);
// console.log(result);
