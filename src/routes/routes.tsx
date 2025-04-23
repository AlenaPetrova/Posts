import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import { lazy, Suspense } from "react";

const Blog = lazy(() => import("../pages/Blog"));
const PostPage = lazy(() => import("../pages/PostPage"));

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
