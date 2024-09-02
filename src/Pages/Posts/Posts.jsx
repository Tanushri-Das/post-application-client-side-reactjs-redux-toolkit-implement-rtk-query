import React from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import {
  useDeletePostMutation,
  useGetPostsQuery,
} from "../../features/api/apiSlice";
import "./Posts.css";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Posts = () => {
  const { data: posts, refetch } = useGetPostsQuery();
  console.log(posts)
  const [deletePost] = useDeletePostMutation();

  const handleDelete = async (id) => {
    try {
      await deletePost(id);
      toast.success("Post deleted successfully");
      refetch();
    } catch (error) {
      toast.error("Post cannot deleted successfully");
    }
  };
  return (
    <div className="mx-6 my-20 md:m-20">
      <h2 className="text-2xl font-semibold text-center">My Posts</h2>
      <div className="grid grid-cols-3 mb-6"></div>
      <div className="overflow-x-auto table-container">
        <div className="w-full mx-auto">
          <table className="table text-center">
            <thead>
              <tr>
                <th className="text-sm md:text-[16px]">No.</th>
                <th className="text-sm md:text-[16px]">Title</th>
                <th className="text-sm md:text-[16px]">Description</th>
                <th className="text-sm md:text-[16px]">Status</th>
                <th className="text-sm md:text-[16px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {posts?.map((post, index) => (
                <tr key={post._id}>
                  <td className="text-sm md:text-[16px]">{index + 1}</td>
                  <td className="text-sm md:text-[16px]">{post.title}</td>
                  <td className="price text-sm md:text-[16px]">
                    {post.description}
                  </td>
                  <td className="price text-sm md:text-[16px]">
                    {post.status}
                  </td>
                  <td className="action text-sm md:text-[16px]">
                    <Link to={`/posts/${post._id}`}>
                      <button className="bg-amber-400 text-white px-4 py-2 rounded">
                        <FaPencilAlt />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="bg-red-600 text-white ms-3 px-4 py-2 rounded"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Posts;
