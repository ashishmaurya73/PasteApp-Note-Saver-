import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  pastes:localStorage.getItem("pastes")
  ? JSON.parse(localStorage.getItem("pastes")) : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste=action.payload;
      const index=state.pastes.findIndex((item)=>item._id === paste._id)
       
      if(index>=0){
        toast.error("Paste already exist")
        return
      }
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast("Paste added")
    },
    updatePastes: (state, action) => {
      const paste= action.payload;
      const index=state.pastes.findIndex((item)=>item._id === paste._id)

      if(index >=0){
        // If the course is found in the Pastes, update it
        state.pastes[index] = paste
        // Update to localstorage
        localStorage.setItem("pastes", JSON.stringify(state.pastes))

        toast.success("Paste updated", {
          position:'top-right'
        })
      }
    },
    resetAllPastes: (state) => {
      state.pastes=[];
      localStorage.removeItem("pastes");
    },
    removeFromPastes: (state, action) => {
      const pasteId=action.payload;

      console.log(pasteId);
      const index=state.pastes.findIndex((item)=>item._id === pasteId);

      if(index>=0){
        // If the course is found in the Pastes, update it
        state.pastes.splice(index, 1);
        // Update to localstorage
        localStorage.setItem("pastes", JSON.stringify(state.pastes));

        toast.success("Paste deleted", {
          position:'top-right'
        });
      }

    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updatePastes, resetAllPastes, removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer 



