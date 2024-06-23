import { FC } from "react";
import cls from "./PostCardHeader.module.scss";
import { Text, UserCard } from "@/shared/ui";
import { EllipsisOutlined } from "@ant-design/icons";
import { PostProps } from "../../model/types/post";
import { DropDown } from "@/shared/ui/Popups/DropDown/DropDown";
import { useSelector } from "react-redux";
import { getAuthData } from "@/entities/User";
import { Button, MenuProps, Popconfirm } from "antd";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { deletePost } from "../../model/service/deletePost";

export const PostCardHeader: FC<PostProps> = ({ post }) => {
  const { user } = post;
  const authData = useSelector(getAuthData);
  const dispatch = useAppDispatch();
  // const [isOpenModal, setIsOpenModal] = useState(false);

  // const onClose = () => {
  //   setIsOpenModal(false);
  // };
  // const onOpen = () => {
  //   setIsOpenModal(true);
  // };
  const removePost = async () => {
    await dispatch(deletePost({ post }));
  };

  const dropDownItems: MenuProps["items"] = [
    {
      label: <Text color="blue">{user.username}</Text>,
      key: "0",
    },
  ];
  const dropDownItemsForAuthor: MenuProps["items"] = [
    {
      label: <Text color="blue">{user.username}</Text>,
      key: "0",
    },
    {
      label: (
        <Popconfirm
          className="popConfirm"
          title="Удаление публикации"
          description="Вы уверены что хотите удалить публикацию?"
          onConfirm={removePost}
        >
          <Text> удалить</Text>
        </Popconfirm>
      ),
      key: "1",
    },
  ];
  return (
    <div className={cls.header}>
      <UserCard
        src={user?.avatar}
        id={user?._id}
        title={user.fullname}
        content={user.username}
        size={32}
      >
        <DropDown
          items={
            authData.username === user.username
              ? dropDownItemsForAuthor
              : dropDownItems
          }
          placement="bottomRight"
        >
          <EllipsisOutlined />
        </DropDown>
      </UserCard>
    </div>
  );
};
