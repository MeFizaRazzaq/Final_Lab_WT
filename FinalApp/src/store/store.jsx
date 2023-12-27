import { configureStore } from "@reduxjs/toolkit";
import { DragonSlice, MissionSlice } from "./slices/dragonSlice";

const store = configureStore({
    reducer: {
        dragons: DragonSlice.reducer,
        missions: MissionSlice.reducer,
    },
});

export default store;