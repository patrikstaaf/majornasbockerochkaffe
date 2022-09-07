const SearchInput = () => {
  return (
    <div>
      <label
        htmlFor=''
        aria-label='Sökfält, vad letar du efter?'
        aria-hidden='true'
      />

      <input
        type='text'
        placeholder='Vad letar du efter?'
        list='searchOptions'
      />
      <datalist id='searchOptions'>
        <option value='F;rfattarkvall' />
        <option value='Bokcirkel' />
      </datalist>
    </div>
  );
};

export default SearchInput;
