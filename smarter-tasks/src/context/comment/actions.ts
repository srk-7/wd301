import { API_ENDPOINT } from "../../config/constants";
import {
    CommentListAvailableAction,
    CommentsDispatch,
} from "./types";

export const fetchComments = async (
    dispatch: CommentsDispatch,
    projectID: string,
    taskID: string,
) => {
    const token = localStorage.getItem('authToken') ?? "";
    try {
        dispatch({ type: CommentListAvailableAction.FETCH_COMMENTS_REQUEST });
        const res = await fetch(
            `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
            {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (!res.ok) {
            throw new Error("Error fetching comments");
        }

        const data = await res.json();
        dispatch({
            type: CommentListAvailableAction.FETCH_COMMENTS_SUCCESS,
            payload: data,
        });
    } catch (err) {
        console.error("Operation Failed:", err);
        dispatch({
            type: CommentListAvailableAction.FETCH_COMMENTS_REQUEST_ERROR,
            payload: "Error fetching comments",
        });
    }
};

export const addComment = async (
    dispatch: CommentsDispatch,
    projectID: string,
    taskID: string,
    comment: string,
) => {
    dispatch({ type: CommentListAvailableAction.CREATE_COMMENT_REQUEST });
    const token = localStorage.getItem('authToken') ?? "";
    try {
        const res = await fetch(
            `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ description: comment }),
            }
        );

        if (!res.ok) {
            throw new Error("Failed to create comment");
        }
        const data = await res.json();
        if (data.errors && data.errors.length > 0) {
            return { ok: false, error: data.errors[0].message };
        }
        dispatch({
            type: CommentListAvailableAction.CREATE_COMMENT_SUCCESS
        });
        fetchComments(dispatch, projectID, taskID);
    } catch (err) {
        console.error("Operation failed: ", err);
        dispatch({
            type: CommentListAvailableAction.CREATE_COMMENT_FAILURE,
            payload: "Error creating comment",
        });
    }
};