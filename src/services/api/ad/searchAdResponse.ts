import { ClientApiResponse, GetListOfAdsResponse } from 'types';
import { apiClient } from '../apiClient';

export const searchAdResponse = async (search: string): Promise<ClientApiResponse<GetListOfAdsResponse>> => {
  try {
    const response = await apiClient.get(`/ad/search/${search}`);
    return response.json();
  } catch (error) {
    return {
      ok: false,
      error: 'Błąd wewnętrzny serwera',
      status: 500,
    };
  }
};
