// CommentsContext.js
import React, { createContext, useContext } from 'react';

const FetchCommentsContext = createContext({
  fetchComments: () => {},
});

const CreateCommentContext = createContext({
  addComment: () => {},
});

export const useFetchCommentsContext = () => {
  return useContext(FetchCommentsContext);
};

export const useCreateCommentsContext = () => {
  return useContext(CreateCommentContext);
};

export const CommentsProvider = ({ children, fetchComments, addComment }) => {
  return (
    <CreateCommentContext.Provider value={{ addComment }}>
      <FetchCommentsContext.Provider value={{ fetchComments }}>{children}</FetchCommentsContext.Provider>
    </CreateCommentContext.Provider>
  );
};
