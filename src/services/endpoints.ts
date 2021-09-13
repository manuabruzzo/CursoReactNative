import { API_URL } from '../config/envVariables';

export const booksEndpoint = `${API_URL}books/all`;
export const charactersEndpoint = `${API_URL}characters/all`;

export const bookSearchEndpoint = (param: string) => `${API_URL}books?search=${param}`;
export const characterSearchEndpoint = (param: string) => `${API_URL}characters?search=${param}`;

export const bookDetailEndpoint = (id: number) => `${API_URL}books/${id}`;
export const characterDetailEndpoint = (id: number) => `${API_URL}characters/${id}`;
