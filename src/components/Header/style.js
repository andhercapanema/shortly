import styled from "styled-components";
import COLORS from "../../common/constants/colors";

const { accent1, grey } = COLORS;

export const StyledHeader = styled.header`
    margin-top: 60px;

    header {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 20px;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;

        font-weight: 200;
        font-size: 64px;
        line-height: 80px;

        img {
            height: 102px;
            margin-left: 8px;
        }
    }
`;

export const HeaderButton = styled.button`
    margin-left: 22px;
    background: none;
    border: none;

    font-size: 14px;
    line-height: 18px;
    color: ${({ accent }) => {
        console.log(accent);
        return accent ? accent1 : grey;
    }};
`;
