const initialState = {
    menu: [],
    loading: false,
    order: [],
}

export const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: actions.payload,
                loading: false
            }
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true
            }
        case 'ITEM_ADDED_TO_CART':
            const id = actions.payload
            return {
                ...state,
                order: [id, ...state.order],
            }
        case 'ORDER_ADDED_POSITION':
            return {
                ...state,
                order: [actions.payload, ...state.order],
            }
        case 'ORDER_DELETED_POSITION':
            const itemDeleted = state.order.indexOf(actions.payload)
            return {
                ...state,
                order: [...state.order.slice(0, itemDeleted), ...state.order.slice(itemDeleted + 1, state.order.length)],
            }
        case 'ORDER_DELETED_ALL':
            return {
                ...state,
                order: state.order.filter(id => id !== actions.payload)
            }
        default:
            return state
    }
}
