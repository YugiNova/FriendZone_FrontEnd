import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    padding:1rem;
    display:grid;
    grid-template-columns: 20% 1fr 20%;
    grid-template-rows: auto;

    background: ${props => props.theme.primaryBackground};
    box-shadow: ${props => props.theme.boxshadow};
`

export const LogoContainer = styled.div`
    grid-column: 1/2;
    grid-row: 1/2;
    img{
        width: 50%;
    }
`

export const SearchContainer = styled.div`
    grid-column: 2/3;
    grid-row: 1/2;

`

export const OptionsContainer = styled.div`
    grid-column: 3/4;
    grid-row: 1/2;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
`
