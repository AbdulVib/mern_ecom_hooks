export const initialState = {
    productsData: [],
    singleProduct: {},
    cart: []
};


const reducer = (state, action) => {
    switch (action.type) {

        case 'SET_PRODUCTS':
            return {
                ...state,
                productsData: [ ...state.productsData, ...action.payload ]
            }
        case 'SINGLE_PRODUCT':
            return {
                ...state,
                singleProduct: action.payload 
            }
        case 'ADD_CART':
            return {
                ...state,
                cart: [ ...state.cart, action.payload ] 
            }

        default:
            return state
    }
}

export default reducer
