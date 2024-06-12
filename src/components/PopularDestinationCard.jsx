import React from 'react'

import {Card, Grid,CardContent,Typography,CardMedia,CardActionArea } from '@mui/material'
export default function PopularDestinationCard({data}) {
  return (
    <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image= {`/${data.packageImage}`}
                  alt="Destination Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {data.packageCountry}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {data.packageCity}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
  )
}
