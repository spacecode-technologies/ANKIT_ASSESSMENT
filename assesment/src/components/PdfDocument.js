import React, { useState, useEffect } from 'react';
import { BlobProvider } from '@react-pdf/renderer';
import CircularProgress from '@material-ui/core/CircularProgress';

const PdfDocument = ({ title, document }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 1000);
  }, []);
  if (!ready) {
    return null;
  }
  if (!ready) {
    return null;
  } else {
    return (
      <BlobProvider document={document}>
        {({ url, loading, error }) => {
          if (loading) {
            return (
              <span>
                <CircularProgress disableShrink />
              </span>
            );
          }
          if (!loading && url) {
            return (
              <a href={url} download>
               Download '{title}' (PDF)
              </a>
            );
          }
          if (error) {
            console.error(error);
            return <p>An error occurred</p>;
          }
          return null;
        }}
      </BlobProvider>
    );
  }
};

export default PdfDocument;
