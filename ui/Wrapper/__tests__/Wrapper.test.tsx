import { cleanup, render } from '@testing-library/react'
import Wrapper from '../Wrapper'

describe('Wrapper Component', () => {
    afterEach(cleanup)

    // initial render
    it('renders without crashing', () => {
        render(<Wrapper />)
    })
})
  