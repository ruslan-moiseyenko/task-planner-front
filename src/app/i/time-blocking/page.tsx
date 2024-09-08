import type { Metadata } from 'next';

import { Heading } from '@/components/ui/Heading';

import { NO_INDEX_PAGE } from '@/constants/seo.constants';

import { TimeBlocking } from './TimeBlocking';

export const metadata: Metadata = {
	title: 'Time blocks',
	...NO_INDEX_PAGE,
};

export default function TimeBlockingPage() {
	return (
		<div>
			<Heading title='Time blocks' />
			<TimeBlocking />
		</div>
	);
}
