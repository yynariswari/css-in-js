import { styled } from "@linaria/react";
import { Link } from "react-router-dom";

//  Semua variable harus statis & ada di file yang sama
const colors = {
  red: "#ff3b30",
  blue: "#0d6efd",
};

const buttonBase = `
  padding: 10px 18px;
  border-radius: 8px;
  background: #fff;
  font-size: 16px;
  cursor: pointer;
  border: 2px solid;
  transition: .2s;
`;

const Container = styled.div`
  text-align: center;
  margin-top: 80px;
`;

const Title = styled.h1`
  color: ${colors.red};
`;

const User = styled.h3`
  color: ${colors.blue};
`;

const BlueBtn = styled.button`
  ${buttonBase};
  border-color: ${colors.blue};
  color: ${colors.blue};
  margin-right: 10px;
`;

const RedBtn = styled.button`
  ${buttonBase};
  border-color: ${colors.red};
  color: ${colors.red};
`;

export default function LinariaPage() {
  return (
    <Container>
      <Title>Selamat datang di pelajaran CSS-in-JS</Title>
      <User>JayJay</User>

      <BlueBtn>Lanjut Belajar!</BlueBtn>
      <Link to="/">
        <RedBtn>Kembali</RedBtn>
      </Link>
    </Container>
  );
}
