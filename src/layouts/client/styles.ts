import { Affix } from "antd";
import styled from "styled-components";

export const Container = styled.div`
    /* width: 100vw; */
    /* display: grid;
    grid-template-columns: 20% 1fr 20%;
    grid-template-rows: auto 1fr; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.secondaryBackground};
`

export const AffixCustom = styled(Affix)`
    /* width: 100vw; */
`

export const HeaderContainer = styled.div`
    /* width: 100vw; */
    position: relative;
`

export const LeftSidebarContainer = styled.div`
    position: absolute;
    left: 0;
`

export const RightSidebarConatainer = styled.div`
    position: absolute;
    right: 0;
`

export const MainContainer = styled.div`
    /* grid-column: 2/3;
    grid-row: 2/3; */
    width: 60%;
    padding: 1rem 10rem;
`

export const Wrapper = styled.div`
    padding: 4rem;
    background-color: white;
    margin: 1rem 0;
`