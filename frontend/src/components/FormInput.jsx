import React from 'react';

export default function FormInput({ label, ...props }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-1">{label}</label>
      <input {...props} className="w-full p-2 border rounded" />
    </div>
  );
}