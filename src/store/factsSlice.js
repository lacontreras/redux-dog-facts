import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchDogFacts } from '../utilities';

export const fetchDogFactsFromApi = createAsyncThunk(
  'facts/fetchFacts',
  async (count) => {
    const facts = await fetchDogFacts(count);
    return facts;
  }
);

export const dogSlice = createSlice({
  name: 'facts',
  initialState: [
    {
      facts: [],
      loading: false
    }
  ],
  extraReducers: {
    [fetchDogFactsFromApi.fulfilled]: (state, action) => {
      console.log(action.payload);
      //state = action.payload;
      //return action.payload;
      return action.payload;
    }
  }
});
