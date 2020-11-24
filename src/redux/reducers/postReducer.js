import { createSlice } from "@reduxjs/toolkit";
import { getPost as getPostAPI, addPost } from "../../WebApi";

export const postReducer = createSlice({
  name: "posts",
  initialState: {
    isLoadingPost: false,
    post: null,
    newPostResponse: null,
  },
  reducers: {
    setIsLoadingPost: (state, action) => {
      state.isLoadingPost = action.payload;
    },
    setPost: (state, action) => {
      state.post = action.payload;
    },
    setNewPostResponse: (state, action) => {
      state.newPostResponse = action.payload;
    },
  },
});

export const {
  setIsLoadingPost,
  setPost,
  setNewPostResponse,
} = postReducer.actions;

export const getPost = (id) => (dispatch) => {
  dispatch(setIsLoadingPost(true));
  getPostAPI(id)
    .then((res) => {
      dispatch(setPost(res));
      dispatch(setIsLoadingPost(false));
    })
    .catch((err) => console.log(err));
};

export const newPost = (title, body) => (dispatch) => {
  addPost(title, body).then((data) => {
    dispatch(setNewPostResponse(data));
  });
};

export default postReducer.reducer;
