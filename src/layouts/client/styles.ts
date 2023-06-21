import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    display: grid;
    grid-template-columns: 20% 1fr 20%;
    grid-template-rows: auto 1fr;
`

export const HeaderContainer = styled.div`
    grid-column: 1/4;
    grid-row: 1/2;
`

export const LeftSidebarContainer = styled.div`
    grid-column: 1/2;
    grid-row: 2/3;
`

export const RightSidebarConatainer = styled.div`
    grid-column: 2/3;
    grid-row: 2/3;
`

export const MainContainer = styled.div`
    grid-column: 3/4;
    grid-row: 2/3;
`