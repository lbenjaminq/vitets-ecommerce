import { PublicRoutes } from "@/models";
import { SDivider } from "@/styled-components/Divider"
import { CartProduct } from "@/types/types";
import { sumTotal, sumTotalProducts } from "@/utilities"
import { Box, Button, Paper, Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router";

interface Props {
  products: CartProduct[]
}

export const PaperSummary = ({ products }: Props) => {

  const navigate = useNavigate()

  return (
    <Box component='div' sx={{ width: { xs: "100%", sm: "100%", md: "35%" }, height: "400px", display: "flex", alignItems: "center", justifyContent: "center", position: "sticky", top: "0" }}>
      <Paper elevation={3} sx={{ height: { xs: "100%", sm: "100%", md: "100%" }, width: "80%", backgroundColor: "#fff", padding: "30px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <Typography variant="h4" >PRICE DETAILS</Typography>
        <SDivider />
        <Stack direction='row' justifyContent='space-between' >
          <Typography variant="h5">Products Amount</Typography>
          <Typography variant="h5">{sumTotalProducts(products)}</Typography>
        </Stack>
        <Stack direction='row' justifyContent='space-between' >
          <Typography variant="h5">Delivery Charges</Typography>
          <Typography variant="h5">Free</Typography>
        </Stack>
        <SDivider />
        <Stack direction='row' justifyContent='space-between' >
          <Typography variant="h5">Total Amount</Typography>
          <Typography variant="h5">${sumTotal(products)}</Typography>
        </Stack>
        <Button variant='contained' fullWidth onClick={() => navigate(PublicRoutes.CHECKOUT)}>Checkout</Button>
      </Paper>
    </Box>
  )
}