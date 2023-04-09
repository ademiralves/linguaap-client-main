import api from '../api';

/*
  Assim como foi feito no backend, será definido Data Transfers Objects
  para poder ser enviados ao backend, esse Data transfer objects são nada mais, nada menos do que 
  'interfaces' 
*/

// DTO para realizar a autenticação
export interface LoginDTO {
  login: string;
  password: string;
}


// DTO para poder se cadastrar
export interface SignUpDTO {
  username: string,
  nome: string;
  sobrenome: string;
  email: string;
  password: string;
  cpf: string;
  dtNascimento: string;
  perfis: string[];
}

// DTO para poder carregar os dados do usuario logado
export interface ProfileDTO {
  usuarioId: number;
  username: string;
  email: string;
  nome: string;
  sobrenome: string;
  password: string;
  dtNascimento: string;
  cpf: string;
  perfis: string[];
}

/*
  Rotas:
    - POST: signIn ou Logar
    - POST: signUp ou Cadastrar-se
    - GET: me ou perfil do usuário
    - POST: atualizar o perfil do usuario
    - GET: allUsers ou todos os usuários
    - DELETE: deleteUser ou deletar um usuário
    - POST: updateUser ou atualizar um usuário
    - GET: getUserById ou consultar o usuário pelo 
*/

export const signIn = async (data: LoginDTO) => {
  return api.post('/api/v1/usuarios/signIn', data);
};

export const signUp = async (data: SignUpDTO) => {
  return api.post('/api/v1/usuarios/signUp', data);
};

export const me = async () => {
  return api.get<ProfileDTO>('/api/v1/usuarios/me');
};

//

export const updateProfile = async (data: ProfileDTO) => {
  return api.post('/api/v1/usuarios/me', data);
};

export const allUsers = () => {
  return api.get<ProfileDTO[]>('/api/v1/usuarios');
};

export const updateUser = async (id: number, data: SignUpDTO) => {
  return api.post(`/api/v1/usuarios/${id}`, data);
};

export const deleteUser = async (id: number) => {
  return api.delete(`/api/v1/usuarios/${id}`);
};

export const getUserById = async (id: number) => {
  return api.get<ProfileDTO>(`/api/v1/usuarios/${id}`);
};