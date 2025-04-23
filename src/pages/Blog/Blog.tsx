import { FormEvent, useState } from "react";
import Posts from "../../components/Posts/Posts";
import Input from "../../components/UI/Input/Input";
import styles from "./Blog.module.css";

const Blog: React.FC = () => {
  const [title, setTitle] = useState("");
  const [searchtitle, setSearchTitle] = useState(title);

  const handleSearchtTitle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchTitle(title);
  };

  return (
    <div className={styles.container}>
      <h1>Блог</h1>
      <p>
        Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а
        также переводим зарубежные статьи
      </p>
      <form onSubmit={(e) => handleSearchtTitle(e)}>
        <Input
          type="search"
          placeholder="Поиск по названию статьи"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></Input>
      </form>
      <Posts searchPosts={searchtitle} />
    </div>
  );
};

export default Blog;
