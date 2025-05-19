import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchClasses = createAsyncThunk('classes/fetchClasses', async () => {
  const response = await axios.get('/api/classes');
  return response.data;
});

const classSlice = createSlice({
  name: 'classes',
  initialState: {
    classes: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClasses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchClasses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.classes = action.payload;
      })
      .addCase(fetchClasses.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default classSlice.reducer;