import React, { useRef, useState, useEffect, useContext } from "react";
import loginBg from "../sources/signinBg.jpg";
import userIcon from "../sources/user1.jpg";
import context from "../contextAPI/context";
import { useNavigate } from "react-router-dom";

const Userdetails = (props) => {
  const pictureInput = useRef(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate()

  const contextBlog = useContext(context);
  const { createUserDetails, userDetails, getUserDetails } = contextBlog;

  const [picture, setPicture] = useState(null);

  const [details, setDetails] = useState(0)
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    country: "",
    city: "",
    state: "",
    pincode: "",
    profession: "",
  });

  const [isSubmit, setIsSubmit] = useState(false);
  const [formError, setFormError] = useState({});
  const [quote, setQuote] = useState({});

  const countries = [{ id: "1", name: "india" }];
  const states = [
    { id: "2", countryId: "india", name: "Arunachal Pradesh" },
    { id: "1", countryId: "india", name: "Andhra Pradesh" },
    { id: "3", countryId: "india", name: "Assam" },
    { id: "4", countryId: "india", name: "Bihar" },
    { id: "5", countryId: "india", name: "Chandigarh (UT)" },
    { id: "6", countryId: "india", name: "Chhattisgarh" },
    { id: "7", countryId: "india", name: "Dadra and Nagar Haveli (UT)" },
    { id: "8", countryId: "india", name: "Daman and Diu (UT)" },
    { id: "9", countryId: "india", name: "Delhi (NCT)" },
    { id: "10", countryId: "india", name: "Goa" },
    { id: "11", countryId: "india", name: "Gujarat" },
    { id: "12", countryId: "india", name: "Haryana" },
    { id: "13", countryId: "india", name: "Himachal Pradesh" },
    { id: "14", countryId: "india", name: "Jammu and Kashmir" },
    { id: "15", countryId: "india", name: "Jharkhand" },
    { id: "16", countryId: "india", name: "Karnataka" },
    { id: "17", countryId: "india", name: "Kerala" },
    { id: "18", countryId: "india", name: "Lakshadweep (UT)" },
    { id: "19", countryId: "india", name: "Madhya Pradesh" },
    { id: "20", countryId: "india", name: "Maharashtra" },
    { id: "21", countryId: "india", name: "Manipur" },
    { id: "22", countryId: "india", name: "Meghalaya" },
    { id: "23", countryId: "india", name: "Mizoram" },
    { id: "24", countryId: "india", name: "Nagaland" },
    { id: "25", countryId: "india", name: "Odisha" },
    { id: "26", countryId: "india", name: "Puducherry (UT)" },
    { id: "27", countryId: "india", name: "Punjab" },
    { id: "28", countryId: "india", name: "Rajasthan" },
    { id: "29", countryId: "india", name: "Sikkim" },
    { id: "30", countryId: "india", name: "Tamil Nadu" },
    { id: "31", countryId: "india", name: "Telangana" },
    { id: "32", countryId: "india", name: "Tripur" },
    { id: "33", countryId: "india", name: "Uttarakhand" },
    { id: "34", countryId: "india", name: "Uttar Pradesh" },
    { id: "35", countryId: "india", name: "West Bengal" },
  ];
  const cities = [
    { id: "1", stateId: "Arunachal Pradesh", name: "Anantapur" },
    { id: "2", stateId: "Arunachal Pradesh", name: "Chittoor" },
    { id: "3", stateId: "Arunachal Pradesh", name: "East Godavari" },
    { id: "4", stateId: "Arunachal Pradesh", name: "Guntur" },
    { id: "5", stateId: "Arunachal Pradesh", name: "Krishna" },
    { id: "6", stateId: "Arunachal Pradesh", name: "Kurnool" },
    { id: "7", stateId: "Arunachal Pradesh", name: "Nellore" },
    { id: "8", stateId: "Arunachal Pradesh", name: "Prakasam" },
    { id: "9", stateId: "Arunachal Pradesh", name: "Srikakulam" },
    { id: "10", stateId: "Arunachal Pradesh", name: "Visakhapatnam" },
    { id: "11", stateId: "Arunachal Pradesh", name: "Vizianagaram" },
    { id: "12", stateId: "Arunachal Pradesh", name: "West Godavari" },
    { id: "13", stateId: "Arunachal Pradesh", name: "YSR Kadapa" },
    { id: "14", stateId: "Andhra Pradesh", name: "Tawang" },
    { id: "15", stateId: "Andhra Pradesh", name: "West Kameng" },
    { id: "16", stateId: "Andhra Pradesh", name: "East Kameng" },
    { id: "17", stateId: "Andhra Pradesh", name: "Papum Pare" },
    { id: "18", stateId: "Andhra Pradesh", name: "Kurung Kumey" },
    { id: "19", stateId: "Andhra Pradesh", name: "Kra Daadi" },
    { id: "20", stateId: "Andhra Pradesh", name: "Lower Subansiri" },
    { id: "21", stateId: "Andhra Pradesh", name: "Upper Subansiri" },
    { id: "22", stateId: "Andhra Pradesh", name: "West Siang" },
    { id: "23", stateId: "Andhra Pradesh", name: "East Siang" },
    { id: "24", stateId: "Andhra Pradesh", name: "Siang" },
    { id: "25", stateId: "Andhra Pradesh", name: "Upper Siang" },
    { id: "26", stateId: "Andhra Pradesh", name: "Lower Siang" },
    { id: "27", stateId: "Andhra Pradesh", name: "Lower Dibang Valley" },
    { id: "28", stateId: "Andhra Pradesh", name: "Dibang Valley" },
    { id: "29", stateId: "Andhra Pradesh", name: "Anjaw" },
    { id: "30", stateId: "Andhra Pradesh", name: "Lohit" },
    { id: "31", stateId: "Andhra Pradesh", name: "Namsai" },
    { id: "32", stateId: "Andhra Pradesh", name: "Changlang" },
    { id: "33", stateId: "Andhra Pradesh", name: "Tirap" },
    { id: "34", stateId: "Andhra Pradesh", name: "Longding" },
    { id: "35", stateId: "Assam", name: "Baksa" },
    { id: "36", stateId: "Assam", name: "Barpeta" },
    { id: "37", stateId: "Assam", name: "Biswanath" },
    { id: "38", stateId: "Assam", name: "Bongaigaon" },
    { id: "39", stateId: "Assam", name: "Cachar" },
    { id: "40", stateId: "Assam", name: "Charaideo" },
    { id: "41", stateId: "Assam", name: "Chirang" },
    { id: "42", stateId: "Assam", name: "Darrang" },
    { id: "43", stateId: "Assam", name: "Dhemaji" },
    { id: "44", stateId: "Assam", name: "Dhubri" },
    { id: "45", stateId: "Assam", name: "Dibrugarh" },
    { id: "46", stateId: "Assam", name: "Goalpara" },
    { id: "47", stateId: "Assam", name: "Golaghat" },
    { id: "48", stateId: "Assam", name: "Hailakandi" },
    { id: "49", stateId: "Assam", name: "Hojai" },
    { id: "50", stateId: "Assam", name: "Jorhat" },
    { id: "51", stateId: "Assam", name: "Kamrup Metropolitan" },
    { id: "52", stateId: "Assam", name: "Kamrup" },
    { id: "53", stateId: "Assam", name: "Karbi Anglong" },
    { id: "54", stateId: "Assam", name: "Karimganj" },
    { id: "55", stateId: "Assam", name: "Kokrajhar" },
    { id: "56", stateId: "Assam", name: "Lakhimpur" },
    { id: "57", stateId: "Assam", name: "Majuli" },
    { id: "58", stateId: "Assam", name: "Morigaon" },
    { id: "59", stateId: "Assam", name: "Nagaon" },
    { id: "60", stateId: "Assam", name: "Nalbari" },
    { id: "61", stateId: "Assam", name: "Dima Hasao" },
    { id: "62", stateId: "Assam", name: "Sivasagar" },
    { id: "63", stateId: "Assam", name: "Sonitpur" },
    { id: "64", stateId: "Assam", name: "South Salmara-Mankachar" },
    { id: "65", stateId: "Assam", name: "Tinsukia" },
    { id: "66", stateId: "Assam", name: "Udalguri" },
    { id: "67", stateId: "Assam", name: "West Karbi Anglong" },
    { id: "68", stateId: "Bihar", name: "Araria" },
    { id: "69", stateId: "Bihar", name: "Arwal" },
    { id: "70", stateId: "Bihar", name: "Aurangabad" },
    { id: "71", stateId: "Bihar", name: "Banka" },
    { id: "72", stateId: "Bihar", name: "Begusarai" },
    { id: "73", stateId: "Bihar", name: "Bhagalpur" },
    { id: "74", stateId: "Bihar", name: "Bhojpur" },
    { id: "75", stateId: "Bihar", name: "Buxar" },
    { id: "76", stateId: "Bihar", name: "Darbhanga" },
    { id: "77", stateId: "Bihar", name: "East Champaran (Motihari)" },
    { id: "78", stateId: "Bihar", name: "Gaya" },
    { id: "79", stateId: "Bihar", name: "Gopalganj" },
    { id: "80", stateId: "Bihar", name: "Jamui" },
    { id: "81", stateId: "Bihar", name: "Jehanabad" },
    { id: "82", stateId: "Bihar", name: "Kaimur (Bhabua)" },
    { id: "83", stateId: "Bihar", name: "Katihar" },
    { id: "84", stateId: "Bihar", name: "Khagaria" },
    { id: "85", stateId: "Bihar", name: "Kishanganj" },
    { id: "86", stateId: "Bihar", name: "Lakhisarai" },
    { id: "87", stateId: "Bihar", name: "Madhepura" },
    { id: "88", stateId: "Bihar", name: "Madhubani" },
    { id: "89", stateId: "Bihar", name: "Munger (Monghyr)" },
    { id: "90", stateId: "Bihar", name: "Muzaffarpur" },
    { id: "91", stateId: "Bihar", name: "Nalanda" },
    { id: "92", stateId: "Bihar", name: "Nawada" },
    { id: "93", stateId: "Bihar", name: "Patna" },
    { id: "94", stateId: "Bihar", name: "Purnia (Purnea)" },
    { id: "95", stateId: "Bihar", name: "Rohtas" },
    { id: "96", stateId: "Bihar", name: "Saharsa" },
    { id: "97", stateId: "Bihar", name: "Samastipur" },
    { id: "98", stateId: "Bihar", name: "Saran" },
    { id: "99", stateId: "Bihar", name: "Sheikhpura" },
    { id: "100", stateId: "Bihar", name: "Sheohar" },
    { id: "101", stateId: "Bihar", name: "Sitamarhi" },
    { id: "102", stateId: "Bihar", name: "Siwan" },
    { id: "103", stateId: "Bihar", name: "Supaul" },
    { id: "104", stateId: "Bihar", name: "Vaishali" },
    { id: "105", stateId: "Bihar", name: "West Champaran" },
    { id: "106", stateId: "Chandigarh (UT)", name: "Chandigarh" },
    { id: "107", stateId: "Chhattisgarh", name: "Balod" },
    { id: "108", stateId: "Chhattisgarh", name: "Baloda Bazar" },
    { id: "109", stateId: "Chhattisgarh", name: "Balrampur" },
    { id: "110", stateId: "Chhattisgarh", name: "Bastar" },
    { id: "111", stateId: "Chhattisgarh", name: "Bemetara" },
    { id: "112", stateId: "Chhattisgarh", name: "Bijapur" },
    { id: "113", stateId: "Chhattisgarh", name: "Bilaspur" },
    { id: "114", stateId: "Chhattisgarh", name: "Dantewada (South Bastar)" },
    { id: "115", stateId: "Chhattisgarh", name: "Dhamtari" },
    { id: "116", stateId: "Chhattisgarh", name: "Durg" },
    { id: "117", stateId: "Chhattisgarh", name: "Gariyaband" },
    { id: "118", stateId: "Chhattisgarh", name: "Janjgir-Champa" },
    { id: "119", stateId: "Chhattisgarh", name: "Jashpur" },
    { id: "120", stateId: "Chhattisgarh", name: "Kabirdham (Kawardha)" },
    { id: "121", stateId: "Chhattisgarh", name: "Kanker (North Bastar)" },
    { id: "122", stateId: "Chhattisgarh", name: "Kondagaon" },
    { id: "123", stateId: "Chhattisgarh", name: "Korba" },
    { id: "124", stateId: "Chhattisgarh", name: "Korea (Koriya)" },
    { id: "125", stateId: "Chhattisgarh", name: "Mahasamund" },
    { id: "126", stateId: "Chhattisgarh", name: "Mungeli" },
    { id: "127", stateId: "Chhattisgarh", name: "Narayanpur" },
    { id: "128", stateId: "Chhattisgarh", name: "Raigarh" },
    { id: "129", stateId: "Chhattisgarh", name: "Raipur" },
    { id: "130", stateId: "Chhattisgarh", name: "Rajnandgaon" },
    { id: "131", stateId: "Chhattisgarh", name: "Sukma" },
    { id: "132", stateId: "Chhattisgarh", name: "Surajpur  " },
    { id: "133", stateId: "Chhattisgarh", name: "Surguja" },
    {
      id: "134",
      stateId: "Dadra and Nagar Haveli (UT)",
      name: "Dadra & Nagar Haveli",
    },
    { id: "135", stateId: "Daman and Diu (UT)", name: "Daman" },
    { id: "136", stateId: "Daman and Diu (UT)", name: "Diu" },
    { id: "137", stateId: "Delhi (NCT)", name: "Central Delhi" },
    { id: "138", stateId: "Delhi (NCT)", name: "East Delhi" },
    { id: "139", stateId: "Delhi (NCT)", name: "New Delhi" },
    { id: "140", stateId: "Delhi (NCT)", name: "North Delhi" },
    { id: "141", stateId: "Delhi (NCT)", name: "North East  Delhi" },
    { id: "142", stateId: "Delhi (NCT)", name: "North West  Delhi" },
    { id: "143", stateId: "Delhi (NCT)", name: "Shahdara" },
    { id: "144", stateId: "Delhi (NCT)", name: "South Delhi" },
    { id: "145", stateId: "Delhi (NCT)", name: "South East Delhi" },
    { id: "146", stateId: "Delhi (NCT)", name: "South West  Delhi" },
    { id: "147", stateId: "Delhi (NCT)", name: "West Delhi" },
    { id: "148", stateId: "Goa", name: "North Goa" },
    { id: "149", stateId: "Goa", name: "South Goa" },
    { id: "150", stateId: "Gujarat", name: "Ahmedabad" },
    { id: "151", stateId: "Gujarat", name: "Amreli" },
    { id: "152", stateId: "Gujarat", name: "Anand" },
    { id: "153", stateId: "Gujarat", name: "Aravalli" },
    { id: "154", stateId: "Gujarat", name: "Banaskantha (Palanpur)" },
    { id: "155", stateId: "Gujarat", name: "Bharuch" },
    { id: "156", stateId: "Gujarat", name: "Bhavnagar" },
    { id: "157", stateId: "Gujarat", name: "Botad" },
    { id: "158", stateId: "Gujarat", name: "Chhota Udepur" },
    { id: "159", stateId: "Gujarat", name: "Dahod" },
    { id: "160", stateId: "Gujarat", name: "Dangs (Ahwa)" },
    { id: "161", stateId: "Gujarat", name: "Devbhoomi Dwarka" },
    { id: "162", stateId: "Gujarat", name: "Gandhinagar" },
    { id: "163", stateId: "Gujarat", name: "Gir Somnath" },
    { id: "164", stateId: "Gujarat", name: "Jamnagar" },
    { id: "165", stateId: "Gujarat", name: "Junagadh" },
    { id: "166", stateId: "Gujarat", name: "Kachchh" },
    { id: "167", stateId: "Gujarat", name: "Kheda (Nadiad)" },
    { id: "168", stateId: "Gujarat", name: "Mahisagar" },
    { id: "169", stateId: "Gujarat", name: "Mehsana" },
    { id: "170", stateId: "Gujarat", name: "Morbi" },
    { id: "171", stateId: "Gujarat", name: "Narmada (Rajpipla)" },
    { id: "172", stateId: "Gujarat", name: "Navsari" },
    { id: "173", stateId: "Gujarat", name: "Panchmahal (Godhra)" },
    { id: "174", stateId: "Gujarat", name: "Patan" },
    { id: "175", stateId: "Gujarat", name: "Porbandar" },
    { id: "176", stateId: "Gujarat", name: "Rajkot" },
    { id: "177", stateId: "Gujarat", name: "Sabarkantha (Himmatnagar)" },
    { id: "178", stateId: "Gujarat", name: "Surat" },
    { id: "179", stateId: "Gujarat", name: "Surendranagar" },
    { id: "180", stateId: "Gujarat", name: "Tapi (Vyara)" },
    { id: "181", stateId: "Gujarat", name: "Vadodara" },
    { id: "182", stateId: "Gujarat", name: "Valsad" },
    { id: "183", stateId: "Haryana", name: "Ambala" },
    { id: "184", stateId: "Haryana", name: "Bhiwani" },
    { id: "185", stateId: "Haryana", name: "Charkhi Dadri" },
    { id: "186", stateId: "Haryana", name: "Faridabad" },
    { id: "187", stateId: "Haryana", name: "Fatehabad" },
    { id: "188", stateId: "Haryana", name: "Gurgaon" },
    { id: "189", stateId: "Haryana", name: "Hisar" },
    { id: "190", stateId: "Haryana", name: "Jhajjar" },
    { id: "191", stateId: "Haryana", name: "Jind" },
    { id: "192", stateId: "Haryana", name: "Kaithal" },
    { id: "193", stateId: "Haryana", name: "Karnal" },
    { id: "194", stateId: "Haryana", name: "Kurukshetra" },
    { id: "195", stateId: "Haryana", name: "Mahendragarh" },
    { id: "196", stateId: "Haryana", name: "Mewat" },
    { id: "197", stateId: "Haryana", name: "Palwal" },
    { id: "198", stateId: "Haryana", name: "Panchkula" },
    { id: "199", stateId: "Haryana", name: "Panipat" },
    { id: "200", stateId: "Haryana", name: "Rewari" },
    { id: "201", stateId: "Haryana", name: "Rohtak" },
    { id: "202", stateId: "Haryana", name: "Sirsa" },
    { id: "203", stateId: "Haryana", name: "Sonipat" },
    { id: "204", stateId: "Haryana", name: "Yamunanagar" },
    { id: "205", stateId: "Himachal Pradesh", name: "Bilaspur" },
    { id: "206", stateId: "Himachal Pradesh", name: "Chamba" },
    { id: "207", stateId: "Himachal Pradesh", name: "Hamirpur" },
    { id: "208", stateId: "Himachal Pradesh", name: "Kangra" },
    { id: "209", stateId: "Himachal Pradesh", name: "Kinnaur" },
    { id: "210", stateId: "Himachal Pradesh", name: "Kullu" },
    { id: "211", stateId: "Himachal Pradesh", name: "Lahaul &amp; Spiti" },
    { id: "212", stateId: "Himachal Pradesh", name: "Mandi" },
    { id: "213", stateId: "Himachal Pradesh", name: "Shimla" },
    { id: "214", stateId: "Himachal Pradesh", name: "Sirmaur (Sirmour)" },
    { id: "215", stateId: "Himachal Pradesh", name: "Solan" },
    { id: "216", stateId: "Himachal Pradesh", name: "Una" },
    { id: "217", stateId: "Jammu and Kashmir", name: "Anantnag" },
    { id: "218", stateId: "Jammu and Kashmir", name: "Bandipore" },
    { id: "219", stateId: "Jammu and Kashmir", name: "Baramulla" },
    { id: "220", stateId: "Jammu and Kashmir", name: "Budgam" },
    { id: "221", stateId: "Jammu and Kashmir", name: "Doda" },
    { id: "222", stateId: "Jammu and Kashmir", name: "Ganderbal" },
    { id: "223", stateId: "Jammu and Kashmir", name: "Jammu" },
    { id: "224", stateId: "Jammu and Kashmir", name: "Kargil" },
    { id: "225", stateId: "Jammu and Kashmir", name: "Kathua" },
    { id: "226", stateId: "Jammu and Kashmir", name: "Kishtwar" },
    { id: "227", stateId: "Jammu and Kashmir", name: "Kulgam" },
    { id: "228", stateId: "Jammu and Kashmir", name: "Kupwara" },
    { id: "229", stateId: "Jammu and Kashmir", name: "Leh" },
    { id: "230", stateId: "Jammu and Kashmir", name: "Poonch" },
    { id: "231", stateId: "Jammu and Kashmir", name: "Pulwama" },
    { id: "232", stateId: "Jammu and Kashmir", name: "Rajouri" },
    { id: "233", stateId: "Jammu and Kashmir", name: "Ramban" },
    { id: "234", stateId: "Jammu and Kashmir", name: "Reasi" },
    { id: "235", stateId: "Jammu and Kashmir", name: "Samba" },
    { id: "236", stateId: "Jammu and Kashmir", name: "Shopian" },
    { id: "237", stateId: "Jammu and Kashmir", name: "Srinagar" },
    { id: "238", stateId: "Jammu and Kashmir", name: "Udhampur" },
    { id: "239", stateId: "Jharkhand", name: "Bokaro" },
    { id: "240", stateId: "Jharkhand", name: "Chatra" },
    { id: "241", stateId: "Jharkhand", name: "Deoghar" },
    { id: "242", stateId: "Jharkhand", name: "Dhanbad" },
    { id: "243", stateId: "Jharkhand", name: "Dumka" },
    { id: "244", stateId: "Jharkhand", name: "East Singhbhum" },
    { id: "245", stateId: "Jharkhand", name: "Garhwa" },
    { id: "246", stateId: "Jharkhand", name: "Giridih" },
    { id: "247", stateId: "Jharkhand", name: "Godda" },
    { id: "248", stateId: "Jharkhand", name: "Gumla" },
    { id: "249", stateId: "Jharkhand", name: "Hazaribag" },
    { id: "250", stateId: "Jharkhand", name: "Jamtara" },
    { id: "251", stateId: "Jharkhand", name: "Khunti" },
    { id: "252", stateId: "Jharkhand", name: "Koderma" },
    { id: "253", stateId: "Jharkhand", name: "Latehar" },
    { id: "254", stateId: "Jharkhand", name: "Lohardaga" },
    { id: "255", stateId: "Jharkhand", name: "Pakur" },
    { id: "256", stateId: "Jharkhand", name: "Palamu" },
    { id: "257", stateId: "Jharkhand", name: "Ramgarh" },
    { id: "258", stateId: "Jharkhand", name: "Ranchi" },
    { id: "259", stateId: "Jharkhand", name: "Sahibganj" },
    { id: "260", stateId: "Jharkhand", name: "Seraikela-Kharsawan" },
    { id: "261", stateId: "Jharkhand", name: "Simdega" },
    { id: "262", stateId: "Jharkhand", name: "West Singhbhum" },
    { id: "263", stateId: "Karnataka", name: "Bagalkot" },
    { id: "264", stateId: "Karnataka", name: "Ballari (Bellary)" },
    { id: "265", stateId: "Karnataka", name: "Belagavi (Belgaum)" },
    { id: "266", stateId: "Karnataka", name: "Bengaluru (Bangalore) Rural" },
    { id: "267", stateId: "Karnataka", name: "Bengaluru (Bangalore) Urban" },
    { id: "268", stateId: "Karnataka", name: "Bidar" },
    { id: "269", stateId: "Karnataka", name: "Chamarajanagar" },
    { id: "270", stateId: "Karnataka", name: "Chikballapur" },
    { id: "271", stateId: "Karnataka", name: "Chikkamagaluru (Chikmagalur)" },
    { id: "272", stateId: "Karnataka", name: "Chitradurga" },
    { id: "273", stateId: "Karnataka", name: "Dakshina Kannada" },
    { id: "274", stateId: "Karnataka", name: "Davangere" },
    { id: "275", stateId: "Karnataka", name: "Dharwad" },
    { id: "276", stateId: "Karnataka", name: "Gadag" },
    { id: "277", stateId: "Karnataka", name: "Hassan" },
    { id: "278", stateId: "Karnataka", name: "Haveri" },
    { id: "279", stateId: "Karnataka", name: "Kalaburagi (Gulbarga)" },
    { id: "280", stateId: "Karnataka", name: "Kodagu" },
    { id: "281", stateId: "Karnataka", name: "Kolar" },
    { id: "282", stateId: "Karnataka", name: "Koppal" },
    { id: "283", stateId: "Karnataka", name: "Mandya" },
    { id: "284", stateId: "Karnataka", name: "Mysuru (Mysore)" },
    { id: "285", stateId: "Karnataka", name: "Raichur" },
    { id: "286", stateId: "Karnataka", name: "Ramanagara" },
    { id: "287", stateId: "Karnataka", name: "Shivamogga (Shimoga)" },
    { id: "288", stateId: "Karnataka", name: "Tumakuru (Tumkur)" },
    { id: "289", stateId: "Karnataka", name: "Udupi" },
    { id: "290", stateId: "Karnataka", name: "Uttara Kannada (Karwar)" },
    { id: "291", stateId: "Karnataka", name: "Vijayapura (Bijapur)" },
    { id: "292", stateId: "Karnataka", name: "Yadgir" },
    { id: "293", stateId: "Kerala", name: "Alappuzha" },
    { id: "294", stateId: "Kerala", name: "Ernakulam" },
    { id: "295", stateId: "Kerala", name: "Idukki" },
    { id: "296", stateId: "Kerala", name: "Kannur" },
    { id: "297", stateId: "Kerala", name: "Kasaragod" },
    { id: "298", stateId: "Kerala", name: "Kollam" },
    { id: "299", stateId: "Kerala", name: "Kottayam" },
    { id: "300", stateId: "Kerala", name: "Kozhikode" },
    { id: "301", stateId: "Kerala", name: "Malappuram" },
    { id: "302", stateId: "Kerala", name: "Palakkad" },
    { id: "303", stateId: "Kerala", name: "Pathanamthitta" },
    { id: "304", stateId: "Kerala", name: "Thiruvananthapuram" },
    { id: "305", stateId: "Kerala", name: "Thrissur" },
    { id: "306", stateId: "Kerala", name: "Wayanad" },
    { id: "307", stateId: "Lakshadweep (UT)", name: "Agatti" },
    { id: "308", stateId: "Lakshadweep (UT)", name: "Amini" },
    { id: "309", stateId: "Lakshadweep (UT)", name: "Androth" },
    { id: "310", stateId: "Lakshadweep (UT)", name: "Bithra" },
    { id: "311", stateId: "Lakshadweep (UT)", name: "Chethlath" },
    { id: "312", stateId: "Lakshadweep (UT)", name: "Kavaratti" },
    { id: "313", stateId: "Lakshadweep (UT)", name: "Kadmath" },
    { id: "314", stateId: "Lakshadweep (UT)", name: "Kalpeni" },
    { id: "315", stateId: "Lakshadweep (UT)", name: "Kilthan" },
    { id: "316", stateId: "Lakshadweep (UT)", name: "Minicoy" },
    { id: "317", stateId: "Madhya Pradesh", name: "Agar Malwa" },
    { id: "318", stateId: "Madhya Pradesh", name: "Alirajpur" },
    { id: "319", stateId: "Madhya Pradesh", name: "Anuppur" },
    { id: "320", stateId: "Madhya Pradesh", name: "Ashoknagar" },
    { id: "321", stateId: "Madhya Pradesh", name: "Balaghat" },
    { id: "322", stateId: "Madhya Pradesh", name: "Barwani" },
    { id: "323", stateId: "Madhya Pradesh", name: "Betul" },
    { id: "324", stateId: "Madhya Pradesh", name: "Bhind" },
    { id: "325", stateId: "Madhya Pradesh", name: "Bhopal" },
    { id: "326", stateId: "Madhya Pradesh", name: "Burhanpur" },
    { id: "327", stateId: "Madhya Pradesh", name: "Chhatarpur" },
    { id: "328", stateId: "Madhya Pradesh", name: "Chhindwara" },
    { id: "329", stateId: "Madhya Pradesh", name: "Damoh" },
    { id: "330", stateId: "Madhya Pradesh", name: "Datia" },
    { id: "331", stateId: "Madhya Pradesh", name: "Dewas" },
    { id: "332", stateId: "Madhya Pradesh", name: "Dhar" },
    { id: "333", stateId: "Madhya Pradesh", name: "Dindori" },
    { id: "334", stateId: "Madhya Pradesh", name: "Guna" },
    { id: "335", stateId: "Madhya Pradesh", name: "Gwalior" },
    { id: "336", stateId: "Madhya Pradesh", name: "Harda" },
    { id: "337", stateId: "Madhya Pradesh", name: "Hoshangabad" },
    { id: "338", stateId: "Madhya Pradesh", name: "Indore" },
    { id: "339", stateId: "Madhya Pradesh", name: "Jabalpur" },
    { id: "340", stateId: "Madhya Pradesh", name: "Jhabua" },
    { id: "341", stateId: "Madhya Pradesh", name: "Katni" },
    { id: "342", stateId: "Madhya Pradesh", name: "Khandwa" },
    { id: "343", stateId: "Madhya Pradesh", name: "Khargone" },
    { id: "344", stateId: "Madhya Pradesh", name: "Mandla" },
    { id: "345", stateId: "Madhya Pradesh", name: "Mandsaur" },
    { id: "346", stateId: "Madhya Pradesh", name: "Morena" },
    { id: "347", stateId: "Madhya Pradesh", name: "Narsinghpur" },
    { id: "348", stateId: "Madhya Pradesh", name: "Neemuch" },
    { id: "349", stateId: "Madhya Pradesh", name: "Panna" },
    { id: "350", stateId: "Madhya Pradesh", name: "Raisen" },
    { id: "351", stateId: "Madhya Pradesh", name: "Rajgarh" },
    { id: "352", stateId: "Madhya Pradesh", name: "Ratlam" },
    { id: "353", stateId: "Madhya Pradesh", name: "Rewa" },
    { id: "354", stateId: "Madhya Pradesh", name: "Sagar" },
    { id: "355", stateId: "Madhya Pradesh", name: "Satna" },
    { id: "356", stateId: "Madhya Pradesh", name: "Sehore" },
    { id: "357", stateId: "Madhya Pradesh", name: "Seoni" },
    { id: "358", stateId: "Madhya Pradesh", name: "Shahdol" },
    { id: "359", stateId: "Madhya Pradesh", name: "Shajapur" },
    { id: "360", stateId: "Madhya Pradesh", name: "Sheopur" },
    { id: "361", stateId: "Madhya Pradesh", name: "Shivpuri" },
    { id: "362", stateId: "Madhya Pradesh", name: "Sidhi" },
    { id: "363", stateId: "Madhya Pradesh", name: "Singrauli" },
    { id: "364", stateId: "Madhya Pradesh", name: "Tikamgarh" },
    { id: "365", stateId: "Madhya Pradesh", name: "Ujjain" },
    { id: "366", stateId: "Madhya Pradesh", name: "Umaria" },
    { id: "367", stateId: "Madhya Pradesh", name: "Vidisha" },
    { id: "368", stateId: "Maharashtra", name: "Ahmednagar" },
    { id: "369", stateId: "Maharashtra", name: "Akola" },
    { id: "370", stateId: "Maharashtra", name: "Amravati" },
    { id: "371", stateId: "Maharashtra", name: "Aurangabad" },
    { id: "372", stateId: "Maharashtra", name: "Beed" },
    { id: "373", stateId: "Maharashtra", name: "Bhandara" },
    { id: "374", stateId: "Maharashtra", name: "Buldhana" },
    { id: "375", stateId: "Maharashtra", name: "Chandrapur" },
    { id: "376", stateId: "Maharashtra", name: "Dhule" },
    { id: "377", stateId: "Maharashtra", name: "Gadchiroli" },
    { id: "378", stateId: "Maharashtra", name: "Gondia" },
    { id: "379", stateId: "Maharashtra", name: "Hingoli" },
    { id: "380", stateId: "Maharashtra", name: "Jalgaon" },
    { id: "381", stateId: "Maharashtra", name: "Jalna" },
    { id: "382", stateId: "Maharashtra", name: "Kolhapur" },
    { id: "383", stateId: "Maharashtra", name: "Latur" },
    { id: "384", stateId: "Maharashtra", name: "Mumbai City" },
    { id: "385", stateId: "Maharashtra", name: "Mumbai Suburban" },
    { id: "386", stateId: "Maharashtra", name: "Nagpur" },
    { id: "387", stateId: "Maharashtra", name: "Nanded" },
    { id: "388", stateId: "Maharashtra", name: "Nandurbar" },
    { id: "389", stateId: "Maharashtra", name: "Nashik" },
    { id: "390", stateId: "Maharashtra", name: "Osmanabad" },
    { id: "391", stateId: "Maharashtra", name: "Palghar" },
    { id: "392", stateId: "Maharashtra", name: "Parbhani" },
    { id: "393", stateId: "Maharashtra", name: "Pune" },
    { id: "394", stateId: "Maharashtra", name: "Raigad" },
    { id: "395", stateId: "Maharashtra", name: "Ratnagiri" },
    { id: "396", stateId: "Maharashtra", name: "Sangli" },
    { id: "397", stateId: "Maharashtra", name: "Satara" },
    { id: "398", stateId: "Maharashtra", name: "Sindhudurg" },
    { id: "399", stateId: "Maharashtra", name: "Solapur" },
    { id: "400", stateId: "Maharashtra", name: "Thane" },
    { id: "401", stateId: "Maharashtra", name: "Wardha" },
    { id: "402", stateId: "Maharashtra", name: "Washim" },
    { id: "403", stateId: "Maharashtra", name: "Yavatmal" },
    { id: "404", stateId: "Manipur", name: "Bishnupur" },
    { id: "405", stateId: "Manipur", name: "Chandel" },
    { id: "406", stateId: "Manipur", name: "Churachandpur" },
    { id: "407", stateId: "Manipur", name: "Imphal East" },
    { id: "408", stateId: "Manipur", name: "Imphal West" },
    { id: "409", stateId: "Manipur", name: "Jiribam" },
    { id: "410", stateId: "Manipur", name: "Kakching" },
    { id: "411", stateId: "Manipur", name: "Kamjong" },
    { id: "412", stateId: "Manipur", name: "Kangpokpi" },
    { id: "413", stateId: "Manipur", name: "Noney" },
    { id: "414", stateId: "Manipur", name: "Pherzawl" },
    { id: "415", stateId: "Manipur", name: "Senapati" },
    { id: "416", stateId: "Manipur", name: "Tamenglong" },
    { id: "417", stateId: "Manipur", name: "Tengnoupal" },
    { id: "418", stateId: "Manipur", name: "Thoubal" },
    { id: "419", stateId: "Manipur", name: "Ukhrul" },
    { id: "420", stateId: "Meghalaya", name: "East Garo Hills" },
    { id: "421", stateId: "Meghalaya", name: "East Jaintia Hills" },
    { id: "422", stateId: "Meghalaya", name: "East Khasi Hills" },
    { id: "423", stateId: "Meghalaya", name: "North Garo Hills" },
    { id: "424", stateId: "Meghalaya", name: "Ri Bhoi" },
    { id: "425", stateId: "Meghalaya", name: "South Garo Hills" },
    { id: "426", stateId: "Meghalaya", name: "South West Garo Hills " },
    { id: "427", stateId: "Meghalaya", name: "South West Khasi Hills" },
    { id: "428", stateId: "Meghalaya", name: "West Garo Hills" },
    { id: "429", stateId: "Meghalaya", name: "West Jaintia Hills" },
    { id: "430", stateId: "Meghalaya", name: "West Khasi Hills" },
    { id: "431", stateId: "Mizoram", name: "Aizawl" },
    { id: "432", stateId: "Mizoram", name: "Champhai" },
    { id: "433", stateId: "Mizoram", name: "Kolasib" },
    { id: "434", stateId: "Mizoram", name: "Lawngtlai" },
    { id: "435", stateId: "Mizoram", name: "Lunglei" },
    { id: "436", stateId: "Mizoram", name: "Mamit" },
    { id: "437", stateId: "Mizoram", name: "Saiha" },
    { id: "438", stateId: "Mizoram", name: "Serchhip" },
    { id: "439", stateId: "Nagaland", name: "Dimapur" },
    { id: "440", stateId: "Nagaland", name: "Kiphire" },
    { id: "441", stateId: "Nagaland", name: "Kohima" },
    { id: "442", stateId: "Nagaland", name: "Longleng" },
    { id: "443", stateId: "Nagaland", name: "Mokokchung" },
    { id: "444", stateId: "Nagaland", name: "Mon" },
    { id: "445", stateId: "Nagaland", name: "Peren" },
    { id: "446", stateId: "Nagaland", name: "Phek" },
    { id: "447", stateId: "Nagaland", name: "Tuensang" },
    { id: "448", stateId: "Nagaland", name: "Wokha" },
    { id: "449", stateId: "Nagaland", name: "Zunheboto" },
    { id: "450", stateId: "Odisha", name: "Angul" },
    { id: "451", stateId: "Odisha", name: "Balangir" },
    { id: "452", stateId: "Odisha", name: "Balasore" },
    { id: "453", stateId: "Odisha", name: "Bargarh" },
    { id: "454", stateId: "Odisha", name: "Bhadrak" },
    { id: "455", stateId: "Odisha", name: "Boudh" },
    { id: "456", stateId: "Odisha", name: "Cuttack" },
    { id: "457", stateId: "Odisha", name: "Deogarh" },
    { id: "458", stateId: "Odisha", name: "Dhenkanal" },
    { id: "459", stateId: "Odisha", name: "Gajapati" },
    { id: "460", stateId: "Odisha", name: "Ganjam" },
    { id: "461", stateId: "Odisha", name: "Jagatsinghapur" },
    { id: "462", stateId: "Odisha", name: "Jajpur" },
    { id: "463", stateId: "Odisha", name: "Jharsuguda" },
    { id: "464", stateId: "Odisha", name: "Kalahandi" },
    { id: "465", stateId: "Odisha", name: "Kandhamal" },
    { id: "466", stateId: "Odisha", name: "Kendrapara" },
    { id: "467", stateId: "Odisha", name: "Kendujhar (Keonjhar)" },
    { id: "468", stateId: "Odisha", name: "Khordha" },
    { id: "469", stateId: "Odisha", name: "Koraput" },
    { id: "470", stateId: "Odisha", name: "Malkangiri" },
    { id: "471", stateId: "Odisha", name: "Mayurbhanj" },
    { id: "472", stateId: "Odisha", name: "Nabarangpur" },
    { id: "473", stateId: "Odisha", name: "Nayagarh" },
    { id: "474", stateId: "Odisha", name: "Nuapada" },
    { id: "475", stateId: "Odisha", name: "Puri" },
    { id: "476", stateId: "Odisha", name: "Rayagada" },
    { id: "477", stateId: "Odisha", name: "Sambalpur" },
    { id: "478", stateId: "Odisha", name: "Sonepur" },
    { id: "479", stateId: "Odisha", name: "Sundargarh" },
    { id: "480", stateId: "Puducherry (UT)", name: "Karaikal" },
    { id: "481", stateId: "Puducherry (UT)", name: "Mahe" },
    { id: "482", stateId: "Puducherry (UT)", name: "Pondicherry" },
    { id: "483", stateId: "Puducherry (UT)", name: "Yanam" },
    { id: "484", stateId: "Punjab", name: "Amritsar" },
    { id: "485", stateId: "Punjab", name: "Barnala" },
    { id: "486", stateId: "Punjab", name: "Bathinda" },
    { id: "487", stateId: "Punjab", name: "Faridkot" },
    { id: "488", stateId: "Punjab", name: "Fatehgarh Sahib" },
    { id: "489", stateId: "Punjab", name: "Fazilka" },
    { id: "490", stateId: "Punjab", name: "Ferozepur" },
    { id: "491", stateId: "Punjab", name: "Gurdaspur" },
    { id: "492", stateId: "Punjab", name: "Hoshiarpur" },
    { id: "493", stateId: "Punjab", name: "Jalandhar" },
    { id: "494", stateId: "Punjab", name: "Kapurthala" },
    { id: "495", stateId: "Punjab", name: "Ludhiana" },
    { id: "496", stateId: "Punjab", name: "Mansa" },
    { id: "497", stateId: "Punjab", name: "Moga" },
    { id: "498", stateId: "Punjab", name: "Muktsar" },
    {
      id: "499",
      stateId: "Punjab",
      name: "Nawanshahr (Shahid Bhagat Singh Nagar)",
    },
    { id: "500", stateId: "Punjab", name: "Pathankot" },
    { id: "501", stateId: "Punjab", name: "Patiala" },
    { id: "502", stateId: "Punjab", name: "Rupnagar" },
    {
      id: "503",
      stateId: "Punjab",
      name: "Sahibzada Ajit Singh Nagar (Mohali)",
    },
    { id: "504", stateId: "Punjab", name: "Sangrur" },
    { id: "505", stateId: "Punjab", name: "Tarn Taran" },
    { id: "506", stateId: "Rajasthan", name: "Ajmer" },
    { id: "507", stateId: "Rajasthan", name: "Alwar" },
    { id: "508", stateId: "Rajasthan", name: "Banswara" },
    { id: "509", stateId: "Rajasthan", name: "Baran" },
    { id: "510", stateId: "Rajasthan", name: "Barmer" },
    { id: "511", stateId: "Rajasthan", name: "Bharatpur" },
    { id: "512", stateId: "Rajasthan", name: "Bhilwara" },
    { id: "513", stateId: "Rajasthan", name: "Bikaner" },
    { id: "514", stateId: "Rajasthan", name: "Bundi" },
    { id: "515", stateId: "Rajasthan", name: "Chittorgarh" },
    { id: "516", stateId: "Rajasthan", name: "Churu" },
    { id: "517", stateId: "Rajasthan", name: "Dausa" },
    { id: "518", stateId: "Rajasthan", name: "Dholpur" },
    { id: "519", stateId: "Rajasthan", name: "Dungarpur" },
    { id: "520", stateId: "Rajasthan", name: "Hanumangarh" },
    { id: "521", stateId: "Rajasthan", name: "Jaipur" },
    { id: "522", stateId: "Rajasthan", name: "Jaisalmer" },
    { id: "523", stateId: "Rajasthan", name: "Jalore" },
    { id: "524", stateId: "Rajasthan", name: "Jhalawar" },
    { id: "525", stateId: "Rajasthan", name: "Jhunjhunu" },
    { id: "526", stateId: "Rajasthan", name: "Jodhpur" },
    { id: "527", stateId: "Rajasthan", name: "Karauli" },
    { id: "528", stateId: "Rajasthan", name: "Kota" },
    { id: "529", stateId: "Rajasthan", name: "Nagaur" },
    { id: "530", stateId: "Rajasthan", name: "Pali" },
    { id: "531", stateId: "Rajasthan", name: "Pratapgarh" },
    { id: "532", stateId: "Rajasthan", name: "Rajsamand" },
    { id: "533", stateId: "Rajasthan", name: "Sawai Madhopur" },
    { id: "534", stateId: "Rajasthan", name: "Sikar" },
    { id: "535", stateId: "Rajasthan", name: "Sirohi" },
    { id: "536", stateId: "Rajasthan", name: "Sri Ganganagar" },
    { id: "537", stateId: "Rajasthan", name: "Tonk" },
    { id: "538", stateId: "Rajasthan", name: "Udaipur" },
    { id: "539", stateId: "Sikkim", name: "East Sikkim" },
    { id: "540", stateId: "Sikkim", name: "North Sikkim" },
    { id: "541", stateId: "Sikkim", name: "South Sikkim" },
    { id: "542", stateId: "Sikkim", name: "West Sikkim" },
    { id: "543", stateId: "Tamil Nadu", name: "Ariyalur" },
    { id: "544", stateId: "Tamil Nadu", name: "Chennai" },
    { id: "545", stateId: "Tamil Nadu", name: "Coimbatore" },
    { id: "546", stateId: "Tamil Nadu", name: "Cuddalore" },
    { id: "547", stateId: "Tamil Nadu", name: "Dharmapuri" },
    { id: "548", stateId: "Tamil Nadu", name: "Dindigul" },
    { id: "549", stateId: "Tamil Nadu", name: "Erode" },
    { id: "550", stateId: "Tamil Nadu", name: "Kanchipuram" },
    { id: "551", stateId: "Tamil Nadu", name: "Kanyakumari" },
    { id: "552", stateId: "Tamil Nadu", name: "Karur" },
    { id: "553", stateId: "Tamil Nadu", name: "Krishnagiri" },
    { id: "554", stateId: "Tamil Nadu", name: "Madurai" },
    { id: "555", stateId: "Tamil Nadu", name: "Nagapattinam" },
    { id: "556", stateId: "Tamil Nadu", name: "Namakkal" },
    { id: "557", stateId: "Tamil Nadu", name: "Nilgiris" },
    { id: "558", stateId: "Tamil Nadu", name: "Perambalur" },
    { id: "559", stateId: "Tamil Nadu", name: "Pudukkottai" },
    { id: "560", stateId: "Tamil Nadu", name: "Ramanathapuram" },
    { id: "561", stateId: "Tamil Nadu", name: "Salem" },
    { id: "562", stateId: "Tamil Nadu", name: "Sivaganga" },
    { id: "563", stateId: "Tamil Nadu", name: "Thanjavur" },
    { id: "564", stateId: "Tamil Nadu", name: "Theni" },
    { id: "565", stateId: "Tamil Nadu", name: "Thoothukudi (Tuticorin)" },
    { id: "566", stateId: "Tamil Nadu", name: "Tiruchirappalli" },
    { id: "567", stateId: "Tamil Nadu", name: "Tirunelveli" },
    { id: "568", stateId: "Tamil Nadu", name: "Tiruppur" },
    { id: "569", stateId: "Tamil Nadu", name: "Tiruvallur" },
    { id: "570", stateId: "Tamil Nadu", name: "Tiruvannamalai" },
    { id: "571", stateId: "Tamil Nadu", name: "Tiruvarur" },
    { id: "572", stateId: "Tamil Nadu", name: "Vellore" },
    { id: "573", stateId: "Tamil Nadu", name: "Viluppuram" },
    { id: "574", stateId: "Tamil Nadu", name: "Virudhunagar" },
    { id: "575", stateId: "Telangana", name: "Adilabad" },
    { id: "576", stateId: "Telangana", name: "Bhadradri Kothagudem" },
    { id: "577", stateId: "Telangana", name: "Hyderabad" },
    { id: "578", stateId: "Telangana", name: "Jagtial" },
    { id: "579", stateId: "Telangana", name: "Jangaon" },
    { id: "580", stateId: "Telangana", name: "Jayashankar Bhoopalpally" },
    { id: "581", stateId: "Telangana", name: "Jogulamba Gadwal" },
    { id: "582", stateId: "Telangana", name: "Kamareddy" },
    { id: "583", stateId: "Telangana", name: "Karimnagar" },
    { id: "584", stateId: "Telangana", name: "Khammam" },
    { id: "585", stateId: "Telangana", name: "Komaram Bheem Asifabad" },
    { id: "586", stateId: "Telangana", name: "Mahabubabad" },
    { id: "587", stateId: "Telangana", name: "Mahabubnagar" },
    { id: "588", stateId: "Telangana", name: "Mancherial" },
    { id: "589", stateId: "Telangana", name: "Medak" },
    { id: "590", stateId: "Telangana", name: "Medchal" },
    { id: "591", stateId: "Telangana", name: "Nagarkurnool" },
    { id: "592", stateId: "Telangana", name: "Nalgonda" },
    { id: "593", stateId: "Telangana", name: "Nirmal" },
    { id: "594", stateId: "Telangana", name: "Nizamabad" },
    { id: "595", stateId: "Telangana", name: "Peddapalli" },
    { id: "596", stateId: "Telangana", name: "Rajanna Sircilla" },
    { id: "597", stateId: "Telangana", name: "Rangareddy" },
    { id: "598", stateId: "Telangana", name: "Sangareddy" },
    { id: "599", stateId: "Telangana", name: "Siddipet" },
    { id: "600", stateId: "Telangana", name: "Suryapet" },
    { id: "601", stateId: "Telangana", name: "Vikarabad" },
    { id: "602", stateId: "Telangana", name: "Wanaparthy" },
    { id: "603", stateId: "Telangana", name: "Warangal (Rural)" },
    { id: "604", stateId: "Telangana", name: "Warangal (Urban)" },
    { id: "605", stateId: "Telangana", name: "Yadadri Bhuvanagiri" },
    { id: "606", stateId: "Tripur", name: "Dhalai" },
    { id: "607", stateId: "Tripur", name: "Gomati" },
    { id: "608", stateId: "Tripur", name: "Khowai" },
    { id: "609", stateId: "Tripur", name: "North Tripura" },
    { id: "610", stateId: "Tripur", name: "Sepahijala" },
    { id: "611", stateId: "Tripur", name: "South Tripura" },
    { id: "612", stateId: "Tripur", name: "Unakoti" },
    { id: "613", stateId: "Tripur", name: "West Tripura" },
    { id: "614", stateId: "Uttarakhand", name: "Almora" },
    { id: "615", stateId: "Uttarakhand", name: "Bageshwar" },
    { id: "616", stateId: "Uttarakhand", name: "Chamoli" },
    { id: "617", stateId: "Uttarakhand", name: "Champawat" },
    { id: "618", stateId: "Uttarakhand", name: "Dehradun" },
    { id: "619", stateId: "Uttarakhand", name: "Haridwar" },
    { id: "620", stateId: "Uttarakhand", name: "Nainital" },
    { id: "621", stateId: "Uttarakhand", name: "Pauri Garhwal" },
    { id: "622", stateId: "Uttarakhand", name: "Pithoragarh" },
    { id: "623", stateId: "Uttarakhand", name: "Rudraprayag" },
    { id: "624", stateId: "Uttarakhand", name: "Tehri Garhwal" },
    { id: "625", stateId: "Uttarakhand", name: "Udham Singh Nagar" },
    { id: "626", stateId: "Uttarakhand", name: "Uttarkashi" },
    { id: "627", stateId: "Uttar Pradesh", name: "Agra" },
    { id: "628", stateId: "Uttar Pradesh", name: "Aligarh" },
    { id: "629", stateId: "Uttar Pradesh", name: "Allahabad" },
    { id: "630", stateId: "Uttar Pradesh", name: "Ambedkar Nagar" },
    {
      id: "631",
      stateId: "Uttar Pradesh",
      name: "Amethi (Chatrapati Sahuji Mahraj Nagar)",
    },
    { id: "632", stateId: "Uttar Pradesh", name: "Amroha (J.P. Nagar)" },
    { id: "633", stateId: "Uttar Pradesh", name: "Auraiya" },
    { id: "634", stateId: "Uttar Pradesh", name: "Azamgarh" },
    { id: "635", stateId: "Uttar Pradesh", name: "Baghpat" },
    { id: "636", stateId: "Uttar Pradesh", name: "Bahraich" },
    { id: "637", stateId: "Uttar Pradesh", name: "Ballia" },
    { id: "638", stateId: "Uttar Pradesh", name: "Balrampur" },
    { id: "639", stateId: "Uttar Pradesh", name: "Banda" },
    { id: "640", stateId: "Uttar Pradesh", name: "Barabanki" },
    { id: "641", stateId: "Uttar Pradesh", name: "Bareilly" },
    { id: "642", stateId: "Uttar Pradesh", name: "Basti" },
    { id: "643", stateId: "Uttar Pradesh", name: "Bhadohi" },
    { id: "644", stateId: "Uttar Pradesh", name: "Bijnor" },
    { id: "645", stateId: "Uttar Pradesh", name: "Budaun" },
    { id: "646", stateId: "Uttar Pradesh", name: "Bulandshahr" },
    { id: "647", stateId: "Uttar Pradesh", name: "Chandauli" },
    { id: "648", stateId: "Uttar Pradesh", name: "Chitrakoot" },
    { id: "649", stateId: "Uttar Pradesh", name: "Deoria" },
    { id: "650", stateId: "Uttar Pradesh", name: "Etah" },
    { id: "651", stateId: "Uttar Pradesh", name: "Etawah" },
    { id: "652", stateId: "Uttar Pradesh", name: "Faizabad" },
    { id: "653", stateId: "Uttar Pradesh", name: "Farrukhabad" },
    { id: "654", stateId: "Uttar Pradesh", name: "Fatehpur" },
    { id: "655", stateId: "Uttar Pradesh", name: "Firozabad" },
    { id: "656", stateId: "Uttar Pradesh", name: "Gautam Buddha Nagar" },
    { id: "657", stateId: "Uttar Pradesh", name: "Ghaziabad" },
    { id: "658", stateId: "Uttar Pradesh", name: "Ghazipur" },
    { id: "659", stateId: "Uttar Pradesh", name: "Gonda" },
    { id: "660", stateId: "Uttar Pradesh", name: "Gorakhpur" },
    { id: "661", stateId: "Uttar Pradesh", name: "Hamirpur" },
    { id: "662", stateId: "Uttar Pradesh", name: "Hapur (Panchsheel Nagar)" },
    { id: "663", stateId: "Uttar Pradesh", name: "Hardoi" },
    { id: "664", stateId: "Uttar Pradesh", name: "Hathras" },
    { id: "665", stateId: "Uttar Pradesh", name: "Jalaun" },
    { id: "666", stateId: "Uttar Pradesh", name: "Jaunpur" },
    { id: "667", stateId: "Uttar Pradesh", name: "Jhansi" },
    { id: "668", stateId: "Uttar Pradesh", name: "Kannauj" },
    { id: "669", stateId: "Uttar Pradesh", name: "Kanpur Dehat" },
    { id: "670", stateId: "Uttar Pradesh", name: "Kanpur Nagar" },
    { id: "671", stateId: "Uttar Pradesh", name: "Kanshiram Nagar (Kasganj)" },
    { id: "672", stateId: "Uttar Pradesh", name: "Kaushambi" },
    { id: "673", stateId: "Uttar Pradesh", name: "Kushinagar (Padrauna)" },
    { id: "674", stateId: "Uttar Pradesh", name: "Lakhimpur - Kheri" },
    { id: "675", stateId: "Uttar Pradesh", name: "Lalitpur" },
    { id: "676", stateId: "Uttar Pradesh", name: "Lucknow" },
    { id: "677", stateId: "Uttar Pradesh", name: "Maharajganj" },
    { id: "678", stateId: "Uttar Pradesh", name: "Mahoba" },
    { id: "679", stateId: "Uttar Pradesh", name: "Mainpuri" },
    { id: "680", stateId: "Uttar Pradesh", name: "Mathura" },
    { id: "681", stateId: "Uttar Pradesh", name: "Mau" },
    { id: "682", stateId: "Uttar Pradesh", name: "Meerut" },
    { id: "683", stateId: "Uttar Pradesh", name: "Mirzapur" },
    { id: "684", stateId: "Uttar Pradesh", name: "Moradabad" },
    { id: "685", stateId: "Uttar Pradesh", name: "Muzaffarnagar" },
    { id: "686", stateId: "Uttar Pradesh", name: "Pilibhit" },
    { id: "687", stateId: "Uttar Pradesh", name: "Pratapgarh" },
    { id: "688", stateId: "Uttar Pradesh", name: "RaeBareli" },
    { id: "689", stateId: "Uttar Pradesh", name: "Rampur" },
    { id: "690", stateId: "Uttar Pradesh", name: "Saharanpur" },
    { id: "691", stateId: "Uttar Pradesh", name: "Sambhal (Bhim Nagar)" },
    { id: "692", stateId: "Uttar Pradesh", name: "Sant Kabir Nagar" },
    { id: "693", stateId: "Uttar Pradesh", name: "Shahjahanpur" },
    { id: "694", stateId: "Uttar Pradesh", name: "Shamali (Prabuddh Nagar)" },
    { id: "695", stateId: "Uttar Pradesh", name: "Shravasti" },
    { id: "696", stateId: "Uttar Pradesh", name: "Siddharth Nagar" },
    { id: "697", stateId: "Uttar Pradesh", name: "Sitapur" },
    { id: "698", stateId: "Uttar Pradesh", name: "Sonbhadra" },
    { id: "699", stateId: "Uttar Pradesh", name: "Sultanpur" },
    { id: "700", stateId: "Uttar Pradesh", name: "Unnao" },
    { id: "701", stateId: "Uttar Pradesh", name: "Varanasi" },
    { id: "702", stateId: "West Bengal", name: "Alipurduar" },
    { id: "703", stateId: "West Bengal", name: "Bankura" },
    { id: "704", stateId: "West Bengal", name: "Birbhum" },
    { id: "705", stateId: "West Bengal", name: "Burdwan (Bardhaman)" },
    { id: "706", stateId: "West Bengal", name: "Cooch Behar" },
    {
      id: "707",
      stateId: "West Bengal",
      name: "Dakshin Dinajpur (South Dinajpur)",
    },
    { id: "708", stateId: "West Bengal", name: "Darjeeling" },
    { id: "709", stateId: "West Bengal", name: "Hooghly" },
    { id: "710", stateId: "West Bengal", name: "Howrah" },
    { id: "711", stateId: "West Bengal", name: "Jalpaiguri" },
    { id: "712", stateId: "West Bengal", name: "Kalimpong" },
    { id: "713", stateId: "West Bengal", name: "Kolkata" },
    { id: "714", stateId: "West Bengal", name: "Malda" },
    { id: "715", stateId: "West Bengal", name: "Murshidabad" },
    { id: "716", stateId: "West Bengal", name: "Nadia" },
    { id: "717", stateId: "West Bengal", name: "North 24 Parganas" },
    {
      id: "718",
      stateId: "West Bengal",
      name: "Paschim Medinipur (West Medinipur)",
    },
    {
      id: "719",
      stateId: "West Bengal",
      name: "Purba Medinipur (East Medinipur)",
    },
    { id: "720", stateId: "West Bengal", name: "Purulia" },
    { id: "721", stateId: "West Bengal", name: "South 24 Parganas" },
    {
      id: "722",
      stateId: "West Bengal",
      name: "Uttar Dinajpur (North Dinajpur)",
    },
  ];

  const quotesAPI = async () => {
    const count = Math.floor(Math.random() * (1000 - 1 + 1) + 1);
    const response = await fetch("https://type.fit/api/quotes");
    const quotesAll = await response.json();
    setQuote(quotesAll[count]);
  };
  const capitaliz = (string) => {
    let str = string.charAt(0).toUpperCase() + string.slice(1);
    return str;
  };
  const stringToNumber = (string) => {
    let number = parseInt(string);
    return number;
  };
  const handleSelectPictureClick = () => {
    pictureInput.current.click();
  };
  const clearData = () => {
    setName({
      firstName: "",
      lastName: "",
      gender: "",
      dateOfBirth: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      profession: "",
    });
    setPicture("");
  };
  const saveState = () => {
    if (isSubmit) {
      //ADD SUBMIT
      const details = {
        ...name,
        profileImg: picture,
      };
      createUserDetails(details);
      setIsSubmit(false);
      navigate("../profile")
    }
  };

  const validate = (value) => {
    const errors = {};
    const dateOfBirth = stringToNumber(value.dateOfBirth);
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexUsername = /^([A-z])*[^\s]\1*$/;
    const regexName = /^[A-Za-z\s]+$/;

    if (!value.firstName) {
      errors.firstName = "*Firstname is required. ";
      setIsSubmit(false);
    } else if (value.firstName.length < 3) {
      errors.firstName = "*Firstname should not less than 3 charactors.";
      setIsSubmit(false);
    } else if (!regexName.test(value.firstName)) {
      errors.firstName = "*Firstname should only have Alphabets.";
      setIsSubmit(false);
    }
    if (!value.email) {
      errors.email = "*Email is required. ";
      setIsSubmit(false);
    } else if (!regexEmail.test(value.email)) {
      errors.email = "*This is not a valid email format!";
      setIsSubmit(false);
    }
    if (!value.lastName) {
      errors.lastName = "*Lastname is required. ";
      setIsSubmit(false);
    } else if (value.lastName.length < 3) {
      errors.lastName = "*Lastname should not less than 3 charactors.";
      setIsSubmit(false);
    } else if (!regexName.test(value.lastName)) {
      errors.lastName = "*Lastname should only have Alphabets.";
      setIsSubmit(false);
    }
    if (!value.userName) {
      errors.userName = "*Username is required. ";
      setIsSubmit(false);
    } else if (value.userName.length < 3) {
      errors.userName = "*Username should not less than 3 charactors.";
      setIsSubmit(false);
    } else if (!regexUsername.test(value.userName)) {
      errors.userName = "*Username should not have any spaces.";
      setIsSubmit(false);
    }
    if (!value.city || value.city === "0") {
      errors.city = "*City is required. ";
      setIsSubmit(false);
    }
    if (!value.state || value.state === "0") {
      errors.state = "*State is required. ";
      setIsSubmit(false);
    }
    if (!value.country || value.country === "0") {
      errors.country = "*Country is required. ";
      setIsSubmit(false);
    }
    if (!value.pincode) {
      errors.pincode = "*Pincode is required. ";
      setIsSubmit(false);
    } else if (value.pincode.length < 6) {
      errors.pincode = "*Pincode should not less than 6 charactors.";
      setIsSubmit(false);
    } else if (value.pincode.length > 6) {
      errors.pincode = "*Pincode should not greter than 6 charactors.";
      setIsSubmit(false);
    }
    if (!value.contactNumber) {
      errors.contactNumber = "*Contact number is required. ";
      setIsSubmit(false);
    } else if (value.contactNumber.length < 10) {
      errors.contactNumber =
        "*Contact number should not less than 10 charactors.";
      setIsSubmit(false);
    } else if (value.contactNumber.length > 10) {
      errors.contactNumber =
        "*Contact number should not greter than 10 charactors.";
      setIsSubmit(false);
    }
    if (!value.gender) {
      errors.gender = "*Gender is required. ";
      setIsSubmit(false);
    }
    if (!value.profession) {
      errors.profession = "*Profession is required. ";
      setIsSubmit(false);
    } else if (!regexName.test(value.profession)) {
      errors.profession = "*Alphabets only allow.";
      setIsSubmit(false);
    }
    if (!value.dateOfBirth) {
      errors.dateOfBirth = "*Date of birth is required.";
      setIsSubmit(false);
    } else if (dateOfBirth > 2004) {
      errors.dateOfBirth = "*You are too young to submit the form.";
      setIsSubmit(false);
    } else {
      setIsSubmit(true);
    }

    return errors;
  };

  const loadState=(id)=>{
    let stateOfCountry = states.filter((item) => item.countryId === id);
  setState(stateOfCountry);
  }
  const loadCity=(id)=>{
    let cityOfState = cities.filter((item) => item.stateId === id);
    setCity(cityOfState);
  }

  const loadDetails =()=>{
    if(userDetails.length>0){
      let detail = userDetails[0]
      setName({
    ...detail
      });
      loadState(detail.country)
      loadCity(detail.state)
      setPicture(userDetails[0].profileImg);
    }else{
      console.log("Loading...")
    }
  }

  useEffect(() => {
    setCountry(countries); 
    quotesAPI();
    getUserDetails()
    setTimeout(() => {
      setDetails(1)
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => {
    clearData();
    loadDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [details])
  
  useEffect(() => {
    setFormError(validate(name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, picture]);

  const handleSubmit = () => {
    setFormError(validate(name));
    setIsSubmit(true);
    if (isSubmit) {
      saveState();
    } else {
      setIsSubmit(true);
    }
  };

  const handleClear = () => {
    fileInputRef.current.value = "";
    setPicture("");
  };

  const onChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value });
  };

  const handlePictureChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const src = await convertToBase64(file);
      setPicture(src);
    } else {
      setPicture("");
    }
  };

  const countryHandle = (e) => {
    let id = e.target.value;
    loadState(id)  
    let country = { ...name, country: id };
    let reset = { ...name, state: "0", city: "0", country: "0" };
    setName(country);
    if (id === "0") {
      setName(reset);
      setCity([]);
    }
  };

  const stateHandle = (e) => {
    let id = e.target.value;
    loadCity(id)
    let state = { ...name, state: id };
    let reset = { ...name, state: "0", city: "0" };
    if (id === "0") {
      setName(reset);
    }else{
      setName(state);
    }
  };

  const cityHandle = (e) => {
    let id = e.target.value;
    let city = { ...name, city: id };
    setName(city);
  };

  

  return (
    <>
      <div
        className=" text-white d-flex justify-content-end align-items-center"
        style={{ marginTop: "70px", marginBottom: "0px" }}
      >
        <img
          className="p-0 m-0"
          src={loginBg}
          style={{
            width: "100%",
            height: "125vh",
            position: "relative",
            filter: "brightness(0.5)",
            opacity: "0.5",
          }}
          height="800"
          alt="bg"
        />

        <div
          className=" position-absolute d-flex justify-content-center align-items-center"
          style={{
            height: "100vh",
            margin: "auto 10vw",
          }}
        >
          <div
            className="-4 d-none d-xl-flex mx-5"
            style={{
              width: "100%",
              height: "50vh",
            }}
          >
            <div>
              <h1 className="my-5 display-3 fw-bold ls-tight">
                Thought of <br />
                <span className="text-primary">The Day</span>
              </h1>
              <p className="fs-3" style={{ color: "hsl(217, 10%, 80%)" }}>
                {quote.text}
              </p>
            </div>
          </div>
          <div className="container  " style={{ minWidth: "30px" }}>
            <div>
              <div className="container d-flex justify-content-center align-items-center">
                <h1 className="my-2">User Details Form</h1>
              </div>
              <hr className=" container mb-4 mx-auto" />
            </div>
            <form className="container row g-3 needs-validation" noValidate>
              <div className="d-flex align-items-center justify-content-center ">
                <div className="flex-shrink-0">
                  <div className="custom-file d-none">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="picture"
                      name="picture"
                      onChange={handlePictureChange}
                      ref={pictureInput}
                    />
                  </div>

                  <div className="m-0 position-relative">
                    <button
                      className="btn btn-outline-secondary  "
                      type="button"
                      ref={fileInputRef}
                      onClick={handleSelectPictureClick}
                    >
                      <img
                        className="shadow-4 rounded-circle"
                        src={picture ? picture : userIcon}
                        alt="SelectPicture"
                        style={{
                          width: "30vw",
                          height: "30vw",
                          maxWidth: "10vw",
                          maxHeight: "10vw",
                        }}
                      />
                    </button>
                    {picture && (
                      <button
                        type="button"
                        className="btn-close position-absolute translate-middle rounded-pill bg-secondary p-2"
                        style={{ top: "0%", right: "-18%" }}
                        aria-label="Close"
                        onClick={handleClear}
                      ></button>
                    )}
                  </div>
                </div>

                {/* firstName */}
                <div className="flex-grow-1 ms-3">
                  <div className="col-md-12 mb-4">
                    <input
                      value={name.firstName}
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      onChange={onChange}
                      placeholder="First Name"
                      required
                    />
                    <div className="feedback text-danger fst-italic">
                      {formError.firstName}
                    </div>
                  </div>

                  {/* Lastname */}
                  <div className="col-md-12 ">
                    <input
                      value={name.lastName}
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      onChange={onChange}
                      placeholder="Last Name"
                      required
                    />
                    <div className="feedback text-danger fst-italic">
                      {formError.lastName}
                    </div>
                  </div>
                </div>
              </div>

              {/* country */}
              <div className="col-md-12 ">
                <select
                  className="form-select"
                  name="country"
                  value={name.country}
                  onChange={countryHandle}
                >
                  <option value="0">Country...</option>
                  {country && country !== undefined
                    ? country.map((item, index) => {
                        return (
                          <option key={item.id} value={item.name}>
                            {capitaliz(item.name)}
                          </option>
                        );
                      })
                    : "No country"}
                </select>
                <div className="feedback text-danger fst-italic">
                  {formError.country}
                </div>
              </div>

              {/* state */}
              <div className="col-md-12">
                <select
                  className="form-select"
                  id="state"
                  name="state"
                  value={name.state}
                  onChange={stateHandle}
                >
                  <option value="0">State...</option>
                  {state && state !== undefined
                    ? state.map((item, index) => {
                        return (
                          <option key={item.id} value={item.name}>
                            {capitaliz(item.name)}
                          </option>
                        );
                      })
                    : "No State"}
                </select>
                <div className="feedback text-danger fst-italic">
                  {formError.state}
                </div>
              </div>

              {/* city */}
              <div className="col-md-12">
                <select
                  className="form-select"
                  name="city"
                  id="city"
                  value={name.city}
                  onChange={cityHandle}
                >
                  <option value="0">City...</option>
                  {city && city !== undefined
                    ? city.map((item, index) => {
                        return (
                          <option key={item.id} id={item.id}>
                            {capitaliz(item.name)}
                          </option>
                        );
                      })
                    : "No State"}
                </select>
                <div className="feedback text-danger fst-italic">
                  {formError.city}
                </div>
              </div>

              {/* pincode */}
              <div className="col-md-12 mb-0">
                <input
                  value={name.pincode}
                  type="number"
                  className="form-control"
                  id="pincode"
                  name="pincode"
                  onChange={onChange}
                  placeholder="Pincode"
                  required
                />
                <div className="feedback text-danger fst-italic">
                  {formError.pincode}
                </div>
              </div>

              {/* profession */}
              <div className="col-md-12 mb-0">
                <input
                  value={name.profession}
                  type="text"
                  className="form-control"
                  id="pincode"
                  name="profession"
                  onChange={onChange}
                  placeholder="Profession..."
                  required
                />
                <div className="feedback text-danger fst-italic">
                  {formError.profession}
                </div>
              </div>

              {/* dateOfBirth */}
              <div className="col-12 mb-3 ">
                <label htmlFor="inputEmail3" className="form-label">
                  Date of Birth
                </label>
                <div className="">
                  <input
                    value={name.dateOfBirth}
                    type="date"
                    className="form-control"
                    id="inputEmail3"
                    name="dateOfBirth"
                    onChange={onChange}
                  />
                  <div className="feedback text-danger fst-italic">
                    {formError.dateOfBirth}
                  </div>
                </div>
              </div>

              {/* gender */}
              <fieldset className="row mb-3 d-flex justify-content-start align-items-center">
                <legend className="col-form-label pt-0">Gender</legend>
                <div className="col-3 ">
                  <div className="form-check ms-5">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="male"
                      onChange={onChange}
                      id="gridRadios1"
                      checked={name.gender === "male"}
                    />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      Male
                    </label>
                  </div>
                  <div className="form-check ms-5">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="female"
                      onChange={onChange}
                      id="gridRadios2"
                      checked={name.gender === "female"}
                    />
                    <label className="form-check-label" htmlFor="gridRadios2">
                      Female
                    </label>
                  </div>
                </div>
                <div className="feedback text-danger fst-italic">
                  {formError.gender}
                </div>
              </fieldset>

              <div className="modal-footer d-grid gap-2 d-flex align-itens-center justify-content-end">
                <button
                  type="button"
                  className="btn btn-primary col"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}

export default Userdetails;
