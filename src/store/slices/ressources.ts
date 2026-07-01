import { createSlice } from '@reduxjs/toolkit'
import type { ImageInterface, MemeInterface } from 'orsys-tjs-meme';
import * as data from '../../../db.json'
import { initialRessourcesLoad } from '../asyncCaller/asyncRessources';
interface IRessourcesState{
    memes:Array<MemeInterface>
    images:Array<ImageInterface>
}
export const initialState: IRessourcesState= {
    memes:[],
    images:[]

}

const ressources = createSlice({
  name: 'ressources',
  initialState,
  reducers: {
    addSingleMeme:(state,action)=>{
            state.memes.push(action.payload)
            //anvcienne ecriture immutable return {...state,memes:[...state.memes,action.payload]}
    }
  },
  extraReducers(builder) {
      builder.addCase(initialRessourcesLoad.fulfilled, (s,a)=>{
        s.images=a.payload.images
        s.memes=a.payload.memes
      })
  },
});

//const addSingleMeme=(meme:MemeInterface)=>({type:'ressources/addSingleMeme',payload:meme})

export const {addSingleMeme} = ressources.actions

const ressourcesReducer=ressources.reducer
export default ressourcesReducer