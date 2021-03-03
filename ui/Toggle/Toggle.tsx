import {
    StyledToggleContainer,
    StyledToggleBar,
    StyledToggle,
} from './Toggle.styles'

import IToggleProps from './Toggle.interface'

const Toggle: React.FC<IToggleProps> = ({
    onClick,
    on,
}) => {
    return (
        <StyledToggleContainer onClick={onClick}>
            <StyledToggleBar on={on} />
            <StyledToggle on={on} />
        </StyledToggleContainer>
    )
}

export default Toggle