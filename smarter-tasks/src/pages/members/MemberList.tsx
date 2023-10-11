/* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect } from 'react';
// import { fetchUsers } from '../../context/members/actions';
// import { useMembersDispatch } from '../../context/members/context';
// import MemberListItems from './MemberListItems';

// const MemberList: React.FC = () => {
//     const dispatchUsers = useMembersDispatch();

//     useEffect(() => {
//         fetchUsers(dispatchUsers);
//     }, []);

//     return (
//         <div className="suspense-loading grid gap-4 grid-cols-4 mt-5">
//             <MemberListItems />
//         </div>
//     )
// }

import React, { useEffect, Suspense } from "react";
import { fetchUsers } from "../../context/members/actions";
import { useMembersDispatch } from "../../context/members/context";
const MemberListItems = React.lazy(() => import("./MemberListItems"));
import ErrorBoundary from "../../components/ErrorBoundary";

const MemberList: React.FC = () => {
  const dispatchMembers = useMembersDispatch();

  useEffect(() => {
    fetchUsers(dispatchMembers);
  }, []);
  return (
    <div className="mt-5">
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <MemberListItems />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
export default MemberList;