
import { ADD_TO_BASKET, REMOVE_FROM_BASKET, SET_USER, ADD_WISHLIST, REMOVE_FROM_WISHLIST } from "../Types/types"

export const initialState = {
    basket: [],  // عشان نضيف فيها المنتجات اللي بيختارها المستخدم
    favourite: [],
    user: null   // لأنه مفيش لسه مستخدم سجل دخول للموقع
}

const Reducer = (state = initialState, action) => {
    // reducer بيقبل مني initialState , Action
    switch (action.type) {
        case SET_USER:    // في حالة لو فيه user سجل في الموقع هيرجع القيمة اللي المستخدم دخلها
            return {
                ...state,   // عملنا ... عشان تحافظ على القيمة الباقيه في state
                user: action.user,   // هتننفذ فانكشن معينه وتبعت user 
            };

        case ADD_TO_BASKET:
            const existingBasket = state.basket || [];
            const existingItem = existingBasket.find(item => item.id === action.items.id);
            if (existingItem) {
                return state;
            } else {
                return {
                    ...state,
                    basket: [...existingBasket, action.items]
                };
            }
        case REMOVE_FROM_BASKET:
            const filteredBasket = state.basket.filter((ele) => ele.id !== action.id)
            return {
                ...state,
                basket: filteredBasket
            }

        case ADD_WISHLIST:
            const arrayfavourite = state.favourite || []
            const arrayfavouriteItems = arrayfavourite.find((ele) => ele.id === action.item.id)
            if (arrayfavouriteItems) {
                return state
            } else {
                return {
                    ...state,
                    favourite: [...arrayfavourite, action.item]
                }
            }
        case REMOVE_FROM_WISHLIST:
            const filterWishList = state.favourite.filter((ele) => ele.id !== action.id)
            return {
                ...state,
                favourite: filterWishList
            }


        default:
            return state;
    }
}
export default Reducer;