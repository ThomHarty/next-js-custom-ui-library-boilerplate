import styled from 'styled-components'
import IH2Props from './H2.interface'
import COLORS from '../../theme/colors'

const StyledH2 = styled.h2`
    margin: 0;
    font-size: ${(props: IH2Props) => props.fontSize ?  `${props.fontSize}px;` : '30px;'}
    font-weight: ${(props: IH2Props) => props.fontWeight ?  props.fontWeight : 'normal;'}
    color: ${(props: IH2Props) => props.textColor ? props.textColor : COLORS.BLACK}
    text-align: ${(props: IH2Props) => props.alignText ?  props.alignText : 'left;'}
    text-transform: ${(props: IH2Props) => props.toUpper ? 'uppercase;' : 'none;'}
    line-height: ${(props: IH2Props) => props.lineHeight ? `${props.lineHeight}px;` : `${props.fontSize ? props.fontSize * 1.5 : 18}px;`}
    letter-spacing: ${(props: IH2Props) => props.letterSpacing ? `${props.letterSpacing}px;` : '0px;'}
    text-decoration: ${(props: IH2Props) => props.textDecoration ? props.textDecoration : 'none;'}
`

export default StyledH2