import React from 'react';
import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
  Image,
} from '@react-pdf/renderer';
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },

  image: {
    width: '50%',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginTop: '1rem',
  },
  subheading: {
    fontSize: '0.8rem',
    marginTop: '0.5rem',
  },
  odd: {
    backgroundColor: '#E4E4E4',
  },
});
const ProductDetailsPdf = ({ data, img }) => {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.section}>
          <Image style={styles.image} source={img} />
          <Text style={styles.heading}>RING</Text>
          <Text style={styles.subheading}>11.2K GOLD red</Text>
          <Text style={styles.even}>DSGCO# RG505</Text>
          <Text>BG000050</Text>
          <Text style={styles.even}>SKU Size 1</Text>
          <Text>Gross Wt. 14.850g </Text>
          <Text style={styles.even}>Price 7150</Text>
        </View>
      </Page>
    </Document>
  );
};

export default ProductDetailsPdf;
