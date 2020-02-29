import React, { createContext, useState } from 'react';

const AuthUserContext = createContext();

const AuthUserProvider = props => {
	const { children } = props;

	const [authUser, setAuthUser] = useState(null);

	return (
		<AuthUserContext.Provider value={{ authUser, setAuthUser }}>
			{children}
		</AuthUserContext.Provider>
	);
}

export { AuthUserContext, AuthUserProvider };