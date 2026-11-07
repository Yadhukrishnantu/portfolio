import React from 'react';
import { Edit3 } from 'lucide-react';

export default function PlaceholderBadge({ label = "Editable Placeholder", className = "" }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full ${className}`}>
      <Edit3 className="w-3 h-3 animate-pulse" />
      {label}
    </span>
  );
}
