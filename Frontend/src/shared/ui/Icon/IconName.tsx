import Home from "@/shared/assets/svg/Home.svg";
import Messenger from "@/shared/assets/svg/Messenger.svg";
import Search from "@/shared/assets/svg/Search.svg";
import Favorite from "@/shared/assets/svg/Favorite.svg";
import FavoriteRed from "@/shared/assets/svg/FavoriteRed.svg";
import FindPeople from "@/shared/assets/svg/FindPeople.svg";
import NewPosts from "@/shared/assets/svg/NewPosts.svg";
import Dark from "@/shared/assets/svg/Dark.svg";
import Light from "@/shared/assets/svg/Light.svg";
import Facebook from "@/shared/assets/svg/facebook.svg";
import Google from "@/shared/assets/svg/google.svg";
import Comment from "@/shared/assets/svg/Comment.svg";
import Save from "@/shared/assets/svg/Save.svg";
import SharePosts from "@/shared/assets/svg/SharePosts.svg";

export type IconType =
  | "Home"
  | "Messenger"
  | "Search"
  | "Favorite"
  | "FavoriteRed"
  | "FindPeople"
  | "Dark"
  | "Light"
  | "NewPosts"
  | "Facebook"
  | "Google"
  | "Comment"
  | "Save"
  | "SharePosts";

export const iconName: Record<IconType, JSX.Element> = {
  Home: <Home />,
  Messenger: <Messenger />,
  Search: <Search />,
  Favorite: <Favorite />,
  FavoriteRed: <FavoriteRed />,
  FindPeople: <FindPeople />,
  NewPosts: <NewPosts />,
  Light: <Light />,
  Dark: <Dark />,
  Facebook: <Facebook />,
  Google: <Google />,
  Comment: <Comment />,
  Save: <Save />,
  SharePosts: <SharePosts />,
};
