import StyledOnClick from './OnClick.styles'

import IOnClickProps from './OnClick.interface'

const OnClick: React.FC<IOnClickProps> = ({
    onClick,
    children,
}) => {
    return (
        <StyledOnClick
            onClick={onClick}
            testID='wrapperOnPress'
        >
            {children}
        </StyledOnClick>
    )
}

export default OnClick