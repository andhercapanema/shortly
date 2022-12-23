import styled from "styled-components";
import COLORS from "../../common/constants/colors";

const { accent1, grey } = COLORS;

export const StyledNavBar = styled.nav`
    display: flex;
    margin-bottom: 20px;
    justify-content: ${({ isLogged }) =>
        isLogged ? "space-between" : "flex-end"};
`;

export const NavButton = styled.button`
    margin-left: 22px;
    background: none;
    border: none;

    font-size: 14px;
    line-height: 18px;
    color: ${({ accent }) => (accent ? accent1 : grey)};
    text-decoration: ${({ underline }) => (underline ? "underline" : "none")};
`;
