import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import CreatePost from "../Pages/CreatePost/CreatePost";
import Posts from "../Pages/Posts/Posts";
import UpdatePost from "../Pages/UpdatePost/UpdatePost";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create-post",
        element: <CreatePost />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/posts/:id",
        element: <UpdatePost />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/posts/${params.id}`),
      },
    ],
  },
]);
export default routes;
