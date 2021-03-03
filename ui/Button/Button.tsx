import {
    StyledButton,
    StyledButtonText,
} from './Button.styles'

import IButtonProps from './Button.interface'

const Button: React.FC<IButtonProps> = ({
    onClick,
    title,
    fullWidth,
    buttonColor,
    textColor,
    buttonBorderColor,
    borderRadius,
    leftContent,
    rightContent,
}) => {
    return (
        <StyledButton
            onClick={onClick} 
            fullWidth={fullWidth}
            buttonColor={buttonColor}
            buttonBorderColor={buttonBorderColor}
            borderRadius={borderRadius}
        >
            {leftContent ? leftContent : null}
            {title ? (
                <StyledButtonText textColor={textColor}>
                    {title}
                </StyledButtonText>
            ) : null}
            {rightContent ? rightContent : null}
        </StyledButton>
    )
}

export default Button