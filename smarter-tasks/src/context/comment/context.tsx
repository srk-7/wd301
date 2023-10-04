/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useReducer } from 'react';
import { CommentsDispatch, CommentState } from './types';
import { reducer, initialState } from './reducer';

const CommentsStateContext = createContext<CommentState>(initialState);

const CommentsDispatchContext = createContext<CommentsDispatch>(() => { });

export const CommentsProvider: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <CommentsStateContext.Provider value={state}>
            <CommentsDispatchContext.Provider value={dispatch}>
                {children}
            </CommentsDispatchContext.Provider>
        </CommentsStateContext.Provider>
    );
};

export const useCommentsState = () => useContext(CommentsStateContext);

export const useCommentsDispatch = () => useContext(CommentsDispatchContext);