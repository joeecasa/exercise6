import React, { useState } from 'react'
import ContactComponent from './ContactComponent'
import ContactForm from './ContactForm'

const ContactList = () => {

    const contact1 = {
        name: "Joel Casa",
        phone: "1140310527",
        status: true
    }
    const contact2 = {
        name: "Felipe Casa",
        phone: "1131062272",
        status: true
    }
    const contact3 = {
        name: "Florencia Gerez",
        phone: "1125657845",
        status: false
    }

    const [contacts, setContacts] = useState([contact1, contact2, contact3])

    function statusContact(contact) {
        const index = contacts.indexOf(contact)
        const tempContact = [...contacts]
        tempContact[index].status = !tempContact[index].status
        setContacts(tempContact)

    }
    function removeContact(contact) {
        const index = contacts.indexOf(contact)
        const tempContact = [...contacts]
        tempContact.splice(index, 1)
        setContacts(tempContact)

    }

    function addContact(contact) {
        const tempContact = [...contacts]
        tempContact.push(contact);
        setContacts(tempContact)
    }


    return (
        <div className='d-flex'>

            <div className='col-6'>
                <div className='card'>
                    {/* card header */}
                    <div className='card-header p-3'>
                        <h5>
                            Your Contacts:
                        </h5>
                    </div>
                    <div className='card-body' data-mbd-perfect-scrollbar="true" style={{ position: "relative", height: "400px" }}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">
                                        Name
                                    </th>
                                    <th scope="col">
                                        Phone
                                    </th>
                                    <th scope="col">
                                        Status
                                    </th>
                                    <th scope="col">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    contacts.map((contact, index) => {
                                        return (
                                            <ContactComponent
                                                key={index}
                                                contact={contact}
                                                status={statusContact}
                                                remove={removeContact}


                                            />
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='div-form'>
            

                <ContactForm
                    add={addContact}

                />
            </div>
        </div>
    )
}

export default ContactList