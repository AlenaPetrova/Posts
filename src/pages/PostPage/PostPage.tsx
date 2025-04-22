import { useParams } from "react-router-dom";
import styles from "./PostPage.module.css";
import { useGetPostQuery } from "../../store";
import Post from "../../components/Post/Post";

const PostPage: React.FC = () => {
  const { postId } = useParams();
  const { data: post } = useGetPostQuery(postId);

  const url = "../../../public/images/Image.png";

  return (
    <div className={styles.container}>
      {post && (
        <Post id={post.id} image={url} title={post.title} body={post.body} />
      )}
    </div>
  );
};

export default PostPage;
