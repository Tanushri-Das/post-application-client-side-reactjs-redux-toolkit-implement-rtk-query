import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import {
  useGetPostsQuery,
  useUpdatePostMutation,
} from "../../features/api/apiSlice";
import { toast } from "react-toastify";

const UpdatePost = () => {
  const post = useLoaderData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: post?.title,
      description: post?.description,
      status: post?.status,
    },
  });
  const [updatePost] = useUpdatePostMutation();
  const navigate = useNavigate();
  const { refetch: refetchPost } = useGetPostsQuery();

  const onSubmit = async (data) => {
    try {
      await updatePost({ id: post._id, updatedPost: data });
      toast.success("Post updated successfully");
      refetchPost();
      navigate("/posts");
    } catch (error) {
      toast.success("Post cannot updated successfully");
    }
  };
  return (
    <div className="max-w-md mx-auto my-20">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-6 rounded-lg border-2 border-gray-200">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              {...register("title", { required: "Title is required" })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              {...register("description", {
                required: "Description is required",
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows="4"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <div className="mt-2 space-y-2">
              <div>
                <input
                  type="radio"
                  id="pending"
                  value="pending"
                  defaultChecked={post?.status === "pending"}
                  {...register("status", { required: "Status is required" })}
                  className="mr-2"
                />
                <label htmlFor="pending">Pending</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="running"
                  value="running"
                  defaultChecked={post?.status === "running"}
                  {...register("status", { required: "Status is required" })}
                  className="mr-2"
                />
                <label htmlFor="running">Running</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="completed"
                  value="completed"
                  defaultChecked={post?.status === "completed"}
                  {...register("status", { required: "Status is required" })}
                  className="mr-2"
                />
                <label htmlFor="completed">Completed</label>
              </div>
            </div>
            {errors.status && (
              <p className="text-red-500 text-sm mt-1">
                {errors.status.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePost;
