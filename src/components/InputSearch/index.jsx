import './styles.css';

// Pesquisando os dados
export const TextSearch = ({ searchValue, handleChange }) => {
    return (
        <input
            onChange={handleChange}
            value={searchValue}
            type="search"
            placeholder='type uor search'
        />
    )
}