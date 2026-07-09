import { api } from "./api";

export const authService = {
  register: (payload: { name: string; email: string; password: string; phone?: string }) =>
    api.post("/auth/register", payload).then((r) => r.data),
  verifyOTP: (payload: { userId: string; otp: string }) =>
    api.post("/auth/verify-otp", payload).then((r) => r.data),
  resendOTP: (userId: string) => api.post("/auth/resend-otp", { userId }).then((r) => r.data),
  login: (payload: { email: string; password: string }) =>
    api.post("/auth/login", payload).then((r) => r.data),
  googleLogin: (idToken: string) => api.post("/auth/google", { idToken }).then((r) => r.data),
  logout: () => api.post("/auth/logout").then((r) => r.data),
  me: () => api.get("/auth/me").then((r) => r.data),
};
