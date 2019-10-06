import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface IDatePickerContainerState {
    startDate: any;
    date: any;
    endDate: any;
    endDay: any;
}

class DatePickerContainer extends React.Component<{}, IDatePickerContainerState> {
    constructor(props: any){
        super(props);
        this._handleClick = this._handleClick.bind(this);
    }

    state = {
        startDate: new Date(),
        date: null,
        endDate: new Date(),
        endDay: null
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
            </div>
        );
    }

    private _handleClick(): void {
        console.log(this.state)
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
