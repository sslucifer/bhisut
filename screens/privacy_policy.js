import React, { Component } from 'react';
import { Modal, TouchableHighlight, View, ScrollView, StyleSheet, Alert} from 'react-native';
import {Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';


class ModalExample extends Component {
   state = {
      modalVisible: false,
   }
   toggleModal(visible) {
      this.setState({ modalVisible: visible });
   }
   render() {
      return (
         <View>
            <Modal animationType="fade"
                   transparent={true}
                   visible={this.state.modalVisible}
                   onRequestClose={() => {
                   Alert.alert("Modal has been closed."); }}>
        
                <View style={styles.modalView}>

                  <View style={{flexDirection:"row-reverse",alignItems:"flex-start",marginBottom:"5%"}}>
                     <TouchableHighlight
                           onPress = {() => {
                              this.toggleModal(!this.state.modalVisible)}}>
                           <Icon name='times' 
                           size={30} 
                           color='black'/>
                     </TouchableHighlight>
                  </View>

                  <ScrollView contentContainerStyle={styles.container_1}
                              persistentScrollbar>
                     
                     <Text h2>
                           Privacy Policy
                     </Text>
                     <Text h4> {"\n"}Personal Information</Text>
                     <Text>DOSAR (“DOSAR”) is the licensed owner of the brand dosar and the app dosar . DOSAR respects your privacy. This Privacy Policy provides succinctly the manner your data is collected and used by DOSAR on the app. As an user of the app/ Customer you are advised to please read the Privacy Policy carefully. By accessing the services provided by the app you agree to the collection and use of your data by DOSAR in the manner provided in this Privacy Policy.</Text>
                     
                     <Text h4> {"\n"}What information is, or may be, collected form you?</Text>
                     <Text>As part of the registration process on the Site, DOSAR may collect the following personally identifiable information about you: Name including first and last name, alternate email address, mobile phone number and contact details, Postal code, Demographic profile (like your age, gender, occupation, education, address etc.) and information about the products you browse or buy , the links you click on the app, the number of times you access the app and any such browsing information.</Text>
                  
                     <Text h4> {"\n"}How do we Collect the Information ?</Text>
                     <Text>DOSAR will collect personally identifiable information about you only as part of a voluntary registration process, on-line survey or any combination thereof. The app may contain links to other Web sites. DOSAR is not responsible for the privacy practices of such Web sites which it does not own, manage or control. The Site and third-party vendors, including Google, use first-party cookies (such as the Google Analytics cookie) and third-party cookies (such as the DoubleClick cookie) together to inform, optimize, and serve ads based on someone's past visits to the Site.</Text>
                  
                     <Text h4> {"\n"}How is information used ?</Text>
                     <Text>DOSAR will use your personal information to provide personalized features to you on the app and to provide for promotional offers to you through the app and other channels. DOSAR will also provide this information to its business associates and partners to get in touch with you when necessary to provide the services requested by you. DOSAR will use this information to preserve transaction history as governed by existing law or policy. DOSAR may also use contact information internally to direct its efforts for product improvement, to contact you as a survey respondent, to notify you if you win any contest; and to send you promotional materials from its contest sponsors or advertisers. DOSAR will also use this information to serve various promotional and advertising materials to you via display advertisements through the Google Ad network on third party websites. You can opt out of Google Analytics for Display Advertising and customize Google Display network ads using the Ads Preferences Manager. Information about Customers on an aggregate (exlcuding any information that may identify you specifically) covering Customer transaction data and Customer demographic and location data may be provided to partners of DOSAR for the purpose of creating additional features on the app, creating appropriate merchandising or creating new products and services and conducting marketing research and statistical analysis of customer behaviour and transactions.</Text>

                     <Text h4> {"\n"}With whom your information will be shared</Text>
                     <Text>DOSAR will not use your financial information for any purpose other than to complete a transaction with you. DOSAR does not rent, sell or share your personal information and will not disclose any of your personally identifiable information to third parties. In cases where it has your permission to provide products or services you've requested and such information is necessary to provide these products or services the information may be shared with DOSAR business associates and partners. DOSAR may, however, share consumer information on an aggregate with its partners or thrird parties where it deems necessary. In addition DOSAR may use this information for promotional offers, to help investigate, prevent or take action regarding unlawful and illegal activities, suspected fraud, potential threat to the safety or security of any person, violations of the Site’s terms of use or to defend against legal claims; special circumstances such as compliance with subpoenas, court orders, requests/order from legal authorities or law enforcement agencies requiring such disclosure. will not use your financial information for any purpose other than to complete a transaction with you. DOSAR does not rent, sell or share your personal information and will not disclose any of your personally identifiable information to third parties. In cases where it has your permission to provide products or services you've requested and such information is necessary to provide these products or services the information may be shared with DOSAR's business associates and partners. DOSAR may, however, share consumer information on an aggregate with its partners or thrird parties where it deems necessary. In addition DOSAR may use this information for promotional offers, to help investigate, prevent or take action regarding unlawful and illegal activities, suspected fraud, potential threat to the safety or security of any person, violations of the Site’s terms of use or to defend against legal claims; special circumstances such as compliance with subpoenas, court orders, requests/order from legal authorities or law enforcement agencies requiring such disclosure.</Text>

                     <Text h4> {"\n"}What Choice are available to you regarding collection, use and distribution of your information ?</Text>
                     <Text>To protect against the loss, misuse and alteration of the information under its control, DOSAR has in place appropriate physical, electronic and managerial procedures. For example, DOSAR servers are accessible only to authorized personnel and your information is shared with employees and authorised personnel on a need to know basis to complete the transaction and to provide the services requested by you. Although DOSAR will endeavour to safeguard the confidentiality of your personally identifiable information, transmissions made by means of the Internet cannot be made absolutely secure. By using this site, you agree that DOSAR will have no liability for disclosure of your information due to errors in transmission or unauthorized acts of third parties.</Text>

                     <Text h4> {"\n"}Refund Policy :-</Text>
                     <Text>This Policy applies to DOSAR App. We have provided extensive information for you to view the subscription plans before choosing to subscribe to us. If you have any questions, please write us at info@dosartv.com prior to subscribing to our services. We, being the service providers for contents available through APP, where you are expected to view plans of your choice after being paid for subscription. Unfortunately, all fees to DOSAR for such services are NON-REFUNDABLE. In case, because of any technical glitch at the time of online transaction, the transaction does not occur, the amount in process of transfer by default goes back into your bank account, automatically through Payment Gateway. {"\n\n"}NOTE :- PLEASE READ AND MAKE SURE YOU FULLY UNDERSTAND OUR REFUND POLICY PRIOR TO MAKING A PAYMENT.</Text>

                     <Text h4> {"\n"}DOSAR Service :-</Text>
                     <Text>1) You must be 18 years of age, or the age of majority in your provinence, territory or country, to become a member of DOSAR service. Minors may only use the service under the supervision of an adult. {"\n"}2) The DOSAR service and any content viewed through the service are for your personal and non commercial use only and may not be shared with individuals beyond your households. During your DOSAR membership we grant you a limited, non exclusive, non transferable right to access the DOSAR service and view DOSAR content. You agree not to use the service for public performances. {"\n"}3) You may view the DOSAR content primarily within the country in which you have established your account and only in geographic locations where we offer our service and have licensed such content. {"\n"}4) The member of devices in which you may simultaneously watch depends on your choosen subscription plan and is specified in the "Subscribe Page". {"\n"}5) The DOSAR service including the content library is regularly update. In addition, we continually test various aspects of our service including our website, promotional features and availability of DOSAR content. {"\n"}6) The quality of the display of the DOSAR content may vary from device to device, and may be affected by a variety of factors such as your location, the bandwidth available through and/or speed of your internet connection. HD, Ultra HD and HDR availability is subject of your internet service and device capabilities. Not all content in all formats. Subscription plans allows you to receive content in all formats.</Text>

                     <Text h4> {"\n"}GENERAL RESTRICTION :-</Text>
                     <Text>You may not{"\n"}1)Transfer, copy, display the digital content, excepts as permitted in this Agreement. {"\n"}2) Sell, Rent, Lease, Distribute it Broadcast any right to the Digital Content. {"\n"}3) Remove any proprietary notices or labels on the Digital Content. {"\n"}4) Attempt to disable, bypass, modify, defeat, or otherwise circumvent any digital rights management or other content protection system used as part of the service. {"\n"}5) Use the service or Digital Content for any commercial or illegal purpose.</Text>
                     <Text style={{fontWeight:"bold"}}>{"\n"}UNLESS YOU NOTIFY US BEFORE A CHARGE THAT YOU WANT TO CANCEL OR DO NOT WANT TO AUTO RENEW, YOU UNDERSTAND THAT YOUR SUBSCRIPTION WILL AUTOMATICALLY CONTINUE ANY YOU AUTHORIZE US (WITHOUT NOTICE TO YOU, UNLESS REQUIRED BY APPLICABLE LAW) TO COLLECT THE THEN - APPLICABLE PERIODIC SUBSCRIPTION FEE INCLUDING ANY TAXES, USING ANY PAYMENT METHOD WE HAVE ON FILE FOR YOU.</Text>

                     <Text h4> {"\n"}How can you correct inaccuracies in the information ?</Text>
                     <Text>To correct or update any information you have provided, the app allows you to do it online. In the event of loss of access details you can send an e-mail to: admin@dosartv.com</Text>

                     <Text h4> {"\n"}Policy updates</Text>
                     <Text>DOSAR reserves the right to change or update this policy at any time. Such changes shall be effective immediately upon posting to the Site.</Text>

                     <Text h4> {"\n"}Contact Information</Text>
                     <Text>DOSAR , 1Shiv mandir kadam tala, Siliguri ,West Bengal 734011 Email: info@dosartv.com</Text>

                  </ScrollView>
                </View>
        
            </Modal>
            
            
            <TouchableHighlight onPress = {() => {this.toggleModal(true)}}>
               <Text style = {styles.text}>Click Here</Text>
            </TouchableHighlight>
            
         </View>
      )
   }
}
export default ModalExample

const styles = StyleSheet.create ({
   container_1: {
      backgroundColor:"white",
      paddingVertical:'5%',
   },
  modalView: {
    marginVertical: '20%',
    marginHorizontal:'5%',
    backgroundColor: "white",
    borderRadius: 20,
    padding: '8%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  contentWrap: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  },
   text: {
    fontSize:18,
    color:"#1565c0",
    fontStyle:'italic',
    textDecorationLine:'underline'
   }
})