import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { IDict, IPost } from "../../../types/types";
import { DictionaryContext } from "../../../hooks/useDictionaryContext";
import ReactionsBox from "../../ReactionsBox/ReactionsBox";
import styles from "./FullPost.module.css";

const FullPost: React.FC<IPost> = ({ id, image, title, body }) => {
  const dict = useContext(DictionaryContext) as IDict;
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.btnContainer}>
        <button className={styles.btnBack} onClick={() => navigate(-1)}>
          <img src="/public/svg/arrowBack.svg" alt="back to" />
          Вернуться к статьям
        </button>
        <ReactionsBox num={dict[id]} />
      </div>
      <div className={styles.textContainer}>
        <h2>{title}</h2>
        <div className={[styles.textContainer, styles.width].join(" ")}>
          <img className={styles.img} src={image} alt="post" />
          <p>{body}</p>
        </div>
      </div>
    </>
  );
};

export default FullPost;
