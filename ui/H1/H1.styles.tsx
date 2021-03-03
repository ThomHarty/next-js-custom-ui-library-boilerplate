import styled from 'styled-components'
import IH1Props from './H1.interface'
import COLORS from '../../theme/colors'

const StyledH1 = styled.h1`
    margin: 0;
    font-size: ${(props: IH1Props) => props.fontSize ?  `${props.fontSize}px;` : '36px;'}
    font-weight: ${(props: IH1Props) => props.fontWeight ?  props.fontWeight : 'normal;'}
    color: ${(props: IH1Props) => props.textColor ? props.textColor : COLORS.BLACK}
    text-align: ${(props: IH1Props) => props.alignText ?  props.alignText : 'left;'}
    text-transform: ${(props: IH1Props) => props.toUpper ? 'uppercase;' : 'none;'}
    line-height: ${(props: IH1Props) => props.lineHeight ? `${props.lineHeight}px;` : `${props.fontSize ? props.fontSize * 1.5 : 18}px;`}
    letter-spacing: ${(props: IH1Props) => props.letterSpacing ? `${props.letterSpacing}px;` : '0px;'}
    text-decoration: ${(props: IH1Props) => props.textDecoration ? props.textDecoration : 'none;'}
`

export default StyledH1