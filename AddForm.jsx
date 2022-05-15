export function AddForm ({ value, setValue, handleClick }) {
  return (
      <form>
        <input type="text" name="input-box" id="input-box" onChange={ (event) => setValue(event.target.value) } value={value}/>
        <input type="submit" value="Submit" className="add-button" onClick={handleClick}></input>
      </form>
  );
}