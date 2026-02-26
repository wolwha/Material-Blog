'use client';
import MDEditor from '@uiw/react-md-editor';
import '@uiw/react-md-editor/markdown-editor.css'; // 에디터 컴포넌트용
import '@uiw/react-markdown-preview/markdown.css'; // 렌더링된 미리보기용
import styles from './PostEdit.module.css';
import { usePostStore } from '@/stores/postStore';
import { resizeImage } from '@/utils/imageResizer';
import { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';

export default function PostEdit() {
  const markdownComponents: Components = {
    p: (props: any) => <div {...props}>{props.children}</div>,
    // 이미지 주석 처리 로직
    img: ({ node, ...props }) => (
      <figure
        className="my-8 flex flex-col items-center"
        aria-label={
          props.alt && props.alt !== 'image' ? `${props.alt} 이미지` : '이미지'
        }
      >
        <img {...props} className={styles.responsiveImg} />
        {/* alt가 존재하면서 image가 아닐 경우 주석 표시 */}
        {props.alt && props.alt !== 'image' && (
          <figcaption className={styles.imageCaption}>{props.alt}</figcaption>
        )}
      </figure>
    ),
  };
  const { content, setContent, addPendingFile } = usePostStore();

  const handleDrops = async (e: React.DragEvent) => {
    e.preventDefault();
    // 이벤트 버블링 방지
    e.stopPropagation();
    const files = Array.from(e.dataTransfer.files);

    // 이미지 파일 필터링
    const imageFiles = files.filter((file) => file.type.startsWith('image/'));
    if (imageFiles.length === 0) return;

    // 에디터의 textarea 엘리먼트 불러오기
    const textarea = e.currentTarget.querySelector(
      'textarea',
    ) as HTMLTextAreaElement;

    for (const file of imageFiles) {
      // 이미지 리사이징
      const webpFile = await resizeImage(file);

      // 브라우저 메모리에 임시 URL 생성
      const blobUrl = URL.createObjectURL(webpFile);

      // 업로드 대기용으로 스토어에 보관
      addPendingFile(blobUrl, webpFile);

      // 이미지 마크다운 생성
      const imageMarkdown = `\n![image](${blobUrl})\n`;

      // 현재 에디터 커서 위치 또는 마지막에 마크다운 삽입
      if (textarea) {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const currentContent = content ?? '';

        const newContent =
          currentContent.substring(0, start) +
          imageMarkdown +
          currentContent.substring(end);

        setContent(newContent);
      } else {
        setContent((content ?? '') + imageMarkdown);
      }
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleChange = (newValue?: string) => {
    if (newValue !== undefined) {
      setContent(newValue);
    }
  };
  return (
    <>
      <div
        className="flex h-150 w-full grow flex-col"
        onDrop={handleDrops}
        // 브라우저 기본 동작 방지
        onDragOver={handleDragOver}
      >
        <MDEditor
          value={content ?? ''}
          onChange={handleChange}
          tabSize={2}
          height={600}
          preview="live" // preview를 'live'로 설정
          data-color-mode="light"
          previewOptions={{
            className: `${styles.markdownContent}`,
            // @ts-ignore: react-md-editor와 react-markdow 간의 버전 불일치로 인한 타입 오류 우회
            components: markdownComponents as unknown as any,
            remarkPlugins: [remarkGfm, remarkBreaks],
            rehypePlugins: [rehypeRaw, rehypeSlug],
          }}
          textareaProps={{
            'aria-label': '마크다운 본문 입력 박스',
          }}
          onDrop={(e) => e.preventDefault()}
        />
      </div>
    </>
  );
}
