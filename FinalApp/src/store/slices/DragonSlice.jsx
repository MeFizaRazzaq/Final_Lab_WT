import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the async thunk within the slice
export const fetchData = createAsyncThunk('dragon/fetchData', async () => {
    const response = await fetch('https://api.spacexdata.com/v4/dragons');
    const data = await response.json();
    
    console.log("dta api:",data);
    return data;
});

// Define the async thunk within the slice
export const fetchDataMission = createAsyncThunk('mission/fetchDataMission', async () => {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();
    
    console.log("dta api mission:",data);
    return data;
});

const DragonSlice = createSlice({
    name: "dragon",
    initialState:[],
    reducers: {
        addDragon(state,action){
            console.log("add dragon",action.payload);
            state.push(action.payload);
        },

    }
});

const MissionSlice = createSlice({
    name: "mission",
    initialState:[],
    reducers: {
        addMission(state,action){
            console.log("add mission",action.payload);
            state.push(action.payload);
        },

    }
});

console.log(DragonSlice.actions);

export { DragonSlice,MissionSlice };
export const {addDragon}= DragonSlice.actions;

export const {addMission}= MissionSlice.actions;

/*


*/