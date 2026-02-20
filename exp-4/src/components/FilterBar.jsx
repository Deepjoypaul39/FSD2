function FilterBar({ search, setSearch }) {
  return (
    <input
      type="text"
      className="form-control my-3"
      placeholder="Search Task..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default FilterBar;