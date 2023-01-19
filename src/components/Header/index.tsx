import { Cart, Container, Content, LocaleInformation, PurchaseInformation } from "./styles"

import logoSvg from "../../assets/header/Logo.svg"
import locationSvg from "../../assets/header/Location.svg"
import cartSvg from "../../assets/header/Cart.svg"

function Header() {
  return (
    <Container>
      <Content>
        <img src={logoSvg} alt="logo" />

        <PurchaseInformation>
          <LocaleInformation>
            <img src={locationSvg} alt="location" />

            <p>Porto Alegre, RS</p>
          </LocaleInformation>

          <Cart>
            <img src={cartSvg} alt="cart" />
          </Cart>
        </PurchaseInformation>
      </Content>
    </Container>
  )
}

export { Header }
