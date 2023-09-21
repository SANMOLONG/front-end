import * as Type from 'axios';

// React-Redux를 위한 타입지정
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface MyAxiosRequestConfig extends Type.AxiosRequestConfig {
  headers: Type.AxiosRequestHeaders;
}

export interface ErrorType {
  data: {
    error: boolean,
    status:number,
    msg: string
  }
}
export interface CustomAxiosError<T> extends AxiosError {
  response?: AxiosResponse<T>
}