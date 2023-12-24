import { createSlice } from "@reduxjs/toolkit";

export const qrCodeSlice = createSlice({
  name: "QrCodeResult",
  initialState: {
    value: "",
  },
  reducers: {
    defaultValue: (state) => {
      state.value = "QrCodeResult";
    },
    setQrCodeResult: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { defaultValue, setQrCodeResult } = qrCodeSlice.actions;

export default qrCodeSlice.reducer;
