import React from 'react';
import { 
  AlertCircle, 
  Calendar, 
  CheckCircle, 
  TrendingUp,
  Star,
  Clock,
  Building2
} from 'lucide-react';

const healthScoreConfig = {
  stable: { label: '안정', color: 'bg-green-100 text-green-700', icon: CheckCircle },
  warning: { label: '주의', color: 'bg-yellow-100 text-yellow-700', icon: AlertCircle },
  risk: { label: '위험', color: 'bg-red-100 text-red-700', icon: AlertCircle },
};

const mockReportData = {
  1: {
    tags: ['핵심계정', '리뉴얼임박'],
    overview: {
      contract: '연간 라이선스',
      value: '5,000만원',
      period: '2024.01 ~ 2025.12',
      manager: '김현수',
    },
    timeline: [
      { date: '2025-11-20', event: '분기 리뷰 미팅', type: 'past' },
      { date: '2025-11-24', event: '기술 지원 요청 완료', type: 'past' },
      { date: '2025-12-05', event: '계약 갱신 논의', type: 'future' },
      { date: '2025-12-20', event: '연말 결산 미팅', type: 'future' },
    ],
    keyPoints: [
      'CTO와 긍정적인 관계 유지 중',
      '신규 모듈 도입 검토 중',
      '타 부서 확대 가능성 있음',
    ],
    concerns: [
      '예산 승인 지연 가능성',
      '경쟁사 제안 검토 중',
    ],
    progress: {
      status: '계약 갱신 단계',
      completion: 75,
      nextAction: '12월 5일 갱신 미팅 준비',
    },
  },
  2: {
    tags: ['표준계정'],
    overview: {
      contract: '프로젝트 기반',
      value: '3,000만원',
      period: '2024.06 ~ 2025.05',
      manager: '이지은',
    },
    timeline: [
      { date: '2025-11-15', event: '월간 체크인', type: 'past' },
      { date: '2025-11-20', event: '이슈 해결', type: 'past' },
      { date: '2025-12-10', event: '프로젝트 중간 점검', type: 'future' },
    ],
    keyPoints: [
      '프로젝트 진행 순조로움',
      '담당자 만족도 높음',
    ],
    concerns: [
      '추가 예산 확보 불확실',
      '인력 이동 예정',
    ],
    progress: {
      status: '프로젝트 진행 중',
      completion: 60,
      nextAction: '중간 점검 자료 준비',
    },
  },
  3: {
    tags: ['핵심계정', '성장가능성'],
    overview: {
      contract: '엔터프라이즈 라이선스',
      value: '8,000만원',
      period: '2024.03 ~ 2026.02',
      manager: '박민수',
    },
    timeline: [
      { date: '2025-11-22', event: '임원진 보고', type: 'past' },
      { date: '2025-11-25', event: '추가 기능 데모', type: 'past' },
      { date: '2025-12-08', event: '확장 계약 논의', type: 'future' },
      { date: '2025-12-15', event: '워크샵 진행', type: 'future' },
    ],
    keyPoints: [
      'CEO 직접 관심 표명',
      '전사 확대 도입 검토 중',
      '레퍼런스 사이트로 활용 가능',
    ],
    concerns: [
      '구현 일정 지연 우려',
    ],
    progress: {
      status: '확장 계약 협의 중',
      completion: 85,
      nextAction: '확장 제안서 최종 검토',
    },
  },
  4: {
    tags: ['저등급계정'],
    overview: {
      contract: '스타터 플랜',
      value: '1,200만원',
      period: '2024.08 ~ 2025.07',
      manager: '최서연',
    },
    timeline: [
      { date: '2025-11-10', event: '문의 응대', type: 'past' },
      { date: '2025-11-15', event: '월간 리포트 발송', type: 'past' },
      { date: '2025-12-15', event: '분기 체크인', type: 'future' },
    ],
    keyPoints: [
      '기본적인 기능만 활용 중',
    ],
    concerns: [
      '활용도 저조',
      '해지 위험 높음',
      '담당자 변경 빈번',
    ],
    progress: {
      status: '계약 유지 관리',
      completion: 30,
      nextAction: '활용도 개선 방안 논의',
    },
  },
  5: {
    tags: ['핵심계정', '파트너십'],
    overview: {
      contract: '전략적 파트너십',
      value: '1.2억원',
      period: '2024.01 ~ 2026.12',
      manager: '정재훈',
    },
    timeline: [
      { date: '2025-11-24', event: '월간 운영 회의', type: 'past' },
      { date: '2025-11-26', event: '신규 프로젝트 킥오프', type: 'past' },
      { date: '2025-12-03', event: '분기 성과 리뷰', type: 'future' },
      { date: '2025-12-18', event: '내년 계획 수립', type: 'future' },
    ],
    keyPoints: [
      '장기 파트너십 체결',
      '공동 마케팅 진행 중',
      '신규 사업 기회 논의 중',
      '임원진과 긴밀한 관계',
    ],
    concerns: [
      '일부 기능 개선 요청 대기 중',
    ],
    progress: {
      status: '전략적 협력 강화',
      completion: 90,
      nextAction: '분기 성과 리포트 준비',
    },
  },
  6: {
    tags: ['표준계정', '성장가능성'],
    overview: {
      contract: '비즈니스 플랜',
      value: '4,500만원',
      period: '2024.04 ~ 2025.03',
      manager: '강민지',
    },
    timeline: [
      { date: '2025-11-18', event: '교육 세션 진행', type: 'past' },
      { date: '2025-11-22', event: '만족도 조사', type: 'past' },
      { date: '2025-12-12', event: '업그레이드 논의', type: 'future' },
    ],
    keyPoints: [
      '활용도 꾸준히 증가',
      '추가 라이선스 검토 중',
      '사용자 만족도 높음',
    ],
    concerns: [
      '경쟁사 비교 검토 진행 중',
    ],
    progress: {
      status: '업그레이드 검토',
      completion: 70,
      nextAction: '업그레이드 제안서 발송',
    },
  },
};

export function RelationshipReport({ customer }) {
  if (!customer) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center text-gray-400">
          <Building2 className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <p>고객사를 선택하여 관계 리포트를 확인하세요</p>
        </div>
      </div>
    );
  }

  const reportData = mockReportData[customer.id] || mockReportData[1];
  const healthScore = healthScoreConfig[customer.healthScore];
  const HealthIcon = healthScore.icon;

  return (
    <div className="h-full overflow-auto">
      {/* Header Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-gray-900 mb-2">{customer.name}</h1>
            <p className="text-gray-600">{customer.industry}</p>
          </div>
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${healthScore.color}`}>
            <HealthIcon className="w-4 h-4" />
            <span>{healthScore.label}</span>
          </div>
        </div>
        
        {/* Tags */}
        <div className="flex gap-2">
          {reportData.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm flex items-center gap-1"
            >
              <Star className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-2 gap-6">
        {/* 계정 개요 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <h3 className="text-gray-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            계정 개요
          </h3>
          <div className="space-y-3">
            <div>
              <div className="text-sm text-gray-500 mb-1">계약 형태</div>
              <div className="text-gray-900">{reportData.overview.contract}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">계약 금액</div>
              <div className="text-gray-900">{reportData.overview.value}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">계약 기간</div>
              <div className="text-gray-900">{reportData.overview.period}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">담당자</div>
              <div className="text-gray-900">{reportData.overview.manager}</div>
            </div>
          </div>
        </div>

        {/* 일정·타임라인 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <h3 className="text-gray-900 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            일정·타임라인
          </h3>
          <div className="space-y-3">
            {reportData.timeline.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                  item.type === 'past' ? 'bg-gray-300' : 'bg-blue-500'
                }`} />
                <div className="flex-1">
                  <div className={`text-sm ${
                    item.type === 'past' ? 'text-gray-500' : 'text-gray-900'
                  }`}>
                    {item.event}
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">{item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 중요사항 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <h3 className="text-gray-900 mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-blue-600" />
            중요사항
          </h3>
          <ul className="space-y-2">
            {reportData.keyPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 주의사항·민감 포인트 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <h3 className="text-gray-900 mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-orange-600" />
            주의사항·민감 포인트
          </h3>
          <ul className="space-y-2">
            {reportData.concerns.map((concern, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                <span>{concern}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 진행상황 요약 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 col-span-2">
          <h3 className="text-gray-900 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-600" />
            진행상황 요약
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-700">{reportData.progress.status}</span>
                <span className="text-sm text-gray-600">{reportData.progress.completion}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all"
                  style={{ width: `${reportData.progress.completion}%` }}
                />
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-3">
              <div className="text-sm text-gray-600 mb-1">다음 액션</div>
              <div className="text-gray-900">{reportData.progress.nextAction}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}