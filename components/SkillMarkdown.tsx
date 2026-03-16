import ReactMarkdown from 'react-markdown';

interface SkillMarkdownProps {
  content: string;
  className?: string;
}

export function SkillMarkdown({ content, className = '' }: SkillMarkdownProps) {
  const isInverted = className.includes('prose-invert');
  const textColor = isInverted ? 'text-gray-100' : 'text-gray-600';
  const headingColor = isInverted ? 'text-white' : 'text-gray-900';
  
  return (
    <div className={`prose prose-gray max-w-none ${className}`}>
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className={`text-3xl font-bold ${headingColor} mb-6 mt-8 first:mt-0`}>
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className={`text-2xl font-bold ${headingColor} mb-6 mt-12 border-b ${isInverted ? 'border-gray-700' : 'border-gray-100'} pb-4`}>
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className={`text-xl font-semibold ${headingColor} mb-4 mt-8`}>
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className={`text-lg font-semibold ${headingColor} mb-3 mt-6`}>
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className={`${textColor} leading-relaxed mb-4`}>
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="space-y-3 mb-6 ml-6">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="space-y-3 mb-6 ml-6 list-decimal">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className={`${textColor} leading-relaxed`}>
              {children}
            </li>
          ),
          code: ({ inline, children, ...props }: any) => {
            if (inline) {
              return (
                <code className={`px-1.5 py-0.5 rounded ${isInverted ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-900'} text-sm font-mono`} {...props}>
                  {children}
                </code>
              );
            }
            return (
              <code className={`block ${isInverted ? 'bg-gray-800' : 'bg-gray-900'} p-4 rounded-lg text-sm font-mono overflow-x-auto mb-6`} style={{ color: isInverted ? '#f3f4f6' : '#f3f4f6' }} {...props}>
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="mb-6">
              {children}
            </pre>
          ),
          blockquote: ({ children }) => (
            <blockquote className={`border-l-4 ${isInverted ? 'border-gray-600' : 'border-gray-300'} pl-4 italic ${textColor} my-6`}>
              {children}
            </blockquote>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors"
              target={href?.startsWith('http') ? '_blank' : undefined}
              rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className={`font-semibold ${headingColor}`}>
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className={`italic ${isInverted ? 'text-gray-300' : 'text-gray-700'}`}>
              {children}
            </em>
          ),
          hr: () => (
            <hr className="my-8 border-gray-200" />
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-gray-50">
              {children}
            </thead>
          ),
          tbody: ({ children }) => (
            <tbody className="bg-white divide-y divide-gray-200">
              {children}
            </tbody>
          ),
          tr: ({ children }) => (
            <tr>
              {children}
            </tr>
          ),
          th: ({ children }) => (
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className={`px-4 py-3 text-sm ${textColor}`}>
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
