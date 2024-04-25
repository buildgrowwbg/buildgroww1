import {
  Box,
  Card,
  Typography,
  Container,
  Divider,
  Button,
  FormControl,
  OutlinedInput,
  InputAdornment,
  styled
} from '@mui/material';
// import Head from 'next/head';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

// import BaseLayout from 'src/layouts/BaseLayout';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

const MainContent = styled(Box)(
  () => `
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
`
);

const TopWrapper = styled(Box)(
  ({ theme }) => ({
  display: "flex",
  width: "100%",
  flex: 1,
  alignItems:'center',
  justifyContent: "center",
  padding: `${theme.spacing(6)}`,
  [theme.breakpoints.down("sm")]:{
    padding: `${theme.spacing(2)}`,
  }

}));

const OutlinedInputWrapper = styled(OutlinedInput)(
  ({ theme }) => `
    background-color: ${theme.colors.alpha.white[100]};
`
);

const ButtonSearch = styled(Button)(
  ({ theme }) => `
    margin-right: -${theme.spacing(1)};
`
);

function Status404() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <h2>
        <title>Status - 404</title>
      </h2>
      <MainContent>
        <TopWrapper>
          <Container maxWidth="md">
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}} textAlign="center">
              <img alt="404" height={180} src="/images/status/404.svg" />
              <Typography variant="h2" sx={{ my: 2,fontSize:{md:'40px',sm:'35px',xs:'23px'} }}>
                {t("The page you were looking for doesn't exist.")}
              </Typography>
              <Typography
                variant="h4"
                color="text.secondary"
                fontWeight="normal"
                sx={{ mb: 4 }}
              >
                {t(
                  "It's on us, we moved the content to a different page!"
                )}
              </Typography>
            </Box>
            <Container maxWidth="sm">
              <Card sx={{ textAlign: 'center', marginTop:{sm:'30px',xs:'0px'},padding:{sm:'40px',xs:'20px'} }}>
                {/* <FormControl variant="outlined" fullWidth>
                  <OutlinedInputWrapper
                    type="text"
                    placeholder={t('Search terms here...')}
                    endAdornment={
                      <InputAdornment position="end">
                        <ButtonSearch variant="contained" size="small">
                          {t('Search')}
                        </ButtonSearch>
                      </InputAdornment>
                    }
                    startAdornment={
                      <InputAdornment position="start">
                        <SearchTwoToneIcon />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <Divider sx={{ my: 4 }}>OR</Divider> */}
                <Button onClick={()=>{navigate('/')}} variant="outlined">
                  {t('Go to homepage')}
                </Button>
              </Card>
            </Container>
          </Container>
        </TopWrapper>
      </MainContent>
    </>
  );
}

export default Status404;

// Status404.getLayout = function getLayout(page) {
//   return <BaseLayout>{page}</BaseLayout>;
// };
