export default interface IInputProps {
    value: string
    handleOnChangeText: (value: string) => any
    placeholder?: string
    type?: string
    name?: string
}