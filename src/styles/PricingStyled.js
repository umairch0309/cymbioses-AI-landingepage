import styled from "styled-components";
import { Button } from "reactstrap";

export const PricingPageContainer = styled.div`
  padding: 60px 0;
  background-color: var(--light-slow);
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

export const PricingTableContainer = styled.div`
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--light-slow);
`;

export const PricingColumn = styled.div`
  padding: 40px 0px 0px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #f1f1f5;

  &:last-child {
    border-right: none;
  }

  @media (max-width: 767px) {
    border-right: none;
    border-bottom: 1px solid #f1f1f5;

    &:last-child {
      border-bottom: none;
    }
  }
`;

export const PricingHeader = styled.div`
  min-height: 214px;
  padding-inline: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
`;

export const PricingPrice = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: #1a1a1a;
  margin-right: 5px;
`;

export const StrikethroughPrice = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #6c757d;
  text-decoration: line-through;
  margin-bottom: 5px;
  width: 100%;
`;

export const PricingUnit = styled.div`
  font-size: 18px;
  color: #6c757d;
  font-weight: 400;
`;

export const PricingButton = styled(Button)`
  width: 100%;
  padding: 12px;
  margin-block: 30px;
  font-weight: 500;
  border-radius: 8px;

  &.btn-primary {
    background-color: #9747ff;
    border-color: #9747ff;

    &:hover,
    &:focus {
      background-color: #8a3df0;
      border-color: #8a3df0;
    }
  }

  &:disabled {
    background-color: #f8f9fa;
    color: #6c757d;
    border-color: #f8f9fa;
    opacity: 1;
  }
`;

export const PricingTier = styled.div`
  font-size: 14px;
  color: var(--dark-purple-2);
  padding: 20px;
  text-align: center;
  min-height: 89.8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 0px;
`;
