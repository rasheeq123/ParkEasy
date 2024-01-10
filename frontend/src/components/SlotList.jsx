import React, { useEffect, useState } from 'react'
import slotData from './dummyData'

const SlotList = () => {

    const [slotList, setSlotList] = useState([])

    const [existSlots, setExistSlots] = useState([]);

    const fetchSlots = async () => {
        const res = await fetch(`${process.env.REACT_APP_PARKEASY_URL}/user/getall`)
        console.log(res.status);
        const data = await res.json(); // data fetch krne ke lie
        console.table(data);
        setSlotList(data);
        const bookedSlots = data.map(slotData => slotData.slot);
        // console.log(bookedSlots);
        setExistSlots(
            slotData.filter(slot => (!bookedSlots.includes(slot.slot)))
        )
        // console.log(slotData.filter(slot => ( !bookedSlots.includes(slot.slot)  )));
    }
    useEffect(() => {

        fetchSlots();

    }, [])

    return (
        <div>
            
            <header>
                <div className="container">

                    <h1 className='fw-bolder py-4'> <center>Slots Available</center></h1>
                </div>
            </header>
            <div className="container">
                <div className="row">
                    {existSlots.map((item, index) => (
                        <div key={index} className="col-md-2">
                            <div className="card py-2 mt-4 text-center">
                                <h5>Floor: {item.floor}</h5>
                                <h5>Slot No: {item.slot}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SlotList