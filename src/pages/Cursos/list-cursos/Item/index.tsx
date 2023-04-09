import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CursoItemContainer, CursoItemImage, CursoItemInfo } from './style';
import { FiDelete, FiEdit, FiSave } from 'react-icons/fi'

import { getCursoById } from '../../../../services/resources/cursos';
import Button from '../../../../components/Button';

interface Cursos {
    cursoId: number,
    tituloCurso: string,
    descricaoCurso: string,
    cursoIconImg: string,
    cursoBannerImg: string
}


export const Item = ({cursoId, tituloCurso, descricaoCurso, cursoIconImg, cursoBannerImg}: Cursos) => {
    const navigate = useNavigate();

    const handleToDelete = async () => {
        const {data} = await getCursoById(cursoId);

        navigate(`/cursos/delete/${cursoId}`, {state: data});
    }

    const handleToUpdate = async () => {
      const {data} = await getCursoById(cursoId);

      navigate(`/cursos/update/${cursoId}`, {state: data});
  }

  const handleToAula = async () => {
    const {data} = await getCursoById(cursoId);

    navigate(`/aulas/curso/${cursoId}`, {state: data});
    }

    return (
        <CursoItemContainer>
            <CursoItemImage>
                <Button type="button" onClick={handleToUpdate}>
                    <FiEdit size={24}/>
                </Button>
            </CursoItemImage>
            <CursoItemImage>
                <Button type="button" onClick={handleToDelete}>
                    <FiDelete size={24}/>
                </Button>
            </CursoItemImage>
            <CursoItemImage>
                <Button type="button" onClick={handleToAula}>
                    <FiSave size={24}/>
                </Button>
            </CursoItemImage>
            <CursoItemImage>
                <Button type="button">
                    <FiSave size={24}/>
                </Button>
            </CursoItemImage>
            <CursoItemInfo>
                <p className="primary-color">
                    <strong>Cod.:</strong> {cursoId}
                </p>
                <p className="">
                    <strong>Titulo:</strong> {tituloCurso}
                </p>
                <p className=""><strong>Descricao:</strong> {descricaoCurso}</p>
                <p className=""><strong>URL do Icone: </strong>{cursoIconImg}</p>
                <p className=""><strong>URL do Banner: </strong>{cursoBannerImg}</p>
                <br />
            </CursoItemInfo>
        </CursoItemContainer>
    )
}