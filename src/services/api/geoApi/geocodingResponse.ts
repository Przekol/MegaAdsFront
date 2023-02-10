import { ClientApiResponse } from 'types';
import { apiGeo } from '../apiClient';

export const geocodingResponse = async (address: string): Promise<ClientApiResponse<{ lat: number; lon: number }>> => {
  try {
    const response = await apiGeo.get(`/search?format=json&q=${encodeURIComponent(address)}`);
    const geoData = await response.json();
    const lat = parseFloat(geoData[0].lat);
    const lon = parseFloat(geoData[0].lon);

    return {
      ok: true,
      data: { lat, lon },
      status: 200,
    };
  } catch (error) {
    return {
      ok: false,
      error: 'Błąd wewnętrzny serwera',
      status: 500,
    };
  }
};
