import React, { useRef } from 'react';
import { useReactToPrint } from '@react-pdf-viewer/react-to-pdf';
import { Table } from 'antd';

const PrintButton = ({ columns, dataSource }) => {
  const pdfRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => pdfRef.current,
  });

  return (
    <div>
      {/* Your table or content to be printed using Ant Design components */}
      <Table columns={columns} dataSource={dataSource} />

      {/* Button to trigger the PDF generation */}
      <button onClick={handlePrint}>Generate PDF</button>

      {/* Hidden div containing the content to be printed */}
      <div style={{ display: 'none' }}>
        <div ref={pdfRef}>
          {/* Same content as above using Ant Design components */}
          <Table columns={columns} dataSource={dataSource} />
        </div>
      </div>
    </div>
  );
};

export default PrintButton;
