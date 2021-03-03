import StyledParagraph from './Paragraph.styles'
import IParagraphProps from './Paragraph.interface'

const Paragraph: React.FC<IParagraphProps> = ({
    text,
    fontSize,
    letterSpacing,
    fontWeight,
    alignText,
    textColor,
    lineHeight,
    toUpper,
    textDecoration,
}) => {
    return (
        <StyledParagraph
            alignText={alignText}
            textColor={textColor}
            lineHeight={lineHeight}
            fontWeight={fontWeight}
            fontSize={fontSize}
            toUpper={toUpper}
            letterSpacing={letterSpacing}
            textDecoration={textDecoration}
        >
            {text}
        </StyledParagraph>
    )
}

export default Paragraph