import api from '../api';

export interface AulaDTO {
  tituloAula: string;
  descricaoAula: string;
  aulaVideoUrl: string;
} 

export interface AulasDTO {
  aulaId: number;
  tituloAula: string;
  descricaoAula: string;
  aulaVideoUrl: string;
  cursoId: number;
}

export const saveAula = async (data: AulaDTO, cursoId: number) => {
  return api.post(`/api/v1/aulas/curso/${cursoId}`, data);
};

export const updateAula = async (data: AulaDTO, cursoId: number, aulaId: number) => {
  return api.put(`/api/v1/aulas/${aulaId}/curso/${cursoId}`, data);
};

export const allAulas = async (cursoId: number) => {
  return api.get<AulasDTO[]>(`/api/v1/aulas/curso/${cursoId}`);
};

export const deleteAula = async (id: number) => {
  return api.delete(`/api/v1/aulas/${id}`);
};

export const getAulaById = async (id: number) => {
  return api.get<AulasDTO>(`/api/v1/aulas/${id}`);
};
