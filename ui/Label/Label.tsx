import { 
    StyledLabel,
    StyledLabelContainer,
} from './Label.styles'

import ILabelProps from './Label.interface'

const Label: React.FC<ILabelProps> = ({ text, textColor }) => {
    return (
        <StyledLabelContainer>
            <StyledLabel textColor={textColor}>
                {text}
            </StyledLabel>
        </StyledLabelContainer>
    )
}

export default Label