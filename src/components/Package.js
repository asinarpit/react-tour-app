import React from 'react'
import data from "./data.json";
import PackageItem from "./PackageItem"
import { Container, Divider, Stack} from '@mui/material';





export default function Package() {
  
  return (
    <Container maxWidth={"lg"} style={{marginTop:"5rem",marginBottom:"2rem"}} >
    <Stack direction="column" divider={<Divider orientation='horizontal' flexItem></Divider>} spacing={2}>
    {
      data.map((item)=>(
        
          <PackageItem key={item.packageId} data={item}/>

      ))

    }
</Stack>

  </Container>
  )
}
