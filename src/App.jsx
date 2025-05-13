import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState('# Hello, Markdown!');
  const [html, setHtml] = useState('');

  // 简单的Markdown转HTML函数
  const convertMarkdownToHtml = (md) => {
    // 这是一个非常基础的转换，只处理标题和段落
    return md
      .replace(/^# (.+)$/gm, '<h1>$1</h1>')
      .replace(/^## (.+)$/gm, '<h2>$1</h2>')
      .replace(/^### (.+)$/gm, '<h3>$1</h3>')
      .replace(/\n\n/gm, '</p><p>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>');
  };

  useEffect(() => {
    setHtml(convertMarkdownToHtml(markdown));
  }, [markdown]);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Markdown编辑器</h1>
        <button onClick={() => alert('PDF导出功能将在这里实现')}>导出PDF</button>
      </header>
      <div className="editor-container">
        <div className="editor-panel">
          <textarea 
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="markdown-input"
          />
        </div>
        <div className="preview-panel">
          <div 
            dangerouslySetInnerHTML={{ __html: html }} 
            className="markdown-preview"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
