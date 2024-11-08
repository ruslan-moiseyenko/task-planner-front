import type { PropsWithChildren } from 'react';

import { Header } from '@/components/ui/dashboard-layout/header/Header';
import { Sidebar } from '@/components/ui/dashboard-layout/sidebar/Sidebar';

export default function DashboardLayout({
	children,
}: PropsWithChildren<unknown>) {
	return (
		<div className='grid min-h-screen 2xl:grid-cols-[1.1fr_6fr] grid-cols-[1.2fr_6fr]'>
			<Sidebar />

			<main className='p-big-layout overflow-x-hidden max-h-screen relative'>
				<Header />
				{children}
			</main>
		</div>
	);
}
