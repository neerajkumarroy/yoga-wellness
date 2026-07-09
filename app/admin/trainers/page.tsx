"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import Topbar from "../../../components/admin/Topbar";
import DataTable, { Column } from "../../../components/admin/DataTable";
import Modal from "../../../components/admin/Modal";
import { adminService } from "../../../services/adminService";

interface Trainer {
  _id: string;
  name: string;
  photo: string;
  experienceYears: number;
  certifications: string[];
  specialties: string[];
  bio: string;
  isActive: boolean;
}

const emptyForm = {
  name: "",
  experienceYears: "",
  certifications: "",
  specialties: "",
  bio: "",
};

export default function ManageTrainersPage() {
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Trainer | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [photoFile, setPhotoFile] = useState<File | null>(null);

  const load = () => adminService.list("trainers").then((res) => setTrainers(res.data));

  useEffect(() => {
    load();
  }, []);

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm);
    setPhotoFile(null);
    setModalOpen(true);
  };

  const openEdit = (row: Trainer) => {
    setEditing(row);
    setForm({
      name: row.name,
      experienceYears: String(row.experienceYears),
      certifications: row.certifications.join(", "),
      specialties: row.specialties.join(", "),
      bio: row.bio,
    });
    setPhotoFile(null);
    setModalOpen(true);
  };

  const handleSubmit = async () => {
    const payload = new FormData();
    payload.append("name", form.name);
    payload.append("experienceYears", form.experienceYears);
    payload.append("bio", form.bio);
    form.certifications.split(",").map((s) => s.trim()).filter(Boolean).forEach((c) => payload.append("certifications[]", c));
    form.specialties.split(",").map((s) => s.trim()).filter(Boolean).forEach((s) => payload.append("specialties[]", s));
    if (photoFile) payload.append("photo", photoFile);

    if (editing) {
      await adminService.update("trainers", editing._id, payload);
    } else {
      await adminService.create("trainers", payload);
    }
    setModalOpen(false);
    load();
  };

  const handleDelete = async (row: Trainer) => {
    if (!confirm(`Remove trainer ${row.name}?`)) return;
    await adminService.remove("trainers", row._id);
    load();
  };

  const columns: Column<Trainer>[] = [
    {
      key: "photo",
      label: "Photo",
      render: (row) =>
        row.photo ? (
          <Image
            src={row.photo.startsWith("http") ? row.photo : `${process.env.NEXT_PUBLIC_API_ORIGIN || "http://localhost:5000"}${row.photo}`}
            alt={row.name}
            width={40}
            height={40}
            className="rounded-full object-cover h-10 w-10"
          />
        ) : (
          <div className="h-10 w-10 rounded-full bg-primary/10" />
        ),
    },
    { key: "name", label: "Name" },
    { key: "experienceYears", label: "Experience", render: (row) => `${row.experienceYears} yrs` },
    { key: "specialties", label: "Specialties", render: (row) => row.specialties.join(", ") || "-" },
  ];

  return (
    <>
      <Topbar title="Manage Trainers" />
      <div className="p-6 space-y-5">
        <button
          onClick={openCreate}
          className="flex items-center gap-2 rounded-xl2 bg-primary text-white px-5 py-3 font-medium hover:bg-primary/90"
        >
          <FiPlus /> Add Trainer
        </button>

        <DataTable columns={columns} rows={trainers} onEdit={openEdit} onDelete={handleDelete} />
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={editing ? "Edit Trainer" : "Add Trainer"}>
        <div className="space-y-4">
          <input
            placeholder="Full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 bg-transparent outline-none focus:border-primary text-dark dark:text-cream"
          />
          <input
            type="number"
            placeholder="Years of experience"
            value={form.experienceYears}
            onChange={(e) => setForm({ ...form, experienceYears: e.target.value })}
            className="w-full rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 bg-transparent outline-none focus:border-primary text-dark dark:text-cream"
          />
          <input
            placeholder="Certifications (comma separated)"
            value={form.certifications}
            onChange={(e) => setForm({ ...form, certifications: e.target.value })}
            className="w-full rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 bg-transparent outline-none focus:border-primary text-dark dark:text-cream"
          />
          <input
            placeholder="Specialties (comma separated)"
            value={form.specialties}
            onChange={(e) => setForm({ ...form, specialties: e.target.value })}
            className="w-full rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 bg-transparent outline-none focus:border-primary text-dark dark:text-cream"
          />
          <textarea
            placeholder="Short bio"
            rows={3}
            value={form.bio}
            onChange={(e) => setForm({ ...form, bio: e.target.value })}
            className="w-full rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 bg-transparent outline-none focus:border-primary text-dark dark:text-cream"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhotoFile(e.target.files?.[0] || null)}
            className="w-full text-sm text-dark dark:text-cream"
          />
          <button
            onClick={handleSubmit}
            className="w-full rounded-xl2 bg-primary text-white py-3 font-medium hover:bg-primary/90"
          >
            {editing ? "Save Changes" : "Add Trainer"}
          </button>
        </div>
      </Modal>
    </>
  );
}
