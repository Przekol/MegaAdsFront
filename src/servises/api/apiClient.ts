import { constants } from '../../config';
import { ClientApiResponse } from 'types';

class ApiClient {
  constructor(private readonly baseUrl: string) {}

  async get<T>(endpoint: string): Promise<ClientApiResponse<T>> {
    try {
      const response = await fetch(this.getUrl(endpoint), {
        method: 'GET',
        credentials: 'include',
      });
      return response.json();
    } catch (error) {
      console.log(error);
      return {
        ok: false,
        error: 'Błąd wewnętrzny serwera',
        status: 500,
      };
    }
  }

  async post<T, B>(endpoint: string, body: B): Promise<ClientApiResponse<T>> {
    const response = await fetch(this.getUrl(endpoint), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(body),
    });
    return response.json();
  }

  private getUrl(endpoint: string): string {
    return this.baseUrl + endpoint;
  }
}

export const apiClient = new ApiClient(constants.API.BASE_URL);
