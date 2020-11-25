import React, { useEffect, Suspense } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { auth, saveUserToFirestore } from './firebaseConfig';
import { loginUser, logOutUser } from './redux/actions/user.action';
import LoadingScreen from './components/loading-screen';
import Header from './components/header';
import CartMenu from './components/cartMenu';
import Router from './router/router';
import './assets/css/style.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await saveUserToFirestore(userAuth);
        await userRef.onSnapshot(snapshot => {
          const { email, displayName } = snapshot.data();
          dispatch(loginUser({ email, username: displayName }));
        })
      } else {
        dispatch(logOutUser());
      }
    })
  }, []);

  useEffect(() => {
    if (user) {
      if (pathname === '/auth') {
        push('/');
      }
    }
  }, [user])

  function onLogOut() {
    auth.signOut().then(function () {
      dispatch(logOutUser());
    }).catch(function (error) {
      dispatch(logOutUser());
    });
  }


  return (
    <div className="App" style={{ position: 'relative' }}>
      <CartMenu />
      <Suspense fallback={<LoadingScreen />}>
        <Header
          logOut={onLogOut} />
        <Router />
      </Suspense>
    </div>
  );
}

export default App;
