import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import auth from "@store/reducers/auth";

// Reducers
export const rootReducer = combineReducers({
    auth,
});

// Store
const store = configureStore({
    reducer: rootReducer,
    devTools: import.meta.env.DEV,
});

export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;

// Hooks
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof rootReducer>> = useSelector;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
