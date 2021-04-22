import React from 'react';
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
//   border: 1px solid green;
`;

const Container = styled.div`
  padding: 4em;
  background: papayawhip;
`;





const Header3 = () => {
    return (
        <Container>
            <Title> This is Styled Title </Title>
        </Container>


    );
};

export default Header3;