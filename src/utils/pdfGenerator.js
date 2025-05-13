import html2pdf from 'html2pdf.js';

/**
 * 将HTML内容导出为PDF
 * @param {string} elementId - 要导出为PDF的DOM元素ID
 * @param {string} filename - 导出的PDF文件名
 */
export const generatePdf = (elementId, filename = 'markdown-document.pdf') => {
  const element = document.getElementById(elementId);
  
  if (!element) {
    console.error(`Element with ID "${elementId}" not found.`);
    return;
  }

  const options = {
    margin: [10, 10, 10, 10],
    filename: filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  // 创建一个克隆的元素，以便我们可以添加一些额外的样式
  const clonedElement = element.cloneNode(true);
  clonedElement.style.width = '210mm'; // A4宽度
  clonedElement.style.padding = '15mm';
  clonedElement.style.backgroundColor = 'white';
  
  // 将克隆的元素添加到DOM中，但设置为不可见
  clonedElement.style.position = 'absolute';
  clonedElement.style.left = '-9999px';
  document.body.appendChild(clonedElement);

  // 生成PDF
  html2pdf()
    .from(clonedElement)
    .set(options)
    .save()
    .then(() => {
      // 清理：从DOM中移除克隆的元素
      document.body.removeChild(clonedElement);
    });
};

export default generatePdf;
