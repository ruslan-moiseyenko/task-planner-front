import type { PropsWithChildren } from 'react';

import DashboardLayout from '@/components/ui/dashboard-layout/DashboardLayout';

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return <DashboardLayout>{children}</DashboardLayout>;
}
