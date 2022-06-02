import Page from './page';
import randomstring from 'randomstring';


// const elem = $('.btn-booking-service');
class BookingService extends Page {

    get btnPesanSekarang() { return $('.btn-booking-service'); };
    get lanjutkanWebButton() { return $('.book-service-login'); };
    get lanjutkanLogin() { return $('.btn-primary-white');}
    get addVehicleSection() { return $('.add-vehicle-text-section'); };
    get btnTambahKendaraan() { return $(".add-vehicle-carousel .btn-add-myvehicle .fa-plus-circle"); };
    get latestKendaraan() { return $('[alt="BEAT POP CW ESP"]'); };
    get inputBarProvinsi() { return $('#ahass-province-button'); };
    get valueProvinsi() { return $('#ahass-province-menu > li:nth-of-type(7)'); };
    get inputBarKota() { return $('#ahass-city-button'); };
    get valueKota() { return $('li:nth-of-type(18) > .ui-menu-item-wrapper')}
    get inputBarKecamatan() { return $('#ahass-district-button'); };
    get valueKecamatan() { return $('#ahass-district-menu > li:nth-of-type(3)'); };
    get searchCabang() { return $('.input-ahass-branch'); };
    get btnSearchCabang() { return $('.form-control'); };
    get cabangAstraPati() { return $('[data-branchcode="H376"]'); };
    get datePickerBoard() { return $('.ui-datepicker-calendar'); };
    get dateValue() { return $('.ui-datepicker-current-day > .ui-state-default'); };
    get btnSimpanTanggal() { return $('.ahass-date-save-btn'); };
    get inputBarSlotWaktu() { return $('#ahass-service-time-button'); };
    get valueSlotWaktu() { return $('#ahass-service-time-menu > li:nth-of-type(5)'); };

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
    get inputEngineNumber() { return $('.modal-content #engineNumber[placeholder="No. Mesin Kendaraan Anda"]'); };
    get btnSearchEngineNumber() { return $('.modal-content #btn-search-engine'); };
    get waitingResultSearch() { return $('.visible .loading-text-details'); };
    get inputPlatNomor() { return $('.modal-content [name="licensePlateNumber"]'); };
    get masaSTNKattribute() { return $('#stnkExpiredDate'); };
    get inputMasaSTNK() { return $('.modal-content #stnkExpiredDate'); };
    // get datePicker() { return $('.datepicker')}
    get valueMasaSTNK() { return $('.datepicker-dropdown'); };
    get btnSubmitTambahKendaraan() { return $('.modal-content .submit-add-vehicle'); };
    get waitingSuccessSubmitKendaraan() { return $('.visible .loading-text-details'); }; 
    get successAddKendaraan() { return $('.modal-content > .success-add-vehicle-content'); };
    get btnTutup() { return('.modal-content .close-btn-delete-vehicle'); };

   
    open(){
        super.open(`${browser.options.baseUrl}/layanan-bengkel`);
    }

    openBooking() {
        super.open(`${browser.options.baseUrl}/booking-service`);
    }

    //Service History 
    clickPesanSekarangLayanan() {
        super.elementScrollIntoView(this.btnPesanSekarang);
        browser.pause(3000);
        super.clickElement(this.btnPesanSekarang);
    }

    clickLanjutkanWebsiteMotorkuX() {
        super.clickElement(this.lanjutkanWebButton);
    }

    clickLanjutkanLogin() {
        super.clickElement(this.lanjutkanLogin);
    }

    addMotorforService() {
        super.elementScrollIntoView(this.addVehicleSection);
        browser.pause(3000)
        super.clickElement(this.btnTambahKendaraan);
        super.inputElement(this.inputEngineNumber, 'JFZ1E3170795');
        super.clickElement(this.btnSearchEngineNumber);
        super.elementShouldDisplayed(this.waitingResultSearch);
        browser.pause(15000);
        super.elementScrollIntoView(this.inputPlatNomor);
        browser.pause(1000)
        super.inputElementThenEnter(this.inputPlatNomor, 'B2347FUA');
        // super.removeAttr(this.masaSTNKattribute, 'readonly');
        super.removeAttribute()
        // super.removeReadOnly(this.masaSTNKattribute);
        super.clickElement(this.inputMasaSTNK);
        browser.pause(3000)
        super.inputElement(this.inputMasaSTNK, '02/01/2024');
        browser.pause(3000)
        super.elementShouldDisplayed(this.datePicker);
        super.elementScrollIntoView(this.btnSubmitTambahKendaraan);
        super.clickElement(this.btnSubmitTambahKendaraan);
        super.elementShouldDisplayed(this.waitingSuccessSubmitKendaraan);
        browser.pause(10000);
        browser.keys(['\ue004']);
        browser.keys(['\ue007']);
    }
 
    

    clickLatestKendaraan() {
        super.clickElement(this.latestKendaraan);
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

    // removeAttribute(elements) {
    // obj = browser.execute((element) => document.querySelectorAll(element), elements);
    //     for (let i = 0; i < obj.length; i++) {
    //         obj[i].removeAttribute('readonly')
    //     }    
    // }
    

}
export default new BookingService();