# goodshunter
# 굿즈 헌터 (Goods Hunter) - 실시간 소진 골든타임 예측 시스템
공공데이터(KOBIS API)와 극장 데이터를 융합하여, 사용자가 도착하기 전 굿즈의 소진 시점을 예측하고 골든타임을 제시하는 서비스입니다. 사용자는 실시간 예매 속도 분석을 통해 헛걸음을 방지하고 스마트한 문화생활을 누릴 수 있습니다.

## 기술 구성

- Frontend: Next.js / Tailwind CSS
- Auth/Database: Supabase
- Hosting: Vercel
- Config: Vercel 환경변수 또는 로컬 .env.local

## Supabase 설정

1. Supabase에서 새 프로젝트를 생성합니다.
2. SQL Editor에서 supabase/schema.sql의 전체 SQL을 실행하여 테이블을 구축합니다.
3. Authentication > Providers > Email에서 Email 로그인을 활성화합니다.
4. Supabase SQL Editor에서 실시간 데이터 및 예측 관리 권한 설정을 진행합니다.

-- 실시간 재고 및 예측 데이터 관리를 위한 테이블 생성 예시
CREATE TABLE public.inventory_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  branch_name TEXT NOT NULL,
  status TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

## 로컬실행

.env.example을 복사해 .env.local을 만들고 Supabase 값을 넣습니다. .env.local은 Git에 올라가지 않습니다.

NEXT_PUBLIC_SUPABASE_URL="https://YOUR_PROJECT_REF.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"

그 다음 로컬 서버를 실행합니다.

npm install
npm run dev

## Vercel 배포

1. 이 폴더를 GitHub 저장소에 올립니다.
2. Vercel에서 해당 저장소를 Import 합니다.
3. Vercel 프로젝트의 Settings > Environment Variables에 아래 값을 추가합니다.

NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY

4. 배포 후 Supabase Authentication > URL Configuration에서 Vercel 배포 주소를 Site URL에 등록합니다

## 운영 흐름

- 사용자: 앱 접속 -> 관심 지점/굿즈 설정 -> 실시간 소진 알림 수신
- 시스템: KOBIS API 데이터 수집 -> 파이썬 알고리즘으로 소진 속도(Burn-rate) 계산 -> 상태 변화 임계점 도달 시 푸시 알림 전송
- 현황 확인: 로그인한 사용자는 대시보드를 통해 지점별 신호등(안전/주의/긴급) 정보를 확인할 수 있습니다.

## 다음 확장 후보

- 사용자 맞춤형 굿즈 알림 커스텀 설정 및 알림 이력 관리
- Supabase Edge Function을 활용한 24시간 실시간 모니터링 자동화
- 카카오톡 또는 이메일 알림 연동
- 다중 브랜드 영화관 데이터 통합 대시보드 구축


## 초기SQL
```sql
INSERT INTO public.goods (id, title, goods_name, theater, total_stock, current_stock, velocity, status) VALUES
('g1', '인사이드 아웃 2', '메가박스 오리지널 티켓', '메가박스', 1000, 150, 2.5, '주의'),
('g2', '인사이드 아웃 2', 'CGV TTT', 'CGV', 1500, 800, 1.2, '안전'),
('g3', '퓨리오사: 매드맥스 사가', '롯데시네마 아트카드', '롯데시네마', 800, 20, 4.0, '마감임박')
ON CONFLICT (id) DO NOTHING;

-- 1. 영화관별 굿즈 실시간 재고 상황판 테이블
CREATE TABLE IF NOT EXISTS public.goods (
    id TEXT PRIMARY KEY,               -- 굿즈 ID (g1, g2...)
    title TEXT NOT NULL,               -- 영화 제목
    goods_name TEXT NOT NULL,          -- 굿즈 이름 (오티, TTT 등)
    theater TEXT NOT NULL,             -- 영화관 (CGV, 메가박스, 롯데시네마)
    total_stock INTEGER NOT NULL,      -- 총 수량
    current_stock INTEGER NOT NULL,    -- 현재 남은 수량
    velocity NUMERIC DEFAULT 0.5,      -- 실시간 분당 소진율 (KOBIS 연동 데이터 반영용)
    status TEXT DEFAULT '안전'          -- 상태 (안전, 주의, 마감임박)
);

-- 2. 유저들이 설정해둔 재고 마감 임박 알림 설정 테이블
CREATE TABLE IF NOT EXISTS public.goods_alerts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    goods_id TEXT NOT NULL REFERENCES public.goods(id) ON DELETE CASCADE,
    threshold_percent INTEGER NOT NULL DEFAULT 10, -- 남은 재고가 몇 % 이하일 때 알림을 보낼지
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

