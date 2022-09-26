import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar,faDollarSign,faClipboardList,faComments } from '@fortawesome/free-solid-svg-icons'

function Card({card}) {
 
  return (
    <div className="col-xl-3 col-md-6 mb-4">
    <div className={`card border-left-${card.theme} shadow h-100 py-2`}>
        <div className="card-body">
            <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                    <div className={`text-xs font-weight-bold text-${card.theme} text-uppercase mb-1`}>
                        {card.title}</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">{card.price}</div>
                </div>
                <div className="col-auto">
                
                    {card.icon}
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Card;