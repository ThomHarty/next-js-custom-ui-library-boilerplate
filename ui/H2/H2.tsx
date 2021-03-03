import StyledH2 from './H2.styles'
import IH2Props from './H2.interface'

const H2: React.FC<IH2Props> = ({
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
        <StyledH2
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
        </StyledH2>
    )
}

export default H2