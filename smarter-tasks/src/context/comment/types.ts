type User = {
    id: number;
    email: string;
    name: string;
};

export type Comment = {
    id: number;
    description: string;
    createdAt: string;
    updatedAt: string;
    taskID: number;
    owner: number;
    user: User;
}

export type CommentPayload = Omit<Comment, 'id' | 'updatedAt' | 'user'>;

export interface CommentState {
    comment: CommentPayload[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
}

export enum CommentListAvailableAction {
    FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST",
    FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
    FETCH_COMMENTS_REQUEST_ERROR = "FETCH_COMMENTS_FAILURE",

    CREATE_COMMENT_REQUEST = "CREATE_COMMENT_REQUEST",
    CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS",
    CREATE_COMMENT_FAILURE = "CREATE_COMMENT_FAILURE",
}

export type CommentsActions =
    | { type: CommentListAvailableAction.FETCH_COMMENTS_REQUEST }
    | { type: CommentListAvailableAction.FETCH_COMMENTS_SUCCESS; payload: CommentPayload[]; }
    | { type: CommentListAvailableAction.FETCH_COMMENTS_REQUEST_ERROR; payload: string }
    | { type: CommentListAvailableAction.CREATE_COMMENT_REQUEST }
    | { type: CommentListAvailableAction.CREATE_COMMENT_SUCCESS }
    | { type: CommentListAvailableAction.CREATE_COMMENT_FAILURE; payload: string };
    
export type CommentsDispatch = React.Dispatch<CommentsActions>;