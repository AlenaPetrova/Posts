import { useGetPostsQuery } from "../store";

const usePosts = () => {
      const limit = "7";
      const { data: posts, isLoading, error } = useGetPostsQuery(limit);
      return {posts, isLoading, error}
}
export default usePosts;
