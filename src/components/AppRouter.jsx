import React, { useContext } from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthContext } from '../context';
import { privateRoutes, publicRoutes } from '../router/routes';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ? <Switch>
                {privateRoutes.map(route =>
                    <Route
                        component={route.component}
                        exact={route.exact}
                        path={route.path}
                        key={route.path} />

                )}

                <Redirect to="/posts" />
            </Switch>
            : <Switch>
                {publicRoutes.map(route =>
                    <Route
                        component={route.component}
                        exact={route.exact}
                        path={route.path} 
                        key={route.path}/>
                )}
                <Redirect to="/login" />
            </Switch>
    )
}
export default AppRouter