import { FaSearch } from "react-icons/fa";

const FilterSection = ({ filter, setFilter, searchQuery, setSearchQuery }) => (
  <section
    className="fsec"
    style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
  >
    <div style={{ flex: "1 1 150px", position: "relative" }}>
      <FaSearch className="iconsearch" />
      <input
        style={{
          textAlign: "left",
          paddingLeft: "35px",
          width: "100%",
          height: "100%",
        }}
        type="text"
        placeholder="Search my courses..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
    </div>
  </section>
);

export default FilterSection;
