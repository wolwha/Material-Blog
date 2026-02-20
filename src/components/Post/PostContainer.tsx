import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug'
// 🌟 1. 구문 강조 라이브러리 불러오기 (Prism 방식이 지원 언어가 많습니다)
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// 🌟 2. 원하는 테마 불러오기 (VS Code 다크 테마 예시)
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

// ... (import 부분은 동일) ...

export default function PostContainer({ children }: { children: string }) {
  return (
    <div className="prose prose-lg prose-slate dark:prose-invert w-full max-w-202.5 sm:w-auto">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]} 
        rehypePlugins={[rehypeRaw, rehypeSlug]}
        components={{
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
          }
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
