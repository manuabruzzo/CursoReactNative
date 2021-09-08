import { characterDetailEndpoint, charactersEndpoint } from './endpoints';

export const getAllCharacters = async () => {
  try {
    let serviceResponse;

    const response = await fetch(charactersEndpoint);
    const parsedResponse = await response.json();

    if (response.status === 200) {
      serviceResponse = { success: true, data: parsedResponse };
    } else {
      serviceResponse = { success: false, data: parsedResponse };
    }
    return serviceResponse;
  } catch (error) {
    console.log('Error fetching all characters: ', error);
    return {
      success: false,
      data: error,
    };
  }
};

export const getCharacterById = async (id: number) => {
  try {
    let serviceResponse;

    const response = await fetch(characterDetailEndpoint(id));
    const parsedResponse = await response.json();

    if (response.status === 200) {
      serviceResponse = { success: true, data: parsedResponse };
    } else {
      serviceResponse = { success: false, data: parsedResponse };
    }
    return serviceResponse;
  } catch (error) {
    console.log(`Error fetching character id ${id} details `, error);
    return {
      success: false,
      data: error,
    };
  }
};
