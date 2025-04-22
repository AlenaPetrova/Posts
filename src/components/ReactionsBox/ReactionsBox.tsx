import { useContext } from "react";
import styles from "./ReactionsBox.module.css";
import { ReactionsContext } from "../../hooks/useContext";
import { IReactions } from "../../types/types";

const ReactionsBox: React.FC = () => {
  const { like, dislike, handleLike, handleDislike } =
    useContext(ReactionsContext) as IReactions;
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <button className={styles.btn} onClick={() => handleLike()}>
          {like.isLike ? (
            <img
              className={styles.img}
              src="../../../public/svg/likeOn.svg"
              alt="likeOn"
            />
          ) : (
            <img
              className={styles.img}
              src="../../../public/svg/likeOff.svg"
              alt="likeOff"
            />
          )}
        </button>
        <span className={styles.counter}>{like.countLikes}</span>
      </div>
      <div className={styles.content}>
        <button className={styles.btn} onClick={() => handleDislike()}>
          {dislike.isDislike ? (
            <img
              className={styles.img}
              src="../../../public/svg/dislikeOn.svg"
              alt="dislikeOn"
            />
          ) : (
            <img
              className={styles.img}
              src="../../../public/svg/dislikeOff.svg"
              alt="dislikeOff"
            />
          )}
        </button>
        <span className={styles.counter}>{dislike.countDislikes}</span>
      </div>
    </div>
  );
};

export default ReactionsBox;
