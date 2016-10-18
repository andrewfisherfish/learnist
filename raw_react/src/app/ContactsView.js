import React from 'react';

let div = React.createFactory('div');

let ContactItem = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        email: React.PropTypes.string.isRequired
    },
    render: function () {
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
        gender: React.PropTypes.string
    },
    render: function () {
        let contactsList = this.props.contacts
            .filter(function (contact) {
                return true; // !this.props.gender || (contact.gender === this.props.gender);
            }.bind(this))
            .map(function (contact) {
                return React.createElement(ContactItem, contact);
            });

        return (
            div({},
                React.createElement('ul', { className: 'contact-list' }, contactsList)
            )
        )
    }
})

let ContactForm = React.createClass({
    propTypes: {
        value: React.PropTypes.object.isRequired,
        onChange: React.PropTypes.func.isRequired,
        onSubmit: React.PropTypes.func.isRequired
    },
    onSubmit: function (event) {
        this.props.onSubmit();
        event.preventDefault();
    },
    render: function () {
        let errors = this.props.value.errors || {};

        return (
            React.createElement('form', { className: 'contact-form', onSubmit: this.onSubmit },
                React.createElement('input', {
                    value: this.props.value.name,
                    type: 'text',
                    className: errors.name && 'has-error',
                    onChange: function (event) {
                        this.props.onChange(Object.assign({}, this.props.value, { name: event.target.value }));
                    }.bind(this)
                }),
                React.createElement('input', {
                    value: this.props.value.email,
                    type: 'email',
                    className: errors.email && 'has-error',
                    onChange: function (event) {
                        this.props.onChange(Object.assign({}, this.props.value, { email: event.target.value }));
                    }.bind(this)
                }),
                React.createElement('textarea', {
                    value: this.props.value.description,
                    onChange: function (event) {
                        this.props.onChange(Object.assign({}, this.props.value, { description: event.target.value }));
                    }.bind(this)
                }),
                React.createElement('input', { type: 'submit' })
            )
        )
    }
});

class ContactsView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            div(
                {
                    className: 'contacts'
                },
                React.createElement('h1', {}, "Contacts"),
                React.createElement('hr'),
                React.createElement(Contacts, {
                    gender: this.props.gender,
                    contacts: this.props.list
                }),
                React.createElement('hr'),
                React.createElement(ContactForm, {
                    value: this.props.newContact,
                    onChange: this.props.onChange,
                    onSubmit: this.props.onSubmit
                })
            )
        )
    }
}

ContactsView.propTypes = {
    list: React.PropTypes.array.isRequired,
    newContact: React.PropTypes.object.isRequired,
    gender: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired
};

export default ContactsView