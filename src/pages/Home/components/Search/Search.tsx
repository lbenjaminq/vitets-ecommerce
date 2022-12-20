import { api } from '@/api';
import { useAppDispatch } from '@/redux';
import { FormControl, OutlinedInput, Stack } from '@mui/material';
import { useState } from 'react';
import { CgSearchLoading } from 'react-icons/cg';


export const Search = () => {
  const dispatch = useAppDispatch();
  const [productInput, setInputProduct] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputProduct(e.target.value);
  };

  const handleOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(api.getProductBySearch(productInput));
    setInputProduct('');
  };

  return (
    <FormControl sx={{ width: { xs: "18ch", sm: "25ch" }, display: "flex" }}>
      <Stack direction="row" alignItems="center">
        <OutlinedInput sx={{ color: "black", background: "white" }} color="secondary" placeholder="Search.." onChange={handleChange} value={productInput} />
        <CgSearchLoading onClick={handleOnClick} color="white"
          style={{ fontSize: "2rem", cursor: "pointer" }} />
      </Stack>
    </FormControl>
  )
}