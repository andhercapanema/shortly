import styled from "styled-components";

export const StyledHomePage = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 74px;

    font-weight: 700;
    font-size: 36px;
    line-height: 45px;

    div {
        display: flex;
        align-items: center;

        img {
            margin-right: 10px;
        }
    }

    h3 {
        margin-top: 82px;
        margin-bottom: 60px;
        font-weight: 700;
        font-size: 36px;
        line-height: 45px;
        cursor: pointer;
        color: #000;
    }
`;

export const RankingList = styled.ul`
    margin-top: 57px;
    display: flex;
    flex-direction: column;
    padding: 30px 40px;

    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 24px 24px 0px 0px;

    font-weight: 500;
    font-size: 22px;
    line-height: 28px;

    li {
        margin-bottom: 13px;
    }
`;
