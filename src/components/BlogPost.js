import React from 'react';
import { Card, CardContent, Typography, Box, Chip, CardActionArea, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: theme.spacing(2),
  overflow: 'hidden',
}));

const BlogPost = ({ post }) => {
  return (
    <StyledCard>
      <CardActionArea component={Link} to={`/blog/${post.id}`}>
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Box sx={{ mb: 2 }}>
            {post.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  mr: 1,
                  mb: 1,
                  '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.08)' },
                }}
              />
            ))}
          </Box>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: 600,
              mb: 2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {post.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {post.excerpt}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar
                src={`https://ui-avatars.com/api/?name=Jay%20B&background=random`}
                sx={{ width: 32, height: 32, mr: 1 }}
              />
              <Typography variant="body2" color="text.secondary">
                {post.date}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};

export default BlogPost;