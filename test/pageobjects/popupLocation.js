import Page from './page';

class PopupLocation extends Page {
    
    get titlePopupLocation() { return $('.modal-content .title'); };
    get descPopupLocation() { return $('.modal-content .desc'); };
    get locProvince() { return $('#province-location-button > .ui-selectmenu-text'); };
    get dkiJakarta() { return $('#province-location-menu > li:nth-of-type(5) > .ui-menu-item-wrapper'); };
    get locCity() { return $('#city-location-button > .ui-selectmenu-text'); };
    get jakartaBrt() { return $('#city-location-menu > li:nth-of-type(3) > .ui-menu-item-wrapper'); };
    get submitBtn() { return $('.modal-content .submit-button-location')}
    get closePopup() { return $("//div[@class='modal-content']//img[@alt='close']")}
    
    clickclosePopup(){
        super.clickElement(this.closePopup)
    }

    clickProvince(){
        super.clickElement(this.locProvince)
    }

    clickCity(){
        super.clickElement(this.locCity)
    }

    clickSubmitBtn(){
        super.clickElement(this.submitBtn)
    }
    
    setLocation(param){
        var array = []
        array["jakarta pusat"] = {"province":"3100","city":"3173"};
        
        return '?provinceCode='+array[param].province+'&cityCode='+array[param].city;
    }

}

export default new PopupLocation();