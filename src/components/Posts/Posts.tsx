import Post from "../Post/Post";
import styles from "./Posts.module.css";
import { IPost } from "../../types/types";
import usePosts from "../../hooks/usePosts";

interface IPostsProp {
  searchPosts: string;
}

const Posts: React.FC<IPostsProp> = ({ searchPosts }) => {
  const { posts, isLoading, error } = usePosts(searchPosts);
  const url = "../../../public/images/Image.png";

  return (
    <>
      {isLoading && <h1>Загрузка постов...</h1>}
      {!isLoading && error && <h1>Ошибка при получении постов!</h1>}

      {posts && (
        <>
          {posts.length === 0 ? (
            <h2>Посты с названием {searchPosts} не найдены!</h2>
          ) : (
            <>
              <div className={styles.postContainer}>
                <Post
                  id={posts[0].id}
                  image={url}
                  title={posts[0].title}
                  body={posts[0].body}
                  isFirstChild={true}
                ></Post>
              </div>

              <div className={styles.postsMasonry}>
                {posts.map((post: IPost) => (
                  <div
                    className={[styles.postMasonry, styles.postContainer].join(
                      " "
                    )}
                    key={post.id}
                  >
                    <Post
                      id={post.id}
                      image={url}
                      title={post.title}
                      body=""
                      isFirstChild={false}
                    ></Post>
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Posts;
