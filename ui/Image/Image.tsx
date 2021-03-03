import StyledImage from './Image.styles'
import IImageProps from './Image.interface'

const Image: React.FC<IImageProps> = ({ src, height, width }) => {
    return (
        <StyledImage 
            src={src}
            height={height}
            width={width}
        />
    )
}

export default Image