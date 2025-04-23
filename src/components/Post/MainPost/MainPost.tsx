import { useNavigate } from "react-router-dom";
import { IDict, IPost } from "../../../types/types";
import ReactionsBox from "../../ReactionsBox/ReactionsBox";
import Button from "../../UI/Button/Button";
import { useContext } from "react";
import { DictionaryContext } from "../../../hooks/useDictionaryContext";
import styles from "./MainPost.module.css";

const MainPost: React.FC<IPost> = ({ id, image, title, body }) => {
  const dict = useContext(DictionaryContext) as IDict;
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <img src={image} className={styles.img} loading="lazy" />
      <div className={styles.textContainer}>
        <div className={styles.reactionsContainer}>
          <h3>{title}</h3>
          <ReactionsBox num={dict[id]} />
        </div>
        <p>{body}</p>
        <div className={styles.btnContainer}>
          <Button onClick={() => navigate(`/${id}`)}>Читать далее</Button>
        </div>
      </div>
    </div>
  );
};

export default MainPost;
