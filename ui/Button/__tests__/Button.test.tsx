import { cleanup, render } from '@testing-library/react'
import Button from '../Button'

describe('Button Component', () => {
    afterEach(cleanup)

    const testTitle = 'Submit'
    const testOnClick = jest.fn()

    it('renders without crashing', () => {
        render(<Button title={testTitle} onClick={testOnClick} />)
    })
})