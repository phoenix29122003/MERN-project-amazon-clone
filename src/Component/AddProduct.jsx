import React, { useState } from 'react'
import styled from "styled-components";
import axios from "../axios";
export default function AddProduct() {

    const [title, setTitle] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(0);

    const addProduct = (e) => {
        e.preventDefault();
    
        axios
          .post("/products/add", { title, imageURL, price, rating })
          .then(() => {
            setTitle("");
            setImageURL("");
            setPrice(0);
            setRating(0);
          })
          .catch((error) => alert(error.message));
      };
  return (
    <Container>
      <Logo>
        <img src="./amazon_logo.png" alt="logo" />
      </Logo>
      <Form>
        <h3>Add Product</h3>
        <Input>
          <p>Title</p>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </Input>
        <Input>
          <p>ImageURL</p>
          <input
            type="text"
            onChange={(e) => setImageURL(e.target.value)}
            value={imageURL}
          />
        </Input>
        <Input>
          <p>Price</p>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </Input>
        <Input>
          <p>Rating</p>
          <input
            type="number"
            onChange={(e) => setRating(e.target.value)}
            value={rating}
          />
        </Input>

        <Button onClick={addProduct}>Add Product</Button>
      </Form>
    </Container>
  )
}

const Container=styled.div`
  width: 35%;
  min-width: 600px;
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
height: fit-content;
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
  margin-top:40px
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
const Button=styled.button`
width: 70%;
  height: 35px;
  background-color: #f3b414;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;
  cursor:pointer
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

