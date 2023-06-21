import styled from "styled-components";
import { Popover,Switch,Radio } from 'antd';

interface Props {
    bgColor:string,
}

export const Container = styled(Popover)`
    margin-left: 1rem;
`

export const CustomButton = styled.button`
    background:transparent;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${props => props.theme.primaryColor};
    padding:0;
    border: none;
`

export const PopContent = styled.div`
    background: transparent;
`

export const Title = styled.h3`
    margin: 0;
    color: ${props => props.theme.primaryFont};
`

export const NotificationList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`

export const NotificationWrapper = styled.h5`
    margin: 0;
    color: ${props => props.theme.primaryFont};
    display: grid;
    grid-template-columns: 3rem 1fr;
    grid-template-rows: auto auto;
    column-gap: 0.5rem;
    align-items: center;
    line-height: 1.25;
`

export const Avatar = styled.div`
    grid-column: 1/2;
    grid-row: 1/3;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 100%;
    }
`

export const Content = styled.div`
    grid-column: 2/3;
    grid-row: 1/2;
    color: ${props => props.theme.primaryFont};
    font-size: 1rem;
    font-weight: normal;

    span{
        font-weight: bold;
    }
`

export const Time = styled.div`
    grid-column: 2/3;
    grid-row: 2/3;
    font-size: 0.5rem;
    color: ${props => props.theme.secondaryFont};
    font-weight: normal;
`