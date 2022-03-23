import { Provider } from "react-redux";
import { createStore } from "redux";
import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

interface Counter {
  count: number;
  user: string;
}

const 초기값: Counter = { count: 0, user: "kim" };

// function reducer(state = 초기값, action :{type : string}) :Counter{
//   if (action.type === '증가') {
//     return { count : state.count + 1 }
//   } else if (action.type === '감소'){
//     return { count : state.count - 1 }
//   } else {
//     return 초기값
//   }
// }

// const store = createStore(reducer);

// store의 타입 미리 export 해두기
export type RootState = ReturnType<typeof store.getState>;

const counterSlice = createSlice({
  name: "counter",
  initialState: 초기값,
  reducers: {
    증가(state) {
      state.count += 1;
    },
    감소(state) {
      state.count -= 1;
    },
    맘대로증가(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
  },
});

let store = configureStore({
  reducer: {
    counter1: counterSlice.reducer,
  },
});

export let { 증가, 감소, 맘대로증가 } = counterSlice.actions;

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// )
