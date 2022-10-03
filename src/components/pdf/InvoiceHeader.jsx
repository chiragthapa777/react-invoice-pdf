import { View, Text, StyleSheet } from '@react-pdf/renderer'
import React from 'react'

const styles = StyleSheet.create({
    header:{
      display:'flex',
      flexDirection:"row",
      justifyContent:"space-between"
    },
    headerRight:{
      fontSize:35,
      textTransform:'uppercase',
      fontWeight:700
    },
    headerLeft:{
    fontWeight:700,
      fontSize:28,
      textTransform:'uppercase',
    }
  });

export default function InvoiceHeader() {
  return (
    <View style={styles.header}>
    <View >
      <Text style={styles.headerLeft}>Pasal</Text>
      <Text>Pasal - multivendor ecommerce online store</Text>
      <Text>www.pasal.com</Text>
      <Text>Nepal, Kathmandu</Text>
    </View>
    <View >
      <Text style={styles.headerRight}>Invoice</Text>
    </View>
  </View>
  )
}
