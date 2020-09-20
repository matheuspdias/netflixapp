import React from 'react';
import styled from 'styled-components/native';

export const HeaderArea = styled.View`
    backgroundColor: transparent;
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    flexDirection: row;
    justifyContent: space-around;
`;

export const HeaderImageArea = styled.View`
    flexDirection: column;
    justifyContent: center;
    alignItems:center;
    marginLeft:15px;
`;

export const HeaderLogo = styled.Image`
    width: 60px;
    height: 15px;
`;

export const HeaderItemsArea = styled.View`
    flexDirection: row;
    flex: 1;
    justifyContent: space-around;
    alignItems: center;
`;

export const HeaderItem = styled.TouchableOpacity``;

export const HeaderItemText = styled.Text`
    fontWeight: bold;
    color:#FFF;
    fontSize: 14px;
`;