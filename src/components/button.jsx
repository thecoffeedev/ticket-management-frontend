import {Link} from 'react-router-dom';

const Button = (props) => {
    return (
        <Link to={props.link}>
            <button type='button' className='btn btn-secondary p-2 rounded mb-3' title={props.title}>
            <img src={props.src}  className='inv-icons' alt={props.title} />
            </button>
        </Link>
    )
}

export default Button;