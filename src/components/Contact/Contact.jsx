const Contact = ({ data, onDeleteContact }) => {
  const { name, number, id } = data;
  return (
    <>
      <h2>👤 {name}</h2>
      <p>☎️ {number}</p>
      <button
        type="button"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        🪣
      </button>
    </>
  );
};

export default Contact;
