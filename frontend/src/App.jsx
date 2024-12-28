import 'react-toastify/dist/ReactToastify.css';
import i18next from 'i18next';
import filter from 'leo-profanity';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initReactI18next } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react';
import { Provider as MainProvider } from 'react-redux';
import ru from './locales/ru';
import ChatPage from './pages/chatPage/chatPage.jsx';
import LoginPage from './pages/loginPage/loginPage.jsx';
import SignupPage from './pages/signupPage/signupPage.jsx';
import ErrorPage from './pages/errorPage/errorPage.jsx';
import { routes } from './utils';
import ProtectedRoute from './utils/ProtectedRoute.jsx';
import store from './store/store.js';

const App = () => {
  i18next
    .use(initReactI18next)
    .init({
      resources: {
        ru: {
          translation: ru,
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
  );
};

export default App;
