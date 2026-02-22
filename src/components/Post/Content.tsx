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
    const titleElements = Array.from(
      document.querySelectorAll(
        '.prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6',
      ),
    );

    // 찾은 요소들의 id, 텍스트, 레벨(h의 숫자) 추출
    const headingData = titleElements.map((title) => ({
      id: title.id,
      text: title.textContent || '',
      level: Number(title.tagName.replace('H', '')),
    }));

    // headingData 설정
    setHeading(headingData);

    const getActiveId = () => {
      const scrollMargin = 120;
      // 스크롤 마진 => 해당 높이보다 높게 있으면 읽는 중으로 판단

      // 화면 상단에서 아래로 내려오며 감지선보다 위에 있는 제목 중 가장 마지막에 있는 제목 검색
      const currentContent = titleElements.findLast((el) => {
        const rect = el.getBoundingClientRect();
        return rect.top <= scrollMargin;
      });

      if (currentContent) setActiveId(currentContent.id);
    };

    // 스크린 감지용 Intersection Observer
    const observerCallback: IntersectionObserverCallback = (entries) => {
      // entries.forEach((entry) => {
      //   // 화면의 지정된 영역에 제목이 교차하면 activeId 업데이트
      //   if (entry.isIntersecting && entry.intersectionRatio > 0) {
      //     setActiveId(entry.target.id);
      //   }
      // });
      getActiveId();
    };

    // 화면 상단에서 약간 아래쪽 지점을 감지선으로 설정
    const observer = new IntersectionObserver(observerCallback, {
      // 감지 영역을 좁혀 불필요한 호출 줄임
      rootMargin: '-100px 0px -80% 0px',
      // 요소가 조금이라도 걸치면 감지
      threshold: 0.1,
    });

    // 제목 태그를 관찰 대상으로 추가
    titleElements.forEach((title) => observer.observe(title));

    // 초기 렌더링에도 위치 잡음
    getActiveId();

    // 컴포넌트가 언마운트 되면 관찰 해제
    return () => observer.disconnect();
  }, [content]);

  // 목차 클릭 시 해당 위치로 부드럽게 이동
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const selectedTitle = document.getElementById(id);
    if (selectedTitle) {
      // 상단 여백을 고려하여 스크롤 위치 보정
      const y =
        selectedTitle.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    // 목차가 없으면 렌더링하지 않음
    if (heading.length === 0) return null;
  };
  return (
    <>
      <nav className="sticky top-50 hidden h-full min-h-25 flex-col justify-center gap-2.5 sm:flex sm:w-37.5 sm:pr-6.25 sm:pl-6.25">
        <p className="text-[24px] font-bold">{title}</p>
        <ul className="flex flex-col gap-2">
          {heading.map((heading) => (
            <li
              key={heading.id}
              style={{ marginLeft: `${(heading.level - 1) * 12}px` }}
              className={`text-sm transition-colors duration-200 ${activeId === heading.id ? 'font-bold text-(--color-dark)' : 'text-(--color-gray)'}`}
            >
              <a
                href={`${heading.id}`}
                onClick={(e) => handleClick(e, heading.id)}
                className="block"
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
