import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import { lazy, Suspense } from "react";

const Blog = lazy(() => import("../pages/Blog/Blog"));
const PostPage = lazy(() => import("../pages/PostPage/PostPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <Blog />
          </Suspense>
        ),
      },
      {
        path: "/:postId",
        element: (
          <Suspense>
            <PostPage />
          </Suspense>
        ),
      },
    ],
  },
]);
