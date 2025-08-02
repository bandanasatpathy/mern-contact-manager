import React, { useEffect, useState } from "react";
import { getContacts } from "../api/contactApi";
import ContactForm from "../components/contactForm";
import ContactList from "../components/contactList";
import { toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";

export default function ContactPage() {
  const [contacts, setContacts] = useState([]);
  const [editData, setEditData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const { data } = await getContacts();
      setContacts(data.data);
    } catch (error) {
      toast.error("Failed to fetch contacts");
    } finally {
      setLoading(false);
    }
  };

  const clearEdit = () => setEditData(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="contact-page">
      <h1>Contact Form CRUD</h1>

      <ContactForm
        onSuccess={() => {
          fetchContacts();
          toast.success(editData ? "Contact updated!" : "Contact added!");
        }}
        onError={() => toast.error("Operation failed")}
        editData={editData}
        clearEdit={clearEdit}
      />

      {loading ? (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <RotatingLines strokeColor="blue" width="80" />
        </div>
      ) : (
        <ContactList
          contacts={contacts}
          refresh={() => {
            fetchContacts();
            toast.success("Deleted successfully!");
          }}
          setEditData={setEditData}
        />
      )}
    </div>
  );
}
