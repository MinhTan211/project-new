import { Breadcrumbs, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { LinkItem } from './style';
function Index() {
    const location = useLocation().pathname;
    
    const handleLocation = () => {
        const pathName = location.split('/');
        pathName.shift()
        return pathName;
    }
    
    const renderBreadcrumbs = handleLocation().map((path, index) =>  {
        return (
            <LinkItem key={index} to=''>
                {path}
            </LinkItem>
        )
    })
    return (
        <Breadcrumbs aria-label='breadcrumb'>
            <LinkItem underline='hover' color='inherit' to='/'>
                MUI
            </LinkItem>
                {
                    renderBreadcrumbs
                }
        </Breadcrumbs>
    )
}

export default Index;