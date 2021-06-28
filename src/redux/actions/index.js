import axios from 'axios'

export const getProducts = (payload) => {
    return {
        type: "GET_PRODUCTS",
        payload,
    };
};

export const addToCart = (payload) => {
    debugger
    return {
        type: "ADD_TO_CART",
        payload,
    };
};

export const clearCart = (payload) => {
    return {
        type: "CLEAR_CART",
        payload
    }
}



//   export const clearCart = (payload) => (dispatch) => {
//     return axios("clear") .then((res) => {
//         dispatch({
//             type: "CLEAR_CART",
//             payload: res,
//         });
//         dispatch({
//             type: "USER_DETAILS",
//             payload: res,
//           });
//     });
// };