import React from "react";

class Title extends React.PureComponent<{}, {}> {
    public render(): JSX.Element {
        return (
            <h1 className = "-title">
                Total Days Left
            </h1>

        );
    }
}

export default Title;