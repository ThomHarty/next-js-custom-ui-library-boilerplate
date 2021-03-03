import StyledBackgroundImage from './BackgroundImage.styles'
import IBackgroundImageProps from './BackgroundImage.interface'

const BackgroundImage: React.FC<IBackgroundImageProps> = ({
    image,
    height,
    width,
    children,
}) => {
    return (
        <StyledBackgroundImage
            image={image}
            height={height}
            width={width}
        >
            {children}
        </StyledBackgroundImage>
    )
}

export default BackgroundImage