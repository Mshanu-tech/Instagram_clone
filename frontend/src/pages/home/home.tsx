// import Sidebar from "./homeMenu"
import { CssBaseline } from "@mui/material"
// function Home() {
//   return (
//     <>
//     <div className="leftside" style={{display:"flex"}}>
//       <CssBaseline/>
//         <Sidebar/>
//         <div style={{ flexGrow: 1, padding: 20 }}>
//         Content goes here
//       </div>
//     </div>

//     </>
//   )
// }

// export default Home


import React from 'react';
import { Container, Box, Grid } from '@mui/material';
import Header from '../../components/Header';
import Stories from '../../components/Stories';
import Post from '../../components/Post';
import Suggestions from '../../components/Suggestions';
import Sidebar from '../../components/Sidebar';

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box mt={2}>
        <Grid container spacing={2}>
          <Grid >
                 <CssBaseline/>
            <Sidebar/>
          </Grid>
          <Grid >
            <Stories />
            <Post />
          </Grid>
          <Grid >
            <Suggestions />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Home;
