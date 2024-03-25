const SearchBox = ({ onFilterContacts, filter }) => {
  return (
    <>
      <h2>Find contacts!</h2>
      <input
        type="text"
        placeholder="input name..."
        value={filter}
        onChange={onFilterContacts}
      />
    </>
  );
};

export default SearchBox;
