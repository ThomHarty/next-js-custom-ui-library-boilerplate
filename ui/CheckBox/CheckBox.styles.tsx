import styled from 'styled-components'
import ICheckBoxProps from './CheckBox.interface'
import COLORS from '../../theme/colors'

export const StyledCheckBoxContainer = styled.div`
    width: 22px;
    height: 22px;
    border: 1px solid ${COLORS.BLACK}
    justify-content: center;
    align-items: center;
    background-color: white;
`

export const StyledCheckBox = styled.div`
    display: flex;
    transform: rotate(45deg);
    position: relative;
    left: 7px;
    height: 14px;
    width: 6px;
    border-bottom: 1px solid ${(props: ICheckBoxProps) => props.on ? COLORS.BLACK : 'rgba(0,0,0,0);'}
    border-right: 1px solid ${(props: ICheckBoxProps) => props.on ? COLORS.BLACK : 'rgba(0,0,0,0);'}
`