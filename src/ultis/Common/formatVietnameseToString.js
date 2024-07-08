export const formatVietnameseToString = (keyword) => {
    // if (typeof keyword !== 'string') {
    //     throw new TypeError('Expected a string as input');
    // }
    return keyword
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .split(" ")
      .join("-");
  };