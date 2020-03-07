import React, { Component } from "react";
import PickyDateTime from "react-picky-date-time";


class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPickyDateTime: false,
            date: "30",
            month: "01",
            year: "2000",
            hour: "03",
            minute: "10",
            second: "40",
            meridiem: "PM"
        };
    }

    onDatePicked(res) {
        let { date, month, year } = res;
        this.setState({ year: year, month: month, date: date });
    }

    onResetDate(res) {
        let { date, month, year } = res;
        this.setState({ year: year, month: month, date: date });
    }

    onResetDefaultDate(res) {
        let { date, month, year } = res;
        this.setState({ year: year, month: month, date: date });
    }

    onSecondChange(res) {
        this.setState({ second: res.value });
    }

    onMinuteChange(res) {
        this.setState({ minute: res.value });
    }

    onHourChange(res) {
        this.setState({ hour: res.value });
    }

    onMeridiemChange(res) {
        this.setState({ meridiem: res });
    }

    onResetTime(res) {
        this.setState({
            second: res.clockHandSecond.value,
            minute: res.clockHandMinute.value,
            hour: res.clockHandHour.value
        });
    }

    onResetDefaultTime(res) {
        this.setState({
            second: res.clockHandSecond.value,
            minute: res.clockHandMinute.value,
            hour: res.clockHandHour.value
        });
    }

    onClearTime(res) {
        this.setState({
            second: res.clockHandSecond.value,
            minute: res.clockHandMinute.value,
            hour: res.clockHandHour.value
        });
    }

    render() {
        let {
            showPickyDateTime,
            date,
            month,
            year,
            hour,
            minute,
            second,
            meridiem
        } = this.state;
    return (
 <div>
            <div>
                <input
                    style={{ padding: "10px", width: "140px" }}
                    value={`${month}/${date}/${year} ${hour}:${minute}:${second} ${meridiem}`}
                    onChange={() => { }}
                    onClick={() => this.setState({ showPickyDateTime: true })}
                />
                <div style={{ marginTop: "10px" }}>
                    <PickyDateTime
                        size="m"
                        mode={0}
                        locale="en-us"
                        show={true}
                        onClose={() => this.onClose()}
                        onYearPicked={res => this.onYearPicked(res)}
                        onMonthPicked={res => this.onMonthPicked(res)}
                        onDatePicked={res => this.onDatePicked(res)}
                        onResetDate={res => this.onResetDate(res)}
                        onResetDefaultDate={res => this.onResetDefaultDate(res)}
                        onSecondChange={res => this.onSecondChange(res)}
                        onMinuteChange={res => this.onMinuteChange(res)}
                        onHourChange={res => this.onHourChange(res)}
                        onMeridiemChange={res => this.onMeridiemChange(res)}
                        onResetTime={res => this.onResetTime(res)}
                        onResetDefaultTime={res => this.onResetDefaultTime(res)}
                        onClearTime={res => this.onClearTime(res)}
                    />
                </div>
            </div>
        </div>
    )
  }
}

export default Calendar;
