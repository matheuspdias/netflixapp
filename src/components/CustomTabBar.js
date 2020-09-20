import React from 'react';
import styled from 'styled-components/native';

import HomeIcon from '../assets/home.svg';
import SearchIcon from '../assets/search.svg';
import BreveIcon from '../assets/breve.svg';
import DownloadIcon from '../assets/download.svg';
import MenuIcon from '../assets/menu.svg';

const TabArea = styled.View`
    height: 50px;
    backgroundColor: #212121;
    flexDirection: row;
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justifyContent: center;
    alignItems: center;
`;


export default ({ state, navigation }) => {

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <TabArea>
            <TabItem onPress={()=>goTo('Home')}>
                 <HomeIcon style={{opacity: state.index===0? 1 : 0.5}} width="24" height="24" fill="#FFF" />
            </TabItem>
            <TabItem onPress={()=>goTo('Search')}>
                 <SearchIcon style={{opacity: state.index===0? 1 : 0.5}} width="24" height="24" fill="#FFF" />
            </TabItem>
            <TabItem onPress={()=>goTo('Breve')}>
                 <BreveIcon style={{opacity: state.index===0? 1 : 0.5}} width="24" height="24" fill="#FFF" />
            </TabItem>
            <TabItem onPress={()=>goTo('Downloads')}>
                 <DownloadIcon style={{opacity: state.index===0? 1 : 0.5}} width="24" height="24" fill="#FFF" />
            </TabItem>
            <TabItem onPress={()=>goTo('More')}>
                 <MenuIcon style={{opacity: state.index===0? 1 : 0.5}} width="24" height="24" fill="#FFF" />
            </TabItem>
        </TabArea>
    )
}
