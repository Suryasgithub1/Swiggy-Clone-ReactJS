
import {createSlice} from "@reduxjs/toolkit"

const cartSlices = createSlice ({
    

    name: "cart",
    initialState : {
        items: []
    },
    reducers :{
        addItems : (state, action) => {
         state.items.push(action.payload);
        },
        clearItems : (state) => {
         state.items = [];
        },
        removeItems : (state, action, index) => {
            state.items.pop(action.payload)
        }, 
    }
})

export default cartSlices.reducer;
export const {addItems, clearItems, removeItems } = cartSlices.actions;