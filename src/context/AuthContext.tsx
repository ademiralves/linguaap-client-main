import { createContext, useState } from "react";

import { 
  signIn, 
  signUp, 
  LoginDTO, 
  SignUpDTO, 
  me, 
  deleteUser, 
  getUserById, 
  allUsers } from '../services/resources/usuarios';

interface ContextData {
  user: ProfileDTO;
  userSignIn: (userData: LoginDTO) => Promise<ProfileDTO>;
  userSignUp: (userData: SignUpDTO) => Promise<ProfileDTO>;
  getCurrentUser: () => Promise<ProfileDTO>;
}

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
  Na função userSignIn, ao logar o token é o usuario (função getCurrentUser) 
  logado são salvos em local Storage.

  A cada requisição é preciso buscar os dados do usuário que está logado para ser
  possivel realizar a autorização do usuario, ou seja, deverá ser reconhecido se
  o usuário é um administrador, aluno ou instrutor; e redirecionar esses usuários
  para o recurso correto. 

*/

interface Props {
  children: React.ReactNode;
}

export const AuthContext = createContext<ContextData>({} as ContextData);

// {children} --> children: any
export const AuthProvider: React.FC<Props> = ({children}) => {

  const [user, setUser] = useState<ProfileDTO>(() => {
    const user = localStorage.getItem('@Linguaap:Usuario');

    if (user) {
      return JSON.parse(user);
    }

    return {} as ProfileDTO
  });

  const userSignIn = async (userData: LoginDTO) => {
    const {data} = await signIn(userData);

    if (data?.status === 'error') {
      return data;
    }

    if (data.token) {
      localStorage.setItem('@Linguaap:Token', data.token)
    } 

    return getCurrentUser();
  };

  const userSignUp = async (userData: SignUpDTO) => {
    const {data} = await signUp(userData);

    return data;
  };

  const getCurrentUser = async () => {
    const {data} = await me();
    
    setUser(data);
    localStorage.setItem('@Linguaap:Usuario', JSON.stringify(user));
    
    return data;
  };

  return (
    <AuthContext.Provider value={{user, userSignIn, userSignUp, getCurrentUser}}>
        {children}
    </AuthContext.Provider>
  );
};