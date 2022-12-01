import { useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { Price } from '../../models'

export const FilterPrice = () => {

  const [price, setPrice] = useState(Price.DEFAULT)

  const handleChange = (event: SelectChangeEvent) => {
    setPrice(event.target.value as Price)
    console.log(event.target.value)
  }

  return (
    <FormControl variant="outlined" sx={{ width: "100px" }}>
      <InputLabel sx={{ color: "black" }} id="demo-simple-select-label">Price</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={price}
        label="Price"
        onChange={handleChange}
      >
        <MenuItem sx={{ color: "black" }} value={Price.DEFAULT}>{Price.DEFAULT}</MenuItem>
        <MenuItem sx={{ color: "black" }} value={Price.CHEAP}>{Price.CHEAP}</MenuItem>
        <MenuItem sx={{ color: "black" }} value={Price.EXPENSIVE}>{Price.EXPENSIVE}</MenuItem>
      </Select>
    </FormControl>
  )
}