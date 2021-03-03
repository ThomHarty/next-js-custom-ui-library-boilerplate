import { cleanup, render } from '@testing-library/react'
import Container from '../Container'

describe('Container Component', () => {
    afterEach(cleanup)

    const testIsAnimated = false

    // initial render
    it('renders without crashing', () => {
        render(<Container />)
    })
})