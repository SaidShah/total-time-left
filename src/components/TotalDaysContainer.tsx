import React from "react";
import Title from "./Title";
import Description from "./Description";
import DatePickerContainer from "./DatePickerContainer";

export function add(x: number, y: number): number {
    return x + y;
}

export function total(shipping: number, subtotal: number ): string {
    return `total: $${add(shipping, subtotal)}`;
}

class TotalDaysContainer extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <div className = "c-container">
                <Title/>
                <Description/>
                <DatePickerContainer/>
            </div>
        );
    }
}

export default TotalDaysContainer;