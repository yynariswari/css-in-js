import styled from "@emotion/styled";
import { colors, buttonBase } from "../styles/emotionStyles";
import { Link } from "react-router-dom";

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

export default function EmotionPage() {
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
