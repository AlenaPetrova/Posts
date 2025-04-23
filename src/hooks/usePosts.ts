import { useGetPostsQuery } from "../store";

const usePosts = (title?: string) => {
  const limit = "11";
  const { data: posts, isLoading, error } = useGetPostsQuery({ limit, title });
  return { posts, isLoading, error };
};
export default usePosts;
