"use client";

import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import Topbar from "../../../components/admin/Topbar";
import DataTable, { Column } from "../../../components/admin/DataTable";
import Modal from "../../../components/admin/Modal";
import { adminService } from "../../../services/adminService";

interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  category: string;
  isPublished: boolean;
  views: number;
  createdAt: string;
}

const emptyForm = { title: "", excerpt: "", content: "", category: "", tags: "" };

export default function ManageBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Blog | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const load = () => adminService.list("blogs").then((res) => setBlogs(res.data));
  useEffect(() => { load(); }, []);

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm);
    setImageFile(null);
    setModalOpen(true);
  };

  const openEdit = (row: Blog) => {
    setEditing(row);
    setForm({ title: row.title, excerpt: row.excerpt, content: "", category: row.category, tags: "" });
    setImageFile(null);
    setModalOpen(true);
  };

  const handleSubmit = async () => {
    const payload = new FormData();
    payload.append("title", form.title);
    payload.append("excerpt", form.excerpt);
    payload.append("content", form.content);
    payload.append("category", form.category);
    form.tags.split(",").map((t) => t.trim()).filter(Boolean).forEach((t) => payload.append("tags[]", t));
    if (imageFile) payload.append("featuredImage", imageFile);

    if (editing) {
      await adminService.update("blogs", editing._id, payload);
    } else {
      await adminService.create("blogs", payload);
    }
    setModalOpen(false);
    load();
  };

  const handleDelete = async (row: Blog) => {
    if (!confirm(`Delete blog "${row.title}"?`)) return;
    await adminService.remove("blogs", row._id);
    load();
  };

  const columns: Column<Blog>[] = [
    { key: "title", label: "Title" },
    { key: "category", label: "Category" },
    { key: "views", label: "Views" },
    {
      key: "isPublished",
      label: "Status",
      render: (row) => (
        <span className={`px-2 py-1 rounded-full text-xs ${row.isPublished ? "bg-green-500/10 text-green-600" : "bg-gray-400/10 text-gray-500"}`}>
          {row.isPublished ? "Published" : "Draft"}
        </span>
      ),
    },
    { key: "createdAt", label: "Date", render: (row) => new Date(row.createdAt).toLocaleDateString() },
  ];

  return (
    <>
      <Topbar title="Manage Blogs" />
      <div className="p-6 space-y-5">
        <button onClick={openCreate} className="flex items-center gap-2 rounded-xl2 bg-primary text-white px-5 py-3 font-medium hover:bg-primary/90">
          <FiPlus /> New Blog Post
        </button>
        <DataTable columns={columns} rows={blogs} onEdit={openEdit} onDelete={handleDelete} />
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={editing ? "Edit Blog Post" : "New Blog Post"}>
        <div className="space-y-4">
          <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 bg-transparent outline-none focus:border-primary text-dark dark:text-cream" />
          <input placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="w-full rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 bg-transparent outline-none focus:border-primary text-dark dark:text-cream" />
          <textarea placeholder="Excerpt" rows={2} value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
            className="w-full rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 bg-transparent outline-none focus:border-primary text-dark dark:text-cream" />
          <textarea placeholder="Content" rows={5} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })}
            className="w-full rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 bg-transparent outline-none focus:border-primary text-dark dark:text-cream" />
          <input placeholder="Tags (comma separated)" value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })}
            className="w-full rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 bg-transparent outline-none focus:border-primary text-dark dark:text-cream" />
          <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} className="w-full text-sm text-dark dark:text-cream" />
          <button onClick={handleSubmit} className="w-full rounded-xl2 bg-primary text-white py-3 font-medium hover:bg-primary/90">
            {editing ? "Save Changes" : "Publish"}
          </button>
        </div>
      </Modal>
    </>
  );
}
