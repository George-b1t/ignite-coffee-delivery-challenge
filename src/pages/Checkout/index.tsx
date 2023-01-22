import { useForm, FormProvider } from 'react-hook-form'
import { AddressContainer } from "./components/AddressContainer";
import { CartContainer } from "./components/CartContainer";

import { zodResolver } from '@hookform/resolvers/zod'

import * as zod from "zod";

import { Container } from "./styles";

const addressSchema = zod.object({
  cep: zod.string().min(8).max(8),
  street: zod.string().min(1).max(100),
  number: zod.string().min(1).max(5),
  complement: zod.string().min(1).max(50),
  district: zod.string().min(1).max(50),
  city: zod.string().min(1).max(50),
  state: zod.string().min(2).max(2)
})

type AddressFormData = zod.infer<typeof addressSchema>

function Checkout() {
  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      cep: "",
      city: "",
      complement: "",
      district: "",
      number: "",
      state: "",
      street: ""
    },
  })

  const { handleSubmit, reset } = addressForm;

  function handleCheckout(data: AddressFormData) {
    console.log(data)
    reset();
  }

  return (
    <Container onSubmit={handleSubmit(handleCheckout)}>
      <FormProvider {...addressForm}>
        <AddressContainer />
      </FormProvider>

      <CartContainer />

      <button type="submit">clik</button>
    </Container>
  )
}

export { Checkout }
