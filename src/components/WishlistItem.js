import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function WishlistItem({ data, onRemove }) {
  const handleRemoveClick = () => {
    onRemove(data.packageId);
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={`/${data.packageImage}`}
        alt={data.packageDesc}
      />
      <CardContent>
        <Typography variant="subtitle1">{data.packageDesc}</Typography>
        <Typography variant='subtitle2' color={"gray"}>{data.packageCountry}</Typography>
        <Button
          variant="contained"
          sx={{background:"none",boxShadow:"none",color:"black"}}
          onClick={handleRemoveClick}
        >
            <DeleteIcon />
        </Button>
      </CardContent>
    </Card>
  );
}
