import { ClientApiResponse, GetOneAdResponse } from 'types';
import { apiClient } from '../apiClient';

export const addAdResponse = async <RequestBody>(body: RequestBody): Promise<ClientApiResponse<GetOneAdResponse>> => {
  try {
    const response = await apiClient.post<RequestBody>('/ad', body, { credentials: 'include' });
    return await response.json();
  } catch (error) {
    return {
      ok: false,
      error: 'Błąd wewnętrzny serwera',
      status: 500,
    };
  }
};
