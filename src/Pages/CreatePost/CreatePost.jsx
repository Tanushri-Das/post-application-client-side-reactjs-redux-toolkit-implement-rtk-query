import React from "react";
import { useForm } from "react-hook-form";
import {
  useAddToPostMutation,
  useGetPostsQuery,
} from "../../features/api/apiSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [addToPost] = useAddToPostMutation();
  const { refetch: refetchPost } = useGetPostsQuery();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await addToPost({
        title: data.title,
        description: data.description,
        status: data.status,
      });
      toast.success("Post added successfully");
      reset();
      refetchPost();
      navigate("/posts");
    } catch (error) {
      toast.error("Post cannot added successfully");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto my-20">
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
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
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
                {...register("status", { required: "Status is required" })}
                className="mr-2"
              />
              <label htmlFor="completed">Completed</label>
            </div>
          </div>
          {errors.status && (
            <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
