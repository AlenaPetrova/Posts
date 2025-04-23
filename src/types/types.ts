export interface IPost {
  id: string;
  title: string;
  body: string;
  image: string;
}

export interface IReactions {
  like: { isLike: boolean; countLikes: number };
  dislike: { isDislike: boolean; countDislikes: number };
  handleLike: () => void;
  handleDislike: () => void;
}

export interface IDict {
  [key: string]: number;
}
