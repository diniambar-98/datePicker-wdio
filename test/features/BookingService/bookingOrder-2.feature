Feature: Booking Service - Success Booking Service Using Manually

         Background:[MOBILE] Open Mobile Web is at Astra Motor Article Booking Page
            Given a Mobile Web is at Astra Motor Article Booking Service
             When User click Pesan Sekarang at Layanan Servis Section
              And User click lanjutkan on website MotorkuX
              And User fill Phone Number '083820071533'
              And User fill Password 'testermango123'
              And User click Lanjutkan button at Login Page Booking Service

        @id:1 @FM-1230 @FM-1231 @FM-1232 @agrdinia7257 @verifyThanksBooking @skeleton @skip()
        Scenario: [MOBILE] User can booking service step-1 successfully using engine number that haven't been registered
            #  When User add some Motor on Booking Service Page Manually // blm ada seeding data
                And User choose the latest Kendaraan that have been added
                And User choose Province 'JawaTengah' in Province Dropdown Lokasi Service
                And User choose City 'KabupatenPati' in City Dropdown Lokasi Service
                And User choose District 'Pati' in District Dropdown Lokasi Service
                And User choose AHASS Pati on Booking Service Page
                And User choose date of service on Booking Service Page
                And User choose time of service on Booking Service Page
                And User click Lanjutkan button on Booking Service Page
                And User can see booking order step 1 is success
                And User input KM Kendaraan '8000' on Booking Service Page
                And User choose rekomendasi servis on Booking Service Page
                And User choose part motor on Booking Service Page
                And User write keluhan pada kendaraan 'Karet Ban robek dan mobil terdapat baret akibat tertabrak kendaraan lain ketika macet di rel kereta' on Booking Service
                And User click Pesan Sekarang on Booking Service
                And User can see booking order is success
                Then User can verify Success Booking Page correctly