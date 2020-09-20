import React, { useState, useEffect} from 'react'

import * as S from './styled';

export default function () {
    
    return (
        <S.HeaderArea>
            <S.HeaderItemsArea>
                <S.HeaderItem>
                <S.HeaderLogo source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png'}} />
                </S.HeaderItem>
                <S.HeaderItem>
                    <S.HeaderItemText>Séries</S.HeaderItemText>
                </S.HeaderItem>
                <S.HeaderItem>
                    <S.HeaderItemText>Filmes</S.HeaderItemText>
                </S.HeaderItem>
                <S.HeaderItem>
                    <S.HeaderItemText>Minha Lista</S.HeaderItemText>
                </S.HeaderItem>
            </S.HeaderItemsArea>
        </S.HeaderArea>
    )
}
