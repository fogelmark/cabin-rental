import { useState } from 'react';
import { DateRange } from 'react-date-range';
import format from 'date-fns/format';
import { addDays } from 'date-fns';
import './Calendar.scss';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import Overlay from '../overlay/Overlay';

const Calendar = () => {
  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);

  // open close
  const [open, setOpen] = useState(false);

  return (
    <div className="calendarWrap">
      <input
        value={`${format(range[0].startDate, 'dd/MM/yyyy')} to ${format(
          range[0].endDate,
          'dd/MM/yyyy'
        )}`}
        readOnly
        className="inputBox"
        onClick={() => setOpen((prevOpen) => !prevOpen)}
      />

      {open && (
        <>
          <Overlay onClick={() => setOpen(false)} />
          <div className="calendarElement">
            <DateRange
              onChange={(item) =>
                setRange([item.selection as { startDate: Date; endDate: Date; key: string }])
              }
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              ranges={range}
              months={1}
              direction="horizontal"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Calendar;
