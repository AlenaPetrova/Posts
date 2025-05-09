import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "./postApi";

export const store = configureStore({
  reducer: { [postApi.reducerPath]: postApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});
