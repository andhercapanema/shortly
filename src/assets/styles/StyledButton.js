import styled from "styled-components";
import COLORS from "../../common/constants/colors";

export const StyledButton = styled.button`
    margin-top: 36px;
    margin-bottom: 60px;
    height: 60px;
    width: 182px;
    background: ${COLORS.accent1};
    border-radius: 12px;
    border: none;

    color: ${COLORS.base};
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
`;
