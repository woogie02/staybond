import React, { useState } from 'react';
import { Search, Building2 } from 'lucide-react';

const mockCustomers = [
  {
    id: 1,
    name: '테크코퍼레이션',
    industry: 'IT 서비스',
    grade: 'A',
    lastContact: '2025-11-24',
    healthScore: 'stable',
  },
  {
    id: 2,
    name: '글로벌물류',
    industry: '물류/운송',
    grade: 'B',
    lastContact: '2025-11-20',
    healthScore: 'warning',
  },
  {
    id: 3,
    name: '한국제조',
    industry: '제조업',
    grade: 'A',
    lastContact: '2025-11-25',
    healthScore: 'stable',
  },
  {
    id: 4,
    name: '스마트리테일',
    industry: '유통/소매',
    grade: 'C',
    lastContact: '2025-11-15',
    healthScore: 'risk',
  },
  {
    id: 5,
    name: '핀테크솔루션즈',
    industry: '금융',
    grade: 'A',
    lastContact: '2025-11-26',
    healthScore: 'stable',
  },
  {
    id: 6,
    name: '헬스케어시스템',
    industry: '의료/제약',
    grade: 'B',
    lastContact: '2025-11-22',
    healthScore: 'stable',
  },
];

const gradeColors = {
  A: 'bg-blue-100 text-blue-700',
  B: 'bg-green-100 text-green-700',
  C: 'bg-orange-100 text-orange-700',
};

const healthScoreColors = {
  stable: 'bg-green-500',
  warning: 'bg-orange-500',
  risk: 'bg-red-500',
};

export function CustomerList({ selectedCustomer, onSelectCustomer }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('전체');

  const filters = ['전체', 'A', 'B', 'C'];

  const filteredCustomers = mockCustomers.filter((customer) => {
    const matchesSearch = customer.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === '전체' || customer.grade === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-full flex flex-col">
      {/* Header */}
      <div className="p-5 border-b border-gray-200">
        <h2 className="mb-4">고객사 리스트</h2>
        
        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="고객사 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        {/* Filters */}
        <div className="flex gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-lg transition-colors ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      
      {/* Customer Cards List */}
      <div className="flex-1 overflow-auto p-3">
        <div className="space-y-2">
          {filteredCustomers.map((customer) => (
            <button
              key={customer.id}
              onClick={() => onSelectCustomer(customer)}
              className={`w-full text-left p-4 rounded-lg border transition-all ${
                selectedCustomer?.id === customer.id
                  ? 'border-blue-500 bg-blue-50 shadow-sm'
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-gray-400" />
                  <h3 className="text-gray-900">{customer.name}</h3>
                </div>
                <div className={`w-3 h-3 rounded-full ${healthScoreColors[customer.healthScore]}`} />
              </div>
              
              <div className="text-sm text-gray-600 mb-2">
                {customer.industry}
              </div>
              
              <div className="text-xs text-gray-500">
                최근 접점: {customer.lastContact}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}