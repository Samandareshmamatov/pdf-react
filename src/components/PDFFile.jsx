import React from "react";
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  View,
} from "@react-pdf/renderer";
import TourismLogo from "../assets/img/tourism_logo.png";
import qrCode from "../assets/img/qrcode.png";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  block: {
    fontSize: 10,
    border: "2px solid #999",
    width: "40%",
    margin: "1px",
    paddingHorizontal: 3,
    fontWeight: 600,
    paddingTop: 3,
    paddingBottom: 2,
    flexDirection: "row",
    justifyContent: "center",
  },
  blockRight: {
    fontSize: 9,
    border: "2px solid #999",
    margin: "1px",
    paddingTop: 4,
    paddingBottom: 2,
    paddingHorizontal: 3,
    flexGrow: 1,
    position: "relative",
    width: "62%",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    marginTop: 40,
    marginBottom: 40,
    height: 80,
  },
  imageQR: {
    width: 60,
    marginTop: 30,
    marginBottom: 15,
    height: 60,
    position: "absolute",
    bottom: 0,
    right: 10,
  },
  textHeader: {
    fontSize: 9,
    margin: "1px",
    paddingTop: 4,
    paddingHorizontal: 3,
  },
  textHeaderBold: {
    fontSize: 10,
    fontWeight: "bold",
  },
  textHeaderEnd: {
    position: "absolute",
    bottom: 5,
    right: 10,
  },
  header: {
    marginBottom: 20,
    fontSize: 12,
    textAlign: "center",
    color: "gray",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 18,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "black",
  },
  parentStyle: {
    maxWidth: 500,
    width: "100%",
    // display: "flex",
    // padding: 5,
    padding: 0,
    // gap: "px",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const PDFFile = ({data}) => {
  console.log("chdata", data.childData)

  return (
    <Document>
      <Page size="A4" style={styles.body}>
        {/* <Text style={styles.header} fixed></Text> */}
        <View style={styles.parentStyle}>
          <View style={styles.block}>
            <Image style={styles.image} src={TourismLogo} />
          </View>
          <View style={styles.blockRight}>
            <Text style={{ ...styles.textHeader, marginTop: "-55" }}>
              <Text style={styles.textHeaderBold}>Mexmonxona:</Text> AMINABONU
              HOSTEL
            </Text>
            <Text style={styles.textHeader}>
              <Text style={styles.textHeaderBold}>Hudud:</Text> Samarkand
            </Text>
            <Text style={styles.textHeader}>
              <Text style={styles.textHeaderBold}>Manzil:</Text> G'ORI AMIR MFY,
              SHOXRUX 1-KO'CHASI 6-UY
            </Text>
            <Text style={{ ...styles.textHeader, marginBottom: 15 }}>
              <Text style={styles.textHeaderBold}>Xona Raqami:</Text>{" "}
              {data.numberRoom}
            </Text>
            <Image style={styles.imageQR} src={qrCode} />
            <Text style={styles.textHeaderEnd}>72-3617-2022</Text>
          </View>
        </View>
        <View style={styles.parentStyle}>
          <Text style={styles.block}>1. FAMILIYASI: </Text>
          <Text style={styles.blockRight}> {data.lastName}</Text>
        </View>
        <View style={styles.parentStyle}>
          <Text style={styles.block}>2. ISMI: </Text>
          <Text style={styles.blockRight}> {data.name}</Text>
        </View>
        <View style={styles.parentStyle}>
          <Text style={styles.block}>3. OTASINING ISMI: </Text>
          <Text style={styles.blockRight}>{data.givenName}</Text>
        </View>
        <View style={styles.parentStyle}>
          <Text style={styles.block}>4. TUG'ILGAN SANA: </Text>
          <Text style={styles.blockRight}> {data.birth}</Text>
        </View>
        <View style={styles.parentStyle}>
          <Text style={styles.block}>5. FUQAROLIGI:</Text>
          <Text style={styles.blockRight}> {data.nationality} </Text>
        </View>
        <View style={styles.parentStyle}>
          <Text style={styles.block}>6. HUJJAT: </Text>
          <Text style={styles.blockRight}>{data.passport}</Text>
        </View>
        <View style={styles.parentStyle}>
          <Text style={styles.block}>7. VIZA:</Text>
          <Text style={styles.blockRight}> {data.visa} </Text>
        </View>
        <View style={styles.parentStyle}>
          <Text style={styles.block}>8. KELGAN JOYI:</Text>
          <Text style={styles.blockRight}>{data.come}</Text>
        </View>
        <View style={styles.parentStyle}>
          <Text style={styles.block}>9. KPP:</Text>
          <Text style={styles.blockRight}> {data.kpp}</Text>
        </View>
        <View style={styles.parentStyle}>
          <Text style={{ ...styles.block, width: "100%" }}>
            10. U bilan birga 16 yoshgacha bo'lgan bolalar keldi : 
          </Text>
        </View>

        <View style={styles.parentStyle}>
          <Text style={styles.block}>Ismi</Text>
          <Text style={{ ...styles.block, width: "20%" }}>Yoshi</Text>
          <Text style={{ ...styles.block, width: "40%" }}>Tug'ilgan vaqti</Text>
        </View>
        {data.childData !== [] ? (
          <>
            <View style={styles.parentStyle}>
              <Text style={styles.block}>{data.childData[0]?.childName}</Text>
              <Text style={{ ...styles.block, width: "20%" }}>
                {data.childData[0]?.childAge}
              </Text>
              <Text style={{ ...styles.block, width: "40%" }}>
                {data.childData[0]?.childBirth}
              </Text>
            </View>
            <View style={styles.parentStyle}>
          <Text style={styles.block}>{data.childData[1]?.childName}</Text>
          <Text style={{ ...styles.block, width: "20%" }}>
            {data.childData[1]?.childAge}
          </Text>
          <Text style={{ ...styles.block, width: "40%" }}>
            {data.childData[1]?.childBirth}
          </Text>
        </View>
        <View style={styles.parentStyle}>
          <Text style={styles.block}>{data.childData[2]?.childName}</Text>
          <Text style={{ ...styles.block, width: "20%" }}>
            {data.childData[2]?.childAge}
          </Text>
          <Text style={{ ...styles.block, width: "40%" }}>
            {data.childData[2]?.childBirth}
          </Text>
        </View>
          </>
        ) : ""}

        <View style={styles.parentStyle}>
          <Text style={styles.block}>11. KELISH VAQTI: </Text>
          <Text style={styles.blockRight}>{data.comeTime}</Text>
        </View>
        <View style={styles.parentStyle}>
          <Text style={styles.block}>12. KETISHI VAQTI: </Text>
          <Text style={styles.blockRight}>{data.leaveTime} </Text>
        </View>
        <View style={styles.parentStyle}>
          <Text style={styles.block}>13. ADMINISTRATOR: </Text>
          <Text style={styles.blockRight}>{data.admission} </Text>
        </View>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} of ${totalPages}`
          }
          fixed
        ></Text>
      </Page>
    </Document>
  );
};

export default PDFFile;
