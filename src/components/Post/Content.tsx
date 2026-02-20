'use client';

import { useEffect, useState } from 'react';

interface ToC {
  id: string;
  text: string;
  level: number;
}
export default function Content({
  content,
  title,
}: {
  content: string;
  title: string;
}) {
  const [heading, setHeading] = useState<ToC[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // 마크다운 본문 안의 제목 태그 검색
    const Title = Array.from(
      document.querySelectorAll(
        '.prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6',
      ),
    );

    // 찾은 요소들의 id, 텍스트, 레벨(h의 숫자) 추출
    const headingData = Title.map((title) => ({
      id: title.id,
      text: title.textContent || '',
      level: Number(title.tagName.replace('H', '')),
    }));

    // headingData 설정
    setHeading(headingData);

    // 스크린 감지용 Intersection Observer
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        // 화면의 지정된 영역에 제목이 교차하면 activeId 업데이트
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    // 화면 상단에서 약간 아래쪽 지점을 감지선으로 설정
    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-100px, 0px, -80%, 0px',
    });

    // 제목 태그를 관찰 대상으로 추가
    Title.forEach((title) => observer.observe(title));

    // 컴포넌트가 언마운트 되면 관찰 해제
    return () => observer.disconnect();
  }, [content]);

  // 목차 클릭 시 해당 위치로 부드럽게 이동
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const selectedTitle = document.getElementById(id);
  };
  return (
    <>
      <div className="sticky top-50 hidden h-full min-h-25 flex-col justify-center gap-2.5 sm:flex sm:w-37.5 sm:pr-6.25 sm:pl-6.25">
        <p className="text-[24px] font-bold">{title}</p>
        <h1 className="text-[20px] font-bold">제목</h1>
        <p>title</p>
        <p>list of content</p>
      </div>
    </>
  );
}
