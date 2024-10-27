import React, {useEffect, useRef} from 'react'
import Layout from '../../Layout/Layout'
import {Box, Button, TextField, Typography, Tab, Tabs} from '@mui/material'
import SkillsMatrix from '../../src/components/Sections/SkillsMatrixAndActionPlan/SkillsMatrix'
import CursorAnimation from "../../src/gsap/CursorAnimation";

const Index = () => {
    const ball = useRef()

    useEffect(() => {
        if (ball && ball.current) {
            CursorAnimation(ball.current)
        }

    }, [])
    return (
        <Layout desc={`Professional Skills Matrix and Action Plan for Software Engineering Project Management Module`} title='Skills Matrix and Action Plan'>

            <Box
                sx={{
                margin: '0 auto',
                color: 'white'
            }}>

                <SkillsMatrix/>
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