import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/index.ts";
import { expire } from "@store/reducers/auth";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import { callbackOnJwtExpired, isJwtExpired } from "@utils/jwt.ts";
import Home from "@pages/home";
import About from "@pages/about";

export default function App() {
    const auth = useAppSelector((state) => state.auth.data);
    const dispatch = useAppDispatch();

    const handleExpire = useCallback(() => {
        dispatch(expire());
    }, [dispatch]);

    useEffect(() => {
        if (auth.isAuth && !isJwtExpired(auth.token!)) {
            // Set expiration call at timeout
            const expTimeout = callbackOnJwtExpired(auth.token!, handleExpire);
            return () => void clearTimeout(expTimeout);
        } else if (auth.isAuth) {
            // Expire session
            handleExpire();
        }
    }, [auth, handleExpire]);

    return (
        <IonApp>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/about" component={About} exact={true} />
                </IonRouterOutlet>
            </IonReactRouter>
        </IonApp>
    );
}
