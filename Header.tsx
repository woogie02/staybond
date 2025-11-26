import React from 'react';
import { User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6">
      {/* Logo */}
      <div className="text-blue-600" style={{ fontSize: '24px', fontWeight: '600' }}>
        Staybond
      </div>
      
      {/* User Profile */}
      <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
        <User className="w-5 h-5 text-gray-600" />
      </button>
    </header>
  );
}
