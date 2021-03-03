import { useState } from 'react'
import Head from 'next/head'
import {
    Container,
    H1,
    Wrapper,
} from '@ui'

const Home: React.FC = () => {
    return (
        <Wrapper>
            <Head>
                <title>Next JS Custom UI Library Biolerplate</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <H1 text='Next JS Custom UI Library Biolerplate' />
            </Container>
        </Wrapper>
    )
}

export default Home