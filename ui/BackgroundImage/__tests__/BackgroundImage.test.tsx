import { cleanup, render } from '@testing-library/react'
import BackgroundImage from '../BackgroundImage'

describe('BackgroundImage Component', () => {
    afterEach(cleanup)

    const testSource = 'https://facebook.github.io/react-native/img/tiny_logo.png'

    it('renders without crashing', () => {
        render(<BackgroundImage image={testSource} />)
    })
})