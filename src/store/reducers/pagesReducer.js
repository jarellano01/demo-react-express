
let items = [
    {
        name: 'Dashboard',
        icon: 'dashboard',
        subHeader: 'Test',
        path: '/'
    },
    {
        name: 'Classes',
        icon: 'list layout',
        subHeader: '',
        path: '/classes'
    },
    {
        name: 'Instructors',
        icon: 'users',
        subHeader: '',
        path: '/instructors'
    },
    {
        name: 'Schedule',
        icon: 'calendar',
        subHeader: '',
        path: '/schedule'
    },
    {
        name: 'Events',
        icon: 'calendar plus',
        subHeader: '',
        path: '/events'
    },
    {
        name: 'Accounting',
        icon: 'money',
        subHeader: '',
        path: '/accounting'
    },
    {
        name: 'Messages',
        icon: 'mail outline',
        subHeader: '',
        path: '/messages'
    }
];

const pages = (state=items, action) => {

    return state;
};

export default pages;