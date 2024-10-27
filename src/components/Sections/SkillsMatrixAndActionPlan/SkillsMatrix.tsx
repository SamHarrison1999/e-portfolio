import * as React from 'react';
import {Box, Button, Container, Grid, makeStyles, Tab, Tabs, tabsClasses, Tooltip, Typography} from '@mui/material';
import gsap from 'gsap';
import {useRef, useEffect} from 'react';
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import HeroSectionAnimation from '../../../gsap/HeroSectionAnimation';

export const btnStyles = {
    padding: '.77em 1.5em',
    borderRadius: '3px'
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const SkillsMatrix = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const ref = useRef();
    const q = gsap
        .utils
        .selector(ref);
    gsap.registerPlugin(ScrollToPlugin);
    useEffect(() => {
        HeroSectionAnimation(q)

    }, []);
    return (
        <Container
            id='hero'
            maxWidth='xl'
            sx={{
            margin: '0 auto',
            py: {
                xs: '7.5em',
                sm: '8.5em'
            },
        }}>
            <Grid
                container
                sx={{
                    justifyContent: 'space-between',
            }}>

                <Grid item>
                    <Box ref={ref}>
                        <iframe src="/assets/Professional%20Skills%20Matrix%20and%20Action%20Plan.pdf" width="1200px" height="1080px"/>
                    </Box>
                </Grid>

            </Grid>

        </Container>
    )
}

export default SkillsMatrix
