import React, { useEffect, useState } from "react";
import trophyIcon from "../../assets/images/trophy.svg";
import ShortlyResources from "../../common/services/ShortlyResources";
import { RankingHeader, RankingList } from "./style";

function Ranking() {
    const [topUrls, setTopUrls] = useState();

    async function updateRanking() {
        try {
            const res = await ShortlyResources.getRanking();
            setTopUrls(res.data);
        } catch (err) {
            alert(err.response.data.message);
            console.error(err.response);
        }
    }

    useEffect(() => {
        updateRanking();
    }, []);

    return (
        <>
            <RankingHeader>
                <img alt="Ícone de troféu" src={trophyIcon} />
                <h2>Ranking</h2>
            </RankingHeader>
            <RankingList>
                {topUrls &&
                    topUrls.map(({ id, name, linksCount, visitCount }, idx) => (
                        <li key={id}>
                            {idx + 1}. {name} - {linksCount} link
                            {linksCount > 1 ? "s" : ""} - {visitCount}{" "}
                            visualizaç{visitCount > 1 ? "ões" : "ão"}
                        </li>
                    ))}
            </RankingList>
        </>
    );
}

export default Ranking;
