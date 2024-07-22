import { Metadata } from 'next';
import React from 'react';

import { NO_INDEX_PAGE } from '@/constants/seo.constants';

import Auth from '@/app/auth/Auth';

export const metadata: Metadata = {
	title: 'Auth',
	...NO_INDEX_PAGE,
};

const AuthPage = () => {
	return <Auth />;
};

export default AuthPage;
