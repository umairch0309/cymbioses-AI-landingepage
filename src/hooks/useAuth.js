import { useAppSelector } from "@/store";

export const useAuth = () => {
  const { isAuthenticated, loading } = useAppSelector((state) => state.auth);
  return { isAuthenticated, loading };
};
