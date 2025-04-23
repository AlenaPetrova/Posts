import Post from "../Post/Post";
import styles from "./Posts.module.css";
import { IPost } from "../../types/types";

interface IPostsProps {
  posts: IPost[];
}

const Posts: React.FC<IPostsProps> = ({ posts }) => {
  const url = "../../../public/images/Image.png";

  return (
    <>
      <Post>
        <Post.MainPost
          id={posts[0].id}
          image={url}
          title={posts[0].title}
          body={posts[0].body}
        ></Post.MainPost>

        <div className={styles.postsMasonry}>
          {posts.map((post: IPost) => (
            <div className={styles.postMasonry} key={post.id}>
              <Post.PreviewPost
                id={post.id}
                image={url}
                title={post.title}
              ></Post.PreviewPost>
            </div>
          ))}
        </div>
      </Post>
    </>
  );
};

export default Posts;
