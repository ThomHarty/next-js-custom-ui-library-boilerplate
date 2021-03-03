import { cleanup, render } from '@testing-library/react'
import HR from '../HR'

describe('HR Component', () => {
    afterEach(cleanup)

    // initial render
    it('renders without crashing', () => {
        render(<HR />)
    })
})  