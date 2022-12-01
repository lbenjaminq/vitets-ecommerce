import { useState, useEffect } from 'react'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { api } from '../../api'

export const FilterCategory = () => {

  const [categories, setcategories] = useState<string[]>([])
  const [categorySelected, setCategorySelected] = useState('')
  const handleChange = (event: SelectChangeEvent) => {
    setCategorySelected(event.target.value as string)
    console.log("data", event.target.value as string);
  }

  useEffect(() => {
    api.getAllCategories().then(categories => setcategories(categories))
  }, [])

  return (
    <FormControl variant="outlined" sx={{ width: "120px" }}>
      <InputLabel sx={{ color: "black" }} id="demo-simple-select-label">Category</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={categorySelected}
        label="Category"
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