'use client';

import { useRouter } from 'next/navigation';
import { logout } from './(auth)/loggout/actions';

export function LogoutButton() {
  const router = useRouter();
  return (
    <form>
      <button
        formAction={async () => {
          await logout();
          router.refresh();
        }}
      >
        logout
      </button>
    </form>
  );
}
