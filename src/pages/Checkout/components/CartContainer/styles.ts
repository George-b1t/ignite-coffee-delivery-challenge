import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: fit-content;

  padding: 40px;

  background: #F3F2F2;
  border-radius: 6px 44px;
`

const CartGeneralInformation = styled.div`
  display: flex; 
  flex-direction: column;

  gap: 0.75rem;
`

const ValueInformation = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-weight: 400;
    font-size: 16px;

    color: #574F4D;
  }

  p:first-child {
    font-size: 14px;
  }
`

const TotalValueInformation = styled(ValueInformation)`
  p {
    font-weight: 700;
    font-size: 20px;
  }

  p:first-child {
    font-size: 20px;
  }
`

const ConfirmButton = styled.button`
  width: 100%;
  height: 46px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #DBAC2C;
  border-radius: 6px;

  border: none;

  margin-top: 1.5rem;

  transition: .3s ease;

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  p {
    font-weight: 700;
    font-size: 14px;

    color: #FFFFFF;
  }
`

export {
  Container,
  ValueInformation,
  TotalValueInformation,
  CartGeneralInformation,
  ConfirmButton
}
