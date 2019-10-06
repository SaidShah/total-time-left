import React from "react";

export default class Description extends React.PureComponent<{}, {}> {
    public render(): JSX.Element {
        return(
            <p className = "-description">Find the number of days between 2 dates</p>
        );
    }
}

export { Description };