import React from 'react';
import { Building2, FileText, Users, Settings } from 'lucide-react';

const menuItems = [
  { id: 'customers', icon: Building2, label: '고객사' },
  { id: 'reports', icon: FileText, label: '관계 리포트' },
  { id: 'handover', icon: Users, label: '인수인계' },
  { id: 'settings', icon: Settings, label: '설정' },
];

export function Sidebar({ activeMenu, onMenuChange }) {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex-shrink-0">
      <nav className="py-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeMenu === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onMenuChange(item.id)}
              className={`w-full flex items-center gap-3 px-6 py-3 transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}