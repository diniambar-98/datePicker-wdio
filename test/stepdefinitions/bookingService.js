import { When, Then, Given } from 'cucumber';
import bk from '../pageobjects/bookingService';


Given(/^a Mobile Web is at Astra Motor Article Booking Service$/, () => {
    bk.open();
  });

  Given(/^a Mobile Web is at Astra Motor Booking Service$/, () => {
    bk.openBooking();
  });
  
  //Service History
  When(/^User click Pesan Sekarang at Layanan Servis Section$/, () => {
    bk.clickPesanSekarangLayanan();
  });

  When(/^User click lanjutkan on website MotorkuX$/, () => {
    bk.clickLanjutkanWebsiteMotorkuX();
  });

  When(/^User click existing vehicle in Booking Service Page$/, () => {
    bk.clickExistingMotor();
  });

  When(/^User click Lanjutkan button at Login Page Booking Service$/, () => {
    bk.clickLanjutkanLogin();
  });

  Then(/^User can see Cek Riwayat Servis Anda Button on Booking Service Page$/, () => {
    bk.verifyButtonCekRiwayat();
  });



  //Booking Service
  When(/^User add some Motor on Booking Service Page$/, () => {
    bk.addMotorforService();
  });

  When(/^User add some Motor on Booking Service Page Manually$/, () => {
    bk.addMotorforServiceManually();
  });

  When(/^User add some Motor Manually$/, () => {
    bk.addMotorforServiceManually();
  });

  When(/^User click Tambah Kendaraan Button$/, () => {
    bk.clickTambahKendaraanButton();
  });

  When(/^User choose the latest Kendaraan that have been added$/, () => {
    bk.clickLatestKendaraan();
  });

  When(/^User choose the first Kendaraan that have been added$/, () => {
    bk.clickFirstKendaraan();
  });

  When(/^User choose Kendaraan that have been added$/, () => {
    bk.clickFirstKendaraan();
  });

  When(/^User click Cek Riwayat Servis Anda Button on Booking Service Page$/, () => {
    bk.clickCekRiwayatServisButton();
  });

  Then(/^User can see Service History of Motor Pop Up on Booking Service Page$/, () => {
    bk.verifyRiwayatHistoryPopUp();
  });

  Then(/^User can see Service History of Motor Verza Pop Up on Booking Service Page$/, () => {
    bk.verifyRiwayatHistoryVerzaPopUp();
  });

  Then(/^User can see Add Vehicle Pop Up on Booking Service Page$/, () => {
    bk.verifyAddVehiclePopUp();
  });

  Then(/^User can see all of Booking Service History on My Account$/, () => {
    bk.verifyAllBookingHistory();
  });

  Then(/^User can see Service History Button on one of my Vehicle$/, () => {
    bk.verifyServiceHistoryButton();
  });

  When(/^User choose Province '([^"]*)' in Province Dropdown Lokasi Service$/, (province) => {
    bk.chooseOptionDropdown('province', province);
  });

  When(/^User choose City '([^"]*)' in City Dropdown Lokasi Service$/, (city) => {
    bk.chooseOptionDropdown('city', city);
  });

  When(/^User choose District '([^"]*)' in District Dropdown Lokasi Service$/, (district) => {
    bk.chooseOptionDropdown('district', district)
  })

  When(/^User choose AHASS Pati on Booking Service Page$/, () => {
    bk.chooseAHASSbranch();
  });

  When(/^User choose date of service on Booking Service Page$/, () => {
    bk.chooseServiceDate();
  });

  When(/^User choose time of service on Booking Service Page$/, () => {
    bk.chooseServiceTime();
  });

  When(/^User click Lanjutkan button on Booking Service Page$/, () => {
    bk.clickLanjutkanButtonBooking();
  });

  When(/^User input KM Kendaraan '([^"]*)' on Booking Service Page$/, (noKM) => {
    bk.inputKMVehicle(noKM);
  });

  When(/^User choose rekomendasi servis on Booking Service Page$/, () => {
    bk.chooseRekomendasiServis();
  });

  When(/^User choose part motor on Booking Service Page$/, () => {
    bk.choosePartMotor();
  });

  When(/^User write keluhan pada kendaraan '([^"]*)' on Booking Service$/, (comment) => {
    bk.writeKeluhanKendaraan(comment);
  });

  When(/^User click Pesan Sekarang on Booking Service$/, () => {
    bk.clickPesanSekarangBookingService();
  });


  Then(/^User can see booking order step 1 is success$/, () => {
    bk.verifyOrderSuccessStep1();
  });


  Then(/^User can see booking order is success$/, () => {
    bk.verifyOrderSuccessStep2();
  });

  Then(/^User can verify Success Booking Page correctly$/, () => {
    bk.verifyDetailOrder();
  });


  

  