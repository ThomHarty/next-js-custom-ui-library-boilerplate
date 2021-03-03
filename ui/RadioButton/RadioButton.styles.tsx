import styled from 'styled-components'
import IRadioButtonProps from './RadioButton.interface'
import COLORS from '../../theme/colors'

export const StyledRadioButtonContainer = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 7.5px;
    border: 1px solid ${COLORS.BLACK}
    justify-content: center;
    align-items: center;
`

export const StyledRadioButton = styled.div`
    height: 9px;
    width: 9px;
    border-radius: 4.5px;
    margin: 2px;
    background-color: ${(props: IRadioButtonProps) => props.on ? COLORS.BLACK : 'rgba(0,0,0,0);'}
`