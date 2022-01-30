import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import Watches from './components/watches/watches'
import { useState } from 'react'
const App = () => {
    const [openForm, setOpenForm] = useState(false);
    return (
        
        <Container maxwidth= "lg">
            <AppBar position= "static" color= "inherit">
                <Typography variant ="h2" align="center">Watch</Typography>
            </AppBar>
            <Grid container justify = "space-between" alignItems= "stretch" spacing={3}>
                <Grid item>
                    <Watches />
                </Grid>
            </Grid>
        </Container>
    )
}

export default App;