import { PropsWithChildren } from "react";
import FullPost from "./FullPost/FullPost";
import MainPost from "./MainPost/MainPost";
import styles from "./Post.module.css";
import PreviewPost from "./PreviewPost/PreviewPost";

const Post = ({ children }: PropsWithChildren) => {
  return <div className={styles.container}>{children}</div>;
};

Post.MainPost = MainPost;
Post.PreviewPost = PreviewPost;
Post.FullPost = FullPost;

export default Post;
