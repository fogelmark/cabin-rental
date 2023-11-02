import { useState } from 'react';
import { DateRange, DateRangeProps } from 'react-date-range';
import format from 'date-fns/format';
import { add, addDays, subYears } from 'date-fns';
import './Calendar.scss';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import Overlay from '../overlay/Overlay';
import { effect, signal } from '@preact/signals-react';

const Calendar = () => {
  const today = new Date();
  const LOCAL_STORAGE_KEY = 'checkInOutDates'
  const [dates, setDates] = useState({
    checkIn: 'When?',
    checkOut: 'When?'
  })

  const [range, setRange] = useState([
    {
      startDate: today,
      endDate: addDays(today, 2),
      key: 'selection',
    },
  ]);

  const handleDateChange = (item: any) => {
    setRange([item.selection])
    setDates({
      checkIn: format(item.selection.startDate, 'dd/MM/yyyy'),
      checkOut: format(item.selection.endDate, 'dd/MM/yyyy')
    })
  }

  // const checkInOutDates = {
  //   checkIn: startDateFormat,
  //   checkOut: endDateFormat
  // }

  const [open, setOpen] = useState(false);

  // effect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(checkInOutDates))
  // })

  return (
    <>
      <div className='check-in-out-container'>
        <div>Check In</div>
        <div onClick={() => setOpen((prevOpen) => !prevOpen)}>
          {dates.checkIn}
        </div>
      </div>

      <div className='check-in-out-container'>
        <div>Check Out</div>
        <div onClick={() => setOpen((prevOpen) => !prevOpen)}>
          {dates.checkOut}
        </div>
      </div>

      {open && (
        <>
          <Overlay onClick={() => setOpen(false)} />
          <div className="calendar">
            <DateRange
              onChange={handleDateChange}
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              showMonthAndYearPickers={false}
              ranges={range}
              initialFocusedRange={[0, 0]}
              months={1}
              direction="horizontal"
              minDate={today}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Calendar;
