import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { addDays, format } from 'date-fns';
import './Calendar.scss';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import Overlay from '../overlay/Overlay';
// import { effect, signal } from '@preact/signals-react';

const Calendar = () => {
  const today = new Date();
  const LOCAL_STORAGE_KEY = 'checkInOutDates'
  const [dates, setDates] = useState({
    checkIn: 'When?',
    checkOut: 'When?'
  })

  const [range, setRange] = useState([
    {
      startDate: addDays(today, -1),
      endDate: addDays(today, -1),
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

  const [open, setOpen] = useState(false);

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
              months={1}
              direction="horizontal"
              minDate={today}
              showDateDisplay={false}
              // disabledDates={[today]}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Calendar;
