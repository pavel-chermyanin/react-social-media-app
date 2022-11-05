import "./posts.scss";
import Post from "../post/Post";

import { memo, useEffect } from "react";
import { fetchPosts } from "../../store/postsSlice";
import { useDispatch, useSelector } from "react-redux";

const Posts = memo(() => {
  const dispatch = useDispatch();

  const { posts, isLoadingPosts, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch, posts.length]);

  return (
    <div className="posts">
      {error
        ? "Something went wrong"
        : isLoadingPosts
        ? "loading"
        : posts.map((post,idx) => <Post post={post} key={idx} />)}
    </div>
  );
});

export default Posts;
