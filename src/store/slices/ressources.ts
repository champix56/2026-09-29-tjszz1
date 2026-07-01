import { createSlice } from '@reduxjs/toolkit'
import type { ImageInterface, MemeInterface } from 'orsys-tjs-meme';
import * as data from '../../../db.json'
interface IRessourcesState{
    memes:Array<MemeInterface>
    images:Array<ImageInterface>
}
const initialState: IRessourcesState= {
    memes:[...data.memes],
    images:[...data.images]

}

const ressources = createSlice({
  name: 'ressources',
  initialState,
  reducers: {
    addSingleMeme:(state,action)=>{
            state.memes.push(action.payload)
            //anvcienne ecriture immutable return {...state,memes:[...state.memes,action.payload]}
    }
  }
});

//const addSingleMeme=(meme:MemeInterface)=>({type:'ressources/addSingleMeme',payload:meme})

export const {addSingleMeme} = ressources.actions

const ressourcesReducer=ressources.reducer
export default ressourcesReducer