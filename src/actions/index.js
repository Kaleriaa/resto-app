export const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}
export const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    }
}
export const cartAdded = (id) => {
    return {
        type: 'ITEM_ADDED_TO_CART',
        payload: id
    }
}
export const orderDeletedPosition = (id) => {
    return {
        type: 'ORDER_DELETED_POSITION',
        payload: id
    }
}
export const orderDeletedAll = (id) => {
    return {
        type: 'ORDER_DELETED_ALL',
        payload: id
    }
}
