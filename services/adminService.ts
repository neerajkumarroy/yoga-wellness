import { api } from "./api";

export const adminService = {
  getAnalytics: () => api.get("/admin/analytics").then((r) => r.data),

  // Users
  getUsers: (params?: Record<string, string | number>) =>
    api.get("/admin/users", { params }).then((r) => r.data),
  updateUserStatus: (id: string, payload: { isActive?: boolean; role?: string }) =>
    api.patch(`/admin/users/${id}`, payload).then((r) => r.data),
  deleteUser: (id: string) => api.delete(`/admin/users/${id}`).then((r) => r.data),

  // Messages
  getMessages: () => api.get("/admin/messages").then((r) => r.data),
  updateMessageStatus: (id: string, status: string) =>
    api.patch(`/admin/messages/${id}`, { status }).then((r) => r.data),
  deleteMessage: (id: string) => api.delete(`/admin/messages/${id}`).then((r) => r.data),

  // Generic CRUD resources: trainers, blogs, services, testimonials, gallery, pricing
  list: (resource: string) => api.get(`/admin/${resource}`).then((r) => r.data),
  getOne: (resource: string, id: string) => api.get(`/admin/${resource}/${id}`).then((r) => r.data),
  create: (resource: string, payload: FormData | Record<string, unknown>) =>
    api.post(`/admin/${resource}`, payload, {
      headers: payload instanceof FormData ? { "Content-Type": "multipart/form-data" } : {},
    }).then((r) => r.data),
  update: (resource: string, id: string, payload: FormData | Record<string, unknown>) =>
    api.put(`/admin/${resource}/${id}`, payload, {
      headers: payload instanceof FormData ? { "Content-Type": "multipart/form-data" } : {},
    }).then((r) => r.data),
  remove: (resource: string, id: string) => api.delete(`/admin/${resource}/${id}`).then((r) => r.data),
};
