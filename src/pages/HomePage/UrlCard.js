import React, { useContext } from "react";
import AuthenticationContext from "../../common/contexts/AuthenticationContext";
import ShortlyResources from "../../common/services/ShortlyResources";
import { DeleteUrlButton, StyledUrlCard, UrlInfos } from "./style";

function UrlCard({
    urlData: { id, shortUrl, url, visitCount },
    updateUsersUrls,
}) {
    const { userToken } = useContext(AuthenticationContext);

    async function openUrl() {
        try {
            const res = await ShortlyResources.openUrl(shortUrl);
            const urlToOpen = res.data.slice(res.data.indexOf("http"));
            window.open(urlToOpen, "_blank").focus();
            await updateUsersUrls();
        } catch (err) {
            alert(err.response.data.message);
            console.error(err.response);
        }
    }

    async function deleteUrl() {
        console.log("executou o delete");
        try {
            await ShortlyResources.deleteUrl(id, userToken);
            await updateUsersUrls();
        } catch (err) {
            alert(err.response.data.message);
            console.error(err.response);
        }
    }

    return (
        <StyledUrlCard>
            <UrlInfos onClick={openUrl}>
                <p>{url}</p>
                <p>{shortUrl}</p>
                <p>Quantidade de visitantes: {visitCount}</p>
            </UrlInfos>
            <DeleteUrlButton onClick={deleteUrl}>
                <ion-icon name="trash"></ion-icon>
            </DeleteUrlButton>
        </StyledUrlCard>
    );
}

export default UrlCard;
