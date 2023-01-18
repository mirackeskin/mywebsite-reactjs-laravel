import React, { useEffect } from 'react'
import styles from './PostCard.module.css'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { useNavigate } from 'react-router-dom'
import { IMAGE_URL } from '../../client';

const PostCard = (props) => {   
  const Navigation=useNavigate(); 
  const {id,title,image,coverText,text,date}=props;
  return (
      <Card onClick={()=>Navigation("content",{state:{title,image,coverText,text,date}})} sx={{ maxWidth: "100%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "black" }} aria-label="recipe">
            MK
          </Avatar>
        }
        title={title}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="auto"
        image={IMAGE_URL+image}
        alt={image}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {coverText}
        </Typography>
      </CardContent>      
    </Card>
  )
}

export default PostCard
