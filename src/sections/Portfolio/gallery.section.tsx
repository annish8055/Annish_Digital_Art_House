import { Box, Typography } from '@mui/material';

export const GallerySection: React.FC = () => {
  return (
    <Box py={4}>
      <Typography variant="h6">Gallery section</Typography>
      <Typography variant="h2" mb={1} fontWeight={500}>
        Gallery section
      </Typography>
      <Typography variant="h5" mb={3}>
        Gallery section
      </Typography>
      <Typography maxWidth={500}>
        Gallery section
      </Typography>
    </Box>
  );
};
