import React from 'react';

import { AuthUserProvider } from 'contexts';
import Routes from './Routes';

const App = () => (
    <AuthUserProvider>
        <Routes />
    </AuthUserProvider>
);

export default App;