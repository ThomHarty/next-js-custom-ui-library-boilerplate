import { cleanup, render } from '@testing-library/react'
import Avatar from '../Avatar'

describe('Avatar Component', () => {
    afterEach(cleanup)

    const testSource = 'https://facebook.github.io/react-native/img/tiny_logo.png'

    it('renders without crashing', () => {
        render(<Avatar src={testSource} />)
    })
})