import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UsuarioItemContainer, UsuarioItemImage, UsuarioItemInfo } from './style';
import { FiDelete, FiEdit } from 'react-icons/fi'


import Button from '../../../../components/Button';
import { getUserById } from '../../../../services/resources/usuarios';

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


export const Usuario = ({usuarioId, username, email, nome, sobrenome, dtNascimento, cpf, perfis}: Usuario) => {
    const navigate = useNavigate();

    const handleToDelete = async () => {
        const {data} = await getUserById(usuarioId);
        
        navigate(`/usuarios/delete/${usuarioId}`, {state: data});
    }

    const handleToUpdate = async () => {
      const {data} = await getUserById(usuarioId);

      navigate(`/usuarios/update/${usuarioId}`, {state: data});
  }

    return (
        <UsuarioItemContainer>
            <UsuarioItemImage>
                <Button type="button" onClick={handleToUpdate}>
                    <FiEdit size={24}/>
                </Button>
            </UsuarioItemImage>
            <UsuarioItemImage>
                <Button type="button" onClick={handleToDelete}>
                    <FiDelete size={24}/>
                </Button>
            </UsuarioItemImage>
            <UsuarioItemInfo>
                <p className="primary-color">
                    <strong>Cod.:</strong> {usuarioId}
                </p>
                <p className="">
                    <strong>Nome do Usuario:</strong> {username}
                </p>
                <p className=""><strong>Email:</strong> {email}</p>
                <p className=""><strong>Nome completo: </strong>{nome} {sobrenome}</p>
                <p className=""><strong>Data de Nascimento: </strong>{dtNascimento}</p>
                <p className=""><strong>CPF: </strong>{cpf}</p>
                <p className=""><strong>Perfis: </strong>{perfis}</p>
                <br />
            </UsuarioItemInfo>
        </UsuarioItemContainer>
    )
}