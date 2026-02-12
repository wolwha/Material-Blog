import { PostType } from '@/types/postType';
import { SearchType } from '@/types/searchType';
import { createClient } from '@/utils/supabase/server';

export const getSearchData = async (keyword: string): Promise<SearchType> => {
  const result: SearchType = {
    toTitle: [],
    toTag: [],
    toCategory: [],
  };
  if (!keyword) return result;

  const supabase = await createClient();

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .or(
      `title.ilike.%${keyword}%,category.ilike.%${keyword}%,tags.cs.{${keyword}}`,
    );

  if (error) return result;

  if (data) {
    const results = data as PostType[];
    const lowerKeyword = keyword.toLowerCase();

    results.forEach((post) => {
      if (post.Title.toLowerCase().includes(lowerKeyword))
        result.toTitle.push(post);
      if (post.Category.toLowerCase().includes(lowerKeyword))
        result.toCategory.push(post);
      if (
        post.Tags &&
        post.Tags.some((tag) => tag.toLowerCase().includes(lowerKeyword))
      )
        result.toTag.push(post);
    });
  }
  return result;
};
