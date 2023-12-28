import { useAuth } from '@/services/auth.service';
import type { RouteLocation } from 'vue-router';
import { useRouter } from 'vue-router';

export const authenticationGuard = (_to: RouteLocation, _from: RouteLocation) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  if (isAuthenticated.value) {
    return true;
  } else {
    router.push({ name: 'login' });
    return false;
  }
};
