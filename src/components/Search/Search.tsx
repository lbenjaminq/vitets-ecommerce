import { FormControl, OutlinedInput, Stack } from "@mui/material"
import { useState } from "react"
import { getProductSearchAction } from "../../redux/actions/products"
import { useAppDispatch } from "../../redux/hooks"
import { CgSearchLoading } from 'react-icons/cg'


export const Search = () => {
  const dispatch = useAppDispatch()
  const [productInput, setInputProduct] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputProduct(e.target.value)
    console.log(e.target.value)
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    dispatch(getProductSearchAction(productInput))
    setInputProduct('')
  }

  return (
    <FormControl sx={{ width: '25ch', display: "flex" }}>
      <Stack direction="row" alignItems="center">
        <OutlinedInput placeholder="Search.." onChange={handleChange} value={productInput} />
        <CgSearchLoading onClick={handleClick} color="black"
          style={{ fontSize: "2rem" }} />
      </Stack>
    </FormControl>
  )
}