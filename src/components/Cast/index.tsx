import React from 'react';

import { ICast } from '../../@types';
import * as S from './styles';

const Cast: React.FC<ICast> = ({ cast }) => {
    return (
        <>
            <S.Title>Cast</S.Title>
            <S.Container>
                {cast.map((item, index) => (
                    <S.Item key={index}>
                        <img
                            src={`https://image.tmdb.org/t/p/w185${item.profile_path}`}
                            alt="person cast"
                        />
                        <S.Info>
                            <span>{item.character}</span>
                            <span>{item.name}</span>
                        </S.Info>
                    </S.Item>
                ))}
            </S.Container>
        </>
    );
};

export default Cast;
