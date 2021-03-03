import styled from 'styled-components'
import IParagraphProps from './Paragraph.interface'
import COLORS from '../../theme/colors'

const StyledParagraph = styled.p`
    margin: 0;
    font-size: ${(props: IParagraphProps) => props.fontSize ?  `${props.fontSize}px;` : '12px;'}
    font-weight: ${(props: IParagraphProps) => props.fontWeight ?  props.fontWeight : 'normal;'}
    color: ${(props: IParagraphProps) => props.textColor ? props.textColor : COLORS.BLACK}
    text-align: ${(props: IParagraphProps) => props.alignText ?  props.alignText : 'left;'}
    text-transform: ${(props: IParagraphProps) => props.toUpper ? 'uppercase;' : 'none;'}
    line-height: ${(props: IParagraphProps) => props.lineHeight ? `${props.lineHeight}px;` : `${props.fontSize ? props.fontSize * 1.5 : 18}px;`}
    letter-spacing: ${(props: IParagraphProps) => props.letterSpacing ? `${props.letterSpacing}px;` : '0px;'}
    text-decoration: ${(props: IParagraphProps) => props.textDecoration ? props.textDecoration : 'none;'}
`

export default StyledParagraph