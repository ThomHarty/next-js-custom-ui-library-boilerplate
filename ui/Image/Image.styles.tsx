import styled from 'styled-components'
import IImageProps from './Image.interface'

const StyledImage = styled.img`
    width: ${(props: IImageProps) => props.width ? props.width : '100%;'}
    height: ${(props: IImageProps) => props.height ? props.height : '100%;'}
    object-fit: cover;
`

export default StyledImage