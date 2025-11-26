import React, { useState } from 'react';
import { 
  User, 
  Bell, 
  Shield, 
  Users, 
  Database, 
  Palette,
  Tag,
  Zap,
  CreditCard,
  Globe,
  Save
} from 'lucide-react';

const settingsSections = [
  { id: 'profile', icon: User, label: '프로필' },
  { id: 'notifications', icon: Bell, label: '알림 설정' },
  { id: 'team', icon: Users, label: '팀 관리' },
  { id: 'customization', icon: Palette, label: '커스터마이징' },
  { id: 'tags', icon: Tag, label: '태그 관리' },
  { id: 'automation', icon: Zap, label: '자동화' },
  { id: 'security', icon: Shield, label: '보안' },
  { id: 'data', icon: Database, label: '데이터 관리' },
  { id: 'integrations', icon: Globe, label: '연동 설정' },
  { id: 'billing', icon: CreditCard, label: '구독 및 결제' },
];

export function SettingsView() {
  const [activeSection, setActiveSection] = useState('profile');

  return (
    <div className="h-full overflow-auto">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-gray-900 mb-2">설정</h1>
          <p className="text-gray-600">서비스 설정을 관리할 수 있습니다</p>
        </div>

        <div className="flex gap-6">
          {/* Settings Navigation */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-2">
              <nav className="space-y-1">
                {settingsSections.map((section) => {
                  const Icon = section.icon;
                  const isActive = activeSection === section.id;
                  
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{section.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Settings Content */}
          <div className="flex-1">
            {activeSection === 'profile' && <ProfileSettings />}
            {activeSection === 'notifications' && <NotificationSettings />}
            {activeSection === 'team' && <TeamSettings />}
            {activeSection === 'customization' && <CustomizationSettings />}
            {activeSection === 'tags' && <TagSettings />}
            {activeSection === 'automation' && <AutomationSettings />}
            {activeSection === 'security' && <SecuritySettings />}
            {activeSection === 'data' && <DataSettings />}
            {activeSection === 'integrations' && <IntegrationSettings />}
            {activeSection === 'billing' && <BillingSettings />}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileSettings() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-gray-900 mb-6">프로필 설정</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm text-gray-700 mb-2">이름</label>
          <input
            type="text"
            defaultValue="홍길동"
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm text-gray-700 mb-2">이메일</label>
          <input
            type="email"
            defaultValue="hong@example.com"
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm text-gray-700 mb-2">직책</label>
          <input
            type="text"
            defaultValue="고객관리 매니저"
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm text-gray-700 mb-2">전화번호</label>
          <input
            type="tel"
            defaultValue="010-1234-5678"
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Save className="w-4 h-4" />
          저장
        </button>
      </div>
    </div>
  );
}

function NotificationSettings() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-gray-900 mb-6">알림 설정</h2>
      
      <div className="space-y-5">
        <div className="flex items-center justify-between py-3 border-b border-gray-200">
          <div>
            <h3 className="text-gray-900 mb-1">이메일 알림</h3>
            <p className="text-sm text-gray-600">중요한 업데이트를 이메일로 받습니다</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
        
        <div className="flex items-center justify-between py-3 border-b border-gray-200">
          <div>
            <h3 className="text-gray-900 mb-1">고객사 상태 변경 알림</h3>
            <p className="text-sm text-gray-600">헬스 스코어 변화 시 알림</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
        
        <div className="flex items-center justify-between py-3 border-b border-gray-200">
          <div>
            <h3 className="text-gray-900 mb-1">일정 리마인더</h3>
            <p className="text-sm text-gray-600">예정된 미팅 24시간 전 알림</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
        
        <div className="flex items-center justify-between py-3 border-b border-gray-200">
          <div>
            <h3 className="text-gray-900 mb-1">주간 리포트</h3>
            <p className="text-sm text-gray-600">매주 월요일 주간 요약 리포트 발송</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  );
}

function TeamSettings() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-gray-900">팀 관리</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          멤버 초대
        </button>
      </div>
      
      <div className="space-y-3">
        {[
          { name: '홍길동', email: 'hong@example.com', role: '관리자', status: '활성' },
          { name: '김철수', email: 'kim@example.com', role: '매니저', status: '활성' },
          { name: '이영희', email: 'lee@example.com', role: '팀원', status: '활성' },
        ].map((member, index) => (
          <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600">{member.name[0]}</span>
              </div>
              <div>
                <h3 className="text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">{member.role}</span>
              <button className="text-sm text-blue-600 hover:text-blue-700">편집</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CustomizationSettings() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-gray-900 mb-6">커스터마이징</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm text-gray-700 mb-3">고객사 등급 기준</label>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-12 text-gray-700">A 등급</span>
              <input
                type="text"
                defaultValue="5,000만원 이상"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12 text-gray-700">B 등급</span>
              <input
                type="text"
                defaultValue="3,000만원 이상"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12 text-gray-700">C 등급</span>
              <input
                type="text"
                defaultValue="3,000만원 미만"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
        
        <div>
          <label className="block text-sm text-gray-700 mb-3">헬스 스코어 임계값</label>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="w-16 text-gray-700">안정</span>
              <input
                type="text"
                defaultValue="80점 이상"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-orange-500" />
              <span className="w-16 text-gray-700">주의</span>
              <input
                type="text"
                defaultValue="50~79점"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-16 text-gray-700">위험</span>
              <input
                type="text"
                defaultValue="50점 미만"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
        
        <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Save className="w-4 h-4" />
          저장
        </button>
      </div>
    </div>
  );
}

function TagSettings() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-gray-900">태그 관리</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          태그 추가
        </button>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {['핵심계정', '리뉴얼임박', '파트너십', '성장가능성', '표준계정', '저등급계정'].map((tag, index) => (
          <div key={index} className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full">
            <span>{tag}</span>
            <button className="text-blue-600 hover:text-blue-800">×</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function AutomationSettings() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-gray-900 mb-6">자동화</h2>
      
      <div className="space-y-4">
        <div className="p-4 border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-900">헬스 스코어 자동 업데이트</h3>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <p className="text-sm text-gray-600">마지막 접점일로부터 30일 경과 시 헬스 스코어 하향</p>
        </div>
        
        <div className="p-4 border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-900">계약 갱신 알림</h3>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <p className="text-sm text-gray-600">계약 만료 60일 전 자동 알림</p>
        </div>
        
        <div className="p-4 border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-900">정기 리포트 자동 생성</h3>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <p className="text-sm text-gray-600">매월 말일 고객사별 리포트 자동 생성</p>
        </div>
      </div>
    </div>
  );
}

function SecuritySettings() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-gray-900 mb-6">보안</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-gray-900 mb-3">비밀번호 변경</h3>
          <div className="space-y-3 max-w-md">
            <input
              type="password"
              placeholder="현재 비밀번호"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="새 비밀번호"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="새 비밀번호 확인"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              비밀번호 변경
            </button>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-900 mb-1">2단계 인증 (2FA)</h3>
              <p className="text-sm text-gray-600">추가 보안을 위한 2단계 인증 활성화</p>
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              설정
            </button>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-200">
          <h3 className="text-gray-900 mb-3">최근 로그인 기록</h3>
          <div className="space-y-2">
            {[
              { time: '2025-11-26 14:23', device: 'Chrome - Windows', location: '서울, 대한민국' },
              { time: '2025-11-25 09:15', device: 'Safari - macOS', location: '서울, 대한민국' },
            ].map((log, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg text-sm">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-900">{log.device}</span>
                  <span className="text-gray-500">{log.time}</span>
                </div>
                <div className="text-gray-600">{log.location}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DataSettings() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-gray-900 mb-6">데이터 관리</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-gray-900 mb-3">데이터 내보내기</h3>
          <p className="text-sm text-gray-600 mb-4">고객사 및 리포트 데이터를 CSV 또는 Excel 형식으로 내보낼 수 있습니다</p>
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              CSV 다운로드
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Excel 다운로드
            </button>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-200">
          <h3 className="text-gray-900 mb-3">데이터 백업</h3>
          <p className="text-sm text-gray-600 mb-4">정기적인 데이터 백업으로 안전하게 보관합니다</p>
          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
            <div>
              <div className="text-gray-900 mb-1">마지막 백업</div>
              <div className="text-sm text-gray-600">2025-11-26 03:00</div>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              지금 백업
            </button>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-200">
          <h3 className="text-gray-900 mb-3">데이터 삭제</h3>
          <p className="text-sm text-gray-600 mb-4">모든 데이터를 영구적으로 삭제합니다 (복구 불가능)</p>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            모든 데이터 삭제
          </button>
        </div>
      </div>
    </div>
  );
}

function IntegrationSettings() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-gray-900 mb-6">연동 설정</h2>
      
      <div className="space-y-4">
        {[
          { name: 'Slack', description: '알림을 Slack으로 전송', connected: true },
          { name: 'Google Calendar', description: '일정을 구글 캘린더와 동기화', connected: true },
          { name: 'Salesforce', description: 'Salesforce 데이터 연동', connected: false },
          { name: 'Zapier', description: '다양한 앱과 자동화 연결', connected: false },
        ].map((integration, index) => (
          <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <h3 className="text-gray-900 mb-1">{integration.name}</h3>
              <p className="text-sm text-gray-600">{integration.description}</p>
            </div>
            <button className={`px-4 py-2 rounded-lg transition-colors ${
              integration.connected
                ? 'bg-green-50 text-green-700 border border-green-200'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}>
              {integration.connected ? '연결됨' : '연결'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function BillingSettings() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-gray-900 mb-6">구독 및 결제</h2>
      
      <div className="space-y-6">
        <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-gray-900 mb-1">현재 플랜: 프로페셔널</h3>
              <p className="text-sm text-gray-600">월 ₩99,000</p>
            </div>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              플랜 변경
            </button>
          </div>
          <div className="text-sm text-gray-700">
            다음 결제일: 2025-12-26
          </div>
        </div>
        
        <div>
          <h3 className="text-gray-900 mb-3">결제 수단</h3>
          <div className="p-4 border border-gray-200 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs">
                VISA
              </div>
              <div>
                <div className="text-gray-900">•••• •••• •••• 1234</div>
                <div className="text-sm text-gray-600">만료일: 12/26</div>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700">변경</button>
          </div>
        </div>
        
        <div>
          <h3 className="text-gray-900 mb-3">결제 내역</h3>
          <div className="space-y-2">
            {[
              { date: '2025-11-26', amount: '₩99,000', status: '완료' },
              { date: '2025-10-26', amount: '₩99,000', status: '완료' },
              { date: '2025-09-26', amount: '₩99,000', status: '완료' },
            ].map((payment, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <span className="text-gray-600">{payment.date}</span>
                  <span className="text-gray-900">{payment.amount}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-green-600">{payment.status}</span>
                  <button className="text-sm text-blue-600 hover:text-blue-700">영수증</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
