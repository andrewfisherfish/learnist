import React from 'react';
import ReactDOM from 'react-dom';
import contacts from './people';
import ContactsView from './ContactsView';

let state = {};

setState({
    newContact: {
        name: '',
        email: '',
        description: ''
    },
    list: contacts,
    gender: 'Female'
});

const CONTACT_TEMPLATE = {
    name: '',
    email: '',
    description: ''
};

function setState(newState) {
    Object.assign(state, newState);

    ReactDOM.render(
        React.createElement(ContactsView, Object.assign({}, state, {
            onChange: (newContact) => {
                setState({
                    newContact: newContact
                });
            },
            onSubmit: () => {
                let contact = Object.assign({}, state.newContact, { key: state.list.length + 1, errors: {} });

                if (!/.+@.+\..+/.test(contact.email)) {
                    contact.errors.email = ['Please enter your new contact\'s email'];
                }

                if (contact.name.length < 3) {
                    contact.errors.name = ['Name has to be longer'];
                }

                if (contact.errors.name || contact.errors.email) {
                    setState({
                        newContact: contact
                    });

                    return;
                }

                setState({
                    newContact: Object.assign({}, CONTACT_TEMPLATE),
                    list: [...state.list, contact]
                });
            }
        })),
        document.getElementById('react-app')
    );
}