import { Box, Container } from '@mui/material';
import { SectionIdEnum } from '../../types';
import bg from '../../assets/2641052.gif';

export type SectionContainerProps = {
  children: React.ReactNode;
  sectionId: SectionIdEnum;
};

export const SectionContainer: React.FC<SectionContainerProps> = ({ children, sectionId }) => {
  return (
    <div id={sectionId} key={sectionId}>
      <div style={{ 
      backgroundImage: `url(${bg})`,
      backgroundRepeat: 'no-repeat',
      width:'100%',
      margin: 0 
    }}>
      <Container>
        <Box minHeight="130vh">{children}</Box>
      </Container>
    </div>
    </div>
  );
};
