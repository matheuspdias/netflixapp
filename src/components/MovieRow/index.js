import React from 'react'
import * as S from './styled';

export default function ({title, items}) {
    return (
        <S.MovieRowArea>
            <S.MovieRowTitle>{title}</S.MovieRowTitle>
            <S.MovieRowScroll horizontal showsHorizontalScrollIndicator={false} >
                {items.results.length > 0 && items.results.map((item, key) => (
                    <S.MoviewRowItem key={key}>
                        <S.MovieRowImage  source={{uri: `https://image.tmdb.org/t/p/w300${item.poster_path}`}} />
                    </S.MoviewRowItem>                    
                ))}
            </S.MovieRowScroll>
        </S.MovieRowArea>
    )
}
