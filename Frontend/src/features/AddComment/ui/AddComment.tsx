import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import cls from "./AddComment.module.scss";
import { Form, HStack, Icon, Text } from "@/shared/ui";
import { Button } from "antd";
import {
  AddCommentNames,
  AddCommentValues,
  useAddCommentSchema,
} from "../model/schema/useAddCommentSchema";
import { createComment } from "../model/service/createComment";
import { FC } from "react";
import { useSelector } from "react-redux";
import { getAuthData } from "@/entities/User";
const AddComment: FC<any> = ({ post, user }) => {
  const dispatch = useAppDispatch();
  const authData = useSelector(getAuthData);

  const { register, watch, reset, handleSubmit, isValid, isSubmitting } =
    useAddCommentSchema();

  const onSubmit = async (data: AddCommentValues) => {
    await dispatch(
      createComment({
        content: data.content,
        postId: post._id,
        postUserId: post.user._id,
        tag: "123",
        reply: "",
        post: post,
        user: authData,
        likes: [],
      })
    );
    reset();
  };
  return (
    <HStack justify="center" className={cls.cardComments}>
      <Form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
        <Icon type="Smile" />
        <input
          className={cls.input}
          {...register(AddCommentNames.CONTENT)}
          value={watch(AddCommentNames.CONTENT)}
          placeholder="Add a comment..."
          maxLength={40}
        />
        <Button
          className={cls.buttonText}
          disabled={!isValid}
          loading={isSubmitting}
          htmlType="submit"
          type="text"
        >
          Post
        </Button>
      </Form>
    </HStack>
  );
};

export default AddComment;
