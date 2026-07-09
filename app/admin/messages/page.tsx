"use client";

import { useEffect, useState } from "react";
import Topbar from "../../../components/admin/Topbar";
import DataTable, { Column } from "../../../components/admin/DataTable";
import { adminService } from "../../../services/adminService";

interface Message {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "new" | "read" | "replied";
  createdAt: string;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);

  const load = () => adminService.getMessages().then((res) => setMessages(res.data));
  useEffect(() => { load(); }, []);

  const markStatus = async (row: Message, status: string) => {
    await adminService.updateMessageStatus(row._id, status);
    load();
  };

  const handleDelete = async (row: Message) => {
    if (!confirm(`Delete message from ${row.name}?`)) return;
    await adminService.deleteMessage(row._id);
    load();
  };

  const columns: Column<Message>[] = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "message", label: "Message", render: (row) => <span className="line-clamp-1 max-w-xs block">{row.message}</span> },
    {
      key: "status",
      label: "Status",
      render: (row) => (
        <select
          value={row.status}
          onChange={(e) => markStatus(row, e.target.value)}
          className={`px-2 py-1 rounded-full text-xs font-medium border-none outline-none capitalize ${
            row.status === "new" ? "bg-yellow-500/10 text-yellow-600" : row.status === "read" ? "bg-blue-500/10 text-blue-600" : "bg-green-500/10 text-green-600"
          }`}
        >
          <option value="new">New</option>
          <option value="read">Read</option>
          <option value="replied">Replied</option>
        </select>
      ),
    },
    { key: "createdAt", label: "Received", render: (row) => new Date(row.createdAt).toLocaleDateString() },
  ];

  return (
    <>
      <Topbar title="Contact Messages" />
      <div className="p-6">
        <DataTable columns={columns} rows={messages} onDelete={handleDelete} />
      </div>
    </>
  );
}
