
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async (_, thunkAPI) => {
//     try {
//       const res = await axios.get('/сontacts');
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, {rejectWithValue}) => {
try {
  const response = await axios.get("/contacts");
  console.log(response)
  return response.data;
} catch (error) {
 
 return rejectWithValue(error.response.data)
}
});

export const addContact = createAsyncThunk("contacts/addContact", async (contacts, {rejectWithValue}) => {
   try {
    const response = await axios.post("/contacts", {...contacts});
    return response.data;
   } catch (error) {
    if (!error.response) {
      throw error
    }
   return rejectWithValue(error.response.data)
  }
});

export const deleteContact  = createAsyncThunk("contacts/deleteContact", async (id, {rejectWithValue}) => {
  try {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
  } catch (error) {
    if (!error.response) {
      throw error
    }
   return rejectWithValue(error.response.data)
   
  }
});