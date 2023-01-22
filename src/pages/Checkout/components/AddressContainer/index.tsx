import { useFormContext } from "react-hook-form"
import { ErrorMessage } from '@hookform/error-message';

import { Container, Content, Header, InputError } from "./styles"

import locationSvg from "/src/assets/checkout/Location.svg"

function AddressContainer() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <Container>
      <Header>
        <div>
          <img src={locationSvg} alt="location" />
        </div>

        <div>
          <p>Endereço de Entrega</p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </Header>

      <Content>
        <div style={{ width: "35.71%" }}>
          <input
            type="text"
            placeholder="CEP"
            {...register("cep")}
          />
          <ErrorMessage
            errors={errors}
            name="cep"
            render={({ message }) => <InputError>{message}</InputError>}
          />
        </div>
        <div style={{ width: "100%" }}>
          <input
            type="text"
            placeholder="Rua"
            {...register("street")}
          />
          <ErrorMessage
            errors={errors}
            name="street"
            render={({ message }) => <InputError>{message}</InputError>}
          />
        </div>
        <div style={{ width: "35.71%" }}>
          <input
            type="text"
            placeholder="Número"
            {...register("number")}
          />
          <ErrorMessage
            errors={errors}
            name="number"
            render={({ message }) => <InputError>{message}</InputError>}
          />
        </div>
        <div style={{ width: "62.8%" }}>
          <input
            type="text"
            placeholder="Complemento"
            {...register("complement")}
          />
          <ErrorMessage
            errors={errors}
            name="complement"
            render={({ message }) => <InputError>{message}</InputError>}
          />
        </div>
        <div style={{ width: "35.71%" }}>
          <input
            type="text"
            placeholder="Bairro"
            {...register("district")}
          />
          <ErrorMessage
            errors={errors}
            name="district"
            render={({ message }) => <InputError>{message}</InputError>}
          />
        </div>
        <div style={{ width: "49.29%" }}>
          <input
            type="text"
            placeholder="Cidade"
            {...register("city")}
          />
          <ErrorMessage
            errors={errors}
            name="city"
            render={({ message }) => <InputError>{message}</InputError>}
          />
        </div>
        <div style={{ width: "12%" }}>
          <input
            type="text"
            placeholder="UF"
            maxLength={2}
            {...register("state")}
          />
          <ErrorMessage
            errors={errors}
            name="state"
            render={({ message }) => <InputError>{message}</InputError>}
          />
        </div>
      </Content>
    </Container>
  )
}

export { AddressContainer }
