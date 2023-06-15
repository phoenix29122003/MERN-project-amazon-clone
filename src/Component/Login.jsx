import React from 'react'
import styled from 'styled-components'

export default function Login() {
  return (
    <Container>
      <Logo>
        <img src="./amazon_logo.png" alt="logo" />
      </Logo>
      <Form>
        <h3>Sign-In</h3>
        <Input>
          <p>Email</p>
          <input type="email" placeholder='example@example.com'/>
        </Input>
        <Input>
          <p>Password</p>
          <input type="password" placeholder='********'/>
        </Input>
        <LoginButton>LogIn</LoginButton>
        <InfoText>By continuing, you agree to Amazon's <span>Conditions of Use </span>
          and <span> Privacy Notice</span></InfoText>
      </Form>
      <SignUpButton>
        Create Account in Amazon
      </SignUpButton>
    </Container>
  )
}

const Container=styled.div`
  width: 35%;
  min-width: 450px;
  height: fit-content;
  padding: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Logo=styled.div`
width: 120px;
  margin-bottom: 20px;
  img {
    width: 100%;
  }
`

const Form=styled.form`
border: 1px solid lightgray;
width: 55%;
height: 500px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 15px;

h3 {
  font-size: 28px;
  font-weight: 400;
  line-height: 33px;
  align-self: flex-start;

  margin-bottom: 10px;
}
`

const Input=styled.div`
width: 100%;
  padding: 10px;

  p {
    font-size: 14px;
    font-weight: 600;
  }

  input {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 5px;

    &:hover {
      border: 1px solid orange;
    }
  }
`
const LoginButton=styled.button`
width: 70%;
  height: 35px;
  background-color: #f3b414;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;
`

const InfoText=styled.p`
font-size: 12px;
  width: 100%;
  word-wrap: normal;
  word-break: normal;
  margin-top: 20px;

  span {
    color: #426bc0;
  }
`

const SignUpButton = styled.button`
  width: 55%;
  height: 35px;
  font-size: 12px;
  margin-top: 20px;

  &:hover {
    background-color: #dfdfdf;
    border: 1px solid gray;
  }
`;

