import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (builder) => ({
    addToPost: builder.mutation({
      query: (postItem) => ({
        url: "posts",
        method: "POST",
        body: postItem,
      }),
    }),
    getPosts: builder.query({
      query: () => "posts",
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
    }),
    getPostById: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: "GET",
      }),
    }),
    updatePost: builder.mutation({
      query: ({ id, updatedPost }) => ({
        url: `posts/${id}`,
        method: "PATCH",
        body: updatedPost,
      }),
    }),
  }),
});
export const {
  useAddToPostMutation,
  useGetPostsQuery,
  useDeletePostMutation,
  useGetPostByIdMutation,
  useUpdatePostMutation,
} = postsApi;
