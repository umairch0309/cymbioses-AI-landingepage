import styled from "styled-components";

export const TestimonialSliderWrapper = styled.div`
  background: var(--dark-purple-2);
  border-radius: 40px;
  padding-bottom: 100px;
  .slick-dots {
    bottom: -70px;
    background: rgba(0, 0, 0, 0.1);
    box-shadow: inset 0px 8px 10px rgba(0, 0, 0, 0.04);
    border-radius: 72px;
    width: fit-content;
    left: 50%;
    transform: translatex(-50%);
    li {
      margin-inline: 2px !important;
      &.slick-active button:before {
        color: var(--purple);
      }
    }
  }
  @media (max-width: 767px) {
    h3 {
      font-size: 22px;
    }
    p {
      font-size: 14px;
    }
    .slick-dots {
      width: 100%;
    }
  }
`;
