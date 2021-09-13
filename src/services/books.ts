import { bookDetailEndpoint, bookSearchEndpoint, booksEndpoint } from './endpoints';

export const getAllBooks = async () => {
  try {
    let serviceResponse;

    const response = await fetch(booksEndpoint);
    const parsedResponse = await response.json();

    if (response.status === 200) {
      serviceResponse = { success: true, data: parsedResponse };
    } else {
      serviceResponse = { success: false, data: parsedResponse };
    }
    return serviceResponse;
  } catch (error) {
    console.log('Error fetching all books: ', error);
    return {
      success: false,
      data: error,
    };
  }
};

export const getBookById = async (id: number) => {
  try {
    let serviceResponse;

    const response = await fetch(bookDetailEndpoint(id));
    const parsedResponse = await response.json();

    if (response.status === 200) {
      serviceResponse = { success: true, data: parsedResponse };
    } else {
      serviceResponse = { success: false, data: parsedResponse };
    }
    return serviceResponse;
  } catch (error) {
    console.log(`Error fetching book id ${id} details`, error);
    return {
      succes: false,
      data: error,
    };
  }
};

export const getBookBySearch = async (param: string) => {
  try {
    let serviceResponse;

    const response = await fetch(bookSearchEndpoint(param));
    const parsedResponse = await response.json();

    if (response.status === 200) {
      serviceResponse = { success: true, data: parsedResponse };
    } else {
      serviceResponse = { success: false, data: parsedResponse };
    }
    return serviceResponse;
  } catch (error) {
    console.log(`Error fetching books with "${param}" as parameter`, error);
    return {
      success: false,
      data: error,
    };
  }
};
