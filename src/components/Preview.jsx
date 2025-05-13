import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

// 配置marked使用highlight.js进行代码高亮
marked.setOptions({
  highlight: function(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value;
    }
    return hljs.highlightAuto(code).value;
  },
  breaks: true,
  gfm: true
});

const Preview = ({ markdown, height }) => {
  const [html, setHtml] = useState('');

  useEffect(() => {
    const renderedHtml = marked(markdown || '');
    setHtml(renderedHtml);
  }, [markdown]);

  return (
    <Box 
      width="100%" 
      height={height || "100%"} 
      overflow="auto" 
      padding={4}
      borderWidth="1px"
      borderRadius="md"
      borderColor="gray.200"
      dangerouslySetInnerHTML={{ __html: html }}
      id="markdown-preview"
      className="markdown-preview"
      sx={{
        'pre': {
          borderRadius: 'md',
          padding: '1rem',
          overflow: 'auto',
          background: 'gray.50',
        },
        'code': {
          fontFamily: 'monospace',
        },
        'h1, h2, h3, h4, h5, h6': {
          marginTop: '1.5rem',
          marginBottom: '1rem',
          fontWeight: 'bold',
        },
        'p': {
          marginBottom: '1rem',
        },
        'ul, ol': {
          paddingLeft: '2rem',
          marginBottom: '1rem',
        },
        'blockquote': {
          borderLeftWidth: '4px',
          borderLeftColor: 'gray.300',
          paddingLeft: '1rem',
          fontStyle: 'italic',
        },
        'table': {
          borderCollapse: 'collapse',
          width: '100%',
          marginBottom: '1rem',
        },
        'th, td': {
          borderWidth: '1px',
          padding: '0.5rem',
          textAlign: 'left',
        },
        'img': {
          maxWidth: '100%',
        }
      }}
    />
  );
};

export default Preview;
