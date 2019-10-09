import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import checkDays from "../js/calculate";

interface IDatePickerContainerState {
    startDate: any;
    date:      any;
    endDate:   any;
    endDay:    any;
    result:    string;
}

class DatePickerContainer extends React.Component<{}, IDatePickerContainerState> {
    constructor(props: any) {
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
        const startingDate:string = this.state.startDate.toDateString();
        const endingDate:string = this.state.endDate.toDateString();

        if(startingDate === endingDate) {
            this.setState({result: "Dates cannot be blank or the same"});
            return;
        }

        const numberOfDays:number = checkDays(startingDate, endingDate);
        if(numberOfDays < 0) {
            this.setState({result: "The starting date must be after the ending date"});
            return;
        }
        const totalDays:string = numberOfDays.toString(10);
        this.setState({result: `${totalDays} Day${numberOfDays > 1 ? "s" : "" } Left!`});
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
