import React, { useEffect, useState } from 'react';

const Clock = () => {

    const [dateState, setDateState] = useState()
        const [clockState, setClockState] = useState()

    const day = new Date()
        const numberDay = day.getDay()
            const dayWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday ', 'Friday', 'Saturday']
                const dayDate = dayWeek[numberDay]

    useEffect(()=>{

        const date = new Date()
        setDateState(date.toLocaleDateString())

        setInterval(()=>{
            const time = new Date()
            setClockState(time.toLocaleTimeString())
        }, 1000)
            
    }, []);

    return (
        <div>
            <h2 className='day-date'>{dayDate} <br/>{dateState}</h2>
         <h1 className='clock'>{clockState}</h1>
        
        </div>
    );
};

export default Clock;