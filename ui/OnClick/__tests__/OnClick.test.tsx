import { cleanup, render } from '@testing-library/react'
import OnClick from '../OnClick'

describe('OnClick Component', () => {
    afterEach(cleanup)

    const testOnClick = jest.fn()

    // initial render
    it('renders without crashing', () => {
        render(<OnClick onClick={testOnClick} />)
    })
})