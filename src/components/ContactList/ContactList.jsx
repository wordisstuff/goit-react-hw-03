import Contact from "../Contact/Contact";

const ContactList = ({ data, onDeleteContact }) => {
  return (
    <>
      {data &&
        data.map((it) => {
          return (
            <div key={it.id}>
              <Contact data={it} onDeleteContact={onDeleteContact} />
            </div>
          );
        })}
    </>
  );
};

export default ContactList;
