'use client';
import { usePathname } from 'next/navigation';
import CategoryGroup from './CategoryGroup';
import CategoryDetail from './CategoryDetail';
import { GroupedPosts } from '@/types/postType';

// Props를 위한 별도 인터페이스
interface CategoryGroupedPosts {
  postData?: GroupedPosts;
}

export default function CategoryPage({ postData }: CategoryGroupedPosts) {
  const location = usePathname();
  return (
    <>
      <div className="flex w-full flex-col">
        {/* 삼항 연산자를 사용할 때 Object.map을 이중 중괄호가 아니라 그냥 소괄호로 묶기 */}
        {location === '/category' ? (
          Object.entries(postData!).map(([categoryName, postList]) => (
            <div className="flex w-full flex-col" key={categoryName}>
              <CategoryGroup name={categoryName} list={postList} />
            </div>
          ))
        ) : (
          <div className="flex w-full flex-col">
            <CategoryDetail />
          </div>
        )}
      </div>
    </>
  );
}
