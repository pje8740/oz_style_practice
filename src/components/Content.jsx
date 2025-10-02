import styled from "styled-components";

export default function Content({ content }) {
  return (
    <Div className="content-container">
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </Div>
  );
}

const tagColor = "#d7fa00";
const gray = "rgb(160, 160, 160)";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;

  img {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 3px;
    min-height: 225px;
  }

  span {
    font-size: 12px;
    font-weight: 400;
    color: ${tagColor};
    border: 1px solid ${tagColor};
    padding: 4px 5px;
    border-radius: 3px;
  }

  div {
    font-size: 18px;
    font-weight: 600;
  }

  p {
    font-size: 12px;
    font-weight: 400;
    color: ${gray};
  }
`;

// $tag-color: #d7fa00;
// $gray: rgb(160, 160, 160);

// .content-container {
//   @include flex($direction: column, $align: flex-start, $gap: 5px);
//   img {
//     width: 300px;
//     border-radius: 10px;
//     margin-bottom: 3px;
//     min-height: 225px;
//   }
//   span {
//     @include font($size: 12px);
//     color: $tag-color;
//     border: 1px solid $tag-color;
//     padding: 4px 5px;
//     border-radius: 3px;
//   }
//   div {
//     @include font($size: 18px, $weight: 600);
//   }
//   p {
//     @include font($size: 12px);
//     color: $gray;
//   }
// }
