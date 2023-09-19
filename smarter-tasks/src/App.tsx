// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// import HomePage from './pages/HomePage';
// import TaskListPage from './pages/TaskListPage';

// import TaskApp from "./TaskApp";
// import './App.css';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/tasks",
//     element: <TaskListPage />,
//   },
// ]);

// // function App() {
// //   return (
// //     <div className="App">
// //       <TaskApp />
// //     </div>
// //   );
// // }

// const App = () => {
//   return (
//     <RouterProvider router={router} />
//   );
// }

// export default App;
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaskListPage from "./pages/TaskListPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import Signin from "./pages/Signin";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "./Layout";
import Notfound from "./pages/Notfound";
import ReactPlayground from "./ReactPlayground";
import Signup from './pages/signup';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/notfound",
    element: <Notfound />,
  },
  {
    path: "*",
    element: <Notfound />,
  }
]);

  // {
  //   path: "/",
  //   element: <Navigate to="/signin" replace />,
  // },
  // {
  //   path: "/signin",
  //   element: <Signin />,
  // },
//   {
//     element: (
//       <ProtectedRoute>
//         <Layout />
//       </ProtectedRoute>
//     ),
//     children: [
//       {
//         path: "home",
//         element: <HomePage />,
//       },
//       {
//         path: "tasks",
//         element: <TaskListPage />,
//       },
//       {
//         path: "tasks/:id",
//         element: <TaskDetailsPage />,
//       },
//       {
//         path:"notfound",
//         element: <Notfound />,
//       },
//       {
//         path: "*",
//         element: <Navigate to="/notfound" replace />,
//       },
//     ],
//   }
// ]);

const App = () => {
  return (
    <>
      <ReactPlayground />
      <RouterProvider router={router} />
    </>
  );
}

// function App() {
//   return (
//     <div>
//       {isHeaderVisible && <Header />}
//       <Form />
//       <Routes>
//         <ReactPlayground />
//         <RouterProvider router={router} />
//       </Routes>
//     </div>
//   );
// }

export default App;