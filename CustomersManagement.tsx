import React, { useState } from 'react';
import { Plus, Trash2, Building2, Edit2, MessageCircle, Mail, FileText, Upload, X, ExternalLink } from 'lucide-react';
import { CustomerDetailModal } from './CustomerDetailModal';

const initialCustomers = [
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

const healthScoreColors = {
  stable: 'bg-green-500',
  warning: 'bg-orange-500',
  risk: 'bg-red-500',
};

const healthScoreLabels = {
  stable: '안정',
  warning: '주의',
  risk: '위험',
};

export function CustomersManagement() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    name: '',
    industry: '',
    grade: 'B',
    healthScore: 'stable',
  });
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleAddCustomer = () => {
    if (!newCustomer.name || !newCustomer.industry) return;
    
    const customer = {
      id: Date.now(),
      ...newCustomer,
      lastContact: new Date().toISOString().split('T')[0],
    };
    
    setCustomers([...customers, customer]);
    setNewCustomer({ name: '', industry: '', grade: 'B', healthScore: 'stable' });
    setShowAddModal(false);
  };

  const handleDeleteCustomer = (id) => {
    setCustomers(customers.filter(c => c.id !== id));
  };

  const handleViewCustomer = (customer) => {
    setSelectedCustomer(customer);
    setShowDetailModal(true);
  };

  return (
    <div className="h-full overflow-auto">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-gray-900 mb-2">고객사 관리</h1>
            <p className="text-gray-600">고객사를 추가하거나 제거할 수 있습니다</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            고객사 추가
          </button>
        </div>

        {/* Customer Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-gray-700">상태</th>
                <th className="px-6 py-3 text-left text-gray-700">고객사명</th>
                <th className="px-6 py-3 text-left text-gray-700">업종</th>
                <th className="px-6 py-3 text-left text-gray-700">등급</th>
                <th className="px-6 py-3 text-left text-gray-700">최근 접점</th>
                <th className="px-6 py-3 text-right text-gray-700">작업</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${healthScoreColors[customer.healthScore]}`} />
                      <span className="text-sm text-gray-600">
                        {healthScoreLabels[customer.healthScore]}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">{customer.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{customer.industry}</td>
                  <td className="px-6 py-4">
                    <span className="text-gray-700">{customer.grade}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm">{customer.lastContact}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleViewCustomer(customer)}
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDeleteCustomer(customer.id)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Customer Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-gray-900">새 고객사 추가</h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">고객사명 *</label>
                <input
                  type="text"
                  value={newCustomer.name}
                  onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="고객사명을 입력하세요"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">업종 *</label>
                <input
                  type="text"
                  value={newCustomer.industry}
                  onChange={(e) => setNewCustomer({ ...newCustomer, industry: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="업종을 입력하세요"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">등급</label>
                <select
                  value={newCustomer.grade}
                  onChange={(e) => setNewCustomer({ ...newCustomer, grade: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">관계 헬스 스코어</label>
                <select
                  value={newCustomer.healthScore}
                  onChange={(e) => setNewCustomer({ ...newCustomer, healthScore: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="stable">안정</option>
                  <option value="warning">주의</option>
                  <option value="risk">위험</option>
                </select>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex gap-3 justify-end">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                취소
              </button>
              <button
                onClick={handleAddCustomer}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                추가
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Customer Detail Modal */}
      {showDetailModal && selectedCustomer && (
        <CustomerDetailModal 
          customer={selectedCustomer}
          onClose={() => setShowDetailModal(false)}
        />
      )}
    </div>
  );
}