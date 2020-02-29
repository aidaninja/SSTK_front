import React from 'react';

import { GlobalStateProvider } from 'contexts';
import Routes from './Routes';

const App = () => (
    <GlobalStateProvider>
        <Routes />
    </GlobalStateProvider>
);

export default App;