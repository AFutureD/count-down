import React, { Component } from "react";
import FundClockProgress from "react-fundraising-countdown";

class Countdown extends Component {
  render() {
    var d = new Date('Decmenber 26, 2020 08:00:00');
    // const endOf2BusinessDays = bizDays(1010, d, getTimezoneName());
    console.log(d);

    return (
      <div className="center-filp-clock">
        <FundClockProgress campaignEndDate={d} />
      </div>
    );
  }
}
export default Countdown;
