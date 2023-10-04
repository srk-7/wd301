import { CommentState, CommentsActions } from "./types";
export const initialState: CommentState = {
    comment: [],
    isLoading: false,
    isError: false,
    errorMessage: "",
};

export const reducer = (
    state: CommentState = initialState,
    action: CommentsActions
): CommentState => {
    switch (action.type) {
        case "FETCH_COMMENTS_REQUEST":
            return {
                ...state,
                isLoading: true,
            };
        
        case "FETCH_COMMENTS_SUCCESS":
            return {
                ...state,
                isLoading: false,
                comment: action.payload,
            };
        
        case "FETCH_COMMENTS_FAILURE":
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMessage: action.payload,
            };
        
        case "CREATE_COMMENT_REQUEST":
            return {
                ...state,
                isLoading: true,
            };
        
        case "CREATE_COMMENT_SUCCESS":
            return {
                ...state,
                isLoading: false,
            };
        
        case "CREATE_COMMENT_FAILURE":
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMessage: action.payload,
            };
        
        default:
            return state;
    }
};