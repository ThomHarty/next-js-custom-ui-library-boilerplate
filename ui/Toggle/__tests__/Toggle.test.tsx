import { cleanup, render } from '@testing-library/react'
import Toggle from '../Toggle'

describe('Toggle Component', () => {
    afterEach(cleanup)

    const testToggle = true
    const testOnClick = jest.fn()

    // initial render
    it('renders without crashing', () => {
        render(<Toggle on={testToggle} onClick={testOnClick} />)
    })
})