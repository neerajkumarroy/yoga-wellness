"use client";

import { useEffect, useState } from "react";
import { FiPlus, FiStar } from "react-icons/fi";
import Topbar from "../../../components/admin/Topbar";
import DataTable, { Column } from "../../../components/admin/DataTable";
import Modal from "../../../components/admin/Modal";
import { adminService } from "../../../services/adminService";

interface Testimonial {
  _id: string;
  name: string;
  review: string;
  rating: number;
  location: string;
  isApproved: boolean;
}

const emptyForm = { name: "", review: "", rating: "5", location: "" };

export default function ManageTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [photoFile, setPhotoFile] = useState<File | null>(null);

  const load = () => adminService.list("testimonials").then((res) => setTestimonials(res.data));
  useEffect(() => { load(); }, []);

  const openCreate = () => {
    setForm(emptyForm);
    setPhotoFile(null);
    setModalOpen(true);
  };

  const toggleApproved = async (row: Testimonial) => {
    await adminService.update("testimonials", row._id, { isApproved: !row.isApproved });
    load();
  };

  const handleSubmit = async () => {
    const payload = new FormData();
    payload.append("name", form.name);
    payload.append("review", form.review);
    payload.append("rating", form.rating);
    payload.append("location", form.location);
    payload.append("isApproved", "true");
    if (photoFile) payload.append("photo", photoFile);
    await adminService.create("testimonials", payload);
    setModalOpen(false);
    load();
  };

  const handleDelete = async (row: Testimonial) => {
    if (!confirm(`Delete testimonial from ${row.name}?`)) return;
    await adminService.remove("testimonials", row._id);
    load();
  };

  const columns: Column<Testimonial>[] = [
    { key: "name", label: "Name" },
    { key: "location", label: "Location" },
    {
      key: "rating",
      label: "Rating",
      render: (row) => (
        <div className="flex items-center gap-1 text-secondary">
          {Array.from({ length: row.rating }).map((_, i) => <FiStar key={i} fill="currentColor" size={14} />)}
        </div>
      ),
    },
    { key: "review", label: "Review", render: (row) => <span className="line-clamp-1 max-w-xs block">{row.review}</span> },
    {
      key: "isApproved",
      label: "Status",
      render: (row) => (
        <button
          onClick={() => toggleApproved(row)}
          className={`px-2 py-1 rounded-full text-xs font-medium ${row.isApproved ? "bg-green-500/10 text-green-600" : "bg-yellow-500/10 text-yellow-600"}`}
        >
          {row.isApproved ? "Approved" : "Pending"}
        </button>
      ),
    },
  ];

  return (
    <>
      <Topbar title="Manage Testimonials" />
      <div className="p-6 space-y-5">
        <button onClick={openCreate} className="flex items-center gap-2 rounded-xl2 bg-primary text-white px-5 py-3 font-medium hover:bg-primary/90">
          <FiPlus /> Add Testimonial
        </button>
        <DataTable columns={columns} rows={testimonials} onDelete={handleDelete} />
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Add Testimonial">
        <div className="space-y-4">
          <input placeholder="Student name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 bg-transparent outline-none focus:border-primary text-dark dark:text-cream" />
          <input placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })}
            className="w-full rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 bg-transparent outline-none focus:border-primary text-dark dark:text-cream" />
          <select value={form.rating} onChange={(e) => setForm({ ...form, rating: e.target.value })}
            className="w-full rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 bg-transparent outline-none focus:border-primary text-dark dark:text-cream">
            {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>{n} Stars</option>)}
          </select>
          <textarea placeholder="Review" rows={3} value={form.review} onChange={(e) => setForm({ ...form, review: e.target.value })}
            className="w-full rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 bg-transparent outline-none focus:border-primary text-dark dark:text-cream" />
          <input type="file" accept="image/*" onChange={(e) => setPhotoFile(e.target.files?.[0] || null)} className="w-full text-sm text-dark dark:text-cream" />
          <button onClick={handleSubmit} className="w-full rounded-xl2 bg-primary text-white py-3 font-medium hover:bg-primary/90">
            Add Testimonial
          </button>
        </div>
      </Modal>
    </>
  );
}
