import React from 'react'

import * as S from './styled';

export default function ({item}) {

    const image = {uri: "https://image.tmdb.org/t/p/original${item.backdrop_path}"};

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres) {
        genres.push( item.genres[i].name );
    }
    
    let description = item.overview;
    if(description.length > 200) {
        description = description.substring(0, 200)+'...';
    }

    return (
        <S.Featured source={{uri: `https://image.tmdb.org/t/p/original${item.backdrop_path}`}} imageStyle={{opacity: 0.3}} style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <S.FeaturedVertical>
                <S.FeaturedHorizontal>
                    <S.FeaturedName>
                        <S.TextViewName>{item.original_name}</S.TextViewName>    
                    </S.FeaturedName> 
                    <S.FeaturedInfo>
                        <S.FeaturedPoints>
                            <S.TextViewPoints>{item.vote_average} Pontos</S.TextViewPoints>
                        </S.FeaturedPoints>
                        <S.FeaturedYear>
                            <S.TextViewYear>{firstDate.getFullYear()}</S.TextViewYear>
                        </S.FeaturedYear>
                        <S.FeaturedSeasons>
                            <S.TextViewSeasons>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''} </S.TextViewSeasons>
                        </S.FeaturedSeasons>
                    </S.FeaturedInfo>
                        <S.FeaturedDescription>
                            {description}
                        </S.FeaturedDescription>
                        <S.FeaturedButtons>
                            <S.FeaturedButton>
                                <S.FeaturedButtonText>+ Minha Lista</S.FeaturedButtonText>
                            </S.FeaturedButton>
                            <S.FeaturedButton>
                                <S.FeaturedButtonText>Assistir</S.FeaturedButtonText>
                            </S.FeaturedButton>
                        </S.FeaturedButtons>
                        <S.FeaturedGenresText>Gêneros: {genres.join(', ')}</S.FeaturedGenresText>
                                       
                </S.FeaturedHorizontal>
            </S.FeaturedVertical>
        </S.Featured>
    )
}
