import React from "react";
import { RankingList, StyledHomePage } from "./style";
import trophyIcon from "../../assets/images/trophy.svg";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <StyledHomePage>
            <div>
                <img alt="Ícone de troféu" src={trophyIcon} />
                <h2>Ranking</h2>
            </div>
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
            <Link to={"/signup"}>
                <h3>Crie sua conta para usar nosso serviço!</h3>
            </Link>
        </StyledHomePage>
    );
}

export default HomePage;
