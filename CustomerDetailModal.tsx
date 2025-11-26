import React, { useState } from 'react';
import { 
  X, 
  MessageCircle, 
  Mail, 
  FileText, 
  Upload, 
  User,
  Phone,
  Briefcase,
  ExternalLink,
  Download,
  Trash2,
  Send
} from 'lucide-react';

const mockContacts = {
  1: [
    { id: 1, name: '김민수', role: 'CTO', email: 'minsu.kim@techcorp.com', phone: '010-1234-5678' },
    { id: 2, name: '박지영', role: '구매 담당', email: 'jiyoung.park@techcorp.com', phone: '010-2345-6789' },
  ],
  2: [
    { id: 3, name: '이철수', role: 'IT 팀장', email: 'chulsoo.lee@global.com', phone: '010-3456-7890' },
  ],
  3: [
    { id: 4, name: '정수현', role: 'CEO', email: 'soohyun.jung@korea.com', phone: '010-4567-8901' },
    { id: 5, name: '최영희', role: 'CFO', email: 'younghee.choi@korea.com', phone: '010-5678-9012' },
  ],
};

const mockKakaoChats = {
  1: [
    { id: 1, contactName: '김민수', lastMessage: '다음 주 미팅 확인 부탁드립니다', time: '2025-11-26 14:30', unread: 2 },
    { id: 2, contactName: '박지영', lastMessage: '견적서 확인했습니다', time: '2025-11-25 16:20', unread: 0 },
  ],
  2: [
    { id: 3, contactName: '이철수', lastMessage: '기술 지원 감사합니다', time: '2025-11-24 11:15', unread: 0 },
  ],
  3: [
    { id: 4, contactName: '정수현', lastMessage: '제안서 검토 후 연락드리겠습니다', time: '2025-11-26 10:00', unread: 1 },
  ],
};

const mockEmails = {
  1: [
    { id: 1, subject: '2025년 Q4 계약 갱신 건', from: '김민수', date: '2025-11-25', hasAttachment: true },
    { id: 2, subject: 'Re: 기술 지원 요청', from: '박지영', date: '2025-11-24', hasAttachment: false },
    { id: 3, subject: '12월 미팅 일정 조율', from: '김민수', date: '2025-11-23', hasAttachment: false },
  ],
  2: [
    { id: 4, subject: '프로젝트 진행 현황', from: '이철수', date: '2025-11-22', hasAttachment: true },
  ],
  3: [
    { id: 5, subject: '확장 계약 제안', from: '정수현', date: '2025-11-26', hasAttachment: true },
    { id: 6, subject: '워크샵 관련 문의', from: '최영희', date: '2025-11-25', hasAttachment: false },
  ],
};

const mockDocuments = {
  1: [
    { id: 1, name: '계약서_2025.pdf', size: '2.3 MB', date: '2025-01-15', type: 'pdf' },
    { id: 2, name: '제안서_Q4갱신.docx', size: '1.5 MB', date: '2025-11-15', type: 'docx' },
    { id: 3, name: '기술지원_이력.xlsx', size: '856 KB', date: '2025-11-10', type: 'xlsx' },
  ],
  2: [
    { id: 4, name: '프로젝트_계획서.pdf', size: '3.1 MB', date: '2025-06-01', type: 'pdf' },
    { id: 5, name: '월간리포트_11월.docx', size: '1.2 MB', date: '2025-11-20', type: 'docx' },
  ],
  3: [
    { id: 6, name: '엔터프라이즈_계약서.pdf', size: '2.8 MB', date: '2025-03-01', type: 'pdf' },
    { id: 7, name: '확장제안서.pptx', size: '5.2 MB', date: '2025-11-20', type: 'pptx' },
    { id: 8, name: '워크샵_계획안.docx', size: '1.8 MB', date: '2025-11-15', type: 'docx' },
  ],
};

export function CustomerDetailModal({ customer, onClose }) {
  const [activeTab, setActiveTab] = useState('contacts');
  
  const contacts = mockContacts[customer.id] || [];
  const kakaoChats = mockKakaoChats[customer.id] || [];
  const emails = mockEmails[customer.id] || [];
  const documents = mockDocuments[customer.id] || [];

  const tabs = [
    { id: 'contacts', label: '담당자', icon: User },
    { id: 'kakao', label: '카카오톡', icon: MessageCircle },
    { id: 'email', label: '이메일', icon: Mail },
    { id: 'documents', label: '문서', icon: FileText },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-gray-900 mb-1">{customer.name}</h2>
            <p className="text-gray-600">{customer.industry}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 px-6">
          <div className="flex gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                    isActive
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          {activeTab === 'contacts' && <ContactsTab contacts={contacts} />}
          {activeTab === 'kakao' && <KakaoTab chats={kakaoChats} />}
          {activeTab === 'email' && <EmailTab emails={emails} />}
          {activeTab === 'documents' && <DocumentsTab documents={documents} />}
        </div>
      </div>
    </div>
  );
}

function ContactsTab({ contacts }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-900">담당자 목록</h3>
        <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          담당자 추가
        </button>
      </div>
      
      {contacts.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          <User className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>등록된 담당자가 없습니다</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contacts.map((contact) => (
            <div key={contact.id} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900">{contact.name}</h4>
                    <p className="text-sm text-gray-600">{contact.role}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>{contact.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>{contact.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function KakaoTab({ chats }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-900">카카오톡 대화</h3>
        <button className="px-4 py-2 text-sm bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition-colors flex items-center gap-2">
          <MessageCircle className="w-4 h-4" />
          채팅방 연동
        </button>
      </div>
      
      {chats.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          <MessageCircle className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>연동된 카카오톡 채팅방이 없습니다</p>
        </div>
      ) : (
        <div className="space-y-3">
          {chats.map((chat) => (
            <button
              key={chat.id}
              className="w-full p-4 border border-gray-200 rounded-lg hover:border-yellow-400 hover:bg-yellow-50 transition-colors text-left"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="text-gray-900">{chat.contactName}</h4>
                    <p className="text-sm text-gray-600">{chat.lastMessage}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {chat.unread > 0 && (
                    <span className="px-2 py-0.5 bg-red-500 text-white text-xs rounded-full">
                      {chat.unread}
                    </span>
                  )}
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              <div className="text-xs text-gray-500">{chat.time}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function EmailTab({ emails }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-900">이메일</h3>
        <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Send className="w-4 h-4" />
          새 이메일
        </button>
      </div>
      
      {emails.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          <Mail className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>이메일 내역이 없습니다</p>
        </div>
      ) : (
        <div className="space-y-2">
          {emails.map((email) => (
            <button
              key={email.id}
              className="w-full p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-left"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-gray-900">{email.subject}</h4>
                    {email.hasAttachment && (
                      <FileText className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600">From: {email.from}</p>
                </div>
                <span className="text-xs text-gray-500">{email.date}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function DocumentsTab({ documents }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-900">문서 관리</h3>
        <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Upload className="w-4 h-4" />
          파일 업로드
        </button>
      </div>
      
      {documents.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>업로드된 문서가 없습니다</p>
        </div>
      ) : (
        <div className="space-y-2">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-gray-900">{doc.name}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>{doc.size}</span>
                    <span>•</span>
                    <span>{doc.date}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <Download className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
