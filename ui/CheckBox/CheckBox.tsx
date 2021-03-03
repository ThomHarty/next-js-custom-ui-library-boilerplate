import {
    StyledCheckBoxContainer,
    StyledCheckBox,
} from './CheckBox.styles'

import ICheckBoxProps from './CheckBox.interface'

const CheckBox: React.FC<ICheckBoxProps> = ({
    onClick,
    on,
}) => {
    return (
        <StyledCheckBoxContainer onClick={onClick}>
            <StyledCheckBox on={on} />
        </StyledCheckBoxContainer>
    )
}

export default CheckBox