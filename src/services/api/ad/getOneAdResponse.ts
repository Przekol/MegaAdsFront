import { ClientApiResponse, GetOneAdResponse } from 'types';
import { apiClient } from '../apiClient';

export const getOneAdResponse = async (id: string): Promise<ClientApiResponse<GetOneAdResponse>> => {
  try {
    const response = await apiClient.get(`/ad/${id}`, { credentials: 'include' });
    return await response.json();
  } catch (error) {
    return {
      ok: false,
      error: 'Błąd wewnętrzny serwera',
      status: 500,
    };
  }
};
