

export const getBasketTotal= (basket) =>
    basket?.reduce((amount , item) => item.price + amount ,0 );

export const initialState={
    basket:[],
    user:null,
};

const reducer= (state, action) =>{
    switch(action.type){
        case 'SET_USER':
        return {
            ...state,
            user:action.user
        }

        case  'ADD_ITEM_TO_BASKET':
         // Logic here for adding items
          return {
              ...state,
              basket :[...state.basket , action.item]
            }; 
        break;
        
        case  'REMOVE_ITEM_TO_BASKET':
        // Logic here for removing items
         let newBasket=[...state.basket];
         const index=state.basket.findIndex((basketItem)=> basketItem.id === action.id);
         if(index >= 0){
             newBasket.splice(index,1);
         }else{
             console.warn(`Can't remove product (id: ${action.id}) as it non basket item`);
         }

           return {
               ...state,
                basket:newBasket,
              }; 
        break;
        default:
            return state;

    }
}

export default reducer;