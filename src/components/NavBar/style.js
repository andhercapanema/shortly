import styled from "styled-components";
import COLORS from "../../common/constants/colors";

const { accent1, grey } = COLORS;

export const StyledNavBar = styled.nav`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
`;

export const NavButton = styled.button`
    margin-left: 22px;
    background: none;
    border: none;

    font-size: 14px;
    line-height: 18px;
    color: ${({ accent }) => (accent ? accent1 : grey)};
`;
