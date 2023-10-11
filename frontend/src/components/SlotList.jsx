import React, { useState } from 'react'
import slotData from './dummyData'

const SlotList = () => {
    const [slotArray, setslotArray] = useState(slotData);
    return (
        <div>
            <header>
                <div className="container">

                    <h1> Slots Available</h1>
                </div>
            </header>
            <div className="container">
                <div className="row">
                    {slotArray.map((item) => (
                        <div className="col-md-2">
                            <div className="card py-2 mt-4">
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