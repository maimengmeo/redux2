import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  //songsSlice is an obj
  name: "song",
  initialState: [], //define initial state
  reducers: {
    //combine reducer, fed to redux store
    //song + / + addSong = song/addSong
    addSong(state, action) {
      //action creator
      //this state is not the big state obj in the store
      //it s the piece of state managed by this reducer
      state.push(action.payload);
    },
    //song/removeSong
    removeSong(state, action) {
      //action creator
    }
  }
});

//console.log(songsSlice.actions.addSong);

//store creation. there is big state obj in store, then many ohters small state inside
const store = configureStore({
  //create a store by configureStore
  reducer: {
    songs: songsSlice.reducer //obj with songs key.
    //this reducer is not reducers above,
    //this is a func can be viewed as like a big mega reducer
    //it wrappped up all the reducers above
    //now redux store has song state with empty array,
    //the array later is produced/ filled by songs reducer
  }
});

const startingState = store.getState();
console.log(JSON.stringify(startingState));

store.dispatch({
  //dispatch func => combined reducer created by songsSlice => State
  type: "song/addSong",
  payload: "New Song"
});

const finalState = store.getState();
console.log(JSON.stringify(finalState));
