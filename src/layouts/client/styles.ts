import { Affix } from "antd";
import styled from "styled-components";

interface Props {
    show?:string
}

export const Container = styled.div`
    width: 100%;
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
    width: 100%;
`

export const HeaderContainer = styled.div`
    /* width: 100vw; */
    position: relative;
`

export const LeftSidebarContainer = styled.div<Props>`
    display: ${props => props.show};
    position: absolute;
    left: 0;
`

export const RightSidebarConatainer = styled.div<Props>`
    display: ${props => props.show};
    position: absolute;
    right: 0;
`

export const MainContainer = styled.div`
    /* grid-column: 2/3;
    grid-row: 2/3; */
    width: 100%;
`

export const Wrapper = styled.div`
    padding: 4rem;
    background-color: white;
    margin: 1rem 0;
`

export const ChatWrapper = styled.div`
    position: absolute;
    /* width: 50rem;
    height: 10rem;
    background-color: red; */
    bottom: 0;
    right: 100%;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
`