import StyledInput from './Input.styles'
import IInputProps from './Input.interface'

const Input: React.FC<IInputProps> = ({ 
    value,
    handleOnChangeText,
    placeholder,
    type,
    name,
}) => {
    return (
        <StyledInput 
            value={value}
            onChange={(value: string) => handleOnChangeText(value)}
            placeholder={placeholder}
            type={type || 'text'}
            name={name}
        />
    )
}

export default Input