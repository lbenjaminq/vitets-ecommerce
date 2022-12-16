import { createContext, useContext, useState } from 'react';

const initialValue = {
  firstName: '',
  lastName: '',
  address1: '',
  address2: '',
  country: '',
  city: '',
  state: '',
  postalCode: ''
}

interface Address {
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  country: string;
  city: string;
  state: string;
  postalCode: string
}

interface PropsContext {
  address: Address
  setAddress: (addres: Address) => void
}

export const AddresContext = createContext<PropsContext | null>(null);

interface Props {
  children: React.ReactNode
}

export const AddressProvider = ({ children }: Props) => {

  const [address, setAddress] = useState(initialValue);

  return <AddresContext.Provider value={{ address, setAddress }}>
    {children}
  </AddresContext.Provider>;
};

export const useAddresContext = () => {
  const context = useContext(AddresContext);
  if (context === undefined) {
    throw new Error('AddresContext must be used within a AddresProvider');
  }
  return context;
};