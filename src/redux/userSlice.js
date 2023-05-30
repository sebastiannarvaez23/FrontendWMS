import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    username: null
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { id, username } = action.payload;
            state.id = id;
            state.username = username;
        },
    },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;