import Dashboard from '../../components/appellant/Dashboard';
import AppealShow from '../../components/appellant/AppealShow';

const routes = [
    { path: '/appellant/dashboard', exact: true, name: 'Appellant' },

    {
        path: '/appellant/dashboard',
        exact: true,
        name: 'Dashboard',
        component: Dashboard,
    },

    // {
    //     path: '/appellant/appeals',
    //     exact: true,
    //     name: 'AppealList',
    //     component: AppealList,
    // },
    {
        path: '/appellant/appeals/:id',
        exact: true,
        name: 'AppealShow',
        component: AppealShow,
    },
];

export default routes;
