import { cleanup, render } from '@testing-library/react'

import H1 from '../H1'

describe('H1 Component', () => {
    afterEach(cleanup)

    const testText = 'Test text'

    it('renders without crashing', () => {
        render(<H1 text={testText} />)
    })
})