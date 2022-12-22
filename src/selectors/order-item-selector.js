export const orderSelector = ({ menu, order }) => {
    const count = counter(order)
    return Array.from(new Set(order)).map(id => {
        return {
            orderItem: menu.find(item => item.id === id),
            count: count[id]
        }
    });
}

const counter = (array) => {
    return array.reduce((stack, value) => {
        return stack[value] ? stack[value]++ : stack[value] = 1,
            stack;
    }, {});
}