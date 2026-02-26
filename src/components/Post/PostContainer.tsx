import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
// 🌟 1. 구문 강조 라이브러리 불러오기 (Prism 방식이 지원 언어가 많습니다)
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// 🌟 2. 원하는 테마 불러오기 (VS Code 다크 테마 예시)
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './Edit/PostEdit.module.css';
import remarkBreaks from 'remark-breaks';

// ... (import 부분은 동일) ...

export default function PostContainer({ children }: { children: string }) {
  const markdownComponents: Components = {
    p: (props) => <p {...props}>{props.children}</p>,
    // 이미지 주석 처리 로직
    img: ({ node, ...props }) => (
      <figure
        className="my-8 flex flex-col"
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
    // 🌟 클래스를 제거하고 태그만 남겨 CSS가 온전히 제어하게 합니다.
    h2: (props) => <h2 {...props} />,
    h3: (props) => <h3 {...props} />,
    ul: (props) => <ul {...props} />,
    ol: (props) => <ol {...props} />,
    li: (props) => <li {...props} />,

    // SyntaxHighlighter 로직
    code(props) {
      // 🌟 해결: ref를 밖으로 빼내서 rest에 포함되지 않게 만듭니다.
      const { children, className, node, ref, ...rest } = props;

      const match = /language-(\w+)/.exec(className || '');

      return match ? (
        <SyntaxHighlighter
          {...rest} // 이제 ref가 빠진 안전한 props만 전달됩니다.
          PreTag="div"
          language={match[1]}
          style={vscDarkPlus}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        // 인라인 코드일 때는 원래대로 ref를 붙여줍니다.
        <code ref={ref} {...rest} className={className}>
          {children}
        </code>
      );
    },
  };
  return (
    <div
      className={`prose prose-lg prose-slate dark:prose-invert mb-10 w-full max-w-full sm:w-auto sm:max-w-202.5 ${styles.markdownContent}`}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        rehypePlugins={[rehypeRaw, rehypeSlug]}
        components={markdownComponents}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
