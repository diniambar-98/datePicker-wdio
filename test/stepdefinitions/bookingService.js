import { When, Then, Given } from 'cucumber';
import bk from '../pageobjects/bookingService';


Given(/^a Mobile Web is at Astra Motor Article Booking Service$/, () => {
    bk.open(); //check
  });
  
  When(/^User click Pesan Sekarang at Layanan Servis Section$/, () => {
    bk.clickPesanSekarangLayanan();
  }); // check

  When(/^User click lanjutkan on website MotorkuX$/, () => {
    bk.clickLanjutkanWebsiteMotorkuX();
  }); // check

  When(/^User click Lanjutkan button at Login Page Booking Service$/, () => {
    bk.clickLanjutkanLogin();
  }); // check




  //Booking Service
  When(/^User add some Motor on Booking Service Page$/, () => {
    bk.addMotorforService();
  }); // check

  When(/^User choose the latest Kendaraan that have been added$/, () => {
    bk.clickLatestKendaraan();
  }); // check

 
  When(/^User choose Province '([^"]*)' in Province Dropdown Lokasi Service$/, (province) => {
    bk.chooseOptionDropdown('province', province);
  }); // check

  When(/^User choose City '([^"]*)' in City Dropdown Lokasi Service$/, (city) => {
    bk.chooseOptionDropdown('city', city);
  }); // check

  When(/^User choose District '([^"]*)' in District Dropdown Lokasi Service$/, (district) => {
    bk.chooseOptionDropdown('district', district)
  }) // check

  When(/^User choose AHASS Pati on Booking Service Page$/, () => {
    bk.chooseAHASSbranch();
  }); // check

  When(/^User choose date of service on Booking Service Page$/, () => {
    bk.chooseServiceDate();
  }); // check

  When(/^User choose time of service on Booking Service Page$/, () => {
    bk.chooseServiceTime();
  }); // check

  