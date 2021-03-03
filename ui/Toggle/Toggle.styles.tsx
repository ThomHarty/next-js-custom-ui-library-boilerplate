import styled from 'styled-components'
import IToggleProps from './Toggle.interface'
import COLORS from '../../theme/colors'

export const StyledToggleContainer = styled.div`
    width: 60px;
    height: 28px;
    position: relative;
`

export const StyledToggleBar = styled.div`
    width: 60px;
    height: 34px;
    border-radius: 17px;
    background-color: ${(props: IToggleProps) => !props.on ? COLORS.BLACK : COLORS.BLUE}
`

export const StyledToggle = styled.div`
    position: absolute;
    top: 3px;
    left: ${(props: IToggleProps) => !props.on ? '3px;' : '29px;'}
    width: 28px;
    height: 28px;
    border-radius: 14px;
    background-color: ${COLORS.PINK}
`