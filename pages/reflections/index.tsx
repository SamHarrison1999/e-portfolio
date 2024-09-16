import React, {useEffect, useRef} from 'react'
import Layout from '../../Layout/Layout'
import {Box, Button, TextField, Typography, Tab, Tabs} from '@mui/material'
import Reflections from '../../src/components/Sections/Reflections/Reflections'
import CursorAnimation from "../../src/gsap/CursorAnimation";

const Index = () => {
    const ball = useRef()

    useEffect(() => {
        if (ball && ball.current) {
            CursorAnimation(ball.current)
        }

    }, [])
    return (
        <Layout desc={`Reflections for Software Engineering Project Management Module`} title='Reflections'>

            <Box
                sx={{
                margin: '0 auto',
                color: 'white'
            }}>

                <Reflections/>
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

export default Index