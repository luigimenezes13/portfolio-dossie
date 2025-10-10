import api from '../config/api';
import type { ApiResponse } from '../types/api';

export class ApiService {
  static async healthCheck(): Promise<ApiResponse> {
    const response = await api.get('/');
    return response.data;
  }

  static async get<T>(endpoint: string, params?: any): Promise<T> {
    const response = await api.get(endpoint, { params });
    return response.data;
  }

  static async post<T>(endpoint: string, data?: any): Promise<T> {
    const response = await api.post(endpoint, data);
    return response.data;
  }

  static async put<T>(endpoint: string, data?: any): Promise<T> {
    const response = await api.put(endpoint, data);
    return response.data;
  }

  static async delete<T>(endpoint: string): Promise<T> {
    const response = await api.delete(endpoint);
    return response.data;
  }

  static async patch<T>(endpoint: string, data?: any): Promise<T> {
    const response = await api.patch(endpoint, data);
    return response.data;
  }
}

export class DossieService {
  static async getAll(params?: any) {
    return ApiService.get('/api/dossies', params);
  }

  static async getById(id: string) {
    return ApiService.get(`/api/dossies/${id}`);
  }

  static async create(data: any) {
    return ApiService.post('/api/dossies', data);
  }

  static async update(id: string, data: any) {
    return ApiService.put(`/api/dossies/${id}`, data);
  }

  static async delete(id: string) {
    return ApiService.delete(`/api/dossies/${id}`);
  }
}

export default ApiService;
