import { about, myAccount, otherPlaces, socialNetworks } from "@/models"
import { SDivider } from "@/styled-components/Divider"
import { Box, Container, Divider, Grid, List, ListItem, ListItemText, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"


export const Footer = () => {
  return (
    <Container component="main" maxWidth={false} sx={{ minHeight: "10vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: "center",
          width: "100%",
          margin: "auto",
          background: "#f7f7f7",
          mb: 4,
          borderTop: "2px solid #DEC8CD",
          borderBottom: "2px solid #DEC8CD"
        }}
      >
        <Grid container direction="row" sx={{ width: { xs: "100%", sm: "60%" }, }}>
          <Grid item xs={6} md={3} >
            <List sx={{ mt: 6 }}>
              <ListItemText primary="About" sx={{ ml: 2, }} />
              {
                about.map((item, index) => (
                  <ListItem key={index}>
                    <Link to={item} style={footerList} >
                      <ListItemText
                        primary={item}
                      />
                    </Link>
                  </ListItem>
                ))
              }
            </List>
          </Grid>
          <Grid item xs={6} md={3} >
            <List sx={{ mt: 6 }}>
              <ListItemText primary="Other places" sx={{ ml: 2, }} />
              {
                otherPlaces.map((item, index) => (
                  <ListItem key={index}>
                    <Link to={item} style={footerList} >
                      <ListItemText
                        primary={item}
                      />
                    </Link>
                  </ListItem>
                ))
              }
            </List>
          </Grid>
          <Grid item xs={6} md={3} >
            <List sx={{ mt: 6 }}>
              <ListItemText primary="Social networks" sx={{ ml: 2, }} />
              {
                socialNetworks.map((item, index) => (
                  <ListItem key={index}>
                    <Link to={item} style={footerList} >
                      <ListItemText
                        primary={item}
                      />
                    </Link>
                  </ListItem>
                ))
              }
            </List>
          </Grid>
          <Grid item xs={6} md={3} >
            <List sx={{ mt: 6 }}>
              <ListItemText primary="My account" sx={{ ml: 2, }} />
              {
                myAccount.map((item, index) => (
                  <ListItem key={index}>
                    <Link to={item} style={footerList} >
                      <ListItemText
                        primary={item}
                      />
                    </Link>
                  </ListItem>
                ))
              }
            </List>
          </Grid>
        </Grid>
      </Box>
      <Grid container sx={{ width: { xs: "100%", md: "100%", lg: "80%" }, mb: 4 }}>
        <Grid item xs={6} sm={2.8} md={1.5} sx={footerItems}>Work with us </Grid>
        <Grid item xs={6} sm={2.8} md={1.5} sx={footerItems}>Terms and conditions</Grid>
        <Grid item xs={6} sm={2.8} md={1.5} sx={footerItems}>How we take care of your privacy </Grid>
        <Grid item xs={6} sm={2.8} md={1.5} sx={footerItems}>Accessibility</Grid>
        <Grid item xs={6} sm={2.8} md={1.5} sx={footerItems}>Information for the financial user </Grid>
        <Grid item xs={6} sm={2.8} md={1.5} sx={footerItems}> Consumer Defense</Grid>
        <Grid item xs={6} sm={2.8} md={1.5} sx={footerItems}>Help</Grid>
      </Grid>
    </Container >
  )
}

const footerList = {
  textDecoration: "none",
  color: "#a5a5a5"
}

const footerItems = {
  textAlign: { xs: "start", sm: "center" },
  mb: { xs: 4, sm: 2, md: 0 },
  ml: { xs: 4 }
}