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













// import {
//   createBrowserRouter,
//   Navigate,
//   RouterProvider,
// } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import TaskListPage from "./pages/TaskListPage";
// import TaskDetailsPage from "./pages/TaskDetailsPage";
// import Signin from "./pages/Signin";
// import ProtectedRoute from "./ProtectedRoute";
// import Layout from "./Layout";
// import Notfound from "./pages/Notfound";
// import ReactPlayground from "./ReactPlayground";
// import Signup from './pages/signup';



// const router = createBrowserRouter([
//     {
//     path: "/",
//     element: <Signup />,
//   },
//   {
//     path: "/signup",
//     element: <Signup />,
//   },
//   {
//     path: "/",
//     element: <Navigate to="/signin" replace />,
//   },
//   {
//     path: "/signin",
//     element: <Signin />,
//   },
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

// const App = () => {
//   return (
//     <>
//       <ReactPlayground />
//       <RouterProvider router={router} />
//     </>
//   );
// }

// // function App() {
// //   return (
// //     <div>
// //       {isHeaderVisible && <Header />}
// //       <Form />
// //       <Routes>
// //         <ReactPlayground />
// //         <RouterProvider router={router} />
// //       </Routes>
// //     </div>
// //   );
// // }

// export default App;


// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import Notfound from "./pages/Notfound";
// import Signup from './pages/signup';
// import Dashboard from "./pages/dashboard";
// import Signin from './pages/signin';
// import ProtectedRoute from "./ProtectedRoute";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Signup />,
//   },
//   {
//     path: "/signup",
//     element: <Signup />,
//   },
//   {
//     path: "/signin",
//     element: <Signin />,
//   },
//   {
//     path: "/notfound",
//     element: <Notfound />,
//   },
//   {
//     path: "/dashboard",
//     element: (
//       <ProtectedRoute>
//         <Dashboard />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: "*",
//     element: <Notfound />,
//   }
// ]);

// const App = () => {
//   return (
//     <RouterProvider router={router} />
//   );
// }

// export default App

import { useContext } from "react"; 
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ThemeContext } from "./context/theme";
import { ProjectsProvider } from "./context/projects/context";
import { UsersProvider } from "./context/members/context";

const App = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<div className={`h-screen w-full mx-auto py-2 ${theme === "dark" ? "dark" : ""}`}>
			<ProjectsProvider>
				<UsersProvider>
					<RouterProvider router={router} />
				</UsersProvider>
			</ProjectsProvider>
		</div>
	);
}

export default App;