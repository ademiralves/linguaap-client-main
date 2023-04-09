import { useContext } from 'react';

import { AuthContext } from '../context/AuthContext'

/*
  Responsável por procurar pelo contexto, se existir algum contexto é porque 
  o usuário está logado.
*/


const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Nenhum contexto encontrado');
  }

  return context;
}

export default useAuth