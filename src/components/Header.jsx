import {useSelector} from 'react-redux'

const Header = () => {
    const numberOfBooks = useSelector(state => state.numberOfBooks);
    return(
        <h2>Number of Books {numberOfBooks}</h2>
    )
}


export default Header;