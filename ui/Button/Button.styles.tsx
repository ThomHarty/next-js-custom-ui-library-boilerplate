import styled from 'styled-components'
import IButtonProps from './Button.interface'
import COLORS from '../../theme/colors'

export const StyledButton = styled.div`
    flexDirection: row;
    justifyContent: center;
    padding: 13px 15px;
    background-color: ${(props: IButtonProps) => props.buttonColor ? props.buttonColor : COLORS.BLACK}
    width: ${(props: IButtonProps) => props.fullWidth ? '100%;' : '140px;'}
    border-color: ${(props: IButtonProps) => props.buttonBorderColor ? props.buttonBorderColor : props.buttonColor || COLORS.BLACK}
    border-width: ${(props: IButtonProps) => props.borderWidth ? props.borderWidth : '1px;'}
    border-radius: ${(props: IButtonProps) => props.borderRadius ? props.borderRadius : '5px;'}
`

export const StyledButtonText = styled.p`
    font-size: 18px;
    text-align: center;
    color: ${(props: IButtonProps) => props.textColor ? props.textColor : COLORS.WHITE}
    margin: 0;
`