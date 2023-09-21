import { configureStore } from "@reduxjs/toolkit";
import {ChatMsgReducer} from '../modules/chattingSlice'
import { rtkQuery } from "../api/RTKquery";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer:{
    ChatMsgReducer,
    [rtkQuery.reducerPath]: rtkQuery.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkQuery.middleware)
})

setupListeners(store.dispatch);