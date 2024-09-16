import { Box,  } from "@mui/material";
import  Head  from "next/head";
import { useState } from "react";
import Navbar from "../src/components/Navbar/Navbar";
import { ILayout } from "../src/Types/Types";
import CustomDrawer from "../src/components/Drawer/Drawer";



const Layout = ({navbarSx, title ,children ,desc } : ILayout) => {
  const [isOpen,setOpen] = useState(false)
    const toggleDrawer = (state?:boolean) => {
      setOpen(state !== undefined ? state : !isOpen)
    }

  return (

    <>
    <Head >
        <title>{title || "Software Engineering Project Management E-Portfolio"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  
   
    
<meta name="description" content={`${desc || 'E-Portfolio for Software Engineering Project Management Module'}`} />


<meta property="og:title" content="Software Engineering Project Management E-Portfolio" />


<meta property="og:url" content="https://samharrison1999.github.io/Software-Engineering-Project-Management-E-Portfolio/" />


<meta property="og:description" content="E-Portfolio for Software Engineering Project Management Module"/>


<meta property="og:image" content=""/>

{/* <!-- Og Type -->
<meta property="og:type" content="article" /> */}
   
   
   <meta httpEquiv="content-language" content="en"/>
    <meta charSet="UTF-8"/>
    <meta name="robots" content="index, follow"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    {/* <meta name="description" content="Site Meta Description" /> */}
    <meta name="keywords" content="Software Engineering Project Management E-Portfolio" />
    <meta name="author" content="Sam Harrison" />
    <meta name="publisher" content="publisher"/>
    <meta name="copyright" content="copyright"/>
    <meta name="page-topic" content="E-Portfolio"/>
    <meta name="page-type" content="Blogging"/>
    <meta name="audience" content="Everyone"/>
    </Head> 
    <Navbar toggleDrawer={toggleDrawer} navbarSx={navbarSx}/>
    <CustomDrawer isOpen={isOpen} toggleDrawer={toggleDrawer}/>
    <Box 
     className="site-content">
      {children}
    </Box>
  </>
  )


}
 
 
  



export default Layout; 