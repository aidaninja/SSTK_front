import React, { createContext, useState } from 'react';

const GlobalStateContext = createContext();

const GlobalStateProvider = props => {
	const { children } = props;

	const [authUser, setAuthUser] = useState(null);

	return (
		<GlobalStateContext.Provider value={{ authUser, setAuthUser }}>
			{children}
		</GlobalStateContext.Provider>
	);
}

export { GlobalStateContext, GlobalStateProvider };