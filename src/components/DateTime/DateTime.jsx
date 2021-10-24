import React,{useState} from 'react'
import DatePicker from "react-datepicker";
import moment from 'moment'
const DateTime = () => {
    const [startDate,setStartDate] = useState({
        closeDate: "",
    });
    // const handleDateChange =(date)=>{
    //     setStartDate(date)
    //     console.log(date)
    // }
    // add these two functions to your component
    const calculateMinTime = date => {
        let isToday = moment(date).isSame(moment(), 'day');
        if (isToday) {
            let nowAddOneHour = moment(new Date()).add({hours: 1}).toDate();
            return nowAddOneHour;
        }
        return moment().startOf('day').toDate(); // set to 12:00 am today
    }
    const minTime =  calculateMinTime(new Date())
    const handleDateChange = date => {
        setStartDate({
            closeDate: date,
            minTime: calculateMinTime(date),
        });
    }
    return (
        <div>
            <h1>Date Time Management</h1>
            <DatePicker
                onChange={handleDateChange}
                selected={startDate.closeDate}
                minDate={new Date()}
                minTime={startDate.minTime}
                // maxTime={moment().endOf('day').toDate()} // set to 23:59 pm today
                timeIntervals={60}
                showTimeSelect


                // selected={startDate}
                // excludeOutOfBoundsTimes
                // onChange={(date)=>{handleDateChange(date)}}
                // minDate={new Date()}
                // placeholderText="Click to select a date"
                // showTimeSelect
                // dateFormat="Pp"
            />
        </div>
    )
}

export default DateTime
