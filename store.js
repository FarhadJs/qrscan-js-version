import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import counterReducer from "./features/counterSlice";
import qrCodeReduser from "./features/qrCodeResult";

const makeStore = () =>
  configureStore({
    reducer: {
      counter: counterReducer,
      qrCode: qrCodeReduser,
    },
  });

export const wrapper = createWrapper(makeStore);
