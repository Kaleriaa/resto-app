import React from "react";
import RestoServiceContext from "../service-context";

const WithRestoService = (Wrapper) => {
    return (props) => {
        return (
            <RestoServiceContext.Consumer>
                {
                    (RestoService) => <Wrapper {...props} RestoService={RestoService} />
                }
            </RestoServiceContext.Consumer>
        )
    }
}

export default WithRestoService