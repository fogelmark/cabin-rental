import { useState } from 'react';
import { DateRange } from 'react-date-range';
import format from 'date-fns/format';
import { addDays } from 'date-fns';
import './Calendar.scss';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import Overlay from '../overlay/Overlay';

const Calendar = () => {
  const today = new Date();
  const [range, setRange] = useState([
    {
      startDate: today,
      endDate: addDays(today, 3),
      key: 'selection',
    },
  ]);

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='check-in-out-container'>
        <div>Check In</div>
        <div onClick={() => setOpen((prevOpen) => !prevOpen)}>
          {`${format(range[0].startDate, 'dd/MM/yyyy')}`}
        </div>
      </div>

      <div className='check-in-out-container'>
        <div>Check Out</div>
        <div onClick={() => setOpen((prevOpen) => !prevOpen)}>
          {`${format(range[0].endDate, 'dd/MM/yyyy')}`}
        </div>
      </div>

      {open && (
        <>
          <Overlay onClick={() => setOpen(false)} />
          <div className="calendar">
            <DateRange
              onChange={(item) =>
                setRange([item.selection as { startDate: Date; endDate: Date; key: string }])
              }
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              showMonthAndYearPickers={false}
              ranges={range}
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
