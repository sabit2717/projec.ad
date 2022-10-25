import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSliceReducer } from "./authSlice";
import { housesSliceReducer } from "./housesSlice";



const reducers = combineReducers({
  auth: authSliceReducer,
  houses: housesSliceReducer
});

export const store = configureStore({
  reducer: reducers,
});
store.subscribe(() => {
  const auth = store.getState().auth
  localStorage.setItem("auth", JSON.stringify(auth))
})