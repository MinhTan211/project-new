import { styled } from "@mui/material/styles";
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

export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));