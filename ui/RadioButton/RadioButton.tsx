import {
    StyledRadioButtonContainer,
    StyledRadioButton,
} from './RadioButton.styles'

import IRadioButtonProps from './RadioButton.interface'

const RadioButton: React.FC<IRadioButtonProps> = ({ onClick, on }) => {
    return (
        <StyledRadioButtonContainer onClick={onClick}>
            <StyledRadioButton on={on} />
        </StyledRadioButtonContainer>
    )
}

export default RadioButton