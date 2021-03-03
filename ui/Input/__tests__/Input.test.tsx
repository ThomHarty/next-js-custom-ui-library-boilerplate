import { cleanup, render } from '@testing-library/react'
import Input from '../Input'

describe('Input Component', () => {
    afterEach(cleanup)

    const testValue = ''
    const testOnChange = jest.fn()

    // initial render
    it('renders without crashing', () => {
        render(<Input value={testValue} handleOnChangeText={testOnChange} />)
    })
})