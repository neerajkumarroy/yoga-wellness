"use client";

import { FiEdit2, FiTrash2 } from "react-icons/fi";

export interface Column<T> {
  key: keyof T | string;
  label: string;
  render?: (row: T) => React.ReactNode;
}

interface DataTableProps<T extends { _id: string }> {
  columns: Column<T>[];
  rows: T[];
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
  emptyMessage?: string;
}

export default function DataTable<T extends { _id: string }>({
  columns,
  rows,
  onEdit,
  onDelete,
  emptyMessage = "No records found",
}: DataTableProps<T>) {
  return (
    <div className="rounded-xl2 bg-white dark:bg-[#161616] shadow-premium overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-black/5 dark:border-white/5 text-left">
              {columns.map((col) => (
                <th key={String(col.key)} className="px-5 py-4 font-medium text-dark/60 dark:text-cream/60">
                  {col.label}
                </th>
              ))}
              {(onEdit || onDelete) && (
                <th className="px-5 py-4 font-medium text-dark/60 dark:text-cream/60 text-right">Actions</th>
              )}
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr>
                <td colSpan={columns.length + 1} className="px-5 py-10 text-center text-dark/40 dark:text-cream/40">
                  {emptyMessage}
                </td>
              </tr>
            )}
            {rows.map((row) => (
              <tr
                key={row._id}
                className="border-b border-black/5 dark:border-white/5 last:border-0 hover:bg-primary/5 transition-colors"
              >
                {columns.map((col) => (
                  <td key={String(col.key)} className="px-5 py-4 text-dark dark:text-cream">
                    {col.render ? col.render(row) : String((row as Record<string, unknown>)[col.key as string] ?? "-")}
                  </td>
                ))}
                {(onEdit || onDelete) && (
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-2">
                      {onEdit && (
                        <button
                          onClick={() => onEdit(row)}
                          aria-label="Edit"
                          className="h-8 w-8 rounded-full flex items-center justify-center text-primary hover:bg-primary/10"
                        >
                          <FiEdit2 size={15} />
                        </button>
                      )}
                      {onDelete && (
                        <button
                          onClick={() => onDelete(row)}
                          aria-label="Delete"
                          className="h-8 w-8 rounded-full flex items-center justify-center text-red-500 hover:bg-red-500/10"
                        >
                          <FiTrash2 size={15} />
                        </button>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
