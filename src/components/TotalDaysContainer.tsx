import React from "react";

export const Add = (x: number, y: number) => {
    return x + y;
}

export const Subtract = (x: number, y: number ) => {
    return x - y;
}

class TotalDaysContainer extends React.Component<{}, {}>{
    public render(): JSX.Element {
        return (
            <div>
                <h1 className = "title-text">Hello World</h1>
            </div>
        );
    }
}

export default TotalDaysContainer;