import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > img {
    width: 100%;
    max-width: 680px;
  }
`;

export const Form = styled.section`

  background: #6159E6;
  padding: 32px;
  border-radius: 8px;
  
  > div {
    font-size: 32px;
    color: #F0F0FF;
    font-weight: bold;
  }

  width: 100%;
  max-width: 350px;
  margin-right: 30px;

  form {
    margin-top: 100px;

    h1 {
      font-size: 32px;
      margin-bottom: 32px;
      color: #F0F0FF
    }
  }

  a {
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: #F0F0FF;
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;

    transition: opacity 0.2s
    /* justify-content:  */
  }
  a > svg {
    margin-right: 8px;
  }

  a:hover {
    opacity: 0.8;
  }
  
`;
