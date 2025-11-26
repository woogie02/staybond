import React, { useState } from 'react';
import { Building2, FileText, Download, ChevronDown, ChevronUp, Calendar } from 'lucide-react';

const mockHandoverData = [
  {
    id: 1,
    name: '테크코퍼레이션',
    industry: 'IT 서비스',
    healthScore: 'stable',
    reports: [
      { id: 1, title: '2025년 Q4 관계 리포트', date: '2025-11-20', type: 'report' },
      { id: 2, title: '계약 갱신 제안서', date: '2025-11-15', type: 'document' },
      { id: 3, title: '기술 지원 이력', date: '2025-11-10', type: 'document' },
    ],
  },
  {
    id: 2,
    name: '글로벌물류',
    industry: '물류/운송',
    healthScore: 'warning',
    reports: [
      { id: 4, title: '2025년 Q4 관계 리포트', date: '2025-11-18', type: 'report' },
      { id: 5, title: '프로젝트 진행 현황', date: '2025-11-12', type: 'document' },
    ],
  },
  {
    id: 3,
    name: '한국제조',
    industry: '제조업',
    healthScore: 'stable',
    reports: [
      { id: 6, title: '2025년 Q4 관계 리포트', date: '2025-11-22', type: 'report' },
      { id: 7, title: '확장 계약 제안서', date: '2025-11-20', type: 'document' },
      { id: 8, title: '임원진 미팅 자료', date: '2025-11-18', type: 'document' },
      { id: 9, title: '워크샵 계획서', date: '2025-11-15', type: 'document' },
    ],
  },
  {
    id: 4,
    name: '스마트리테일',
    industry: '유통/소매',
    healthScore: 'risk',
    reports: [
      { id: 10, title: '2025년 Q4 관계 리포트', date: '2025-11-10', type: 'report' },
      { id: 11, title: '개선 방안 제안서', date: '2025-11-05', type: 'document' },
    ],
  },
  {
    id: 5,
    name: '핀테크솔루션즈',
    industry: '금융',
    healthScore: 'stable',
    reports: [
      { id: 12, title: '2025년 Q4 관계 리포트', date: '2025-11-25', type: 'report' },
      { id: 13, title: '파트너십 계약서', date: '2025-11-23', type: 'document' },
      { id: 14, title: '공동 마케팅 자료', date: '2025-11-20', type: 'document' },
      { id: 15, title: '분기 성과 리뷰', date: '2025-11-18', type: 'report' },
    ],
  },
  {
    id: 6,
    name: '헬스케어시스템',
    industry: '의료/제약',
    healthScore: 'stable',
    reports: [
      { id: 16, title: '2025년 Q4 관계 리포트', date: '2025-11-20', type: 'report' },
      { id: 17, title: '교육 세션 자료', date: '2025-11-18', type: 'document' },
      { id: 18, title: '업그레이드 제안서', date: '2025-11-15', type: 'document' },
    ],
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

export function HandoverView() {
  const [expandedCustomers, setExpandedCustomers] = useState([]);

  const toggleCustomer = (customerId) => {
    if (expandedCustomers.includes(customerId)) {
      setExpandedCustomers(expandedCustomers.filter(id => id !== customerId));
    } else {
      setExpandedCustomers([...expandedCustomers, customerId]);
    }
  };

  return (
    <div className="h-full overflow-auto">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-gray-900 mb-2">인수인계</h1>
          <p className="text-gray-600">모든 고객사의 관계 리포트와 관련 문서를 확인할 수 있습니다</p>
        </div>

        {/* Customer List with Documents */}
        <div className="space-y-4">
          {mockHandoverData.map((customer) => {
            const isExpanded = expandedCustomers.includes(customer.id);
            
            return (
              <div key={customer.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                {/* Customer Header */}
                <button
                  onClick={() => toggleCustomer(customer.id)}
                  className="w-full p-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${healthScoreColors[customer.healthScore]}`} />
                    <div className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-gray-400" />
                      <div className="text-left">
                        <h3 className="text-gray-900">{customer.name}</h3>
                        <p className="text-sm text-gray-600">{customer.industry}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">
                      {customer.reports.length}개 문서
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600">
                      {healthScoreLabels[customer.healthScore]}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>

                {/* Documents List */}
                {isExpanded && (
                  <div className="border-t border-gray-200 bg-gray-50">
                    <div className="p-5">
                      <div className="space-y-2">
                        {customer.reports.map((report) => (
                          <div
                            key={report.id}
                            className="bg-white p-4 rounded-lg border border-gray-200 flex items-center justify-between hover:border-blue-300 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <FileText className="w-5 h-5 text-blue-600" />
                              <div>
                                <h4 className="text-gray-900">{report.title}</h4>
                                <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                                  <Calendar className="w-3 h-3" />
                                  <span>{report.date}</span>
                                  <span className="text-gray-400">•</span>
                                  <span className={report.type === 'report' ? 'text-blue-600' : 'text-gray-600'}>
                                    {report.type === 'report' ? '리포트' : '문서'}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                              <Download className="w-5 h-5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
