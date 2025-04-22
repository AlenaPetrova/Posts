import { useLocation, useNavigate } from "react-router-dom";
import { IPost } from "../../types/types";
import ReactionsBox from "../ReactionsBox/ReactionsBox";
import Button from "../UI/Button/Button";
import styles from "./Post.module.css";

interface IPostProps extends IPost {
  isFirstChild?: boolean;
}

const Post: React.FC<IPostProps> = ({
  id,
  image,
  title,
  body,
  isFirstChild,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && (
        <div className={styles.container}>
          <img src={image} className={styles.img} loading="lazy" />
          <div className={styles.textContainer}>
            {isFirstChild ? (
              <div className={styles.reactionsBox}>
                <h3>{title}</h3>
                <ReactionsBox  />
              </div>
            ) : (
              <h3>{title}</h3>
            )}

            {body && <p>{body}</p>}
            {isFirstChild ? (
              <div className={styles.btnBox}>
                <Button onClick={() => navigate(`/${id}`)}>Читать далее</Button>
              </div>
            ) : (
              <div className={styles.reactionsBox}>
                <ReactionsBox  />
                <Button onClick={() => navigate(`/${id}`)}>Читать далее</Button>
              </div>
            )}
          </div>
        </div>
      )}

      {location.pathname === `/${id}` && (
        <>
          <div className={styles.btnContainer}>
            <button className={styles.btnBack} onClick={() => navigate(-1)}>
              <img src="../../../public/svg/arrowBack.svg" alt="back to" />
              Вернуться к статьям
            </button>
            <ReactionsBox  />
          </div>
          <div className={styles.content}>
            <h2>{title}</h2>
            <div className={[styles.content, styles.width].join(" ")}>
              <img className={styles.img} src={image} alt="post" />
              <p>{body}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Post;
