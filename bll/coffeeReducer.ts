import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type CoffeeType = {
    id: number
    name: string
    type: string
    price: number
    description: string
    rating: number
    img: string,
    choco:'white' | 'milk' |'dark'| null,
    milk:boolean,
    size:'small' | 'medium' | 'large'
}

export type InitialStateType=typeof initialState
export type CapsType={
    cap:CoffeeType
    count: number
}

const initialState = {
    data: [ ]as CapsType[]
}

const slice = createSlice({
    name: 'coffee',
    initialState,
    reducers: {
        addCoffee(state, action:PayloadAction<{cap:CoffeeType}>){
          if(state.data.findIndex(d=>d.cap.id===action.payload.cap.id) ===-1){
              state.data.unshift({cap:action.payload.cap,count:1})
          }else {
              state.data.map(d=>d.cap.id===action.payload.cap.id?{...d,count:d.count++}:d)
          }
        },
        deleteCoffee(state, action:PayloadAction<{id:number}>){
            let cap=state.data.find(d=>d.cap.id===action.payload.id)
            if(cap && cap.count===1) {
               state.data=state.data.filter(d=>d.cap.id!==action.payload.id)

            }else{
                state.data.map(d=>d.cap.id===action.payload.id?{...d,count:d.count--}:d)
            }
        },
        deleteAll(state){
            state.data=[]
        }
    }
    })

export const coffeeReducer = slice.reducer
export const {addCoffee,deleteCoffee,deleteAll}=slice.actions