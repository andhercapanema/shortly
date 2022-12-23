import styled from "styled-components";

export const RankingHeader = styled.header`
    display: flex;
    align-items: center;

    img {
        margin-right: 10px;
    }

    h2 {
        font-weight: 700;
        font-size: 36px;
        line-height: 45px;
    }
`;

export const RankingList = styled.ul`
    width: 100%;
    max-width: 900px;
    margin-top: 57px;
    display: flex;
    flex-direction: column;
    padding: 30px 40px;

    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 24px 24px 0px 0px;

    font-weight: 700;
    font-size: 36px;
    line-height: 45px;

    li {
        margin-bottom: 13px;

        font-weight: 500;
        font-size: 22px;
        line-height: 28px;
    }
`;
