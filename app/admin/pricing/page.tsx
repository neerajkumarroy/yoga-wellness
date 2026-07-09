"use client";

import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import Topbar from "../../../components/admin/Topbar";
import DataTable, { Column } from "../../../components/admin/DataTable";
import Modal from "../../../components/admin/Modal";
import { adminService } from "../../../services/adminService";

interface Plan {
  _id: string;
  planName: string;
  tier: string;
  price: number;
  billingCycle: string;
  isPopular: boolean;
  isActive: boolean;
}

const emptyForm = { planName: "", tier: "basic", price: "", billingCycle: "monthly", features: "" };
const tiers = ["basic", "standard", "premium", "corporate"];
const cycles = ["monthly", "quarterly", "yearly"];

export default function ManagePricingPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Plan | null>(null);
  const [form, setForm] = useState(emptyForm);

  const load = () => adminService.list("pricing").then((res) => setPlans(res.data));
  useEffect(() => { load(); }, []);

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm);
    setModalOpen(true);
  };

  const openEdit = (row: Plan) => {
    setEditing(row);
    setForm({ planName: row.planName, tier: row.tier, price: String(row.price), billingCycle: row.billingCycle, features: "" });
    setModalOpen(true);
  };

  const handleSubmit = async () => {
    const payload = {
      planName: form.planName,
      tier: form.tier,
      price: Number(form.price),
      billingCycle: form.billingCycle,
      features: form.features.split(",").map((f) => f.trim()).filter(Boolean),
    };
    if (editing) {
      await adminService.update("pricing", editing._id, payload);
    } else {
      await adminService.create("pricing", payload);
    }
    setModalOpen(false);
    load();
  };

  const handleDelete = async (row: Plan) => {
    if (!confirm(`Delete plan "${row.planName}"?`)) return;
    await adminService.remove("pricing", row._id);
    load();
  };

  const columns: Column<Plan>[] = [
    { key: "planName", label: "Plan" },
    { key: "tier", label: "Tier", render: (row) => <span className="capitalize">{row.tier}</span> },
    { key: "price", label: "Price", render: (row) => `₹${row.price.toLocaleString("en-IN")}` },
    { key: "billingCycle", label: "Cycle", render: (row) => <span className="capitalize">{row.billingCycle}</span> },
  ];

  return (
    <>
      <Topbar title="Manage Pricing" />
      <div className="p-6 space-y-5">
        <button onClick={openCreate} className="flex items-center gap-2 rounded-xl2 bg-primary text-white px-5 py-3 font-medium hover:bg-primary/90">
          <FiPlus /> Add Plan
        </button>
        <DataTable columns={columns} rows={plans} onEdit={openEdit} onDelete={handleDelete} />
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={editing ? "Edit Plan" : "Add Plan"}>
        <div className="space-y-4">
          <input placeholder="Plan name" value={form.planName} onChange={(e) => setForm({ ...form, planName: e.target.value })}
            className="w-full rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 bg-transparent outline-none focus:border-primary text-dark dark:text-cream" />
          <select value={form.tier} onChange={(e) => setForm({ ...form, tier: e.target.value })}
            className="w-full rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 bg-transparent outline-none focus:border-primary text-dark dark:text-cream capitalize">
            {tiers.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          <input type="number" placeholder="Price (INR)" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })}
            className="w-full rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 bg-transparent outline-none focus:border-primary text-dark dark:text-cream" />
          <select value={form.billingCycle} onChange={(e) => setForm({ ...form, billingCycle: e.target.value })}
            className="w-full rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 bg-transparent outline-none focus:border-primary text-dark dark:text-cream capitalize">
            {cycles.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <input placeholder="Features (comma separated)" value={form.features} onChange={(e) => setForm({ ...form, features: e.target.value })}
            className="w-full rounded-xl2 border border-black/10 dark:border-white/10 px-4 py-3 bg-transparent outline-none focus:border-primary text-dark dark:text-cream" />
          <button onClick={handleSubmit} className="w-full rounded-xl2 bg-primary text-white py-3 font-medium hover:bg-primary/90">
            {editing ? "Save Changes" : "Add Plan"}
          </button>
        </div>
      </Modal>
    </>
  );
}
