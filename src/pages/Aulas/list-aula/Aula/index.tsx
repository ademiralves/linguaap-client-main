import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { AulaItemContainer, AulaItemImage, AulaItemInfo } from './style';
import { FiDelete, FiEdit, FiSave } from 'react-icons/fi'

import { getAulaById } from '../../../../services/resources/aulas';

import Button from '../../../../components/Button';

interface Aulas {
    aulaId: number,
    tituloAula: string,
    descricaoAula: string,
    aulaVideoUrl: string
}


export const Aula = ({aulaId, tituloAula, descricaoAula, aulaVideoUrl}: Aulas) => {
    const navigate = useNavigate();

    const location  = useLocation();
    const {state} = location;

    const handleToDelete = async () => {
        const {data} = await getAulaById(aulaId);

        navigate(`/aulas/delete/${aulaId}`, {state: data});
    }

    const handleToUpdate = async () => {
      const {data} = await getAulaById(aulaId);
      data.cursoId = state.cursoId;
      navigate(`/aulas/update/${data.aulaId}/curso/${state.cursoId}`, { state: data });
  }

    return (
        <AulaItemContainer>
            <AulaItemImage>
                <Button type="button" onClick={handleToUpdate}>
                    <FiEdit size={24}/>
                </Button>
            </AulaItemImage>
            <AulaItemImage>
                <Button type="button" onClick={handleToDelete}>
                    <FiDelete size={24}/>
                </Button>
            </AulaItemImage>
            <AulaItemInfo>
                <p className="primary-color">
                    <strong>Cod.:</strong> {aulaId}
                </p>
                <p className="">
                    <strong>Titulo:</strong> {tituloAula}
                </p>
                <p className=""><strong>Descricao:</strong> {descricaoAula}</p>
                <p className=""><strong>URL do Video: </strong>{aulaVideoUrl}</p>
                <br />
            </AulaItemInfo>
        </AulaItemContainer>
    )
}