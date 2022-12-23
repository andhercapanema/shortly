import React, { useContext, useState } from "react";
import { StyledButton } from "../../assets/styles/StyledButton";
import { StyledInput } from "../../assets/styles/StyledInput";
import AuthenticationContext from "../../common/contexts/AuthenticationContext";
import ShortlyResources from "../../common/services/ShortlyResources";
import { StyledInsertUrl } from "./style";

function InsertUrlForm({ updateUsersUrls }) {
    const [url, setUrl] = useState("");
    const { userToken } = useContext(AuthenticationContext);

    async function shortenUrl(e) {
        e.preventDefault();

        try {
            await ShortlyResources.shortenUrl({ url }, userToken);
            setUrl("");
            updateUsersUrls();
        } catch (err) {
            alert(err.response.data.message);
            console.error(err.response);
        }
    }

    return (
        <StyledInsertUrl onSubmit={shortenUrl}>
            <StyledInput
                onChange={(e) => setUrl(e.target.value)}
                value={url}
                placeholder="Links que cabem no bolso"
                required
            />
            <StyledButton>Encurtar Link</StyledButton>
        </StyledInsertUrl>
    );
}

export default InsertUrlForm;
