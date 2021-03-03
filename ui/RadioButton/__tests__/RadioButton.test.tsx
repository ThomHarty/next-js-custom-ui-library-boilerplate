import { cleanup, render } from '@testing-library/react'
import RadioButton from '../RadioButton'

describe('RadioButton Component', () => {
    afterEach(cleanup)

    const testOn = true
    const testOnClick = jest.fn()

    // initial render
    it('renders without crashing', () => {
        render(<RadioButton on={testOn} onClick={testOnClick} />)
    })
})