import api from '../api';

export interface CursoDTO {
  tituloCurso: string;
  descricaoCurso: string;
  cursoIconImg: string;
  cursoBannerImg: string;
  categorias: string[];
} 

export interface CursosDTO {
  cursoId: number;
  tituloCurso: string;
  descricaoCurso: string;
  cursoIconImg: string;
  cursoBannerImg: string;
  categorias: string[];
}

export const saveCurso = async (data: CursoDTO) => {
  return api.post('/api/v1/cursos', data);
};

export const updateCurso = async (data: CursoDTO, id: number) => {
  return api.put(`/api/v1/cursos/${id}`, data);
};

export const allCursos = async () => {
  return api.get<CursosDTO[]>('/api/v1/cursos/all');
};

export const allCursosInstructor = async () => {
  return api.get<CursosDTO[]>('/api/v1/cursos');
};

export const deleteCurso = async (id: number) => {
  return api.delete(`/api/v1/cursos/${id}`);
};

export const getCursoById = async (id: number) => {
  return api.get<CursosDTO>(`/api/v1/cursos/${id}`);
};
