// ui
export { ProfileInfo } from "./ui/ProfileInfo/ProfileInfo";
export { EditProfile } from "./ui/EditProfile/EditProfile";

// types
export type { ProfileState, FollowEnum } from "./model/types/profile";

// slice
export { profileActions, profileReducer } from "./model/slice/profileSlice";

// service
export { searchUsers } from "./model/service/searchUsers";
export { getUserProfile } from "./model/service/getUserProfile";
export { updateProfile } from "./model/service/updateProfile";
export { followUser } from "./model/service/follow";

// selectors
export { getProfileUser } from "./model/selectors/getProfileUser";
export { getSearchLoading } from "./model/selectors/getSearchLoading";
export { getSearchUsers } from "./model/selectors/getSearchUsers";
export { getProfileUsers } from "./model/selectors/getProfileUsers";
export { getProfileUserLoading } from "./model/selectors/getProfileUserLoading";
export { getProfileError } from "./model/selectors/getProfileError";
export { getProfileSucces } from "./model/selectors/getProfileSucces";

// <TableOutlined />
// <PlayCircleOutlined />
// <ReadOutlined />
// <ContactsOutlined />
// <YoutubeOutlined />
