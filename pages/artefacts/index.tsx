import React, {useEffect, useRef} from 'react'
import Layout from '../../Layout/Layout'
import {Box, Button, TextField, Typography, Tab, Tabs} from '@mui/material'
import Artefacts from '../../src/components/Sections/Artefacts/Artefacts'
import CursorAnimation from "../../src/gsap/CursorAnimation";

const Index = () => {
    const ball = useRef()

    useEffect(() => {
        if (ball && ball.current) {
            CursorAnimation(ball.current)
        }

    }, [])
    return (
        <Layout desc={`Artefacts for Software Engineering Project Management Module`} title='Artefacts'>

            <Box
                sx={{
                margin: '0 auto',
                color: 'white'
            }}>

                <Artefacts/>

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