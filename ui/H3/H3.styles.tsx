import styled from 'styled-components'
import IH3Props from './H3.interface'
import COLORS from '../../theme/colors'

const StyledH3 = styled.h3`
    margin: 0;
    font-size: ${(props: IH3Props) => props.fontSize ?  `${props.fontSize}px;` : '30px;'}
    font-weight: ${(props: IH3Props) => props.fontWeight ?  props.fontWeight : 'normal;'}
    color: ${(props: IH3Props) => props.textColor ? props.textColor : COLORS.BLACK}
    text-align: ${(props: IH3Props) => props.alignText ?  props.alignText : 'left;'}
    text-transform: ${(props: IH3Props) => props.toUpper ? 'uppercase;' : 'none;'}
    line-height: ${(props: IH3Props) => props.lineHeight ? `${props.lineHeight}px;` : `${props.fontSize ? props.fontSize * 1.5 : 18}px;`}
    letter-spacing: ${(props: IH3Props) => props.letterSpacing ? `${props.letterSpacing}px;` : '0px;'}
    text-decoration: ${(props: IH3Props) => props.textDecoration ? props.textDecoration : 'none;'}
`

export default StyledH3