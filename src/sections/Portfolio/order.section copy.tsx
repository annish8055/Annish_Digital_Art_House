import { Container, Typography, Box, Link } from '@mui/material';
import WorkIcon from '@material-ui/icons/Work';
import EditIcon from '@material-ui/icons/Edit';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import SendIcon from '@material-ui/icons/Send';
import PaymentIcon from '@material-ui/icons/Payment';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import SkypeIcon from '../../assets/icons8-skype-500.svg';
import DiscordIcon from '../../assets/icons8-discord-500.svg';



export const OrderSection: React.FC = () => {
  
  return (
    <Container maxWidth="md" style={{color:'white'}}>
 <Box my={4}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Work Flow
      </Typography>
      <Typography variant="body1" align="justify" gutterBottom>
        <b>My normal work flow contains 4 stages:</b>
      </Typography>
      <Box my={4} display="flex" justifyContent="center">
      <Box sx={{ height: '150px', flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', p: 2, bgcolor: '#e1f5fe', borderRadius: 8, mx: 2, mb: 2 }}>
        <WorkIcon color="primary" />
        <Typography variant="body1" component="span" ml={2}>
          <strong>Stage 1:</strong> Collect Information & Understand Requirements
        </Typography>
      </Box>
      <Box sx={{ height: '150px', flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', p: 2, bgcolor: '#f3e5f5', borderRadius: 8, mx: 2, mb: 2 }}>
        <EditIcon color="primary" />
        <Typography variant="body1" component="span" ml={2}>
          <strong>Stage 2:</strong> Create Rough Idea & Get Feedback
        </Typography>
      </Box>
      <Box sx={{ height: '150px', flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', p: 2, bgcolor: '#fce4ec', borderRadius: 8, mx: 2, mb: 2 }}>
        <CheckCircleIcon color="primary" />
        <Typography variant="body1" component="span" ml={2}>
          <strong>Stage 3:</strong> Refine Idea & Finalize Design
        </Typography>
      </Box>
      <Box sx={{ height: '150px', flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', p: 2, bgcolor: '#e8f5e9', borderRadius: 8, mx: 2, mb: 2 }}>
        <SendIcon color="primary" />
        <Typography variant="body1" component="span" ml={2}>
          <strong>Stage 4:</strong> Deliver Final Version
        </Typography>
      </Box>
    </Box>
      <Typography variant="body1" align="justify" gutterBottom mt={2}>
        <i>I offer major revisions during Stage 2 and Stage 3, ensuring that the concept and design meet your expectations.
        Minor revisions may also be made during Stage 4, based on project requirements and feedback received.</i>
      </Typography>
    </Box>

    <Box my={4}>
<br />
 
      <Box my={4} display="flex" justifyContent="center">
        <Box
          sx={{
            height: '200px',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            p: 2,
            bgcolor: '#e3f2fd',
            borderRadius: 8,
            mx: 2,
            mb: 2,
          }}
        >
          <Box>
            <PaymentIcon color="primary" fontSize="large" />
          </Box>
          <Box ml={2}>
            <Typography variant="h6" component="span" fontWeight="bold">
              Payment Process
            </Typography>
            <Box mt={2} display="flex" flexDirection="row">
              <Box mr={4}>
                <Typography variant="body1" component="p">
                  <strong>Step 1: Initial Payment</strong> To initiate the project, a 30% advance payment of the agreed amount is required.
                </Typography>
              </Box>
              <Box mr={4}>
                <Typography variant="body1" component="p">
                  <strong>Step 2: Milestone Payment</strong> Once Stage 3 is delivered, an additional 20% payment is requested.
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" component="p">
                  <strong>Step 3: Final Payment and Approval</strong> The final version will be shared for review and approval upon complete payment.
                </Typography>
              </Box>
            </Box>
             <Typography variant="body1" component="p" mt={2}>
             I accept payments through PayPal as well as direct bank transfers
             </Typography>
             <Typography variant="body1" component="p" mt={2}>
              Connect with me:
            </Typography>
            <Typography variant="body1" component="p" mt={2}>
              For direct projects:
            </Typography>
            <Box display="flex" alignItems="center" mt={1}>
              <Link href="skype-link" target="_blank" rel="noopener noreferrer">
                <img src={SkypeIcon} alt="Skype Link" width={24} height={24} />
              </Link>
              <Box mx={2}>
                <Link href="whatsapp-link" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon color="primary" fontSize="large" />
                </Link>
              </Box>
              <Link href="discord-link" target="_blank" rel="noopener noreferrer">
                <img src={DiscordIcon} alt="Discord Link" width={24} height={24} />
              </Link>
            </Box>
            <Typography variant="body1" component="p" mt={2}>
            through third pary:
            </Typography>
            <Box display="flex" alignItems="center" mt={1}>
              <Link href="skype-link" target="_blank" rel="noopener noreferrer">
                <img src={SkypeIcon} alt="Skype Link" width={24} height={24} />
              </Link>
              <Box mx={2}>
                <Link href="whatsapp-link" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon color="primary" fontSize="large" />
                </Link>
              </Box>
              <Link href="discord-link" target="_blank" rel="noopener noreferrer">
                <img src={DiscordIcon} alt="Discord Link" width={24} height={24} />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>

    </Box>


  </Container>
  );
};
