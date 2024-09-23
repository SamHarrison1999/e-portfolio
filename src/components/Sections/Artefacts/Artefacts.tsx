import * as React from 'react';
import {Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, Button, Container, Grid, makeStyles, Tab, Tabs, tabsClasses, Tooltip, Typography} from '@mui/material';
import gsap from 'gsap';
import {useRef, useEffect} from 'react';
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import HeroSectionAnimation from '../../../gsap/HeroSectionAnimation';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


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

const Artefacts = () => {
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
                             variant="scrollable"
                             scrollButtons="auto"
                             allowScrollButtonsMobile={true}
                             sx={{
                                 [`& .${tabsClasses.scrollButtons}`]: {
                                     '&.Mui-disabled': { opacity: 0.3 },
                                 },
                                 minWidth: "fit-content", flex: 1
                             }}>
                          <Tab label="Unit One" {...a11yProps(0)} sx={{ minWidth: "fit-content", flex: 1 }} />
                          <Tab label="Unit Two" {...a11yProps(1)} sx={{ minWidth: "fit-content", flex: 1 }} />
                          <Tab label="Unit Three" {...a11yProps(2)} sx={{ minWidth: "fit-content", flex: 1 }} />
                          <Tab label="Unit Four" {...a11yProps(3)} sx={{ minWidth: "fit-content", flex: 1 }} />
                          <Tab label="Unit Five" {...a11yProps(4)} sx={{ minWidth: "fit-content", flex: 1 }} />
                          <Tab label="Unit Six" {...a11yProps(5)} sx={{ minWidth: "fit-content", flex: 1 }} />
                          <Tab label="Unit Seven" {...a11yProps(6)} sx={{ minWidth: "fit-content", flex: 1 }} />
                          <Tab label="Unit Eight" {...a11yProps(7)} sx={{ minWidth: "fit-content", flex: 1 }} />
                          <Tab label="Unit Nine" {...a11yProps(8)} sx={{ minWidth: "fit-content", flex: 1 }} />
                          <Tab label="Unit Ten" {...a11yProps(9)} sx={{ minWidth: "fit-content", flex: 1 }} />
                          <Tab label="Unit Eleven" {...a11yProps(10)} sx={{ minWidth: "fit-content", flex: 1 }} />
                          <Tab label="Unit Twelve" {...a11yProps(11)} sx={{ minWidth: "fit-content", flex: 1 }} />
                        </Tabs>
                        <CustomTabPanel value={value} index={0}>
                            <Accordion sx={{ minWidth: "fit-content", flex: 1 }}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1-content"
                                  id="panel1-header"
                                  sx={ {
                                      color: '#ffffff'
                                  }}
                                >
                                  Team Contract
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                        <iframe src="/assets/Team%20Contract.pdf" width="100%" height="500px"/>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel2-content"
                                  id="panel2-header"
                                  sx={ {
                                      color: '#ffffff'
                                  }}
                                >
                                  Collaborative Discussion 1: Project Failures Study Initial post
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                        <iframe src="/assets/Collaborative%20Discussion%201%20-%20Initial%20post.pdf" width="100%" height="500px"/>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel2-content"
                                  id="panel2-header"
                                  sx={ {
                                      color: '#ffffff'
                                  }}
                                >
                                  Meeting Minuets
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                        <iframe src="/assets/MoM_GroupEstablish_20240801.pdf"
                                                width="100%" height="500px"/>
                                    </div>
                                    <div>
                                        <iframe src="/assets/MoM_TeamContract_20240802.pdf"
                                                width="100%" height="500px"/>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <Accordion sx={{ minWidth: "fit-content", flex: 1 }}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1-content"
                                  id="panel1-header"
                                  sx={ {
                                      color: '#ffffff'
                                  }}
                                >
                                  Formative Activities
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                        <iframe src="/assets/Requirements%20Gathering%20Unit%202%20Formative%20Activity.pdf" width="100%" height="500px"/>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ minWidth: "fit-content", flex: 1 }}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1-content"
                                  id="panel1-header"
                                  sx={ {
                                      color: '#ffffff'
                                  }}
                                >
                                  Collaborative Discussion Peer Response 1
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                        <iframe src="/assets/Collaborative%20Discussion%201%20-%20Peer%20Response%201.pdf" width="100%" height="500px"/>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ minWidth: "fit-content", flex: 1 }}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1-content"
                                  id="panel1-header"
                                  sx={ {
                                      color: '#ffffff'
                                  }}
                                >
                                  Collaborative Discussion Peer Response 2
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                        <iframe src="/assets/Collaborative%20Discussion%201%20-%20Peer%20Response%202.pdf" width="100%" height="500px"/>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ minWidth: "fit-content", flex: 1 }}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1-content"
                                  id="panel1-header"
                                  sx={ {
                                      color: '#ffffff'
                                  }}
                                >
                                  Meeting Minuets
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                        <iframe src="/assets/MoM_PreparatoryTasks_20240808.pdf" width="100%" height="500px"/>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <Accordion sx={{ minWidth: "fit-content", flex: 1 }}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1-content"
                                  id="panel1-header"
                                  sx={ {
                                      color: '#ffffff'
                                  }}
                                >
                                  Formative Activities
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                        <Typography
                                        sx={ {
                                            color: '#ffffff'
                                        }}>The formative activity for this week was to respond to at least two of your peers&apos; contributions by commenting constructively on their proposed diagram changes. However, for the first collaborative discussion you were not required to make any diagrams. This lead me to believe the learning platform was out of date. Additionally, as I had already responded to two peers in Unit 2 I wasn&apos;t sure if this had been duplicated by mistake and not update. When I reached out to my team members regarding this they were also very confused.</Typography>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ minWidth: "fit-content", flex: 1 }}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1-content"
                                  id="panel1-header"
                                  sx={ {
                                      color: '#ffffff'
                                  }}
                                >
                                  E-Portfolio Activity: Data Structures Reflection
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                        <iframe src="/assets/Data%20Structures%20Reflection%20Activity.pdf" width="100%" height="500px"/>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ minWidth: "fit-content", flex: 1 }}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1-content"
                                  id="panel1-header"
                                  sx={ {
                                      color: '#ffffff'
                                  }}
                                >
                                  Meeting Minuets
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                        <iframe src="/assets/MoM_ProjectReportDraft_20240815.pdf" width="100%" height="500px"/>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={3}>
                            <Accordion sx={{ minWidth: "fit-content", flex: 1 }}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1-content"
                                  id="panel1-header"
                                  sx={ {
                                      color: '#ffffff'
                                  }}
                                >
                                  Collaborative Discussion 1 Summary Post
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                        <iframe src="/assets/Collaborative%20Discussion%201%20-%20Summary%20Post.pdf" width="100%" height="500px"/>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ minWidth: "fit-content", flex: 1 }}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1-content"
                                  id="panel1-header"
                                  sx={ {
                                      color: '#ffffff'
                                  }}
                                >
                                  Wiki Entry: Risks and risk mitigation
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                        <iframe src="/assets/Wiki%20Entry%20-%20Risks%20and%20risk%20mitigation.pdf" width="100%" height="500px"/>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ minWidth: "fit-content", flex: 1 }}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1-content"
                                  id="panel1-header"
                                  sx={ {
                                      color: '#ffffff'
                                  }}
                                >
                                  Seminar Preparation Activities
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                        <iframe
                                            src="/assets/Estimating%20Tools%20and%20Risk%20Assessment%20Exercise.pdf"
                                            width="100%" height="500px"/>
                                    </div>
                                    <div>
                                        <Typography
                                            sx={{
                                                color: '#ffffff'
                                            }}>The second seminar preparation activity for this week was to create a
                                            Wiki Entry for Risks and risk mitigation. However this was the formative
                                            activity for this unit. This lead me to believe the learning platform was
                                            out of date.</Typography>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ minWidth: "fit-content", flex: 1 }}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1-content"
                                  id="panel1-header"
                                  sx={ {
                                      color: '#ffffff'
                                  }}
                                >
                                  Meeting Minuets
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                        <iframe src="/assets/MoM_ProjectReportReview_20240822.pdf" width="100%" height="500px"/>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={4}>
                            <Accordion sx={{ minWidth: "fit-content", flex: 1 }}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1-content"
                                  id="panel1-header"
                                  sx={ {
                                      color: '#ffffff'
                                  }}
                                >
                                  Collaborative Discussion 2: Factors Affecting User Experience Initial Post
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                        <iframe src="/assets/Collaborative%20Discussion%202%20-%20Initial%20post.pdf" width="100%" height="500px"/>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ minWidth: "fit-content", flex: 1 }}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1-content"
                                  id="panel1-header"
                                  sx={ {
                                      color: '#ffffff'
                                  }}
                                >
                                  Meeting Minuets
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                        <iframe src="/assets/MoM_WordCountLimit_20240827.pdf" width="100%" height="500px"/>
                                        <iframe src="/assets/MoM_ProjectReportRefinements_20240901.pdf" width="100%" height="500px"/>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={5}>
                            <Accordion sx={{ minWidth: "fit-content", flex: 1 }}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1-content"
                                  id="panel1-header"
                                  sx={ {
                                      color: '#ffffff'
                                  }}
                                >
                                  Seminar Preparation Activity
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                        <Typography
                                        sx={ {
                                            color: '#ffffff'
                                        }}>The preparation activity for this week was to review responses to the Collaborative Learning Discussion from Unit 5.</Typography>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ minWidth: "fit-content", flex: 1 }}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1-content"
                                  id="panel1-header"
                                  sx={ {
                                      color: '#ffffff'
                                  }}
                                >
                                  Jupyter Notebook Activity - pytest
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                        <iframe src="/assets/Jupyter%20Notebook%20Activity%20-%20pytest.pdf" width="100%" height="500px"/>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ minWidth: "fit-content", flex: 1 }}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1-content"
                                  id="panel1-header"
                                  sx={ {
                                      color: '#ffffff'
                                  }}
                                >
                                  Assignment 1 Project Report
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                        <iframe src="/assets/Development%20Team%20Project%20-%20Project%20Report.pdf" width="100%" height="500px"/>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ minWidth: "fit-content", flex: 1 }}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1-content"
                                  id="panel1-header"
                                  sx={ {
                                      color: '#ffffff'
                                  }}
                                >
                                  Assignment 1 Peer Review
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                        <iframe src="/assets/Development%20Activity%20-%20Peer%20Review.pdf" width="100%" height="500px"/>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ minWidth: "fit-content", flex: 1 }}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1-content"
                                  id="panel1-header"
                                  sx={ {
                                      color: '#ffffff'
                                  }}
                                >
                                  Meeting Minuets
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                        <iframe src="/assets/MoM_ProjectReport2ndRefinements_20240905.pdf" width="100%" height="500px"/>
                                        <iframe src="/assets/MoM_ProjectReportFinalReview_20240907.pdf" width="100%" height="500px"/>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ minWidth: "fit-content", flex: 1 }}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1-content"
                                  id="panel1-header"
                                  sx={ {
                                      color: '#ffffff'
                                  }}
                                >
                                  Assignment 1 Feedback
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                        <iframe src="/assets/Assignment%201%20Feedback.png" width="100%" height="500px"/>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={6}>
                            Unit Seven Artefacts Go Here
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={7}>
                            Unit Eight Artefacts Go Here
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={8}>
                            Unit Nine Artefacts Go Here
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={9}>
                            Unit Ten Artefacts Go Here
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={10}>
                            Unit Eleven Artefacts Go Here
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={11}>
                            Unit Twelve Artefacts Go Here
                        </CustomTabPanel>
                    </Box>
                </Grid>

            </Grid>

        </Container>
    )
}

export default Artefacts
