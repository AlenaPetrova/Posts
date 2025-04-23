import { createContext } from "react";
import { IReactions } from "../types/types";
import useReactions from "./useReactions";
import usePosts from "./usePosts";

// eslint-disable-next-line react-refresh/only-export-components
export const ReactionsContext = createContext<IReactions[]>([]);

const ReactionsProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { posts, isLoading, error } = usePosts();

  const arrContext: IReactions[] = [];

  if (posts)
    for (let i = 0; i < posts.length; i++) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const reactionsObj = useReactions();
      arrContext.push(reactionsObj);
    }

  return (
    <>
      {isLoading && <h1>Загрузка постов...</h1>}
      {!isLoading && error && <h1>Ошибка при получении постов!</h1>}
      {!isLoading && !error && (
        <ReactionsContext.Provider value={arrContext}>
          {children}
        </ReactionsContext.Provider>
      )}
    </>
  );
};

export default ReactionsProvider;
