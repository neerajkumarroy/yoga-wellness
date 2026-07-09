"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiPlus, FiTrash2 } from "react-icons/fi";
import Topbar from "../../../components/admin/Topbar";
import Modal from "../../../components/admin/Modal";
import { adminService } from "../../../services/adminService";

interface GalleryItem {
  _id: string;
  title: string;
  imageUrl: string;
  category: string;
}

const API_ORIGIN = process.env.NEXT_PUBLIC_API_ORIGIN || "http://localhost:5000";

export default function ManageGalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("studio");
  const [file, setFile] = useState<File | null>(null);

  const load = () => adminService.list("gallery").then((res) => setItems(res.data));
  useEffect(() => { load(); }, []);

  const handleUpload = async () => {
    if (!file) return;
    const payload = new FormData();
    payload.append("title", title);
    payload.append("category", category);
    payload.append("imageUrl", file);
    await adminService.create("gallery", payload);
    setModalOpen(false);
    setTitle("");
    setFile(null);
    load();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this image?")) return;
    await adminService.remove("gallery", id);
    load();
  };

  return (
    <>
      <Topbar title="Manage Gallery" />
      <div className="p-6 space-y-5">
        <button onClick={() => setModalOpen(true)} className="flex items-center gap-2 rounded-xl2 bg-primary text-white px-5 py-3 font-medium hover:bg-primary/90">
          <FiPlus /> Upload Image
        </button>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item._id} className="relative group rounded-xl2 overflow-hidden shadow-premium aspect-square">
              <Image
                src={item.imageUrl.startsWith("http") ? item.imageUrl : `${API_ORIGIN}${item.imageUrl}`}
                alt={item.title || "Gallery image"}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button onClick={() => handleDelete(item._id)} className="h-10 w-10 rounded-full bg-white/90 flex items-center justify-center text-red-500">
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Upload Gallery Image">
        <div className="space-y-4">
          <input placeholder="Title (optional)" value={title} onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 bg-transparent outline-none focus:border-primary text-dark dark:text-cream" />
          <select value={category} onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 bg-transparent outline-none focus:border-primary text-dark dark:text-cream">
            {["studio", "classes", "events", "outdoor"].map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} className="w-full text-sm text-dark dark:text-cream" />
          <button onClick={handleUpload} className="w-full rounded-xl2 bg-primary text-white py-3 font-medium hover:bg-primary/90">
            Upload
          </button>
        </div>
      </Modal>
    </>
  );
}
