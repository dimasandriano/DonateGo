import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ authentication, children }) => {
	if (!authentication) {
		return <Navigate to="/login" />;
	}
	return children;
};
