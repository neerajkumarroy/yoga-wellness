// "use client";

// import { useEffect, useState } from "react";
// import Topbar from "../../../components/admin/Topbar";
// import DataTable, { Column } from "../../../components/admin/DataTable";
// import { adminService } from "../../../services/adminService";

// interface UserRow {
//   _id: string;
//   name: string;
//   email: string;
//   role: "student" | "trainer" | "admin";
//   isActive: boolean;
//   createdAt: string;
// }

// export default function ManageUsersPage() {
//   const [users, setUsers] = useState<UserRow[]>([]);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(true);

//   const loadUsers = async () => {
//     setLoading(true);
//     const res = await adminService.getUsers(search ? { search } : {});
//     setUsers(res.data);
//     setLoading(false);
//   };

//   useEffect(() => {
//     const timeout = setTimeout(loadUsers, 300);
//     return () => clearTimeout(timeout);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [search]);

//   const toggleActive = async (row: UserRow) => {
//     await adminService.updateUserStatus(row._id, { isActive: !row.isActive });
//     loadUsers();
//   };

//   const handleDelete = async (row: UserRow) => {
//     if (!confirm(`Delete ${row.name}? This cannot be undone.`)) return;
//     await adminService.deleteUser(row._id);
//     loadUsers();
//   };

//   const columns: Column<UserRow>[] = [
//     { key: "name", label: "Name" },
//     { key: "email", label: "Email" },
//     {
//       key: "role",
//       label: "Role",
//       render: (row) => (
//         <span className="capitalize px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">{row.role}</span>
//       ),
//     },
//     {
//       key: "isActive",
//       label: "Status",
//       render: (row) => (
//         <button
//           onClick={() => toggleActive(row)}
//           className={`px-2 py-1 rounded-full text-xs font-medium ${
//             row.isActive ? "bg-green-500/10 text-green-600" : "bg-red-500/10 text-red-500"
//           }`}
//         >
//           {row.isActive ? "Active" : "Deactivated"}
//         </button>
//       ),
//     },
//     {
//       key: "createdAt",
//       label: "Joined",
//       render: (row) => new Date(row.createdAt).toLocaleDateString(),
//     },
//   ];

//   return (
//     <>
//       <Topbar title="Manage Users" />
//       <div className="p-6 space-y-5">
//         <input
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Search by name or email..."
//           className="w-full max-w-md rounded-xl2 border border-black/10 dark:border-white/10 bg-white dark:bg-[#161616] px-4 py-3 outline-none focus:border-primary text-dark dark:text-cream"
//         />
//         {loading ? (
//           <p className="text-dark/50 dark:text-cream/50">Loading users...</p>
//         ) : (
//           <DataTable columns={columns} rows={users} onDelete={handleDelete} />
//         )}
//       </div>
//     </>
//   );
// }
