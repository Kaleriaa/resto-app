export const totalSelector = ({ order, menu }) => {
    let sum = 0
    order.map(id => {
        menu.forEach((item) => {
            if (item.id === id) {
                sum += item.price
            }
        })
    })
    return sum
}