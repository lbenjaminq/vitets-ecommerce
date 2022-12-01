import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { getProductByCategory, useAppDispatch } from '@/redux';
import { api } from '@/api';

interface Props {
  categorySelected: string;
  setCategorySelected: (category: string) => void;
}

export const FilterCategory: React.FC<Props> = ({ categorySelected, setCategorySelected }) => {
  const dispatch = useAppDispatch();

  const [categories, setcategories] = useState<string[]>()
  const handleChange = (event: SelectChangeEvent) => {
    setCategorySelected(event.target.value as string);
  };

  useEffect(() => {
    if (categorySelected) {
      dispatch(getProductByCategory(categorySelected));
    };
  }, [categorySelected])

  useEffect(() => {
    api.getAllCategories().then(categories => setcategories(categories));
  }, [])

  return (
    <FormControl variant="outlined" sx={{ width: "120px" }}>
      <InputLabel sx={{ color: "black" }} id="demo-simple-select-label">Category</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={categorySelected}
        defaultValue={''}
        label="Category"
        // onOpen={() => setCategorySelected('')}
        onChange={handleChange}
      >
        {
          categories?.map((category) => (
            <MenuItem key={category} sx={{ color: "black" }} value={category} >{category}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  )
}