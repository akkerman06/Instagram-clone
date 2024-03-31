import { Form, HStack, Input, Text, VStack } from "@/shared/ui";
import { PaperClipOutlined } from "@ant-design/icons";
import { Button, Modal, message } from "antd";
import { ChangeEvent, FC, useState } from "react";
import cls from "./AddPostModal.module.scss";
import {
  AddModalFormNames,
  AddModalFormValues,
  useAddModalFormSchema,
} from "../schema/useAddModalSchema";
import { checkImages } from "@/shared/lib/checkImages";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { createPost } from "@/entities/PostCard";
interface AddPostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddPostModal: FC<AddPostModalProps> = ({ isOpen, onClose }) => {
  const {
    register,
    watch,
    reset,
    handleSubmit,
    isValid,
    errors,
    isSubmitting,
  } = useAddModalFormSchema();
  const [images, setImages] = useState([]);
  const dispatch = useAppDispatch();

  const handleChangeImages = (e: any) => {
    const files = [...e.target.files];
    const { err, newImages } = checkImages(files);
    if (err) return message.error(err);

    setImages([...images, ...newImages]);
  };
  const handleDeleteImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };
  const onSubmit = async (data: AddModalFormValues) => {
    if (images.length < 0) return message.error("Выберить фото");
    await dispatch(createPost({ images, content: data.content }));
    setImages([]);
    reset();
    onClose();
  };
  return (
    <Modal
      centered
      title={
        <Text weight={700} size={18}>
          Добавить пост
        </Text>
      }
      footer={false}
      open={isOpen}
      onCancel={onClose}
    >
      <Form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
        <VStack gap={12} align="end">
          <Input
            placeholder="Введите текст"
            {...register(AddModalFormNames.CONTENT)}
            value={watch(AddModalFormNames.CONTENT)}
            error={errors?.content?.message}
            textarea
          ></Input>

          {images.length > 0 && (
            <HStack gap={4} wrap="wrap">
              {images.map((img, index) => (
                <div className={cls.image} key={index}>
                  <img src={URL.createObjectURL(img)} alt="" />
                  <span onClick={() => handleDeleteImage(index)}>&times;</span>
                </div>
              ))}
            </HStack>
          )}

          <HStack justify="between">
            <label htmlFor="files" className={cls.chooseImages}>
              <input
                id="files"
                type="file"
                accept="image/*,video/*"
                multiple
                onChange={handleChangeImages}
              />
              <PaperClipOutlined />
            </label>

            <Text color={errors?.content?.message ? "error" : "black"}>
              {watch(AddModalFormNames.CONTENT).length}/200
            </Text>
          </HStack>
          <Button
            htmlType="submit"
            type="primary"
            disabled={!isValid}
            loading={isSubmitting}
          >
            Добавить
          </Button>
        </VStack>
      </Form>
    </Modal>
  );
};
