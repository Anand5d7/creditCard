// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  CardContainer,
  Heading,
  HrLine,
  ImageContainer,
  NumberPara,
  Para,
  Name,
  InputContainer,
  TextContainer,
  Head,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')

  const onChangeNumber = event => {
    setNumber(event.target.value)
  }

  const onChangeText = event => {
    setName(event.target.value)
  }

  return (
    <AppContainer>
      <CardContainer>
        <Heading>CREDIT CARD</Heading>
        <HrLine />
        <ImageContainer data-testid="creditCard">
          <NumberPara>{number}</NumberPara>
          <Para>CARDHOLDER NAME</Para>
          <Name>{name}</Name>
        </ImageContainer>
      </CardContainer>
      <InputContainer>
        <TextContainer>
          <Head>Payment Method</Head>
          <Input
            type="text"
            onChange={onChangeNumber}
            placeholder="Card Number"
          />
          <Input
            type="text"
            onChange={onChangeText}
            placeholder="Cardholder Name"
          />
        </TextContainer>
      </InputContainer>
    </AppContainer>
  )
}

export default CreditCard
