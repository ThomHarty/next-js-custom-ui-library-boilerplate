import { cleanup, render } from '@testing-library/react'
import CheckBox from '../CheckBox'

describe('CheckBox Component', () => {
    afterEach(cleanup)

    const testOn = true
    const testOnPress = jest.fn()

    it('renders without crashing', () => {
        render(<CheckBox on={testOn} onClick={testOnPress} />)
    })
})