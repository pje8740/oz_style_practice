import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer className="header-container">
      <h1>OZ코딩스쿨</h1>
      <ul className="menu-container">
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  background-color: black;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    li {
      font-size: 16px;
      font-weight: 400;
      list-style: none;
    }
  }
`;
// .header-container {
//   @include flex($justify: space-between, $align: center);
//   padding: 20px 20px;
//   background-color: black;
//   ul {
//     @include flex($justify: center, $align: center, $gap: 20px);
//     li {
//       @include font($size: 16px, $weight: 400);
//       list-style: none;
//     }
//   }
// }
