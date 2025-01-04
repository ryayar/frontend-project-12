import { createContext, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import i18next from 'i18next';
import filter from 'leo-profanity';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initReactI18next } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react';
import { Provider as MainProvider } from 'react-redux';
import ru from './locales/ru';
import en from './locales/en';
import ChatPage from './pages/chatPage/chatPage.jsx';
import LoginPage from './pages/loginPage/loginPage.jsx';
import SignupPage from './pages/signupPage/signupPage.jsx';
import ErrorPage from './pages/errorPage/errorPage.jsx';
import { routes } from './store/utils';
import ProtectedRoute from './components/protectedRoute.jsx';
import store from './store/utils/store.js';
import { SocketContext, socketService } from './store/utils/socketService.js';

socketService.connect();

const App = () => {
  useEffect(() => {
    return () => {
      socketService.disconnect();
    };
  }, []);

  i18next
    .use(initReactI18next)
    .init({
      resources: {
        ru: {
          translation: ru,
        },
        en: {
          translation: en,
        },
      },
      fallbackLng: 'ru',
      interpolation: {
        escapeValue: false,
      },
    });

  const rollbarConfig = {
    accessToken: import.meta.env.POST_CLIENT_ACCESS_TOKEN,
    captureUncaught: true,
    captureUnhandledRejections: true,
    environment: 'production',
  };

  filter.add(filter.getDictionary('ru'));

  return (
    <SocketContext.Provider value={socketService}>
      <MainProvider store={store}>
        <RollbarProvider config={rollbarConfig}>
          <ErrorBoundary>
            <BrowserRouter>
              <Routes>
                <Route path={routes.login} element={<LoginPage />} />
                <Route path={routes.signup} element={<SignupPage />} />
                <Route element={<ProtectedRoute />}>
                  <Route path={routes.chat} element={<ChatPage />} />
                </Route>
                <Route path={routes.error} element={<ErrorPage />} />
              </Routes>
              <ToastContainer />
            </BrowserRouter>
          </ErrorBoundary>
        </RollbarProvider>
      </MainProvider>
    </SocketContext.Provider>
  );
};

export default App;
