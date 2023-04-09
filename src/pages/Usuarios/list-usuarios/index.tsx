import { useEffect, useState } from 'react';

import { UsuarioContainer, HomeBackground, BodyContainer, Greetings, InlineTitle } from './style';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import useAuth from '../../../hooks/userAuth';

import Card from '../../../components/Card';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { Usuario } from './Usuario';
import { allUsers } from '../../../services/resources/usuarios';

interface Usuario {
  usuarioId: number;
  username: string;
  email: string;
  nome: string;
  sobrenome: string;
  dtNascimento: string;
  cpf: string;
  perfis: string[];
}


const ListUsuarios = () => {
  const [usuarios, setUsuario] = useState<Usuario[]>([]);
  
  const {user, getCurrentUser} =  useAuth();

  const getAllUsuario = async () => {
    const {data} = await allUsers();
    console.log(data);
    setUsuario(data);
  }

  useEffect(() => {
    getCurrentUser();
    getAllUsuario();
  }, [])

  if(!user) {
    return null;
  }
  
  return (
    <HomeBackground>
      <Header />
      <Greetings>
        <h3 className='greetings'>Bem vindo(a) {user.nome} {user.sobrenome}</h3>
      </Greetings>
      <BodyContainer>
                <div>
                    <Card noShadow width="90%">
                      <InlineTitle>
                      <h2 className="h2">Usuarios do sistema</h2>
                      </InlineTitle>
                      <UsuarioContainer>
                        {usuarios.map(usuario => <Usuario {...usuario}/>)}
                      </UsuarioContainer>
                   </Card>
                </div>
            </BodyContainer>
            <Footer />
    </HomeBackground>
  )
}

export default ListUsuarios