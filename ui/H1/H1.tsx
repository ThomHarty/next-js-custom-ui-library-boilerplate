import StyledH1 from './H1.styles'
import IH1Props from './H1.interface'

const H1: React.FC<IH1Props> = ({
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
        <StyledH1
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
        </StyledH1>
    )
}

export default H1