

function SearchBar() {
    return <>
        <form>
            <div>
                <input 
                name="search"
                className="form-control"
                type="search"
                placeholder="Inserisci il nome del prodotto"
                />
                <select
                name="categoria">
                <option value="">Seleziona una categoria</option></select>
            </div>
        </form>
    </>;
}
export default SearchBar;