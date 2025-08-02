import React, { useState, useEffect } from "react";
import { createContact, updateContact } from "../api/contactApi";

export default function ContactForm({ onSuccess, onError, editData, clearEdit }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editData) {
        await updateContact(form);
        clearEdit();
      } else {
        await createContact(form);
      }
      setForm({ name: "", email: "", message: "" });
      onSuccess();
    } catch {
      onError();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        disabled={!!editData}
      />
      <textarea
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        required
      />
      <button type="submit">{editData ? "Update" : "Submit"}</button>
      {editData && <button onClick={clearEdit}>Cancel Edit</button>}
    </form>
  );
}
