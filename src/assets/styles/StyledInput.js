import styled from "styled-components";
import COLORS from "../../common/constants/colors";

export const StyledInput = styled.input`
    height: 60px;
    width: 100%;
    min-width: 350px;
    max-width: 769px;
    margin-bottom: 25px;
    padding-left: 22px;

    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px;

    &::placeholder {
        color: ${COLORS.grey};
    }
`;
