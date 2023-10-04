/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import {
    useCommentsDispatch,
    useCommentsState,
} from "../../context/comment/context";
import { CommentPayload } from "../../context/comment/types";
import { addComment,fetchComments } from "../../context/comment/actions";
import { useUsersState } from "../../context/members/context";

type CommentDataPayload = Omit<CommentPayload, "taskID" | "owner">;

export default function Comments() {
    const { projectID, taskID } = useParams();
    const commentDipatch = useCommentsDispatch();
    const {
        register,
        handleSubmit,
    } = useForm<CommentDataPayload>({});

    const onSubmit: SubmitHandler<CommentDataPayload> = async (data) => {
        const { description } = data;
        await addComment(commentDipatch, `${projectID}`, `${taskID}`, description);
    };

    const commentState = useCommentsState();
    const memberState = useUsersState();
    const { comment, isLoading, isError, errorMessage } = commentState;

    useEffect(() => {
        fetchComments(commentDipatch, `${projectID}`, `${taskID}`);
    }, [taskID, projectID, commentDipatch]);

     if (comment.length === 0 && isLoading) {
        return <p className="mt-3 text-gray-600 font-bold">Loading...</p>;
    }

    if (isError) {
        return <p className="mt-3 text-red-500">{errorMessage}</p>;
    }

    const setTimeAndDate = (date: string) => {
        const tempDate = new Date(date);
        const formatDate = tempDate.toDateString();
        let hours = tempDate.getHours();
        let minutes = tempDate.getMinutes();
        const newformat = hours >= 12 ? "PM" : "AM";

        hours = hours % 12;
        hours = hours ? hours : 12;

        const formatedTime = `${hours}:${minutes < 10 ? "0" + minutes : minutes
            } ${newformat}`;

        return `${formatDate} ${formatedTime}`;
    };

    const getComment = (owner: any) => {
        const assignee = memberState?.users?.filter(
            (member) => member.id === owner
        )?.[0];
        return assignee?.name;
    };

    return (
        <div className="mt-4">
            <div>
                <h2 className="font-bold">Comments</h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex items-center gap-2"
                >
                <input
                    type="text"
                    required
                    placeholder="Enter comment"
                    id="commentBox"
                    {...register("description", { required: true })}
                    className="w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                    />
                    <button
                        type="submit"
                        id="addCommentBtn"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >
                        Comment
                    </button>
                </form>
                {commentState.comment.map((comment: CommentPayload) => {
                    return (
                        <div className="comment my-2 rounded-lg bg-gray-200 px-3 py-2">
                            <div className="flex justify-between">
                                <h2 className="font-semibold">
                                Member : {getComment(comment.owner)}
                                </h2>
                                <p className="text-sm font-semibold">
                                    {setTimeAndDate(comment.createdAt)}
                                </p>
                            </div>
                            <p>{comment.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
  );
}