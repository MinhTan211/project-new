import { Link } from 'react-router-dom';
import styles from 'styled-components';

export const LinkItem = styles(Link)`
    color: black;
    text-decoration: none;
    &:hover{
        color: black;
        text-decoration: underline;
    }
`;