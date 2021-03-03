import { cleanup, render } from '@testing-library/react'

import H3 from '../H3'

describe('H3 Component', () => {
    afterEach(cleanup)

    const testText = 'Test text'

    it('renders without crashing', () => {
        render(<H3 text={testText} />)
    })
})