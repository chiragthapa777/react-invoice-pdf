import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import InvoiceHeader from "./pdf/InvoiceHeader";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    width: 300,
    padding: "30px",
    fontSize: 12,
    lineHeight: 1.5,
    fontFamily: "Open Sans",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerRight: {
    fontSize: 35,
    textTransform: "uppercase",
    fontWeight: 700,
  },
  headerLeft: {
    fontWeight: 700,
    fontSize: 28,
    textTransform: "uppercase",
  },
  userInfo: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
  userInfoCol: {
    width: "50%",
  },
  details: {
    marginTop: 20,
  },
  typoHeader: {
    fontSize: 15,
    fontWeight: 600,
  },
  table: {
    marginTop: 20,
    border: "1px solid black",
    textAlign: "center",
  },
  tableHead: {
    fontWeight: 600,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    textTransform: "uppercase",
    padding: "3px auto",
  },
  tabeBody: {
    borderTop: "1px solid black",
    lineHeight: 2,
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  tableSn: {
    borderRight: "1px solid black",
    width: "5%",
    padding: "3px",
  },
  tableItem: {
    textAlign: "left",
    borderRight: "1px solid black",
    padding: "3px",
    width: "45%",
  },
  tableRate: {
    borderRight: "1px solid black",
    padding: "3px",
    width: "18%",
  },
  tableQty: {
    borderRight: "1px solid black",
    padding: "3px",
    width: "15%",
  },
  tableAmt: {
    padding: "3px",
    width: "19%",
  },
  tabeBase: {
    lineHeight: 2,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    paddingTop:"10px"
  },
  baseRight:{
    width:"50%"
  },  
  baseLeft:{
    width:"50%",
  },
  baseitem:{
    width:"100%",
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-between",
    padding:"0px 10px",
    fontWeight:700,
    fontSize:14
  }
});
Font.register({
  family: "Open Sans",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf",
      fontWeight: 600,
    },
  ],
});

export default function InvoicePdf() {
  return (
    <Document pageMode="fullScreen">
      <Page size="A4" style={styles.page} pageMode="fullScreen">
        <View style={styles.header}>
          <View>
            <Text style={styles.headerLeft}>Pasal</Text>
            <Text>Pasal - multivendor ecommerce online store</Text>
            <Text>www.pasal.com</Text>
            <Text>Nepal, Kathmandu</Text>
          </View>
          <View>
            <Text style={styles.headerRight}>Invoice</Text>
          </View>
        </View>
        <View style={styles.userInfo}>
          <View style={styles.userInfoCol}>
            <Text style={styles.typoHeader}>Bill to :</Text>
            <Text>Name : Chirag thapa</Text>
            <Text>Email : Chiragthapa@gmail.com</Text>
            <Text>Phone : 9810335434</Text>
          </View>
          <View style={styles.userInfoCol}>
            <Text style={styles.typoHeader}>Shipping Address : </Text>
            <Text>Province : Bagmati</Text>
            <Text>District : Lalitpur</Text>
            <Text>Ward no : 14</Text>
            <Text>Address : Thasikhel</Text>
          </View>
        </View>
        <View style={styles.details}>
          <Text style={styles.typoHeader}>Invoice Detail :</Text>
          <Text>Order Number : 834iu34</Text>
          <Text>Order Date : 2314/235/231</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tableHead}>
            <Text style={styles.tableSn}>sn</Text>
            <Text style={styles.tableItem}>Items</Text>
            <Text style={styles.tableRate}>rate</Text>
            <Text style={styles.tableQty}>quantity</Text>
            <Text style={styles.tableAmt}>amount </Text>
          </View>
          <View style={styles.tabeBody}>
            <Text style={styles.tableSn}>999</Text>
            <Text style={styles.tableItem}>Jeans pant with grunch</Text>
            <Text style={styles.tableRate}>22000</Text>
            <Text style={styles.tableQty}>2</Text>
            <Text style={styles.tableAmt}>100000 </Text>
          </View>
          <View style={styles.tabeBody}>
            <Text style={styles.tableSn}>999</Text>
            <Text style={styles.tableItem}>Jeans pant with grunch</Text>
            <Text style={styles.tableRate}>22000</Text>
            <Text style={styles.tableQty}>2</Text>
            <Text style={styles.tableAmt}>100000 </Text>
          </View>
          <View style={styles.tabeBody}>
            <Text style={styles.tableSn}>999</Text>
            <Text style={styles.tableItem}>Jeans pant with grunch</Text>
            <Text style={styles.tableRate}>22000</Text>
            <Text style={styles.tableQty}>2</Text>
            <Text style={styles.tableAmt}>100000 </Text>
          </View>
        </View>
        <View style={styles.tabeBase}>
          <View style={styles.baseLeft}></View>
          <View style={styles.baseRight}>
            <View style={styles.baseitem}>
              <Text>Total :</Text>
              <Text>20000</Text>
            </View>
            <View style={styles.baseitem}>
              <Text>Discount :</Text>
              <Text>200</Text>
            </View>
            <View style={styles.baseitem}>
              <Text>Sub total :</Text>
              <Text>1900</Text>
            </View>
            <View style={styles.baseitem}>
              <Text>Delivery charge :</Text>
              <Text>100</Text>
            </View>
            <View style={styles.baseitem}>
              <Text>Delivery charge :</Text>
              <Text>100</Text>
            </View>
            <View style={styles.baseitem}>
              <Text>Paid / Credit :</Text>
              <Text>-1000</Text>
            </View>
            <View style={styles.baseitem}>
              <Text>Due Amt :</Text>
              <Text>Rs 900</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
