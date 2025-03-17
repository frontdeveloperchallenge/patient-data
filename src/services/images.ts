
/* Checks if image URL is valid */
export const checkImageUrl = (url: string | null): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    if (url !== null) {
      img.src = url;

      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    }
  });
};
