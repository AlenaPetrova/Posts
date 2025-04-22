import { useState } from "react";

const useReactions = () => {
  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.ceil(Math.random() * (max - min) + min);
  };

  const [like, setLike] = useState({
    isLike: false,
    countLikes: getRandomInt(0, 50),
  });
  const [dislike, setDislike] = useState({
    isDislike: false,
    countDislikes: getRandomInt(0, 50),
  });

  const handleLike = () => {
    if (like.isLike) {
      setLike({ ...like, isLike: false, countLikes: like.countLikes - 1 });
    }

    if (!like.isLike && dislike.isDislike) {
      setLike({ ...like, isLike: true, countLikes: like.countLikes + 1 });
      setDislike({
        ...dislike,
        isDislike: false,
        countDislikes: dislike.countDislikes - 1,
      });
    }
    if (!like.isLike)
      setLike({ ...like, isLike: true, countLikes: like.countLikes + 1 });
  };

  const handleDislike = () => {
    if (dislike.isDislike)
      setDislike({
        ...dislike,
        isDislike: false,
        countDislikes: dislike.countDislikes - 1,
      });
    if (!dislike.isDislike && like.isLike) {
      setDislike({
        ...dislike,
        isDislike: true,
        countDislikes: dislike.countDislikes + 1,
      });
      setLike({ ...like, isLike: false, countLikes: like.countLikes - 1 });
    }
    if (!dislike.isDislike)
      setDislike({
        ...dislike,
        isDislike: true,
        countDislikes: dislike.countDislikes + 1,
      });
  };

  return { like, dislike, handleLike, handleDislike };
};

export default useReactions;
