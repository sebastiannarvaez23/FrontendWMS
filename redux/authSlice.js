import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: null,
    password: null
};

export const authSlice = createSlice({
    name: "credential",
    initialState,
    reducers: {
        addCredential: (state, action) => {
            const { username, password } = action.payload;
            state.username = username;
            state.password = password;
        },
        changeCredencial: (state, action) => {
            const { username, password } = action.payload;
            state.username = username;
            state.password = password;
        },
        deleteCredencial: (state, action) => {
            state.username = null;
            state.password = null;
        }
    },
});

export const { addCredential, changeCredencial } = authSlice.actions;
export default authSlice.reducer;