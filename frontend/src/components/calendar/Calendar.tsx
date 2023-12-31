import { useEffect, useState } from 'react';
import { DateRange } from 'react-date-range';
import { addDays, format } from 'date-fns';
import '../../assets/styles/components/_calendar.scss'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import Overlay from '../overlay/Overlay';
import { useReservationContext } from '../../context/reservationContext';

const Calendar = () => {
  const today = new Date();
  const { LOCAL_STORAGE_KEY } = useReservationContext()

  const [dates, setDates] = useState<Dates>(() => {
    const savedDates = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedDates ? JSON.parse(savedDates) : {
      checkIn: 'When?',
      checkOut: 'When?'
    };
  });



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
      checkIn: format(item.selection.startDate, 'dd-MM-yyyy'),
      checkOut: format(item.selection.endDate, 'dd-MM-yyyy')
    })
  }

  const [open, setOpen] = useState(false);

  const checkInOutDates = {
    checkIn: dates.checkIn,
    checkOut: dates.checkOut,
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(checkInOutDates))
  }, [dates])

  return (
    <>
      <div className='check-in-out-container check-in' onClick={() => setOpen((prevOpen) => !prevOpen)}>
        <div>Check In</div>
        <div>
          <div className='current-date'>
            {dates.checkIn}
          </div>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>

      <div className='check-in-out-container check-out' onClick={() => setOpen((prevOpen) => !prevOpen)}>
        <div>Check Out</div>
        <div>
          <div className='current-date'>
            {dates.checkOut}
          </div>
          <i className="fa-solid fa-chevron-down"></i>
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
            />
          </div>
        </>
      )}
    </>
  );
};

export default Calendar;
