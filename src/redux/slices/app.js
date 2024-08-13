import {createSlice} from '@reduxjs/toolkit';

// ----------------------------------------------------------------------
const defaultState = {
  language: 'english',
};

const slice = createSlice({
  name: 'app',
  initialState: defaultState,
  reducers: {
    setAppLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

export const actions = slice.actions;

export const setAppLanguage =
  ({language}) =>
  (dispatch) =>
    dispatch(actions.setAppLanguage(language));

export const getAppLanguage = (state) => state.app.language;
