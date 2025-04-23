import { useParams } from "react-router-dom";
import { useGetPostQuery } from "../store";
import Post from "../components/Post/Post";

const PostPage: React.FC = () => {
  const { postId } = useParams();
  const { data: post } = useGetPostQuery(postId);

  const url = "../../../public/images/Image.png";

  return (
    <div className="flex-container">
      {post && (
        <Post>
          <Post.FullPost
            id={post.id}
            image={url}
            title={post.title}
            body={post.body}
          ></Post.FullPost>
        </Post>
      )}
    </div>
  );
};

export default PostPage;
