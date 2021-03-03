import styled from 'styled-components'
import IBackgroundImageProps from './BackgroundImage.interface'

const StyledBackgroundImage = styled.div`
    width: ${(props: IBackgroundImageProps) => props.width ? props.width : '100%;'}
    height: ${(props: IBackgroundImageProps) => props.height ? props.height : '100%;'}
    background-image: url(${(props: IBackgroundImageProps) => props.image});
    background-size: cover;
`

export default StyledBackgroundImage