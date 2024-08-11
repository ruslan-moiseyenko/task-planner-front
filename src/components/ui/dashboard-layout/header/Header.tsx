import { GlobalLoader } from '@/components/ui/dashboard-layout/header/GloabalLoader';
import { Profile } from '@/components/ui/dashboard-layout/header/profile/Profile';

export function Header() {
	return (
		<header>
			<GlobalLoader />
			<Profile />
		</header>
	);
}
