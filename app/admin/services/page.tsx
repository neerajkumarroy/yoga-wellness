"use client";

import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import Topbar from "../../../components/admin/Topbar";
import DataTable, { Column } from "../../../components/admin/DataTable";
import Modal from "../../../components/admin/Modal";
import { adminService } from "../../../services/adminService";

interface Service {
  _id: string;
  title: string;
  description: string;
  category: string;
  isActive: boolean;
}

const emptyForm = { title: "", description: "", category: "general", benefits: "" };
const categories = ["online", "offline", "therapeutic", "personal", "senior", "general"];

export default function ManageServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Service | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const load = () => adminService.list("services").then((res) => setServices(res.data));
  useEffect(() => { load(); }, []);

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm);
    setImageFile(null);
    setModalOpen(true);
  };

  const openEdit = (row: Service) => {
    setEditing(row);
    setForm({ title: row.title, description: row.description, category: row.category, benefits: "" });
    setImageFile(null);
    setModalOpen(true);
  };

  const handleSubmit = async () => {
    const payload = new FormData();
    payload.append("title", form.title);
    payload.append("description", form.description);
    payload.append("category", form.category);
    form.benefits.split(",").map((b) => b.trim()).filter(Boolean).forEach((b) => payload.append("benefits[]", b));
    if (imageFile) payload.append("image", imageFile);

    if (editing) {
      await adminService.update("services", editing._id, payload);
    } else {
      await adminService.create("services", payload);
    }
    setModalOpen(false);
    load();
  };

  const handleDelete = async (row: Service) => {
    if (!confirm(`Delete service "${row.title}"?`)) return;
    await adminService.remove("services", row._id);
    load();
  };

  const columns: Column<Service>[] = [
    { key: "title", label: "Title" },
    { key: "category", label: "Category", render: (row) => <span className="capitalize">{row.category}</span> },
    {
      key: "isActive",
      label: "Status",
      render: (row) => (
        <span className={`px-2 py-1 rounded-full text-xs ${row.isActive ? "bg-green-500/10 text-green-600" : "bg-gray-400/10 text-gray-500"}`}>
          {row.isActive ? "Active" : "Hidden"}
        </span>
      ),
    },
  ];

  return (
    <>
      <Topbar title="Manage Services" />
      <div className="p-6 space-y-5">
        <button onClick={openCreate} className="flex items-center gap-2 rounded-xl2 bg-primary text-white px-5 py-3 font-medium hover:bg-primary/90">
          <FiPlus /> Add Service
        </button>
        <DataTable columns={columns} rows={services} onEdit={openEdit} onDelete={handleDelete} />
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={editing ? "Edit Service" : "Add Service"}>
        <div className="space-y-4">
          <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 bg-transparent outline-none focus:border-primary text-dark dark:text-cream" />
          <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="w-full rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 bg-transparent outline-none focus:border-primary text-dark dark:text-cream capitalize">
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <textarea placeholder="Description" rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 bg-transparent outline-none focus:border-primary text-dark dark:text-cream" />
          <input placeholder="Benefits (comma separated)" value={form.benefits} onChange={(e) => setForm({ ...form, benefits: e.target.value })}
            className="w-full rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 bg-transparent outline-none focus:border-primary text-dark dark:text-cream" />
          <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} className="w-full text-sm text-dark dark:text-cream" />
          <button onClick={handleSubmit} className="w-full rounded-xl2 bg-primary text-white py-3 font-medium hover:bg-primary/90">
            {editing ? "Save Changes" : "Add Service"}
          </button>
        </div>
      </Modal>
    </>
  );
}
