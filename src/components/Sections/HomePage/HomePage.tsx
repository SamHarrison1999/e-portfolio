import {Box, Button, Container, Grid, Tooltip, Typography} from '@mui/material';
import gsap from 'gsap';
import {useRef, useEffect} from 'react';
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import HeroSectionAnimation from '../../../gsap/HeroSectionAnimation';
import Image from 'next/image'

export const btnStyles = {
    padding: '.77em 1.5em',
    borderRadius: '3px'
}

const HomePage = () => {
    const ref = useRef();
    const q = gsap
        .utils
        .selector(ref);
    gsap.registerPlugin(ScrollToPlugin);
    useEffect(() => {
        HeroSectionAnimation(q)

    }, [])

    return (
        <Container
            id='hero'
            maxWidth='lg'
            sx={{
            margin: '0 auto',
            py: {
                xs: '7.5em',
                sm: '8.5em'
            }
        }}>
            <Grid
                container
                sx={{
                justifyContent: 'space-between'
            }}>

                <Grid item xs={12} sm={10} md={8} lg={7}>
                    <Box ref={ref}>

                        <Typography
                            className='t1'
                            variant='h1'
                            sx={{
                            fontSize: {
                                xs: '2.4em',
                                sm: '3.4em',
                                md: '3.8em'
                            },
                            textAlign: 'left',
                            transform: 'translateY(40px)',
                            opacity: 0,
                            pt: '1em',
                            fontWeight: '600'
                        }}>
                      
                        Software Engineering Project Management Portfolio
                        </Typography>

                        <Box
                            sx={{
                            my: '2.5em',
                            gap: '.8em',
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center'
                        }}>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default HomePage
