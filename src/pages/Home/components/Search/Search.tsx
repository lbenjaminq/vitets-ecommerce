import { api } from '@/api';
import { useAppDispatch } from '@/redux';
import { FormControl, OutlinedInput, Stack } from '@mui/material';
import { FormEvent, FormEventHandler, useState } from 'react';
import { CgSearchLoading } from 'react-icons/cg';


export const Search = () => {
  const dispatch = useAppDispatch();
  const [productInput, setInputProduct] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputProduct(e.target.value);
  };

  const handleOnClick = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    dispatch(api.getProductBySearch(productInput));
    setInputProduct('');
  };

  return (
    <form onSubmit={handleOnClick}>
      <Stack direction="row" alignItems="center">
        <OutlinedInput sx={{ color: "black", background: "white" }} color="secondary" placeholder="Search.." onChange={handleChange} value={productInput} />
        <CgSearchLoading
          style={{ fontSize: "2rem", cursor: "pointer" }} />
      </Stack>
    </form>
  )
}