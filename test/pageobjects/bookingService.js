import Page from './page';
import randomstring from 'randomstring';


// const elem = $('.btn-booking-service');
class BookingService extends Page {
    //Riwayat Service from Layanan Service Page
    get btnPesanSekarang() { return $('.btn-booking-service'); };
    get textArticle() { return $('.service-list-desc'); };
    get btnBookingViaWebsite() { return $('.book-service-login'); };
    get addVehicleSection() { return $('.add-vehicle-text-section'); };
    get btnTambahKendaraan() { return $(".add-vehicle-carousel .btn-add-myvehicle .fa-plus-circle"); };
    get nextCarauselTambahKendaraan() { return $('.vehicle-carousel-arrow-right'); };
    get latestKendaraan() { return $('[alt="BEAT POP CW ESP"]'); };
    get firstKendaraan() { return $('.add-vehicle-carousel > div > div > div:nth-child(1)'); };
    get titleLokasiWaktuService() { return $('.ahass-list-title-text'); };
    get labelProvinsi() { return $('.vehicle-type-title.field-name'); }; // need adjustment penamaan element
    get inputBarProvinsi() { return $('#ahass-province-button'); };
    get valueProvinsi() { return $('#ahass-province-menu > li:nth-of-type(7)'); };
    get labelKota() { return $('.label-city-service'); };
    get inputBarKota() { return $('#ahass-city-button'); };
    get valueKota() { return $('li:nth-of-type(18) > .ui-menu-item-wrapper')}
    get labelKecamatan() { return $('.label-district-service'); };
    get inputBarKecamatan() { return $('#ahass-district-button'); };
    get valueKecamatan() { return $('#ahass-district-menu > li:nth-of-type(3)'); };
    get labelListAHASS() { return $('.list-ahass-title'); };
    get googleMapView() { return $("[aria-label='Map'] > div:nth-of-type(2)"); };
    get fullScreenMapView() { return $('.gm-fullscreen-control'); };
    get zoomInMapView() { return $("[aria-label='Zoom in']"); };
    get zoomOutMapView() { return $("[aria-label='Zoom out']"); };
    get searchCabang() { return $('.input-ahass-branch'); };
    get btnSearchCabang() { return $('.form-control'); };
    get cabangAstraPati() { return $('[data-branchcode="H376"]'); };
    get labelTanggalService() { return $('.label-tanggal-servis'); };
    get datePickerBoard() { return $('.ui-datepicker-calendar'); };
    // masih sementara untuk date picker
    get dateValue() { return $('.ui-datepicker-current-day > .ui-state-default'); };

    get btnSimpanTanggal() { return $('.ahass-date-save-btn'); };
    get btnBatalPilihTanggal() { return $('.ahass-date-cancel-btn'); };
    get labelSlotWaktu() { return $('.label-cek-slot'); };
    get inputBarSlotWaktu() { return $('#ahass-service-time-button'); };
    get valueSlotWaktu() { return $('#ahass-service-time-menu > li:nth-of-type(5)'); };
    get btnLanjutkan() { return $('.step-1-next-btn'); };
    get tierSuccessBookingStep1() {return $('.step-1-title-text'); };
    get checklistSuccessBookingStep1() {return $('.first-step-valid'); };
    get btnRiwayatServis() { return $('.link-check-service'); };
    get btnPesanSekarang() { return $('#btn-booking-service'); };
    get lanjutkanWebButton() { return $('.book-service-login'); }
    get existMotor() { return $('.add-vehicle-carousel-item'); }
    get lanjutkanLogin() { return $('.btn-primary-white');}
    get btnRiwayatServis() { return $('.service-history-text'); };
    get riwayatTitle() { return $('.modal-content .sv-history-title'); }
    get riwayatDesc() { return $('.modal-content .sv-history-desc'); }

    //Riwayat Service Pop Up 
    get tglService() { return $('.modal-content div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > .sv-field-name'); }
    get valueTanggal() { return $('.modal-content > .sv-history-container > div:nth-of-type(1) .sv-date'); }
    get kmMotor() { return $('.modal-content > .sv-history-container > div:nth-of-type(1) div:nth-of-type(2) > .sv-field-name'); }
    get valueKMMotor() { return $('.modal-content > .sv-history-container > div:nth-of-type(1) .sv-mileage');}
    get cabangAHASS() { return $('.modal-content div:nth-of-type(1) .sv-ahass-field > .sv-field-name'); }
    get valueCabang() { return $('.modal-content div:nth-of-type(1) .sv-ahass-field > .sv-field-value'); }
    get tipeService() { return $('.modal-content div:nth-of-type(1) > div:nth-of-type(3) .sv-field-name'); }
    get valueTipeService() { $('.modal-content > .sv-history-container > div:nth-of-type(1) .servicetype-item'); }
    get changeSparepart() { $('.modal-content div:nth-of-type(1) > div:nth-of-type(4) .sv-field-name'); }
    get valueChangeSparepart() { return $('.modal-content > .sv-history-container > div:nth-of-type(1) .sparepart-item'); }


    //Dropdown 
    setObjectMappingDropdown(){
        return {
          province: this.inputBarProvinsi,
          city: this.inputBarKota,
          district: this.inputBarKecamatan,
        }
      };
      
      setObjectMappingValue(){
        return {
          JawaTengah: this.valueProvinsi,
          KabupatenPati: this.valueKota,
          Pati: this.valueKecamatan,
        }   
      };

    //Tambah Kendaraan
    get labelTambahKendaraan() { return $('.modal-content div:nth-of-type(3) > .add-vehicle-header'); };
    get inputEngineNumber() { return $('.modal-content #engineNumber[placeholder="No. Mesin Kendaraan Anda"]'); };
    get btnSearchEngineNumber() { return $('.modal-content #btn-search-engine'); };
    get waitingResultSearch() { return $('.visible .loading-text-details'); };
    get inputPilihTahun() { return $('.modal-content .row div:nth-of-type(3)'); };
    get valueTahunMotor() { return $('#addvehicle-productionYear-menu > li:nth-child(2)')};
    get pilihTahunDisabled() { return $('#engine-year[disabled="disabled"]')};
    get inputPilihSeri() { return $('.modal-content .row div:nth-of-type(5)'); };
    get valueSeriMotor() { return $('#addvehicle-model-menu > li:nth-child(2)')}
    get pilihSeriDisabled() { return $('#engine-mdl[disabled="disabled"]')};
    get inputPilihTipe() { return $('.modal-content .row div:nth-of-type(6)'); };
    get valueTipeMotor() { return $('#addvehicle-type-menu > li:nth-child(2)')}
    get pilihTipeDisabled() { return $('#engine-typ[disabled="disabled"]')};
    get inputPlatNomor() { return $('.modal-content [name="licensePlateNumber"]'); };
    get inputMasaSTNK() { return $('.modal-content #stnkExpiredDate'); };
    get datePicker() { return $('.datepicker')}
    get valueMasaSTNK() { return $('.datepicker-dropdown'); };
    get btnSubmitTambahKendaraan() { return $('.modal-content .submit-add-vehicle'); };
    get waitingSuccessSubmitKendaraan() { return $('.visible .loading-text-details'); }; 
    get successAddKendaraan() { return $('.modal-content > .success-add-vehicle-content'); };
    get btnTutup() { return('.modal-content .close-btn-delete-vehicle'); };

    //Riwayat Service from My Account
    get iconRiwayatServis() { return $('.service-histories'); };
    get btnCloseRiwayatServis() { return $('.btn-close-history-service'); };
    get titleRiwayatServis() { return $('.riwayat-servis-title'); };
    get descRiwayatServis() { return $('.riwayat-servis-wording'); };
    get labelTglServis() { return $('.label-tanggal-servis'); };
    get valueTglServis() { return $('.value-tanggal-servis'); };
    get labelCabangAhass() { return $('.label-cabang-ahass'); };
    get valueCabangAhass() { return $('.value-cabang-ahass'); };
    get labelTipeServis() { return $('.label-tipe-servis'); }
    get valueTipeServis() { return $('.value-tipe-servis'); }
    get labelKmMotor() { return $('.label-km-motor'); }
    get valueKmMotor() { return $('.value-km-motor'); }
    get labelPergantianSpareparts () { return $('.label-pergantian-spareparts'); }
    get valuePergantianSparepart() { return $('.value-pergantian-spareparts'); }

    //BookingServiceStep2
    get inputBarKm() {return $('[name="mileage"]')}
    get checkBoxServiceLengkap() {return $('[for="full-service"] .checkbox-service'); };
    get checkBoxServiceRingan() {return $('[for="half-service"] .checkbox-service'); };
    get checkBoxServiceGantiOli() {return $('[for="oil-replacement"] .checkbox-service'); };
    get inputKeluhan() {return $('[name="complaint"]'); };
    get hargaEstimasi() {return $('.price-estimate-service'); };
    get btnSubmit() {return $('.sv-submit-btn'); };
    get waitingSubmitBooking() {return $('.modal-content .loading-text-details'); };
    get tierBookingServiceSuccess() {return $('.book-service-submit-order-subtitle'); };

    //DetailOrderPage
    get numberBooking() {return $('.book-service-submit-order-order-number'); };
    get namaPemesan() {return $('.book-service-submit-order-buyer-details div:nth-of-type(1) > span'); };
    get noTelephonePemesan() {return $('.book-service-submit-order-buyer-details div:nth-of-type(2) > span'); };
    get emailPemesan() {return $('.m-0'); };
    get tanggalService() {return $('.book-service-submit-order-service-details div:nth-of-type(1) > span'); };
    get waktuService() {return $('.book-service-summary-time-value'); };
    get dealerService() {return $('.content-1'); };
    get namaVehicle() {return $('.bs-product-name'); };
    get nomorPolisi() {return $('.book-service-submit-order-top-details > div:nth-of-type(5) > .bs-value'); };
    get jenisService1() {return $('.book-service-submit-order-top-details div:nth-of-type(3) > .bs-value'); };
    get jenisService2() {return $('.book-service-submit-order-top-details > .row > div:nth-of-type(5) > .bs-value'); };
    get hargaEstimasi() {return $('.bs-total-value'); };

    //Rating
    get ratingTitle() { return $ ('.rating-primary-title')}
    get berikanUlasanTitle() { return $ ('.berikan-ulasan-title')}
    get berikanUlasanWording() { return $ ('.berikan-ulasan-wording')}

    //delete Motor
    // get myAccountIcon() { return $('[alt="my-account"]')};
    // get kendaraanSaya() { return $('.my-vehicles-default')};
    // get optionButton() { return $('[data-objname="BEAT POP CW ESP"]')};
    // get deleteButton() { return $('.modal-content .my-vehicle-remove-link)};
    // get yesButton() { return $('.modal-content .remove-vehicle-btn)};
    // get closeButton() { return $('.modal-content .close-btn-delete-vehicle)};


   
    open(){
        super.open(`${browser.options.baseUrl}/layanan-bengkel`);
    }

    openBooking() {
        super.open(`${browser.options.baseUrl}/booking-service`);
    }

    //Service History 
    clickPesanSekarangLayanan() {
        // super.elementScrollIntoView(this.textArticle);
        super.elementScrollIntoView(this.btnPesanSekarang);
        browser.pause(3000);
        super.clickElement(this.btnPesanSekarang);
    }

    clickLanjutkanWebsiteMotorkuX() {
        super.clickElement(this.lanjutkanWebButton);
    }

    clickExistingMotor() {
        super.clickElement(this.existMotor);
    }

    clickLanjutkanLogin() {
        super.clickElement(this.lanjutkanLogin);
    }

    verifyButtonCekRiwayat() {
        super.waitElementDisplayed(this.btnRiwayatServis);
    }

    deleteMotor(){
        super.clickElement(this.my)
    }

    addMotorforService() {
        browser.pause(3000);
        super.elementScrollIntoView(this.addVehicleSection);
        browser.pause(1000);
        // super.elementScrollIntoView(this.btnTambahKendaraan);
        browser.pause(3000);
        super.clickElement(this.btnTambahKendaraan);
        browser.pause(3000);
        super.elementShouldDisplayed(this.labelTambahKendaraan);
        super.inputElement(this.inputEngineNumber, 'JFZ1E3170795');
        super.clickElement(this.btnSearchEngineNumber);
        super.elementShouldDisplayed(this.waitingResultSearch);
        browser.pause(15000);
        super.elementShouldDisplayed(this.pilihTahunDisabled);
        super.elementShouldDisplayed(this.pilihSeriDisabled);
        super.elementShouldDisplayed(this.pilihTipeDisabled);
        super.elementScrollIntoView(this.pilihTipeDisabled);
        browser.pause(1000)
        super.inputElementThenEnter(this.inputPlatNomor, 'B2347FUA');
        browser.pause(3000)
        // super.inputElement(this.inputPlatNomor, 'B2347FUA');
        // super.waitElementEnabled(this.inputMasaSTNK);
        browser.pause(3000);
        super.clickElement(this.inputMasaSTNK);
        browser.pause(3000);
        super.inputElement(this.datePicker, '24/05/2022');
        // browser.executeScript(document.getElementById('stnkExpiredDate').value='02/11/2019');
        // super.clickElement(this.valueMasaSTNK);
        super.elementScrollIntoView(this.btnSubmitTambahKendaraan);
        super.clickElement(this.btnSubmitTambahKendaraan);
        super.elementShouldDisplayed(this.waitingSuccessSubmitKendaraan);
        browser.pause(10000);
        browser.keys(['\ue004']);
        browser.keys(['\ue007']);
    }

    addMotorforServiceManually() {
        super.clickElement(this.btnTambahKendaraan);
        super.elementShouldDisplayed(this.labelTambahKendaraan);
        super.inputElement(this.inputEngineNumber, 'JFZ1E3170999');
        super.clickElement(this.btnSearchEngineNumber);
        browser.pause(3000)
        super.waitElementEnabled(this.inputPilihTahun);
        super.clickElement(this.inputPilihTahun);
        super.clickElement(this.valueTahunMotor)
        super.waitElementEnabled(this.inputPilihSeri);
        super.clickElement(this.inputPilihSeri);
        super.clickElement(this.valueSeriMotor);
        super.waitElementEnabled(this.inputPilihTipe);
        super.clickElement(this.inputPilihTipe);
        super.clickElement(this.valueTipeMotor);
        super.waitElementEnabled(this.inputPlatNomor);
        super.inputElement(this.inputPlatNomor, 'B3456YEA');
        super.waitElementEnabled(this.inputMasaSTNK);
        super.clickElement(this.inputMasaSTNK);
        super.clickElement(this.valueMasaSTNK);
    }

    clickLatestKendaraan() {
        super.clickElement(this.latestKendaraan);
    }

    clickFirstKendaraan() {
        super.clickElement(this.firstKendaraan);
    }

    clickCekRiwayatServisButton() {
        super.elementScrollIntoView(this.btnRiwayatServis);
        super.clickElement(this.btnRiwayatServis);
    }

    verifyRiwayatHistoryPopUp() {
    }

    verifyRiwayatHistoryVerzaPopUp() {
        super.elementShouldContainsText(this.riwayatTitle, 'Riwayat Servis');
        super.elementShouldContainsText(this.riwayatDesc, 'Riwayat Servis Motor Anda');
        super.elementShouldContainsText(this.tglService, 'Tanggal Servis');
        super.elementShouldDisplayed(this.valueTanggal);
        super.elementShouldContainsText(this.kmMotor, 'KM Motor');
        super.elementShouldDisplayed(this.valueKMMotor);
        super.elementShouldContainsText(this.cabangAHASS, 'Cabang AHASS');
        super.elementShouldDisplayed(this.valueCabang);
        super.elementShouldContainsText(this.tipeService, 'Tipe Servis');
    }

    verifyAddVehiclePopUp() {
    }

    verifyAllBookingHistory() {
    }

    verifyServiceHistoryButton() {
        super.elementShouldContainsText(this.iconRiwayatServis, 'Riwayat Servis');
    }

    chooseOptionDropdown(field, value){
        browser.pause(3000);
        super.elementScrollIntoView(this.inputBarKecamatan);
        browser.pause(3000);
        super.clickElement(this.setObjectMappingDropdown()[field]);
        browser.pause(1000);
        super.clickElement(this.setObjectMappingValue()[value]);
        browser.pause(1000);
    }

    chooseAHASSbranch() {
        super.inputElement(this.searchCabang, 'ASTRA');
        super.clickElement(this.cabangAstraPati);
        browser.keys(['\ue004']);
        browser.pause(1000);
        super.elementScrollIntoView(this.datePickerBoard);
    }

    chooseServiceDate() {
        browser.keys(['\ue004']);
        browser.keys(['\ue007']);
        super.clickElement(this.dateValue);
        browser.pause(1000);
        super.elementScrollIntoView(this.btnLanjutkan);
        super.clickElement(this.btnSimpanTanggal);
        browser.pause(3000);
    }

    chooseServiceTime() {
        browser.pause(3000);
        super.clickElement(this.inputBarSlotWaktu);
        super.clickElement(this.valueSlotWaktu);
    }

    clickLanjutkanButtonBooking() {
        super.clickElement(this.btnLanjutkan);
        browser.pause(3000);
    }

    verifyOrderSuccessStep1() {
        browser.pause(3000);
        super.elementShouldDisplayed(this.checklistSuccessBookingStep1);
    }

    inputKMVehicle(noKM) {
        super.elementScrollIntoView(this.inputBarKm);
        super.inputElement(this.inputBarKm, noKM);
        browser.keys(['\ue007']);
        browser.pause(3000)
    }

    chooseRekomendasiServis() {
        super.elementScrollIntoView(this.checkBoxServiceLengkap);
        super.clickElement(this.checkBoxServiceRingan);
        super.clickElement(this.checkBoxServiceGantiOli);
        
    }

    choosePartMotor() {
    }

    writeKeluhanKendaraan(comment) {
        super.elementScrollIntoView(this.inputKeluhan);
        super.inputElement(this.inputKeluhan, comment)
    }

    clickPesanSekarangBookingService() {
        super.elementScrollIntoView(this.btnSubmit);
        super.elementShouldDisplayed(this.hargaEstimasi);
        super.clickElement(this.btnSubmit);
        browser.pause(1000);
    }
    
    verifyOrderSuccessStep2() {
        super.elementShouldDisplayed(this.waitingSubmitBooking);
        browser.pause(10000);
        super.elementShouldDisplayed(this.tierBookingServiceSuccess);
    }

    verifyRatingReview() {
        super.elementScrollIntoView(this.ratingTitle);
        super.elementShouldHaveText(this.ratingTitle, 'Berikan Ulasan');
        super.elementShouldHaveText(this.berikanUlasanTitle, 'Berikan Ulasan Anda');
        super.elementShouldDisplayed(this.berikanUlasanWording);
    }


    verifyDetailOrder() {
        super.elementShouldDisplayed(this.numberBooking);
        super.elementShouldHaveValue(this.namaPemesan, 'Tester QA');
        super.elementShouldHaveValue(this.noTelephonePemesan, '083820071533');
        super.elementShouldHaveValue(this.emailPemesan, 'tester.qa@mailinator.com');
        
    }
    

}
export default new BookingService();