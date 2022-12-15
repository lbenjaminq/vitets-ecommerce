import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useAppDispatch } from '@/redux';
import { priceFilter } from '@/redux/slices/products.slice';
import { Price } from '@/models';

interface Props {
  price: string;
  setPrice: (price: Price) => void;
}

export const FilterPrice: React.FC<Props> = ({ price, setPrice }) => {
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    setPrice(event.target.value as Price);
    dispatch(priceFilter(event.target.value as Price));
  };

  return (
    <FormControl variant="outlined" sx={{ width: "100px", background: "white" }}>
      <InputLabel sx={{ color: "black" }} id="demo-simple-select-label">Price</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={price}
        label="Price"
        onChange={handleChange}
      >
        <MenuItem sx={{ color: "black" }} value={Price.CHEAP}>{Price.CHEAP}</MenuItem>
        <MenuItem sx={{ color: "black" }} value={Price.EXPENSIVE}>{Price.EXPENSIVE}</MenuItem>
      </Select>
    </FormControl>
  )
}