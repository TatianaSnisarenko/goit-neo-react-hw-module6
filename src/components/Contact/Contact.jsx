import css from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";

export default function Contact({ id, name, number, deleteContact }) {
  const handleDelete = () => deleteContact(id);

  return (
    <>
      <div className={css.details}>
        <p>
          <FaUser /> {name}
        </p>
        <p>
          <FaPhone /> {number}
        </p>
      </div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}
