import styled, { css } from "styled-components";

import { type IButtonStylesType } from "./Button.types";

export const Container = styled.button<IButtonStylesType>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ center }) => (center ? "center" : "space-between")};
  padding: 8px 16px;
  gap: 10px;
  background: ${({ theme, color }) =>
    theme.Components.button[color ?? "primary"]};
  border: 1px solid
    ${({ theme, color }) => theme.Components.button[color ?? "primary"]};
  border-radius: 6px;
  height: fit-content;
  transition: all 100ms ease-in-out;

  &:hover {
    opacity: 90%;
  }

  svg,
  path {
    width: 20px;
    height: 20px;
  }

  ${({ iconStroke }) =>
    iconStroke
      ? css`
          svg {
            * {
              stroke: #fff;
            }
          }
        `
      : css`
          svg {
            * {
              fill: #fff;
            }
          }
        `}

  ${({ color }) =>
    color === "transparent" &&
    css`
      svg {
        * {
          fill: ${({ theme }) => theme.Components.button.primary};
        }
      }

      span {
        color: ${({ theme }) => theme.Components.button.primary};
      }
    `}

  :disabled {
    filter: grayscale(1);
    cursor: not-allowed;
  }
`;

export const ButtonLabel = styled.span`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #ffffff;
  word-wrap: normal;
  word-break: keep-all;
  white-space: nowrap;
`;
