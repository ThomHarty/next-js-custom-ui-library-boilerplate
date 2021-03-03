import { cleanup, render } from '@testing-library/react'
import Image from '../Image'

describe('Image Component', () => {
    afterEach(cleanup)

    const testSource = 'https://facebook.github.io/react-native/img/tiny_logo.png'

    it('renders without crashing', () => {
        render(<Image src={testSource} />)
    })
})