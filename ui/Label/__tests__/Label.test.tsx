import { cleanup, render } from '@testing-library/react'
import Label from '../Label'

describe('Label Component', () => {
    afterEach(cleanup)

    const testLabel = 'Label Text'

    it('renders without crashing', () => {
        render(<Label text={testLabel} />)
    })
})