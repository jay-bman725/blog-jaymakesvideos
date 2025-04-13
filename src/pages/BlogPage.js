import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Container, Grid, Typography, Box, Chip, Avatar } from '@mui/material';
import BlogPost from '../components/BlogPost';
import { Helmet } from 'react-helmet';

// Sample blog posts data - in a real app, this would come from an API or database
const blogPosts = [
  {
    id: 1,
    title: 'Welcome to My New Blog!',
    date: 'April 12, 2025',
    excerpt: "I'm excited to announce the launch of my new blog! Here, I'll be sharing my thoughts, experiences, and insights. Stay tuned for more content coming soon!",
    tags: ['Announcement', 'Welcome'],
    content: "I'm thrilled to officially launch my new blog! This will be a dedicated space where I share my thoughts, experiences, and insights on everything from video creation and editing to the latest developments in technology. I’ll be posting detailed tutorials, step-by-step guides, and behind-the-scenes breakdowns of my video production process. You'll also find tips and tricks I've picked up over the years, personal reflections on creative challenges, and deep dives into the tools and tech I use daily. Whether you're a fellow creator, a tech enthusiast, or just curious, there's something here for you. Stay tuned — there's a lot of exciting content coming soon!"
  }
];

const BlogPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const isEmbedded = new URLSearchParams(location.search).get('embed') === 'true';

  useEffect(() => {
    if (isEmbedded) {
      document.body.style.margin = '0';
      document.body.style.padding = '0';
      document.body.style.background = 'transparent';
      // Add meta tags for better Discord embed appearance
      const metaTags = [
        { property: 'theme-color', content: '#3f51b5' },
        { property: 'og:site_name', content: 'JayMakesVideos Blog' },
        { property: 'og:image', content: 'https://ui-avatars.com/api/?name=Jay%20B&background=random&size=200' }
      ];
      
      metaTags.forEach(tag => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.setAttribute('content', tag.content);
        document.head.appendChild(meta);
      });
    }
    return () => {
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.background = '';
      // Clean up meta tags
      if (isEmbedded) {
        ['theme-color', 'og:site_name', 'og:image'].forEach(prop => {
          const meta = document.querySelector(`meta[property="${prop}"]`);
          if (meta) meta.remove();
        });
      }
    };
  }, [isEmbedded]);

  // If there's an ID parameter, show the individual post view
  if (id) {
    const post = blogPosts.find(post => post.id === parseInt(id));

    if (!post) {
      return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography variant="h4">Post not found</Typography>
        </Container>
      );
    }

    return (
      <>
        <Helmet>
          <title>{post.title} - JayMakesVideos Blog</title>
          <meta name="description" content={post.excerpt} />
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={post.excerpt} />
          <meta property="og:type" content="article" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={post.title} />
          <meta name="twitter:description" content={post.excerpt} />
        </Helmet>
        <Container 
          maxWidth="lg" 
          sx={{
            py: isEmbedded ? 2 : 8,
            px: isEmbedded ? 2 : 3,
            ...(isEmbedded && {
              background: '#ffffff',
              borderRadius: 2,
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              overflow: 'hidden'
            })
          }}
        >
          <Typography 
            variant={isEmbedded ? "h4" : "h2"} 
            gutterBottom 
            sx={{ 
              fontWeight: 700,
              fontSize: isEmbedded ? '1.5rem' : undefined
            }}
          >
            {post.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: isEmbedded ? 2 : 4 }}>
            <Avatar
              src={`https://ui-avatars.com/api/?name=Jay%20B&background=random`}
              sx={{ width: isEmbedded ? 32 : 40, height: isEmbedded ? 32 : 40, mr: 2 }}
            />
            <Typography variant={isEmbedded ? "body2" : "subtitle1"} color="text.secondary">
              Posted on {post.date}
            </Typography>
          </Box>
          <Box sx={{ mb: isEmbedded ? 2 : 4 }}>
            {post.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size={isEmbedded ? "small" : "medium"}
                sx={{ mr: 1, mb: 1 }}
              />
            ))}
          </Box>
          {isEmbedded ? (
            <Typography 
              variant="body2" 
              sx={{ 
                lineHeight: 1.6,
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}
            >
              {post.excerpt}
            </Typography>
          ) : (
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              {post.content}
            </Typography>
          )}
        </Container>
      </>
    );
  }

  // Show the blog listing view
  return (
    <>
      <Helmet>
        <title>JayMakesVideos Blog</title>
        <meta name="description" content="A place for sharing thoughts and experiences" />
        <meta property="og:title" content="JayMakesVideos Blog" />
        <meta property="og:description" content="A place for sharing thoughts and experiences" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="JayMakesVideos Blog" />
        <meta name="twitter:description" content="A place for sharing thoughts and experiences" />
      </Helmet>
      <Container maxWidth="lg" sx={{ py: isEmbedded ? 2 : 8, px: isEmbedded ? 2 : 3 }}>
        <Box sx={{ mb: isEmbedded ? 3 : 6 }}>
          {!isEmbedded && (
            <Typography 
              variant="h3" 
              gutterBottom 
              sx={{
                fontWeight: 700,
                position: 'relative',
                '&::after': {
                  content: '""',
                  display: 'block',
                  width: '60px',
                  height: '4px',
                  backgroundColor: 'primary.main',
                  marginTop: '8px',
                },
              }}
            >
              Welcome to My Blog
            </Typography>
          )}
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
            A place for sharing thoughts and experiences
          </Typography>
        </Box>
        <Grid container spacing={isEmbedded ? 2 : 4}>
          {blogPosts.map(post => (
            <Grid item xs={12} md={isEmbedded ? 12 : 8} key={post.id}>
              <BlogPost post={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default BlogPage;