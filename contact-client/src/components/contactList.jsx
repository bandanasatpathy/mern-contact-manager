import React from "react";
import { deleteContact } from "../api/contactApi";

export default function ContactList({ contacts, refresh, setEditData }) {
  const handleDelete = async (email) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      await deleteContact(email);
      refresh();
    }
  };

  return (
    <table className="contact-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Message</th>
          <th>Actions</th>
        </tr>
      </thead>
<tbody>
  {contacts.map((contact) => (
    <tr key={contact._id}>
      <td data-label="Name">{contact.name}</td>
      <td data-label="Email">{contact.email}</td>
      <td data-label="Message">{contact.message}</td>
      <td data-label="Actions">
        <button onClick={() => setEditData(contact)}>Edit</button>
        <button onClick={() => handleDelete(contact.email)}>Delete</button>
      </td>
    </tr>
  ))}
</tbody>
    </table>
  );
}
