import StyledH3 from './H3.styles'
import IH3Props from './H3.interface'

const H3: React.FC<IH3Props> = ({
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
        <StyledH3
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
        </StyledH3>
    )
}

export default H3