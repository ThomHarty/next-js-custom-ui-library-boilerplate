import { cleanup, render } from '@testing-library/react'

import H2 from '../H2'

describe('H2 Component', () => {
    afterEach(cleanup)

    const testText = 'Test text'

    it('renders without crashing', () => {
        render(<H2 text={testText} />)
    })
})