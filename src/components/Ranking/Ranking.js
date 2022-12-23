import React from "react";
import trophyIcon from "../../assets/images/trophy.svg";
import { RankingHeader, RankingList } from "./style";

function Ranking() {
    return (
        <>
            <RankingHeader>
                <img alt="Ícone de troféu" src={trophyIcon} />
                <h2>Ranking</h2>
            </RankingHeader>
            <RankingList>
                <li>1. Fulaninha - 32 links - 1.703.584 visualizações</li>
                <li>2. Fulaninha - 32 links - 1.703.584 visualizações</li>
                <li>3. Fulaninha - 32 links - 1.703.584 visualizações</li>
                <li>4. Fulaninha - 32 links - 1.703.584 visualizações</li>
                <li>5. Fulaninha - 32 links - 1.703.584 visualizações</li>
                <li>6. Fulaninha - 32 links - 1.703.584 visualizações</li>
                <li>7. Fulaninha - 32 links - 1.703.584 visualizações</li>
                <li>8. Fulaninha - 32 links - 1.703.584 visualizações</li>
                <li>9. Fulaninha - 32 links - 1.703.584 visualizações</li>
                <li>10. Fulaninha - 32 links - 1.703.584 visualizações</li>
            </RankingList>
        </>
    );
}

export default Ranking;
