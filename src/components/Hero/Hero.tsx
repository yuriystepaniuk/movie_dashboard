import React from 'react';
import { AspectRatio, Button } from '@mui/joy';
import { Box, Grid, Typography } from '@mui/material';

interface HeroProps { };

export const Hero = (props: HeroProps) => {
    return (
        <Box sx={{ marginTop: "100px", padding: "25px" }}>
            <Grid container spacing={2} alignItems={"center"}>
                <Grid item xs={12} md={6}>
                    <Box display={"flex"} flexDirection={"column"} gap={2}>
                        <Typography variant="h2" component="h1">
                            Heading
                        </Typography>
                        <Typography variant="h4" component="h2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu est.
                        </Typography>
                        <Typography variant="subtitle1" component="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu est.
                        </Typography>
                        <Button sx={{ minWidth: "80px", maxWidth: "200px" }}>Join Us</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <AspectRatio ratio="1/1" objectFit='cover' sx={{ width: "100%" }}>
                        <img alt='aw' src="https://images.unsplash.com/photo-1634157703702-3c124b455499?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80" />
                    </AspectRatio>
                </Grid>
            </Grid>
        </Box>
    );
};