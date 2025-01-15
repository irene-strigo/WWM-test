//import React from 'react';

import { createBrowserRouter } from 'react-router-dom';

import { MainPage } from './pages';

import PrivacyPage from './pages/PrivacyPage';
import CookieSettingsPage from './pages/CookieSettingsPage';
import GamePage from './pages/GamePage';
import BlogPage from './pages/BlogPage';
import ErrorPage from './pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },

  {
    path: '/main',
    element: <MainPage />,
  },

  {
    path: '/privacy',
    element: <PrivacyPage />,
  },

  {
    path: '/cookie-settings',
    element: <CookieSettingsPage />,
  },

  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '/game',
    element: <GamePage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);
