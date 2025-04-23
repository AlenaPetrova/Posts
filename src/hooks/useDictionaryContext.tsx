import { createContext } from "react";
import { IDict } from "../types/types";
import usePosts from "./usePosts";

// eslint-disable-next-line react-refresh/only-export-components
export const DictionaryContext = createContext<IDict>({});

const DictionaryProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { posts, isLoading, error } = usePosts();
  const dict: IDict = {};
  if (posts)
    for (let i = 0; i < posts.length; i++) {
      const key = posts[i].id;
      dict[key] = i;
    }
  return (
    <>
      {isLoading && <h1>Загрузка постов...</h1>}
      {!isLoading && error && <h1>Ошибка при получении постов!</h1>}
      {!isLoading && !error && (
        <DictionaryContext.Provider value={dict}>
          {children}
        </DictionaryContext.Provider>
      )}
    </>
  );
};

export default DictionaryProvider;
