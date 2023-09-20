import { configureStore } from "@reduxjs/toolkit";
import {ChatMsgReducer} from '../modules/chattingSlice'

export const store = configureStore({
  reducer:{
    ChatMsgReducer
  }
})