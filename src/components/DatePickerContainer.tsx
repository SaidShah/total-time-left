import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { calculateDays } from "../js/calculate";

interface IDatePickerContainerState {
    startDate: any;
    date:      any;
    endDate:   any;
    endDay:    any;
    result:    string;
}

class DatePickerContainer extends React.Component<{}, IDatePickerContainerState> {
    constructor(props: any){
        super(props);
        this._handleClick = this._handleClick.bind(this);
    }

    state = {
        startDate: new Date(),
        date:      null,
        endDate:   new Date(),
        endDay:    null,
        result:    "",
        };

    public render(): JSX.Element {
        return(
            <div  className = "c-datepicker">
                <div>
                    <div className = "c-datepicker__start-date">
                        <h3 className = "c-datepicker__title">Start Date: </h3>
                        <DatePicker selected={this.state.date} onChange={this.handleChange} />
                    </div>
                </div>
                <div>
                    <div className = "c-datepicker__start-date -second-child">
                        <h3 className = "c-datepicker__title">End Date: </h3>
                        <DatePicker selected={this.state.endDay} onChange={this.handleEndChange} />
                    </div>
                </div>
                <div>
                    <button className = "-submit" onClick = {this._handleClick}>Check Days</button>
                </div>
                <div className = "-result">
                    <h2>{` ${this.state.result} `}</h2>
                </div>
            </div>
        );
    }

    private _handleClick(): void {
        const startingDate = this.state.startDate.toDateString();
        const endingDate = this.state.endDate.toDateString();

        if(startingDate === endingDate) {
            this.setState({result: "Now is the time"});
            return;
        }
        this._calculateDate(startingDate, endingDate);
    }

    private _calculateDate(startingDate: string, endingDate: string): void {
        calculateDays(startingDate, endingDate);
    }

    handleChange = (date: any) => {
        this.setState({
          startDate: date,
          date
        });
      }

    handleEndChange = (date: any) => {
    this.setState({
        endDate: date,
        endDay: date
    });
    }
}

export default DatePickerContainer;
