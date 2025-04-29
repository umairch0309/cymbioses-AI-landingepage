import { Button } from "reactstrap";
import styled from "styled-components";

export const Box = styled.div`
  border: ${(props) => (props.$border ? props.$border : "")};
  border-radius: ${(props) => (props.$radius ? props.$radius : "")};
  background: ${(props) => (props.$bg && props.$gredient ? props.$bg : "")};
  background-color: ${(props) =>
    props.$bg && !props.$gredient ? props.$bg : ""};
`;

export const ButtonStyled = styled(Button)`
  border: ${(props) => (props.$border ? props.$border : "")};
  border-radius: ${(props) => (props.$radius ? props.$radius : "8px")};
  background-color: ${(props) => (props.$bg ? props.$bg : "")};
  outline: none;
  font-size: ${(props) => (props.$size ? props.$size : "14px")};
  font-weight: ${(props) => (props.$weight ? props.$weight : 500)};
  width: ${(props) => (props.$width ? props.$width : "115px")};
  height: ${(props) => (props.$height ? props.$height : "40px")};
`;

export const HeadingStyled = styled.h3`
  text-align: ${(props) => (props.$textAlign ? props.$textAlign : "inherit")};
  font-size: ${(props) => (props.$size ? props.$size : "16px")};
  font-weight: ${(props) => (props.$weight ? props.$weight : 600)};
  color: ${(props) => (props.$color ? props.$color : "")};
  @media (prefers-color-scheme: dark) {
    color: ${(props) => (props.$color ? props.$color : "var(--darkClr)")};
  }
  line-height: ${(props) => (props.$line ? props.$line : "normal")};
`;

export const Paragraph = styled.p`
  text-align: ${(props) => (props.$textAlign ? props.$textAlign : "inherit")};
  color: ${(props) => (props.$color ? props.$color : "")};
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : 400)};
  font-size: ${(props) => (props.$size ? props.$size : "14px")};
  cursor: ${(props) => (props.$cursor ? props.$cursor : "inherit")};
  border: ${(props) => (props.$border ? props.$border : "none")};
  line-height: ${(props) => (props.$line ? props.$line : "normal")};
`;

export const SpanStyled = styled.span`
  text-align: ${(props) => (props.$textAlign ? props.$textAlign : "left")};
  color: ${(props) => (props.$color ? props.$color : "")};
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : 400)};
  font-size: ${(props) => (props.$size ? props.$size : "12px")};
  border: ${(props) => (props.$border ? props.$border : "none")};
  background-color: ${(props) =>
    props.$bg && !props.$gredient ? props.$bg : ""};
  border-radius: ${(props) => (props.$radius ? props.$radius : "")};
`;

export const DashboardHeaderStyled = styled.div`
  @media (min-width: 992px) {
    padding-left: 245px;
  }
`;

export const HTMLContent = styled.div`
  font-size: 14px;
  color: var(--grey-clr2);
  h5 {
    font-size: 14px;
    margin-bottom: 10px;
    font-weight: 700;
  }
  li {
    margin-bottom: 10px;
  }
`;
