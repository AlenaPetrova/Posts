import { FormEvent, useState } from "react";
import Posts from "../components/Posts/Posts";
import Input from "../components/UI/Input/Input";
import usePosts from "../hooks/usePosts";

const Blog: React.FC = () => {
  const [title, setTitle] = useState("");
  const [searchtitle, setSearchTitle] = useState(title);

  const { posts, isLoading, error } = usePosts(searchtitle);

  const handleSearchtTitle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchTitle(title);
  };

  return (
    <div className="flex-container">
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

      {isLoading && <h1>Загрузка постов...</h1>}
      {!isLoading && error && <h1>Ошибка при получении постов!</h1>}
      {posts && posts.length > 0 ? (
        <Posts posts={posts} />
      ) : (
        <h2>Посты с названием {searchtitle} не найдены!</h2>
      )}
    </div>
  );
};

export default Blog;
