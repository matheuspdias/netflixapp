import React, { useState, useEffect } from 'react'
import { View } from 'react-native';

import * as S from './styled';
import Header from '../../components/Header';
import FeaturedMovie from '../../components/FeaturedMovie';
import MovieRow from '../../components/MovieRow';

import Tmdb from '../../../Tmdb';
import {StatusBar} from 'react-native';

export default function () {

    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(()=> {
        setLoading(true);
        const loadAll = async () => {
            let list = await Tmdb.getHomeList();
            setMovieList(list);

            // Pegando O Featured
            let originals = list.filter(i=>i.slug === 'originals');
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
            let chosen = originals[0].items.results[randomChosen];
            let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
            setFeaturedData(chosenInfo);
            setLoading(false);
        }
        loadAll();
    }, [])


    return (
        
        <S.Container>
            <StatusBar hidden={true} />
            <Header />

            {loading &&
                <S.Loading size="large" color="#ff0000" />
            }

            {featuredData &&
            <>
                <FeaturedMovie item={featuredData} />

                <S.ListsArea>
                {movieList.map((item, key) => (
                    <MovieRow key={key} title={item.title} items={item.items} />
                ))}                
                </S.ListsArea>
            </>
            }

            
        </S.Container>
        
    )
}
