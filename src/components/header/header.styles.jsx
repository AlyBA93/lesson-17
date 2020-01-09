import styled, {css} from 'styled-components';

import {Link} from 'react-router-dom';


const OptionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
`;

export const HeaderContainer = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    background-color:  rgb(131, 163, 189);
`;
export const Logocontainer = styled (Link)`
    height: 100%;
    padding: 5px;
    position: relative;
    top:0;
    left: 30px;

`;

export const OptionContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
    ${OptionContainerStyles}
`;