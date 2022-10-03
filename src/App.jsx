import React from "react";
import { PDFDownloadLink, PDFViewer,StyleSheet } from "@react-pdf/renderer";
import InvoicePdf from "./components/InvoicePdf";

const styles = StyleSheet.create({
  viewer:{
      width:450,
      height:600,
  }
});

export default function App() {
  return (
    <>
      <h1>Invoice pdf using react-pdf</h1>
      <div className="container">
        <PDFViewer style={styles.viewer} showToolbar={false}>
          <InvoicePdf />
        </PDFViewer>
      </div>
      <PDFDownloadLink document={<InvoicePdf />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink>
    </>
  );
}
