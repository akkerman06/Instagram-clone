export const checkImages = (files: File[]) => {
  let err = "";
  let newImages: File[] = [];

  files.forEach((file) => {
    if (!file) return (err = "Пожалуйста выберите фото");

    if (
      //   file.type !== "image/jpeg" &&
      //   file.type !== "image/png" &&
      file.size >
      1024 * 1024 * 5
    )
      //   return (err = "Выберите другой формат");
      return (err = "Размер файла слишком большой");

    newImages.push(file);
  });

  return {
    err,
    newImages,
  };
};
