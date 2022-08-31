function InputBar() {
  return (
    <div className="search_bar"> 
        <div className="search_icon">
        <i class="fa fa-search" aria-hidden="true"></i></div>
      <input
        type="text"
        className="search_input"
        placeholder="Search gym name here..."
      />
      <button><i class="fa fa-map-marker" aria-hidden="true"></i></button>
      <button>Clear</button>
    </div>
  );
}

export default InputBar;
