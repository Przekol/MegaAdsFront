import { constants } from '../../../config';
import { ApiClient } from './apiClient';

export const apiClient = new ApiClient(constants.API.BASE_URL);
export const apiGeo = new ApiClient(constants.API.NOMINATIM);
