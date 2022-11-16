import React from 'react'
import { useRef } from 'react'

const ContactForm = ({ add }) => {
    const name = useRef("")
    const phone = useRef("")

    function onAddContact(e) {
        e.preventDefault()

        const newContact = {
            name: name.current.value,
            phone: phone.current.value,
            status: true
        }

        add(newContact)
        name.current.value = '';
        phone.current.value = '';

    }


    return (
        <div className='div'>
            <div className='card-header p-3'>
                <h5>
                    Add New Contact
                </h5>
            </div>
            <form>

                <label className='d-block'>
                    Write the name
                </label>
                <input
                    ref={name}
                    name="name"
                    type="text"
                    className='form-control form-control-lg'
                    required
                    autoFocus
                    placeholder='Insert a name'



                />
                <label className='d-block'>
                    Write the number phone
                </label>
                <input
                    ref={phone}
                    type="number"
                    name="phone"
                    className='form-control form-control-lg'
                    required
                    autoFocus
                    placeholder='Insert a number phone'



                />

                <button
                    type='submit'
                    onClick={onAddContact}
                    className='btn btn-outline-warning'>
                    Add Contact

                </button>

            </form>






        </div>
    )
}

export default ContactForm