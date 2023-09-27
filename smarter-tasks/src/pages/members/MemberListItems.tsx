/* eslint-disable @typescript-eslint/no-explicit-any */
import { useUsersDispatch } from "../../context/members/context";
import { useUsersState } from "../../context/members/context";
import { delUser } from "../../context/members/actions";
import { SubmitHandler } from "react-hook-form";

type Sno = {
    id: number;
}

export default function MemberListItems() {
    const state: any = useUsersState();
    const dispatchUsers = useUsersDispatch();

    const { users, isLoading, isError, errMsg } = state;
    console.log(users);

    if (isLoading && users.length === 0) {
        return <span>Loading...</span>;
    }

    if (isError) {
        return <span>{errMsg}</span>;
    }

    const onSubmit: SubmitHandler<Sno> = async (Id) => {
        const { id } = Id;
        const res = await delUser(dispatchUsers, id);
        if (res.ok) {
            console.log("User Delete Success");
        } else {
            console.log("User Not Deleted");
        }
    }

    return (
        <>
            {users.map((user: any) => (
                <div
                key={user.id}
                className="member block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex items-center justify-between"
                >
                    <div>
                        <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{user.name}</h5>
                        <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
                    </div>
                    <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => onSubmit({ id: user.id })}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            ))}
        </>
    );
}
