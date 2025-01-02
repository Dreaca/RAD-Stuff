const initialState = ''

export function ItemReducer(state = initialState, action: {type: string; payload: string}) {
    switch (action.type) {
        case "ADD_ITEM":
            return action.payload
        default:
            return state
    }
}