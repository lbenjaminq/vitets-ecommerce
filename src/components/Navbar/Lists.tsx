import { Link, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { TbListSearch } from 'react-icons/tb';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { FcContacts } from 'react-icons/fc';
FcContacts

export const Lists = () => {
  return (
    <List component='nav' sx={{ width: "250px" }}>
      <Link href="/home" sx={ListText}>
        <ListItem sx={{ mt: 3, mb: 1 }} >
          <ListItemIcon>
            <TbListSearch color='#fff' />
          </ListItemIcon>
          <ListItemText primary='Search' sx={{ marginLeft: "-10px" }} />
        </ListItem>
      </Link>
      <Link href="/cart" sx={ListText}>
        <ListItem sx={{ mb: 1 }} >
          <ListItemIcon>
            <RiShoppingCart2Fill color='#fff' />
          </ListItemIcon>
          <ListItemText primary='Cart' sx={{ marginLeft: "-10px" }} />
        </ListItem>
      </Link>
      <Link sx={ListText}>
        <ListItem sx={{ mb: 1 }} >
          <ListItemIcon>
            <FcContacts />
          </ListItemIcon>
          <ListItemText primary='Contact Us' sx={{ marginLeft: "-10px" }} />
        </ListItem>
      </Link>
    </List >
  )
};

const ListText = {
  textDecoration: "none",
  fontSize: "2rem",
  color: "#fff"
}

