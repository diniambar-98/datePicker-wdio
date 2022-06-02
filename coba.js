// import Page from './page';

// class DatePicker extends Page {

//     get openCalendarButton() {return $("#datepicker ~ span button"); };
//     get calendar() {return $("div[role='calendar']"); };
//     get period() {return $("div[role='period']"); };
//     get leftArrow() {return $("div[role='navigator'] i.chevron-left"); };
//     get rightArrow() {return $("div[role='navigator'] i.chevron-right"); };
//     // get day_FORMAT  "//td[@day='%d' and contains(@class, 'current-month')]";

   

//     chooseDate(date){
//         super.open('/home/dini/Documents/02_Explore/datepicker/web/datepicker.html');
//         chooseMonth(date);
//         chooseDay(date.getDayOfMonth());
//         return getSelectedDate();
//     }

//     getSelectedDate(){
//     //    var fields = driver.findElement(calendar).getAttribute("selectedday").split("-");
//        const a = document.getElementById().getAttribute().split("-");
//        return LocalDate.of(
//                Integer.parseInt(fields[0]),
//                Integer.parseInt(fields[1]) + 1,
//                Integer.parseInt(fields[2]));
//     }
    
//     public void chooseDay(int dayOfMonth) {
//      locator =.xpath(format(day_FORMAT, dayOfMonth));
//         driver.findElement(locator).click();
//     }

//     public void chooseMonth(LocalDate date) {
//         var currentPeriod = getCurrentPeriod();
//         long monthsAway = ChronoUnit.MONTHS.between(currentPeriod, date.withDayOfMonth(1));

//      arrow = monthsAway < 0 ? leftArrow : rightArrow;

//         for(int i = 0; i < Math.abs(monthsAway); i++){
//             driver.findElement(arrow).click();
//         }
//     }

//     getCurrentPeriod(){
//         var currentPeriod = driver.findElement(period).getText().split(" ");
//         return LocalDate.of(
//                 Integer.parseInt(currentPeriod[1]),
//                 Month.valueOf(currentPeriod[0].toUpperCase()),
//                 1);
//     }

//     public void open(){
//         if(!isCalendarOpen()){
//             driver.findElement(openCalendarButton).click();
//         }
//     }

//     public boolean isCalendarOpen(){
//         return driver.findElement(calendar).isDisplayed();
//     }
// }
