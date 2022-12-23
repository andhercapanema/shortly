import React, { useContext } from "react";
import { StyledHomePage, UrlsList } from "./style";
import { Link } from "react-router-dom";
import Ranking from "../../components/Ranking/Ranking";
import UrlCard from "./UrlCard";
import InsertUrlForm from "./InsertUrlForm";
import UserUrlsContext from "../../common/contexts/UserUrlsContext";

function HomePage({ updateUsersUrls }) {
    const { userUrls } = useContext(UserUrlsContext);
    const isLogged = userUrls !== null;

    return (
        <StyledHomePage>
            {isLogged ? (
                <>
                    <InsertUrlForm updateUsersUrls={updateUsersUrls} />
                    {userUrls && (
                        <UrlsList>
                            {userUrls.shortenedUrls.map((urlData) => (
                                <UrlCard
                                    key={urlData.id}
                                    urlData={urlData}
                                    updateUsersUrls={updateUsersUrls}
                                />
                            ))}
                        </UrlsList>
                    )}
                </>
            ) : (
                <>
                    <Ranking />
                    <Link to={"/signup"}>
                        <h3>Crie sua conta para usar nosso serviço!</h3>
                    </Link>
                </>
            )}
        </StyledHomePage>
    );
}

export default HomePage;
