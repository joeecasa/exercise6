import React from 'react'
import "./component.css"

const ContactComponent = ({ contact , status, remove }) => {

    function conctactStatus() {
        if (contact.status) {
            return (
                <button 
                onClick={ () => status(contact)}
                className='btn btn-success' > Connected </button>
            )
        } else {
            return (
                <button 
                onClick={ () => status(contact)}
                className='btn btn-danger' > Disconnected </button>
            )
        }

    }

  return (
    <tr className="fw-normal">
    <th>
        <span className='ms-2'>
            {contact.name}
        </span>
    </th>
    <td>
        <span className='aling-middle'>
            {contact.phone}
        </span>
    </td>
   
    <td className='aling-middle'>
        { conctactStatus() }
        
    </td>
    <td className='aling-middle action'>
    <i 
        onClick={()=> remove(contact)}
        className='fa-solid fa-trash delete-icon' >
        
    </i>
    </td>



</tr>
  )
}

export default ContactComponent