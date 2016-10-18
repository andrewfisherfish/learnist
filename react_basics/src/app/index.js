import React from 'react';
import ReactDOM from 'react-dom';
import contacts from './people'

let div = React.createFactory('div');

let ContactItem = React.createClass({
    propTypes: {
        // id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        email: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
            React.createElement('li', {
                    className: 'contact-list-item'
                },
                React.createElement('h3', {}, this.props.name),
                React.createElement('h4', {}, this.props.description),
                React.createElement('a', {
                    href: 'mailto:' + this.props.email
                }, this.props.email)
            )
        )
    }
});

let Contacts = React.createClass({
    propTypes: {
        contacts: React.PropTypes.array.isRequired,
        gender: React.PropTypes.string,
        newContact: React.PropTypes.object.isRequired
    },
    render: function() {
        let contactsList = this.props.contacts
            .filter(function(contact) {
                return !this.props.gender || (contact.gender === this.props.gender);
            }.bind(this))
            .map(function(contact) {
                return React.createElement(ContactItem, contact);
            });

        return (
            div({},
                React.createElement('h1', {}, "Contacts"),
                React.createElement('ul', {}, contactsList)
            )
        )
    }
})

let ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },
    render: function() {
        return (
            div({
                    className: 'contact-form'
                },
                React.createElement('input', {
                    value: this.props.contact.name,
                    type: 'text'
                }),
                React.createElement('input', {
                    value: this.props.contact.email,
                    type: 'email'
                }),
                React.createElement('textarea', {
                    value: this.props.contact.description
                }),
                React.createElement('input', {
                    type: 'submit'
                })
            )
        )
    }
});

let newContact = {
    name: '',
    email: '',
    description: ''
};

let rootElement =
    div({
            className: 'contacts'
        },
        React.createElement(Contacts, {
            gender: 'Female',
            contacts: contacts,
            newContact: newContact
        }),
        React.createElement('hr'),
        React.createElement(ContactForm, {
            contact: newContact
        })
    );

ReactDOM.render(
    rootElement,
    document.getElementById('react-app')
);
