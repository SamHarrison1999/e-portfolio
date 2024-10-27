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

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Reflections = () => {
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
                         <Tabs
                             value={value}
                             onChange={handleChange}
                             textColor="secondary"
                             indicatorColor="secondary"
                             aria-label="basic tabs example"
                             centered={true}
                             variant="scrollable"
                             scrollButtons="auto"
                             allowScrollButtonsMobile={true}
                             sx={{
                                 [`& .${tabsClasses.scrollButtons}`]: {
                                     '&.Mui-disabled': { opacity: 0.3 },
                                 },
                                 minWidth: "fit-content", flex: 1
                             }}>
                             <Tab label="Module Reflection" {...a11yProps(0)} sx={{ minWidth: "fit-content", flex: 1 }} />
                             <Tab label="Unit One" {...a11yProps(1)} sx={{ minWidth: "fit-content", flex: 1 }} />
                             <Tab label="Unit Two" {...a11yProps(2)} sx={{ minWidth: "fit-content", flex: 1 }} />
                             <Tab label="Unit Three" {...a11yProps(3)} sx={{ minWidth: "fit-content", flex: 1 }} />
                             <Tab label="Unit Four" {...a11yProps(4)} sx={{ minWidth: "fit-content", flex: 1 }} />
                             <Tab label="Unit Five" {...a11yProps(5)} sx={{ minWidth: "fit-content", flex: 1 }} />
                             <Tab label="Unit Six" {...a11yProps(6)} sx={{ minWidth: "fit-content", flex: 1 }} />
                             <Tab label="Unit Seven" {...a11yProps(7)} sx={{ minWidth: "fit-content", flex: 1 }} />
                             <Tab label="Unit Eight" {...a11yProps(8)} sx={{ minWidth: "fit-content", flex: 1 }} />
                             <Tab label="Unit Nine" {...a11yProps(9)} sx={{ minWidth: "fit-content", flex: 1 }} />
                             <Tab label="Unit Ten" {...a11yProps(10)} sx={{ minWidth: "fit-content", flex: 1 }} />
                             <Tab label="Unit Eleven" {...a11yProps(11)} sx={{ minWidth: "fit-content", flex: 1 }} />
                             <Tab label="Unit Twelve" {...a11yProps(12)} sx={{ minWidth: "fit-content", flex: 1 }} />
                        </Tabs>
                        <CustomTabPanel value={value} index={0}>
                            <iframe src="/assets/Module%20Reflection.pdf" width="100%" height="500px"/>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <iframe src="/assets/Unit%201%20Reflection.pdf" width="100%" height="500px"/>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <iframe src="/assets/Unit%202%20Reflection.pdf" width="100%" height="500px"/>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={3}>
                            <iframe src="/assets/Unit%203%20Reflection.pdf" width="100%" height="500px"/>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={4}>
                            <iframe src="/assets/Unit%204%20Reflection.pdf" width="100%" height="500px"/>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={5}>
                            <iframe src="/assets/Unit%205%20Reflection.pdf" width="100%" height="500px"/>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={6}>
                            <iframe src="/assets/Unit%206%20Reflection.pdf" width="100%" height="500px"/>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={7}>
                            <iframe src="/assets/Unit%207%20Reflection.pdf" width="100%" height="500px"/>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={8}>
                            <iframe src="/assets/Unit%208%20Reflection.pdf" width="100%" height="500px"/>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={9}>
                            <iframe src="/assets/Unit%209%20Reflection.pdf" width="100%" height="500px"/>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={10}>
                            <iframe src="/assets/Unit%2010%20Reflection.pdf" width="100%" height="500px"/>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={11}>
                            <iframe src="/assets/Unit%2011%20Reflection.pdf" width="100%" height="500px"/>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={12}>
                            <iframe src="/assets/Unit%2012%20Reflection.pdf" width="100%" height="500px"/>
                        </CustomTabPanel>
                    </Box>
                </Grid>

            </Grid>

        </Container>
    )
}

export default Reflections
