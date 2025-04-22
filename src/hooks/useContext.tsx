import {  createContext } from "react";
import { IReactions } from "../types/types";
import useReactions from "./useReactions";



// eslint-disable-next-line react-refresh/only-export-components
export const ReactionsContext = createContext<IReactions | null>(null);

const ReactionsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { like, dislike, handleLike, handleDislike } = useReactions();

  return (
    <ReactionsContext.Provider
      value={{ like, dislike, handleLike, handleDislike }}
    >{children}</ReactionsContext.Provider>
  );
    
};

export default ReactionsProvider;
