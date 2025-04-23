import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { IDict, IPost } from "../../../types/types";
import { DictionaryContext } from "../../../hooks/useDictionaryContext";
import ReactionsBox from "../../ReactionsBox/ReactionsBox";
import Button from "../../UI/Button/Button";
import styles from "./PreviewPost.module.css";

const PreviewPost: React.FC<Omit<IPost, "body">> = ({ id, image, title }) => {
  const dict = useContext(DictionaryContext) as IDict;
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <img src={image} className={styles.img} loading="lazy" />
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <div className={styles.btnContainer}>
          <ReactionsBox num={dict[id]} />
          <Button onClick={() => navigate(`/${id}`)}>Читать далее</Button>
        </div>
      </div>
    </div>
  );
};

export default PreviewPost;
