import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CursoItemContainer, CursoItemImage, CursoItemInfo } from './style';

import Button from '../../../../components/Button';

interface Cursos {
    cursoId: number,
    tituloCurso: string,
    descricaoCurso: string,
    cursoIconImg: string,
    cursoBannerImg: string
}


export const Curso = ({cursoId, tituloCurso, descricaoCurso, cursoIconImg, cursoBannerImg}: Cursos) => {


    return (
        <CursoItemContainer>
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