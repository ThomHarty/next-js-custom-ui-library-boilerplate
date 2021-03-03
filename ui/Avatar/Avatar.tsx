import StyledAvatar from './Avatar.styles'
import IAvatarProps from './Avatar.interface'

const Avatar: React.FC<IAvatarProps> = ({ src }) => {
    return (
        <StyledAvatar 
            src={src}
        />
    )
}

export default Avatar