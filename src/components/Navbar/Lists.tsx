import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { TbListSearch } from 'react-icons/tb';
import { BsMinecartLoaded } from 'react-icons/bs';
import { FcContacts } from 'react-icons/fc';
FcContacts

export const Lists = () => {
  return (
    <List component='nav' sx={{ width: "250px" }}>
      <ListItem >
        <ListItemIcon>
          <TbListSearch />
        </ListItemIcon>
        <ListItemText primary='Search' sx={{ marginLeft: "-28px" }} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <BsMinecartLoaded />
        </ListItemIcon>
        <ListItemText primary='Cart' sx={{ marginLeft: "-28px" }} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <FcContacts />
        </ListItemIcon>
        <ListItemText primary='Contact Us' sx={{ marginLeft: "-28px" }} />
      </ListItem>
    </List>
  )
}