// import PropTypes from 'prop-types';
import { List, Item, Button } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

// const ContactList = ({ contacts, onDeleteContact }) => (
const ContactList = () => {
  const dispatch = useDispatch();
  const contactsInStore = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normalizedFilter = filter.toLowerCase();

  const contacts = contactsInStore.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          {name}: {number}
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };

export default ContactList;
