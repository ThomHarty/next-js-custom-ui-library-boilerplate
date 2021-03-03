import styled from 'styled-components'
import COLORS from '../../theme/colors'

import ILabelProps from './Label.interface'

export const StyledLabelContainer = styled.div`
    padding: 2px 10px;
    width: 100%;
`

export const StyledLabel = styled.p`
    font-size: 12px;
    margin: 0;
    color: ${(props: ILabelProps) => props.textColor ? props.textColor : COLORS.BLACK}
`