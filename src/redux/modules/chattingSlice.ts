import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const chatMsgSlice = createSlice({
  name: 'chatMsg',
  initialState: [] as any[],
  reducers: {
    setChatMsg: (state, action: PayloadAction<any>) => { 
      console.log("...action.payload", action.payload)
      return [...state, {...action.payload, date:dayjs().format("YYYY-MM-DD")}]
    },
    deleteChatMsg: () => { 
      return []
    }
  },
});

export const ChatMsgReducer = chatMsgSlice.reducer;
export const selectchatMsg = (state: any) => state.ChatMsgReducer;
export const { setChatMsg, deleteChatMsg } = chatMsgSlice.actions;