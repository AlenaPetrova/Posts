import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../types/types";

export const postApi = createApi({
  reducerPath: "postApi",
  tagTypes: ["Posts"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (build) => ({
    getPosts: build.query<IPost[], string & string>({
      query: (limit = "", title = "") => ({
        url: `/posts?${limit && `_limit=${limit}`}&${
          title && `_search=${title}`
        }`,
      }),
      providesTags: () => ["Posts"],
    }),

    getPost: build.query<IPost, string | undefined>({
      query: (id) => `/posts/${id}`,
      providesTags: () => ["Posts"],
    }),
    addPost: build.mutation<IPost, Partial<IPost>>({
      query: (post) => ({
        url: "/posts",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Posts"],
    }),

    deletePost: build.mutation<void, string>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),
    updatePost: build.mutation<IPost, Partial<IPost>>({
      query: ({ id, ...patch }) => ({
        url: `/posts/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
} = postApi;
