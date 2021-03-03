import { cleanup, render } from '@testing-library/react'

import Paragraph from '../Paragraph'

describe('Paragraph Component', () => {
    afterEach(cleanup)

    const testText = 'Test text'

    it('renders without crashing', () => {
        render(<Paragraph text={testText} />)
    })
})