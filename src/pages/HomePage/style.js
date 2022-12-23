import styled from "styled-components";
import COLORS from "../../common/constants/colors";

export const StyledHomePage = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 74px;
    margin-bottom: 60px;

    h3 {
        margin-top: 82px;
        font-weight: 700;
        font-size: 36px;
        line-height: 45px;
        cursor: pointer;
        color: #000;
        text-align: center;
    }
`;

export const StyledInsertUrl = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 59px;

    input {
        margin-right: 69px;
        margin-bottom: 0;
        min-width: 100px;
    }

    button {
        margin: 0;
    }
`;

export const UrlsList = styled.ul`
    margin-bottom: 18px;
    width: 100%;
`;

export const StyledUrlCard = styled.li`
    margin-bottom: 42px;
    display: flex;
    justify-content: space-between;

    border: 1px solid rgba(120, 177, 89, 0.25);
    border-radius: 12px;
`;

export const UrlInfos = styled.div`
    display: grid;
    grid-template-columns: 53% 23% 24%;
    align-items: center;
    min-height: 60px;
    width: 100%;
    padding: 0 20px;
    cursor: pointer;

    background: ${COLORS.accent2};
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px 0px 0px 12px;

    p {
        font-size: 14px;
        line-height: 18px;
        color: ${COLORS.base};
    }
`;

export const DeleteUrlButton = styled.button`
    background: ${COLORS.base};
    border: none;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 0px 12px 12px 0px;
    width: 130px;

    ion-icon {
        font-size: 26px;
        color: ${COLORS.red};
    }
`;
