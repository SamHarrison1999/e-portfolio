import {Box} from '@mui/material'
import type {NextPage}
from 'next'
import HomePage from '../src/components/Sections/HomePage/HomePage'
import {useEffect, useRef} from 'react';
import CursorAnimation from '../src/gsap/CursorAnimation';
import Layout from '../Layout/Layout'

const Home : NextPage = () => {
    const ball = useRef()

    useEffect(() => {
        if (ball && ball.current) {
            CursorAnimation(ball.current)
        }

    }, [])
    return (
        <Layout desc={`Software Engineering Project Management E-Portfolio`} title='Software Engineering Project Management E-Portfolio'>

            <Box
                sx={{
                margin: '0 auto',
                color: 'white'
            }}>

                <HomePage/>

                <Box
                    ref={ball}
                    sx={{
                    display: {
                        xs: 'none',
                        md: 'block'
                    }
                }}
                    className="ball"></Box>

            </Box>
        </Layout>

    )
}

export default Home
