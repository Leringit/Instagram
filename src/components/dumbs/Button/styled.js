import styled, { css } from "styled-components";

const primaryStyle = css`
  color: #ffffff;
  background-color: #0095f6;
`;

const secundaryStyle = css`
  color: #0095f6;
  background-color: #ffffff;
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 4px;
  height: 30px;
  padding: 0 9px;
  border: none;
  font-weight: bold;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
`;
