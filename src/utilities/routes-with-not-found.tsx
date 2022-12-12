import { Route, Routes } from "react-router";

interface Props {
  children: React.ReactNode
}

const RouteWithNotFound = ({ children }: Props) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<>NOT FOUND</>} />
    </Routes>
  )
}

export default RouteWithNotFound;