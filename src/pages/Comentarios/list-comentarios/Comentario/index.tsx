import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CursoItemContainer, CursoItemImage, CursoItemInfo } from './style';
import { FiDelete, FiEdit, FiSave } from 'react-icons/fi'

import { getCursoById } from '../../../../services/resources/cursos';
import Button from '../../../../components/Button';

interface Comentarios {
    comentarioId: number,
    comentario: string,
    username: string,
    nome: string,
    sobrenome: string
}


export const Comentario = ({comentarioId, comentario, username, nome, sobrenome}: Comentarios) => {
    const navigate = useNavigate();

    const handleToDelete = async () => {
        const {data} = await getCursoById(comentarioId);

        navigate(`/cursos/delete/${comentarioId}`, {state: data});
    }

    return (
        <CursoItemContainer>
        
            <CursoItemInfo>
                <p className="primary-color">
                    <strong>@</strong> {username}
                </p>
                <p className=""><strong>Aluno:</strong> {nome} {sobrenome}</p>
                <p className=""><strong>Comentario:</strong> {comentario}</p>
                <br />
            </CursoItemInfo>
        </CursoItemContainer>
    )
}