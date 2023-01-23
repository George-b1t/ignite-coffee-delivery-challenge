import { Container } from "./styles"

interface PayMethodButtonProps {
  active: boolean;
  title: string;
  icon: string;
}

function PayMethodButton({ active, icon, title }: PayMethodButtonProps) {
  return (
    <Container type="button" active={active}>
      <img src={icon} alt="pay method" />
      <p>{title}</p>
    </Container>
  )
}

export { PayMethodButton }
