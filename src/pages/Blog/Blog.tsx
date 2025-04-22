import { useState } from "react";
import Posts from "../../components/Posts/Posts";
import Input from "../../components/UI/Input/Input";
import styles from "./Blog.module.css";

const Blog: React.FC = () => {
  const [, setTitle] = useState("");

  const handleTitle = (str: string) => {
    setTimeout(() => {
      setTitle(str);
    }, 2000);
  };
  return (
    <div className={styles.container}>
      <h1>Блог</h1>
      <p>
        Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а
        также переводим зарубежные статьи
      </p>
      <Input
        type="text"
        placeholder="Поиск по названию статьи"
        onChange={(e) => handleTitle(e.target.value)}
      ></Input>
      <Posts />
    </div>
  );
};

export default Blog;
