import React, { Component } from "react";
import { Divider } from 'antd';
import { Layout, Menu, Icon } from 'antd';
import { Statistic, Row, Col } from 'antd';
import { Input } from 'antd';
import { Select } from 'antd';
import { Button } from 'antd';
import { Radio } from 'antd';
import Header from './Header';
import { Tag, Tooltip, } from 'antd';
import './Toolbar.css'




function onChange(e) {
  console.log(`radio checked:${e.target.value}`);
}
const { TextArea } = Input;
const { Content, Footer, Sider } = Layout;
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;
const { Option, OptGroup } = Select;
const InputGroup = Input.Group;

function handleChange(value) {
  console.log(`selected ${value}`);
}



class PostJobs extends Component {
  state = {
    tags: ['Add skill'],
    inputVisible: false,
    inputValue: '',
  };

  handleClose = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    let { tags } = this.state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  };

  saveInputRef = input => (this.input = input);


  render() {
    const { tags, inputVisible, inputValue } = this.state;
    return (


      <div>
        <Header />

        <Layout >
          <Content style={{ backgroundColor: '#eceff1', height:696  }} >


            
              <div>
                <div style={{ position: "absolute", left: 300, top: 90 }} >
                  <label style={{ color: "black", marginLeft: 50, fontFamily: 'Quicksand' }}>JobTitle*</label>
                </div>
                <div style={{ position: "absolute", left: 350, top: 135 }}>
                  <Input placeholder="Job Title" style={{ width: "250px", marginRight: 20 }} />


                </div>
              </div>
              <div>
                <div style={{ position: "absolute", left: 650, top: 90 }}>
                  <label style={{ color: "black", fontFamily: 'Quicksand' }}>No of Positions*</label>
                </div>
                <div style={{ position: "absolute", left: 650, top: 135 }}>
                  <Input placeholder="No of Positions" style={{ width: "150px" }} />
                </div>
              </div>

            
            <div>
              <div style={{ position: "absolute", left: 350, top: 185 }}>
                <label style={{ color: "black", fontFamily: 'Quicksand' }}>Location*</label>
              </div>

              <div>
                <Select defaultValue="Job Location" style={{ width: 250, position: "absolute", left: 350, top: 215 }} onChange={handleChange}>

                  <OptGroup label="Major">
                    <Option value="Mumbai">Mumbai</Option>
                    <Option value="Delhi">Delhi</Option>
                    <Option value="kolkata">kolkata</Option>
                    <Option value="Chennai">Chennai</Option>
                    <Option value="Bangalore">Bangalore</Option>
                    <Option value="Hyderabad">Hyderabad</Option>
                    <Option value="Pune">Pune</Option>
                  </OptGroup>


                  <OptGroup label="Job Location">


                    <Option value="Adilabad">Adilabad</Option>
                    <Option value="Agra">Agra</Option>
                    <Option value="Ahmedabad">Ahmedabad</Option>
                    <Option value="Ahmednagar">Ahmednagar</Option>
                    <Option value="Aizawl">Aizawl</Option>
                    <Option value="Ajitgarh (Mohali)">Ajitgarh (Mohali)</Option>
                    <Option value="Ajmer">Ajmer</Option>
                    <Option value="Akola">Akola</Option>
                    <Option value="Alappuzha">Alappuzha</Option>
                    <Option value="Aligarh">Aligarh</Option>
                    <Option value="Alirajpur">Alirajpur</Option>
                    <Option value="Allahabad">Allahabad</Option>
                    <Option value="Almora">Almora</Option>
                    <Option value="Alwar">Alwar</Option>
                    <Option value="Ambala">Ambala</Option>
                    <Option value="Ambedkar Nagar">Ambedkar Nagar</Option>
                    <Option value="Amreli district">Amreli district</Option>
                    <Option value="Amritsa">Amritsar</Option>
                    <Option value="Anand">Anand</Option>
                    <Option value="Anantapur">Anantapur</Option>
                    <Option value="Anantnag">Anantnag</Option>
                    <Option value="Angul">Angul</Option>
                    <Option value="Anjaw">Anjaw</Option>
                    <Option value="Anuppur">Anuppur</Option>
                    <Option value="Araria">Araria</Option>
                    <Option value="Ariyalur">Ariyalur</Option>
                    <Option value="Arwal">Arwal</Option>
                    <Option value="Ashok Nagar">Ashok Nagar</Option>
                    <Option value="Auraiya">Auraiya</Option>
                    <Option value="Aurangabad">Aurangabad</Option>
                    <Option value="Azamgarh">Azamgarh</Option>
                    <Option value="Badgam">Badgam</Option>
                    <Option value="Bagalkot">Bagalkot</Option>
                    <Option value="Bageshwar">Bageshwar</Option>
                    <Option value="Bagpat">Bagpat</Option>
                    <Option value="Bahraich">Bahraich</Option>
                    <Option value="Baksa">Baksa</Option>
                    <Option value="Balaghat">Balaghat</Option>
                    <Option value="Balangir">Balangir</Option>
                    <Option value="Balasore">Balasore</Option>
                    <Option value="Ballia">Ballia</Option>
                    <Option value="Balrampur">Balrampur</Option>
                    <Option value="Banaskantha">Banaskantha</Option>
                    <Option value="Banda">Banda</Option>
                    <Option value="Bandipora">Bandipora</Option>
                    <Option value="Bangalore Rura">Bangalore Rural</Option>
                    <Option value="Bangalore Urban">Bangalore Urban</Option>
                    <Option value="Banka">Banka</Option>
                    <Option value="Bankura">Bankura</Option>
                    <Option value="Banswara">Banswara</Option>
                    <Option value="Barabanki">Barabanki</Option>
                    <Option value="Baramulla">Baramulla</Option>
                    <Option value="Baran">Baran</Option>
                    <Option value="Bardhaman">Bardhaman</Option>
                    <Option value="Bareilly">Bareilly</Option>
                    <Option value="Bargarh (Baragarh)">Bargarh (Baragarh)</Option>
                    <Option value="Barmer">Barmer</Option>
                    <Option value="Barnala">Barnala</Option>
                    <Option value="Barpeta">Barpeta</Option>
                    <Option value="Barwani">Barwani</Option>
                    <Option value="Bastar">Bastar</Option>
                    <Option value="Basti">Basti</Option>
                    <Option value="Bathinda">Bathinda</Option>
                    <Option value="Beed">Beed</Option>
                    <Option value="Begusarai">Begusarai</Option>
                    <Option value="Bellary">Bellary</Option>
                    <Option value="Betul">Betul</Option>
                    <Option value="Bhadrak">Bhadrak</Option>
                    <Option value="Bhagalpur">Bhagalpur</Option>
                    <Option value="Bhandara">Bhandara</Option>
                    <Option value="Bharatpur">Bharatpur</Option>
                    <Option value="Bharuch">Bharuch</Option>
                    <Option value="Bhavnagar">Bhavnagar</Option>
                    <Option value="Bhilwara">Bhilwara</Option>
                    <Option value="Bhind">Bhind</Option>
                    <Option value="Bhiwani">Bhiwani</Option>
                    <Option value="Bhojpur">Bhojpur</Option>
                    <Option value="Bhopal">Bhopal</Option>
                    <Option value="Bidar">Bidar</Option>
                    <Option value="Bijapur">Bijapur</Option>
                    <Option value="Bijnor">Bijnor</Option>
                    <Option value="Bikaner">Bikaner</Option>
                    <Option value="Bilaspur">Bilaspur</Option>
                    <Option value="Bilaspur">Bilaspur</Option>
                    <Option value="Birbhum">Birbhum</Option>
                    <Option value="Bishnupur">Bishnupur</Option>
                    <Option value="Bokaro">Bokaro</Option>
                    <Option value="Bongaigaon">Bongaigaon</Option>
                    <Option value="Boudh (Bauda)">Boudh (Bauda)</Option>
                    <Option value="Budaun">Budaun</Option>
                    <Option value="Bulandshahr">Bulandshahr</Option>
                    <Option value="Buldhana">Buldhana</Option>
                    <Option value="Bundi">Bundi</Option>
                    <Option value="Burhanpur">Burhanpur</Option>
                    <Option value="Buxar">Buxar</Option>
                    <Option value="Cachar">Cachar</Option>
                    <Option value="Central Delhi">Central Delhi</Option>
                    <Option value="Chamarajnagar">Chamarajnagar</Option>
                    <Option value="Chamba">Chamba</Option>
                    <Option value="Chamoli">Chamoli</Option>
                    <Option value="Champawat">Champawat</Option>
                    <Option value="Champhai">Champhai</Option>
                    <Option value="Chandauli">Chandauli</Option>
                    <Option value="Chandel">Chandel</Option>
                    <Option value="Chandigarh">Chandigarh</Option>
                    <Option value="Chandrapur">Chandrapur</Option>
                    <Option value="Changlang">Changlang</Option>
                    <Option value="Chatra">Chatra</Option>
                    <Option value="Chennai">Chennai</Option>
                    <Option value="Chhatarpur">Chhatarpur</Option>
                    <Option value="Chhatrapati Shahuji Maharaj Nagar">Chhatrapati Shahuji Maharaj Nagar</Option>
                    <Option value="Chhindwara">Chhindwara</Option>
                    <Option value="Chikkaballapur">Chikkaballapur</Option>
                    <Option value="Chikkamagaluru">Chikkamagaluru</Option>
                    <Option value="Chirang">Chirang</Option>
                    <Option value="Chitradurga">Chitradurga</Option>
                    <Option value="Chitrakoot">Chitrakoot</Option>
                    <Option value="Chittoor">Chittoor</Option>
                    <Option value="Chittorgarh">Chittorgarh</Option>
                    <Option value="Churachandpur">Churachandpur</Option>
                    <Option value="Churu">Churu</Option>
                    <Option value="Coimbatore">Coimbatore</Option>
                    <Option value="Cooch Behar">Cooch Behar</Option>
                    <Option value="Cuddalore">Cuddalore</Option>
                    <Option value="Cuttack">Cuttack</Option>
                    <Option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</Option>
                    <Option value="Dahod">Dahod</Option>
                    <Option value="Dakshin Dinajpur">Dakshin Dinajpur</Option>
                    <Option value="Dakshina Kannada">Dakshina Kannada</Option>
                    <Option value="Daman">Daman</Option>
                    <Option value="Damoh">Damoh</Option>
                    <Option value="Dantewada">Dantewada</Option>
                    <Option value="Darbhanga">Darbhanga</Option>
                    <Option value="Darjeeling">Darjeeling</Option>
                    <Option value="Darrang">Darrang</Option>
                    <Option value="Datia">Datia</Option>
                    <Option value="Dausa">Dausa</Option>
                    <Option value="Davanagere">Davanagere</Option>
                    <Option value="Debagarh (Deogarh)">Debagarh (Deogarh)</Option>
                    <Option value="Dehradun">Dehradun</Option>
                    <Option value="Deoghar">Deoghar</Option>
                    <Option value="Deoria">Deoria</Option>
                    <Option value="Dewas">Dewas</Option>
                    <Option value="Dhalai">Dhalai</Option>
                    <Option value="Dhamtari">Dhamtari</Option>
                    <Option value="Dhanbad">Dhanbad</Option>
                    <Option value="Dhar">Dhar</Option>
                    <Option value="Dharmapuri">Dharmapuri</Option>
                    <Option value="Dharwad">Dharwad</Option>
                    <Option value="Dhemaji">Dhemaji</Option>
                    <Option value="Dhenkanal">Dhenkanal</Option>
                    <Option value="Dholpur">Dholpur</Option>
                    <Option value="Dhubri">Dhubri</Option>
                    <Option value="Dhule">Dhule</Option>
                    <Option value="Dibang Valley">Dibang Valley</Option>
                    <Option value="Dibrugarh">Dibrugarh</Option>
                    <Option value="Dima Hasao">Dima Hasao</Option>
                    <Option value="Dimapur">Dimapur</Option>
                    <Option value="Dindigul">Dindigul</Option>
                    <Option value="Dindori">Dindori</Option>
                    <Option value="Diu">Diu</Option>
                    <Option value="Doda">Doda</Option>
                    <Option value="Dumka">Dumka</Option>
                    <Option value="Dungapur">Dungapur</Option>
                    <Option value="Durg">Durg</Option>
                    <Option value="East Champaran">East Champaran</Option>
                    <Option value="East Delhi">East Delhi</Option>
                    <Option value="East Garo Hills">East Garo Hills</Option>
                    <Option value="East Khasi Hills">East Khasi Hills</Option>
                    <Option value="East Siang">East Siang</Option>
                    <Option value="East Sikkim">East Sikkim</Option>
                    <Option value="East Singhbhum">East Singhbhum</Option>
                    <Option value="Eluru">Eluru</Option>
                    <Option value="Ernakulam">Ernakulam</Option>
                    <Option value="Erode">Erode</Option>
                    <Option value="Etah">Etah</Option>
                    <Option value="Etawah">Etawah</Option>
                    <Option value="Faizabad">Faizabad</Option>
                    <Option value="Faridabad">Faridabad</Option>
                    <Option value="Faridkot">Faridkot</Option>
                    <Option value="Farrukhabad">Farrukhabad</Option>
                    <Option value="Fatehabad">Fatehabad</Option>
                    <Option value="Fatehgarh Sahib">Fatehgarh Sahib</Option>
                    <Option value="Fatehpur">Fatehpur</Option>
                    <Option value="Fazilka">Fazilka</Option>
                    <Option value="Firozabad">Firozabad</Option>
                    <Option value="Firozpur">Firozpur</Option>
                    <Option value="Gadag">Gadag</Option>
                    <Option value="Gadchiroli">Gadchiroli</Option>
                    <Option value="Gajapati">Gajapati</Option>
                    <Option value="Ganderbal">Ganderbal</Option>
                    <Option value="Gandhinaga">Gandhinagar</Option>
                    <Option value="Ganganagar">Ganganagar</Option>
                    <Option value="Ganjam">Ganjam</Option>
                    <Option value="Garhwa">Garhwa</Option>
                    <Option value="Gautam Buddh Nagar">Gautam Buddh Nagar</Option>
                    <Option value="Gaya">Gaya</Option>
                    <Option value="Ghazipur">Ghaziabad</Option>
                    <Option value="Ghazipur">Ghazipur</Option>
                    <Option value="Giridih">Giridih</Option>
                    <Option value="Goalpara">Goalpara</Option>
                    <Option value="Godda">Godda</Option>
                    <Option value="Golaghate">Golaghat</Option>
                    <Option value="Gonda">Gonda</Option>
                    <Option value="Gondia">Gondia</Option>
                    <Option value="Gopalganj">Gopalganj</Option>
                    <Option value="Gorakhpur">Gorakhpur</Option>
                    <Option value="Gorakhpur">Gorakhpur</Option>
                    <Option value="Gumla">Gumla</Option>
                    <Option value="Guna">Guna</Option>
                    <Option value="Guntur">Guntur</Option>
                    <Option value="Gurdaspur">Gurdaspur</Option>
                    <Option value="Gurgaon">Gurgaon</Option>
                    <Option value="Gwalior">Gwalior</Option>
                    <Option value="Hailakandi">Hailakandi</Option>
                    <Option value="Hamirpur">Hamirpur</Option>
                    <Option value="Hanumangarh">Hanumangarh</Option>
                    <Option value="Harda">Harda</Option>
                    <Option value="Hardoi">Hardoi</Option>
                    <Option value="Haridwar">Haridwar</Option>
                    <Option value="Hassan">Hassan</Option>
                    <Option value="Haveri district">Haveri district</Option>
                    <Option value="Hazaribag">Hazaribag</Option>
                    <Option value="Hingoli">Hingoli</Option>
                    <Option value="Hissar">Hissar</Option>
                    <Option value="Hooghly">Hooghly</Option>
                    <Option value="Hoshangabad">Hoshangabad</Option>
                    <Option value="Hoshiarpur">Hoshiarpur</Option>
                    <Option value="Howrah">Howrah</Option>
                    <Option value="Hyderabad">Hyderabad</Option>
                    <Option value="Idukki">Idukki</Option>
                    <Option value="Imphal East">Imphal East</Option>
                    <Option value="Imphal West">Imphal West</Option>
                    <Option value="Indore">Indore</Option>
                    <Option value="Jabalpur">Jabalpur</Option>
                    <Option value="Jagatsinghpur">Jagatsinghpur</Option>
                    <Option value="Jaintia Hills">Jaintia Hills</Option>
                    <Option value="Jaipur">Jaipur</Option>
                    <Option value="Jaisalmer">Jaisalmer</Option>
                    <Option value="Jajpur">Jajpur</Option>
                    <Option value="Jalandhar">Jalandhar</Option>
                    <Option value="Jalaun">Jalaun</Option>
                    <Option value="Jalgaon">Jalgaon</Option>
                    <Option value="Jalna">Jalna</Option>
                    <Option value="Jalore">Jalore</Option>
                    <Option value="Jalpaiguri">Jalpaiguri</Option>
                    <Option value="Jammu">Jammu</Option>
                    <Option value="Jamnagar">Jamnagar</Option>
                    <Option value="Jamtara">Jamtara</Option>
                    <Option value="Jamui">Jamui</Option>
                    <Option value="Janjgir-Champa">Janjgir-Champa</Option>
                    <Option value="Jashpur">Jashpur</Option>
                    <Option value="Jaunpur district">Jaunpur district</Option>
                    <Option value="Jehanabad">Jehanabad</Option>
                    <Option value="Jhabua">Jhabua</Option>
                    <Option value="Jhajjar">Jhajjar</Option>
                    <Option value="Jhalawar">Jhalawar</Option>
                    <Option value="Jhansi">Jhansi</Option>
                    <Option value="Jharsuguda">Jharsuguda</Option>
                    <Option value="Jhunjhunu">Jhunjhunu</Option>
                    <Option value="Jind">Jind</Option>
                    <Option value="Jodhpur">Jodhpur</Option>
                    <Option value="Jorhat">Jorhat</Option>
                    <Option value="Junagadh">Junagadh</Option>
                    <Option value="Jyotiba Phule Nagar">Jyotiba Phule Nagar</Option>
                    <Option value="Kabirdham (formerly Kawardha)">Kabirdham (formerly Kawardha)</Option>
                    <Option value="Kadapa">Kadapa</Option>
                    <Option value="Kaimur">Kaimur</Option>
                    <Option value="Kaithal">Kaithal</Option>
                    <Option value="Kakinada">Kakinada</Option>
                    <Option value="Kalahandi">Kalahandi</Option>
                    <Option value="Kamrup">Kamrup</Option>
                    <Option value="Kamrup Metropolitan">Kamrup Metropolitan</Option>
                    <Option value="Kanchipuram">Kanchipuram</Option>
                    <Option value="Kandhamal">Kandhamal</Option>
                    <Option value="Kangra">Kangra</Option>
                    <Option value="Kanker">Kanker</Option>
                    <Option value="Kannauj">Kannauj</Option>
                    <Option value="Kannur">Kannur</Option>
                    <Option value="Kanpur">Kanpur</Option>
                    <Option value="Kanshi Ram Nagar">Kanshi Ram Nagar</Option>
                    <Option value="Kanyakumari">Kanyakumari</Option>
                    <Option value="Kapurthala">Kapurthala</Option>
                    <Option value="Karaikal">Karaikal</Option>
                    <Option value="Karauli">Karauli</Option>
                    <Option value="Karbi Anglong">Karbi Anglong</Option>
                    <Option value="Kargil">Kargil</Option>
                    <Option value="Karimganj">Karimganj</Option>
                    <Option value="Karimnagar">Karimnagar</Option>
                    <Option value="Karnal">Karnal</Option>
                    <Option value="Karur">Karur</Option>
                    <Option value="Kasaragod">Kasaragod</Option>
                    <Option value="Kathua<">Kathua</Option>
                    <Option value="Katihar">Katihar</Option>
                    <Option value="Katni">Katni</Option>
                    <Option value="Kaushambi">Kaushambi</Option>
                    <Option value="Kendrapara">Kendrapara</Option>
                    <Option value="Kendujhar (Keonjhar)">Kendujhar (Keonjhar)</Option>
                    <Option value="Khagaria">Khagaria</Option>
                    <Option value="Khammam">Khammam</Option>
                    <Option value="Khandwa (East Nimar)">Khandwa (East Nimar)</Option>
                    <Option value="Khargone (West Nimar)">Khargone (West Nimar)</Option>
                    <Option value="Kheda">Kheda</Option>
                    <Option value="Khordha">Khordha</Option>
                    <Option value="Khowai">Khowai</Option>
                    <Option value="Khunti">Khunti</Option>
                    <Option value="Kinnaur">Kinnaur</Option>
                    <Option value="Kishanganj">Kishanganj</Option>
                    <Option value="Kishtwar">Kishtwar</Option>
                    <Option value="Kodagu">Kodagu</Option>
                    <Option value="Koderma">Koderma</Option>
                    <Option value="Kohima">Kohima</Option>
                    <Option value="Kokrajhar">Kokrajhar</Option>
                    <Option value="Kolar">Kolar</Option>
                    <Option value="Kolasib">Kolasib</Option>
                    <Option value="Kolhapur">Kolhapur</Option>
                    <Option value="Kolkata">Kolkata</Option>
                    <Option value="Kollam">Kollam</Option>
                    <Option value="Koppal">Koppal</Option>
                    <Option value="Koraput">Koraput</Option>
                    <Option value="Korba">Korba</Option>
                    <Option value="Koriya">Koriya</Option>
                    <Option value="Kota">Kota</Option>
                    <Option value="Kottayam">Kottayam</Option>
                    <Option value="Kozhikode">Kozhikode</Option>
                    <Option value="Krishna">Krishna</Option>
                    <Option value="Kulgam">Kulgam</Option>
                    <Option value="Kullu">Kullu</Option>
                    <Option value="Kupwara">Kupwara</Option>
                    <Option value="Kurnool">Kurnool</Option>
                    <Option value="Kurukshetra">Kurukshetra</Option>
                    <Option value="Kurung Kumey">Kurung Kumey</Option>
                    <Option value="Kushinagar">Kushinagar</Option>
                    <Option value="Kutch">Kutch</Option>
                    <Option value="Lahaul and Spiti">Lahaul and Spiti</Option>
                    <Option value="Lakhimpur">Lakhimpur</Option>
                    <Option value="Lakhimpur Kheri">Lakhimpur Kheri</Option>
                    <Option value="Lakhisarai">Lakhisarai</Option>
                    <Option value="Lalitpur">Lalitpur</Option>
                    <Option value="Latehar">Latehar</Option>
                    <Option value="Latur">Latur</Option>
                    <Option value="Lawngtlai">Lawngtlai</Option>
                    <Option value="Leh">Leh</Option>
                    <Option value="Lohardaga">Lohardaga</Option>
                    <Option value="Lohit">Lohit</Option>
                    <Option value="Lower Dibang Valley">Lower Dibang Valley</Option>
                    <Option value="Lower Subansiri">Lower Subansiri</Option>
                    <Option value="Lucknow">Lucknow</Option>
                    <Option value="Ludhiana">Ludhiana</Option>
                    <Option value="Lunglei">Lunglei</Option>
                    <Option value="Madhepura">Madhepura</Option>
                    <Option value="Madhubani">Madhubani</Option>
                    <Option value="Madurai">Madurai</Option>
                    <Option value="Mahamaya Nagar">Mahamaya Nagar</Option>
                    <Option value="Maharajganj">Maharajganj</Option>
                    <Option value="Mahasamund">Mahasamund</Option>
                    <Option value="Mahbubnagar">Mahbubnagar</Option>
                    <Option value="Mahe">Mahe</Option>
                    <Option value="Mahendragarh">Mahendragarh</Option>
                    <Option value="MahobaFull-Time">Mahoba</Option>
                    <Option value="Mainpuri">Mainpuri</Option>
                    <Option value="Malappuram">Malappuram</Option>
                    <Option value="Maldah">Maldah</Option>
                    <Option value="Malkangiri">Malkangiri</Option>
                    <Option value="Mamit">Mamit</Option>
                    <Option value="MandlaFull-Time">Mandla</Option>
                    <Option value="Mandsaur">Mandsaur</Option>
                    <Option value="Mandya">Mandya</Option>
                    <Option value="Mansa">Mansa</Option>
                    <Option value="Marigaon">Marigaon</Option>
                    <Option value="Mathura">Mathura</Option>
                    <Option value="Mau">Mau</Option>
                    <Option value="Mayurbhanj">Mayurbhanj</Option>
                    <Option value="Medak">Medak</Option>
                    <Option value="Meerut">Meerut</Option>
                    <Option value="Mehsana">Mehsana</Option>
                    <Option value="Mewat">Mewat</Option>
                    <Option value="Mirzapur">Mirzapur</Option>
                    <Option value="Moga">Moga</Option>
                    <Option value="Mokokchung">Mokokchung</Option>
                    <Option value="Mon">Mon</Option>
                    <Option value="Moradabad">Moradabad</Option>
                    <Option value="Morena">Morena</Option>
                    <Option value="Mumbai City">Mumbai City</Option>
                    <Option value="Mumbai suburban">Mumbai suburban</Option>
                    <Option value="Munger">Munger</Option>
                    <Option value="Murshidabad">Murshidabad</Option>
                    <Option value="Muzaffarnagar">Muzaffarnagar</Option>
                    <Option value="Muzaffarpur">Muzaffarpur</Option>
                    <Option value="Mysore">Mysore</Option>
                    <Option value="Nabarangpur">Nabarangpur</Option>
                    <Option value="Nadia">Nadia</Option>
                    <Option value="Nagaon">Nagaon</Option>
                    <Option value="Nagapattinam">Nagapattinam</Option>
                    <Option value="Nagaur">Nagaur</Option>
                    <Option value="Nagpur">Nagpur</Option>
                    <Option value="Nainital">Nainital</Option>
                    <Option value="Nalanda">Nalanda</Option>
                    <Option value="Nalbari">Nalbari</Option>
                    <Option value="Nalgonda">Nalgonda</Option>
                    <Option value="Namakkal">Namakkal</Option>
                    <Option value="Nanded">Nanded</Option>
                    <Option value="Nandurbar">Nandurbar</Option>
                    <Option value="Narayanpur">Narayanpur</Option>
                    <Option value="Narmada">Narmada</Option>
                    <Option value="Narsinghpur">Narsinghpur</Option>
                    <Option value="Nashik">Nashik</Option>
                    <Option value="Navsari">Navsari</Option>
                    <Option value="Nawada">Nawada</Option>
                    <Option value="Nawanshahr">Nawanshahr</Option>
                    <Option value="Nayagarh">Nayagarh</Option>
                    <Option value="Neemuch">Neemuch</Option>
                    <Option value="Nellore">Nellore</Option>
                    <Option value="New Delhi">New Delhi</Option>
                    <Option value="Nilgiris">Nilgiris</Option>
                    <Option value="Nizamabad">Nizamabad</Option>
                    <Option value="North 24 Parganas">North 24 Parganas</Option>
                    <Option value="North Delhi">North Delhi</Option>
                    <Option value="North East Delhi">North East Delhi</Option>
                    <Option value="North Goa">North Goa</Option>
                    <Option value="North Sikkim">North Sikkim</Option>
                    <Option value="North TripuraFull-Time">North Tripura</Option>
                    <Option value="North West Delhi">North West Delhi</Option>
                    <Option value="Nuapada">Nuapada</Option>
                    <Option value="Ongole">Ongole</Option>
                    <Option value="Osmanabad">Osmanabad</Option>
                    <Option value="Pakur">Pakur</Option>
                    <Option value="Palakkad">Palakkad</Option>
                    <Option value="Palamu">Palamu</Option>
                    <Option value="Pali">Pali</Option>
                    <Option value="Palwal">Palwal</Option>
                    <Option value="Panchkula">Panchkula</Option>
                    <Option value="Panchmahal">Panchmahal</Option>
                    <Option value="Panchsheel Nagar district (Hapur)">Panchsheel Nagar district (Hapur)</Option>
                    <Option value="Panipat">Panipat</Option>
                    <Option value="Panna">Panna</Option>
                    <Option value="Papum Pare">Papum Pare</Option>
                    <Option value="Parbhani">Parbhani</Option>
                    <Option value="Paschim Medinipur">Paschim Medinipur</Option>
                    <Option value="Patan">Patan</Option>
                    <Option value="Pathanamthitta">Pathanamthitta</Option>
                    <Option value="Pathankot">Pathankot</Option>
                    <Option value="Patiala">Patiala</Option>
                    <Option value="Patna">Patna</Option>
                    <Option value="Pauri Garhwal">Pauri Garhwal</Option>
                    <Option value="Perambalur">Perambalur</Option>
                    <Option value="Phek">Phek</Option>
                    <Option value="Pilibhit">Pilibhit</Option>
                    <Option value="Pithoragarh">Pithoragarh</Option>
                    <Option value="Pondicherry">Pondicherry</Option>
                    <Option value="Poonch">Poonch</Option>
                    <Option value="Porbandar">Porbandar</Option>
                    <Option value="Pratapgarh">Pratapgarh</Option>
                    <Option value="Pudukkottai">Pudukkottai</Option>
                    <Option value="Pulwama">Pulwama</Option>
                    <Option value="Pune">Pune</Option>
                    <Option value="Purba Medinipur">Purba Medinipur</Option>
                    <Option value="Puri">Puri</Option>
                    <Option value="Purnia">Purnia</Option>
                    <Option value="Purulia">Purulia</Option>
                    <Option value="Raebareli">Raebareli</Option>
                    <Option value="Raichur">Raichur</Option>
                    <Option value="Raigad">Raigad</Option>
                    <Option value="Raigarh">Raigarh</Option>
                    <Option value="Raipur">Raipur</Option>
                    <Option value="Raisen">Raisen</Option>
                    <Option value="Rajauri">Rajauri</Option>
                    <Option value="Rajgarh">Rajgarh</Option>
                    <Option value="Rajkot">Rajkot</Option>
                    <Option value="Rajnandgaon">Rajnandgaon</Option>
                    <Option value="Rajsamand">Rajsamand</Option>
                    <Option value="Ramabai Nagar (Kanpur Dehat)">Ramabai Nagar (Kanpur Dehat)</Option>
                    <Option value="Ramanagara">Ramanagara</Option>
                    <Option value="Ramanathapuram">Ramanathapuram</Option>
                    <Option value="Ramban">Ramban</Option>
                    <Option value="Ramgarh">Ramgarh</Option>
                    <Option value="Rampur">Rampur</Option>
                    <Option value="Ranchi">Ranchi</Option>
                    <Option value="Ratlam">Ratlam</Option>
                    <Option value="RatnagiriFull-Time">Ratnagiri</Option>
                    <Option value="Rayagada">Rayagada</Option>
                    <Option value="Reasi">Reasi</Option>
                    <Option value="Rewa">Rewa</Option>
                    <Option value="Rewari">Rewari</Option>
                    <Option value="Ri Bhoi">Ri Bhoi</Option>
                    <Option value="Rohtak">Rohtak</Option>
                    <Option value="Rohtase">Rohtas</Option>
                    <Option value="Rudraprayag">Rudraprayag</Option>
                    <Option value="Rupnagar">Rupnagar</Option>
                    <Option value="Sabarkantha">Sabarkantha</Option>
                    <Option value="Sagar">Sagar</Option>
                    <Option value="Saharanpur">Saharanpur</Option>
                    <Option value="Saharsa">Saharsa</Option>
                    <Option value="Sahibganj">Sahibganj</Option>
                    <Option value="Saiha">Saiha</Option>
                    <Option value="Salem">Salem</Option>
                    <Option value="Samastipur">Samastipur</Option>
                    <Option value="Full-Time">Samba</Option>
                    <Option value="Sambalpur">Sambalpur</Option>
                    <Option value="Sangli">Sangli</Option>
                    <Option value="Sangrur">Sangrur</Option>
                    <Option value="Sant Kabir Nagar">Sant Kabir Nagar</Option>
                    <Option value="Sant Ravidas Nagar">Sant Ravidas Nagar</Option>
                    <Option value="Saran">Saran</Option>
                    <Option value="Satara">Satara</Option>
                    <Option value="Satna">Satna</Option>
                    <Option value="Sawai Madhopur">Sawai Madhopur</Option>
                    <Option value="Sehore">Sehore</Option>
                    <Option value="Senapati">Senapati</Option>
                    <Option value="Seoni">Seoni</Option>
                    <Option value="Seraikela Kharsawan">Seraikela Kharsawan</Option>
                    <Option value="Serchhip">Serchhip</Option>
                    <Option value="Shahdol">Shahdol</Option>
                    <Option value="Shahjahanpur">Shahjahanpur</Option>
                    <Option value="Shajapur">Shajapur</Option>
                    <Option value="Shamli">Shamli</Option>
                    <Option value="Sheikhpura">Sheikhpura</Option>
                    <Option value="Sheohar">Sheohar</Option>
                    <Option value="Sheopur">Sheopur</Option>
                    <Option value="Shimla">Shimla</Option>
                    <Option value="Shimoga">Shimoga</Option>
                    <Option value="Shivpuri">Shivpuri</Option>
                    <Option value="Shopian">Shopian</Option>
                    <Option value="Shravasti">Shravasti</Option>
                    <Option value="Sibsagar">Sibsagar</Option>
                    <Option value="Siddharthnagar">Siddharthnagar</Option>
                    <Option value="Sidhi">Sidhi</Option>
                    <Option value="Sikar">Sikar</Option>
                    <Option value="Simdega">Simdega</Option>
                    <Option value="Sindhudurg">Sindhudurg</Option>
                    <Option value="Singrauli">Singrauli</Option>
                    <Option value="Sirmaur">Sirmaur</Option>
                    <Option value="Sirohi">Sirohi</Option>
                    <Option value="Sirsa">Sirsa</Option>
                    <Option value="Sitamarhi">Sitamarhi</Option>
                    <Option value="Sitapur">Sitapur</Option>
                    <Option value="Sivaganga">Sivaganga</Option>
                    <Option value="Siwan">Siwan</Option>
                    <Option value="Solan">Solan</Option>
                    <Option value="Solapur">Solapur</Option>
                    <Option value="Sonbhadra">Sonbhadra</Option>
                    <Option value="Sonipat">Sonipat</Option>
                    <Option value="Sonitpur">Sonitpur</Option>
                    <Option value="South Delhi">South Delhi</Option>
                    <Option value="South Garo Hills">South Garo Hills</Option>
                    <Option value="South Goa">South Goa</Option>
                    <Option value="South Sikkim">South Sikkim</Option>
                    <Option value="South Tripura">South Tripura</Option>
                    <Option value="South West Delhi">South West Delhi</Option>
                    <Option value="Sri Muktsar Sahib">Sri Muktsar Sahib</Option>
                    <Option value="Srikakulam">Srikakulam</Option>
                    <Option value="Srinagar">Srinagar</Option>
                    <Option value="Subarnapur ">Subarnapur (Sonepur)</Option>
                    <Option value="Sultanpur">Sultanpur</Option>
                    <Option value="Sundergarh">Sundergarh</Option>
                    <Option value="Supau">Supaul</Option>
                    <Option value="Surat">Surat</Option>
                    <Option value="Surendranagar">Surendranagar</Option>
                    <Option value="Surguja">Surguja</Option>
                    <Option value="Tamenglong">Tamenglong</Option>
                    <Option value="Tarn Taran">Tarn Taran</Option>
                    <Option value="Tawang">Tawang</Option>
                    <Option value="Tehri Garhwal">Tehri Garhwal</Option>
                    <Option value="Thane">Thane</Option>
                    <Option value="Thanjavur">Thanjavur</Option>
                    <Option value="The Dangs">The Dangs</Option>
                    <Option value="Theni">Theni</Option>
                    <Option value="Thiruvananthapuram">Thiruvananthapuram</Option>
                    <Option value="Thoothukudi">Thoothukudi</Option>
                    <Option value="Thoubale">Thoubal</Option>
                    <Option value="Thrissur">Thrissur</Option>
                    <Option value="Tikamgarh">Tikamgarh</Option>
                    <Option value="Tinsukia">Tinsukia</Option>
                    <Option value="Tirap">Tirap</Option>
                    <Option value="Tiruchirappalli">Tiruchirappalli</Option>
                    <Option value="Tirunelveli">Tirunelveli</Option>
                    <Option value="Tirupur">Tirupur</Option>
                    <Option value="Tiruvallur">Tiruvallur</Option>
                    <Option value="Tiruvannamalai">Tiruvannamalai</Option>
                    <Option value="Tiruvarur">Tiruvarur</Option>
                    <Option value="Tonk">Tonk</Option>
                    <Option value="Tuensang">Tuensang</Option>
                    <Option value="Tumkur">Tumkur</Option>
                    <Option value="Udaipur">Udaipur</Option>
                    <Option value="Udalguri">Udalguri</Option>
                    <Option value="Udham Singh Nagar">Udham Singh Nagar</Option>
                    <Option value="Udhampur">Udhampur</Option>
                    <Option value="Udupi">Udupi</Option>
                    <Option value="Ujjain">Ujjain</Option>
                    <Option value="Ukhrul">Ukhrul</Option>
                    <Option value="Umaria">Umaria</Option>
                    <Option value="Una">Una</Option>
                    <Option value="Unnao">Unnao</Option>
                    <Option value="Upper Siang">Upper Siang</Option>
                    <Option value="Upper Subansiri">Upper Subansiri</Option>
                    <Option value="Uttar Dinajpu">Uttar Dinajpur</Option>
                    <Option value="Uttara Kannada">Uttara Kannada</Option>
                    <Option value="Uttarkashi">Uttarkashi</Option>
                    <Option value="Vadodara">Vadodara</Option>
                    <Option value="Vaishali">Vaishali</Option>
                    <Option value="Valsad">Valsad</Option>
                    <Option value="Varanasi">Varanasi</Option>
                    <Option value="Vellore">Vellore</Option>
                    <Option value="Vidisha">Vidisha</Option>
                    <Option value="Viluppuram">Viluppuram</Option>
                    <Option value="Virudhunagar">Virudhunagar</Option>
                    <Option value="Visakhapatnam">Visakhapatnam</Option>
                    <Option value="Vizianagaram">Vizianagaram</Option>
                    <Option value="Vyara">Vyara</Option>
                    <Option value="Warangal">Warangal</Option>
                    <Option value="Wardha">Wardha</Option>
                    <Option value="Washim">Washim</Option>
                    <Option value="Wayanad">Wayanad</Option>
                    <Option value="West Champaran">West Champaran</Option>
                    <Option value="West Delhi">West Delhi</Option>
                    <Option value="West Garo Hills">West Garo Hills</Option>
                    <Option value="West Kameng">West Kameng</Option>
                    <Option value="West Khasi Hills">West Khasi Hills</Option>
                    <Option value="West Siang">West Siang</Option>
                    <Option value="West Sikkim">West Sikkim</Option>
                    <Option value="West Singhbhum">West Singhbhum</Option>
                    <Option value="West Tripura">West Tripura</Option>
                    <Option value="Wokha">Wokha</Option>
                    <Option value="Yadgir">Yadgir</Option>
                    <Option value="Yamuna Naga">Yamuna Nagar</Option>
                    <Option value="Yanam">Yanam</Option>
                    <Option value="Yavatmal">Yavatmal</Option>
                    <Option value="Zunheboto">Zunheboto</Option>
                    <Option value="Other">Other</Option>



                  </OptGroup>
                </Select>,
            </div>
            </div>
            <div>
              <div>
                <label style={{ color: "black", position: 'absolute', left: 650, top: 185, fontFamily: 'Quicksand' }}>What type of Job is it?*</label>
              </div>




              <div style={{ position: 'absolute', left: 650, top: 215, fontFamily: 'Quicksand',  }}>
                <Radio.Group onChange={onChange} defaultValue="a">
                  <Radio.Button value="a">Full-Time</Radio.Button>
                 <Radio.Button value="c">Contract</Radio.Button>
                 <Radio.Button value="b">Freelance</Radio.Button>
                  <Radio.Button value="d">Internship</Radio.Button>

                </Radio.Group>
              </div>
            </div>


            <div>
              <div style={{ position: "absolute", left: 350, top: 260 }}>
                <label style={{ color: "black", fontFamily: 'Quicksand' }}>Salary*</label>
              </div>

              <div style={{ position: "absolute", left: 350, top: 290, fontFamily: 'Quicksand' }}>
                <InputGroup compact>
                  <Select defaultValue="1">
                    <Option value="1">&#8377;	</Option>
                  </Select>
                  <Input style={{ width: 200, textAlign: 'center' }} placeholder="Minimum" />
                  <Input
                    style={{
                      width: 30,
                      borderLeft: 0,
                      pointerEvents: 'none',
                      backgroundColor: '#fff',
                    }}
                    placeholder="~"
                    disabled
                  />
                  <Input style={{ width: 200, textAlign: 'center', borderLeft: 0 }} placeholder="Maximum" />
                  <Select defaultValue="3">
                    <Option value="1">Per Hour	</Option>
                    <Option value="2">Per month	</Option>
                    <Option value="3">Per year	</Option>


                  </Select>
                </InputGroup>
              </div>
            </div>


            <div>
              <div>
                <label style={{ color: "black", position: "absolute", left: 350, top: 340, fontFamily: 'Quicksand' }}>Key Skills*</label>
              </div>
              <div style={{ position: 'absolute', left: 350, top: 360, fontFamily: 'Quicksand' }}>
                {tags.map((tag, index) => {
                  const isLongTag = tag.length > 30;
                  const tagElem = (
                    <Tag key={tag} closable={index !== 0} onClose={() => this.handleClose(tag)}>
                      {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                    </Tag>
                  );
                  return isLongTag ? (
                    <Tooltip title={tag} key={tag}>
                      {tagElem}
                    </Tooltip>
                  ) : (
                      tagElem
                    );
                })}
                {inputVisible && (
                  <Input
                    ref={this.saveInputRef}
                    type="text"
                    size="small"
                    style={{ width: 78 }}
                    value={inputValue}
                    onChange={this.handleInputChange}
                    onBlur={this.handleInputConfirm}
                    onPressEnter={this.handleInputConfirm}
                  />
                )}
                {!inputVisible && (
                  <Tag onClick={this.showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
                    <Icon type="plus" /> Add Skill
                    </Tag>

                )}
              </div>
            </div>



            <div>
              <div>

                <label style={{ color: "black", position: "absolute", left: 350, top: 400, fontFamily: 'Quicksand' }}>JobDescription*</label>
              </div>
              <div>
                <TextArea rows={9} style={{ width: "700px", position: "absolute", left: 350, top: 420, fontFamily: 'Quicksand' }}  maxLength={1024}  placeholder='Job description in 150 words....'/>
              </div>
            </div>
           



            <Button style={{ color: 'white', background: '#01579b', borderRadius: 25, width: 120, height: 40, fontFamily: 'Quicksand', fontSize: 20, marginTop:600,  }}>Post Job</Button>


          </Content>
        </Layout>

      </div>
    )
  }
}
export default PostJobs;