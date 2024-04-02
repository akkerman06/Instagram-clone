export { postActions, postReducer } from "./model/slice/postSlcie";
export type { PostState, Post } from "./model/types/post";
export { createPost } from "./model/service/createPost";
export { getDataPosts } from "./model/selectors/getDataPosts";
export { getPostsLoading } from "./model/selectors/getPostsLoading";
export { getPostsInited } from "./model/selectors/getPostsInited";

export { PostCard } from "./ui/PostCard/PostCard";
export { PostCardSkeleton } from "./ui/PostCardSkeleton/PostCardSkeleton";
