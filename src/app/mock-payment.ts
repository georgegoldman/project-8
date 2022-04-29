import { Payment } from "./payment"


export const PAYMENTS:Payment[] = [
  {
    name: 'Buy Airtime',
    route: 'airtime',
    provider: [
      { serviceProvider: 'MTN', subRoute: 'mtn', packageAmount: []},
      { serviceProvider: 'GLO', subRoute: 'glo', packageAmount: []},
      { serviceProvider: '9mobile', subRoute: '9mobile', packageAmount: [] },
      { serviceProvider: 'AIRTEL', subRoute: 'airtel', packageAmount: [] }
    ]
  },
  {
    name: 'Pay Internet Bill',
    route: 'internet-bills',
    provider: [
      {serviceProvider: 'Spectranet Limited', subRoute: 'spectranet-limited',
      packageAmount: [
       {package: "Ngn500 Mobile Pin", amount: 500},
       {package: "gn1000 Mobile Pin", amount: 1000},
       {package: "Ngn2000 Mobile Pin", amount: 2000},
       {package: "Ngn5000 Mobile Pin", amount: 5000},
       {package: "gn7000 Mobile Pin", amount: 7000},
       {package: "Ngn10000 Mobile Pin", amount: 10000}
      ]},
      { serviceProvider: 'Smile Bundle', subRoute: 'smile-bundle',
        packageAmount: [
          {package: "1gb Flexidaily (1 Day)", amount: 300},
          {package: "2.5gb Flexidaily (2 Days)", amount: 500},
          {package: "1gb Flexiweekly (7 Days)", amount: 500},
          {package: "Smilevoice Only 65 (30 Days)", amount: 510},
          {package: "1.5gb Bigga (30 Days)", amount: 1000},
          {package: "2gb Flexiweekly (7 Days)", amount: 1000},
          {package: "Smilevoice Only 135 (30 Days)", amount: 1020},
          {package: "2gb Midnite (7 Days)", amount: 1020},
          {package: "2gb Bigga (30 Days)", amount: 1200},
          {package: "3gb Bigga (30 Days)", amount: 1500},
          {package: "6gb Flexiweekly (7 Days)", amount: 1500},
          {package: "3gb Midnite (7 Days)", amount: 1530},
          {package: "3gb Weekend Only (3 Days)", amount: 1530},
          {package: "5gb Bigga (30 Days)", amount: 2000},
          {package: "6.5gb Bigga (30 Days)", amount: 2500},
          {package: "8gb Bigga (30 Days)", amount: 3000},
          {package: "smilevoice Only 430 (30 Days)", amount: 3070},
          {package: "10gb Bigga (30 Days)", amount: 3500},
          {package: "12gb Bigga (30 Days)", amount: 4000},
          {package: "15gb Bigga (30 Days)", amount: 5000},
          {package: "20gb Bigga (30 Days)", amount: 6000},
          {package: "30gb Bigga (30 Days)", amount: 8000},
          {package: "40gb Bigga (30 Days)", amount: 10000},
          {package: "Unlimitedlite (30 Days)", amount: 10000},
          {package: "60gb Bigga (30 Days)", amount: 13500},
          {package: "75gb Bigga (30 Days)", amount: 15000},
          {package: "Unlimitedessential (30 Days)", amount: 15000},
          {package: "100gb Bigga (30 Days)", amount: 18000},
          {package: "90gb Jumbo 20000ngn (60 Days)", amount: 20000},
          {package: "Freedom 3mbps (30 Days)", amount: 20000},
          {package: "Freedom 6mbps (30 Days)", amount: 24000},
          {package: "160gb Jumbo 34000ngn (90 Days)", amount: 34000},
          {package: "Besteffort Freedom (365 Days)", amount: 36000},
          {package: "200gb Jumbo (120 Days)", amount: 40000},
          {package: "125gb 50000ngn (365 Days)", amount: 50000},
          {package: "200gb Anytime (365 Days)", amount: 70000},
          {package: "500gb 100000ngn (365 Days)", amount: 100000},
          {package: "1tb Anytime (365 Days)", amount: 120000}

        ] },
      { serviceProvider: 'Ipnx Subscription Payments', subRoute: 'ipnx-subscription-payments',
      packageAmount: [
        {package: "Unlimited Starter Plan", amount: 12900},
        {package: "Unlimited Mini Plan", amount: 23115},
        {package:"Unlimited Lyte Plan", amount: 17200},
        {package: "Unlimited Premium Plan", amount: 62350},
        {package: "Unlimited Preferred Plan", amount: 45150},
        {package: "Unlimited Basic Plan", amount: 29025},
        {package: "Ultimate Premium Plan", amount: 161250},
        {package: "Ultimate Preferred Plan", amount: 96750},
        {package: "Ultimate Basic Plan", amount: 80625},
        {package: "dvantage Premium Plan", amount: 43000},
        {package: "Advantage Preferred Plan", amount: 26875},
        {package: "Advantage Basic Plan", amount: 16125},
        {package: "Starter Preferred Plan", amount: 10750}
      ] },
      { serviceProvider: 'Mtn Vtu Plus Data', subRoute: 'mtn-vtu-plus-data-plan',
      packageAmount: [
        {package: "20mb For 1 Day", amount: 25},
        {package: "50mb For 7 Days", amount: 50},
        {package: "100mb For 1 Day", amount: 100},
        {package: "160mb For 30 Days", amount: 150},
        {package: "200mb For 2 Days", amount: 200},
        {package: "350mb For 7 Days", amount: 300},
        {package: "1gb For 1 Day", amount: 300},
        {package: "1gb For 7 Days", amount: 500},
        {package: "2.5gb For 2 Days", amount: 500},
        {package: "750mb For 2 Weeks", amount: 500},
        {package: "1.5gb For 1 Month", amount: 1000},
        {package: "2gb For 1 Month", amount: 1200},
        {package: "3gb For 1 Month", amount: 1500},
        {package: "6gb For 7 Days", amount: 1500},
        {package: "4.5gb For 1 Month", amount: 2000},
        {package: "6gb For 1 Month", amount: 2500},
        {package: "10gb For 1 Month", amount: 3000},
        {package: "12gb For 1 Month", amount: 3500},
        {package: "20gb For 1 Month", amount: 5000},
        {package: "25gb For 1 Month", amount: 6000},
        {package: "40gb For 1 Month", amount: 10000},
        {package: "30gb For 1 Month (sme Data Plan)",amount: 13500},
        {package: "75gb For 1 Month", amount: 15000},
        {package: "110gb For 1 Month", amount: 20000},
        {package: "75gb For 2 Months", amount: 20000},
        {package: "120gb For 2 Months", amount: 30000},
        {package: "90gb For 2 Months (sme Data Plan)", amount: 40000},
        {package: "150gb For 3 Months", amount: 50000},
        {package: "150gb For 3 Month (sme Special Offer)", amount: 50000},
        {package: "250gb For 3 Months", amount: 75000},
        {package: "400gb For 1 Year", amount: 120000},
        {package: "1000gb For 1 Year", amount: 300000},
        {package: "2000gb For 1 Year", amount: 450000},


      ] },
      { serviceProvider: '9Mobile Recharge(e-top Up)', subRoute: '9mobile-recharge-e-top-Up',
        packageAmount: [
          {package: "9mobile 25mb (24 Hours)", amount: 50},
          {package: "9mobile 100mb (24 Hours)",amount: 100},
          {package: "9mobile 650mb (24 Hours)", amount: 200},
          {package: "9mobile 500mb (30 Days)", amount: 500},
          {package: "9mobile 1.5gb (30 Days)", amount: 1000},
          {package: "9mobile 2gb (30 Days)", amount: 1200},
          {package: "9mobile 7gb (7 Days)", amount: 1500},
          {package: "9mobile 4.5gb (30 Days)", amount: 2000},
          {package: "9mobile 11gb (30days)", amount: 4000},
          {package: "9mobile 15gb (30 Days)", amount: 5000},
          {package: "9mobile 40gb (30 Days)", amount: 10000},
          {package: "9mobile 75gb (30 Days)", amount: 15000},
          {package: "9mobile 75gb (90 Days)", amount: 25000},
          {package: "9mobile 165gb (180 Days)", amount: 50000},
          {package: "9mobile 100gb ( 100 Days)", amount: 84992},
          {package: "9mobile 365gb (365 Days)", amount: 100000}
        ]
      },
      { serviceProvider: 'Airtel Prepaid Data Bundle', subRoute: 'airtel-prepaid-data-bundle',
        packageAmount: [
          {package: "Data Plan Gives 6gb For N1500 Valid For 7days",amount: 1499.03},
          {package: "Data Plan Gives 1gb For N300 Valid For 1days", amount: 299.03},
          {package: "Data Plan Gives 350mb For N300 Valid For 7day", amount: 299.02},
          {package: "Monthly Plan - N500(750mb Valid For 14days)", amount: 499},
          {package: "Monthly Plan - N1,000(1.5gb Valid For 30days)", amount: 999},
          {package: "Data Plan 3gb For N1500 Valid For 30 Days", amount: 1499.01},
          {package: "Data Plan Gives 4.5gb For N2000 Valid For 30 Days", amount: 1999},
          {package: "Data Plan Gives 11gb For N4000 Valid For 30 Days", amount: 3999.01},
          {package: "Data Plan Gives 6gb For N2500 Valid For 30 Days", amount: 2499.01},
          {package: "Data Plan Gives 2gb For N500 Valid For 1day", amount: 499.03},
          {package: "Data Plan Gives 2gb For N1200 Valid For 30days",amount: 1199},
          {package: "Data Plan Gives 40gb For N10000 Valid For 30days", amount: 9999},
          {package: "Data Plan Gives 75gb For N15000 Valid For 30days", amount: 14999},
          {package: "Daily Plan -n50 (40mb Valid For 1 Day)", amount: 49.99},
          {package: "Daily Plan -n100 (100mb Valid For 1 Day)", amount: 99},
          {package: "Daily Plan -n200(200mb Valid For 3 Days)",amount: 199.03},
          {package: "Data Plan Gives 10gb For N3000 Valid For 30 Days", amount: 2999.02},
          {package: "Data Plan Gives 20gb For N5000 Valid For 30 Days", amount: 4999},
          {package: "Data Plan Gives 120gb For N20000 Valid For 30 Days", amount: 19999.02},
          {package: "Data Plan Gives 200gb For N30000 Valid For 30 Days", amount: 29999.02}
        ] },
      { serviceProvider: 'Airtel Voice, Data & Sms Bundles', subRoute: 'airtelvoice-data-sms-bundles',
      packageAmount: [
        {package: "N2,100 For Calls, Sms &amp; Data (7 Days)", amount: 699},
        {package: "N4,500 For Calls, Sms &amp; Data (15 Days)", amount: 1499},
        {package: "N63,000 Voice + 2,000 Free Sms - All Networks (30 Days)", amount: 19999},
        {package: "N173,000 Airtime + 4,000 Free Sms - All Networks (30 Days)", amount: 49999},
        {package: "N68,000 Airtime + 4gb (30 Days)", amount: 24999},
        {package: "N168,000 Airtime + 6gb (30 Days)", amount: 54999}
      ] },
      { serviceProvider: 'Glo Data Bundle', subRoute: 'glo-data-bundle',
      packageAmount: [
        {package: "1gb Night Only", amount: 100},
        {package: "150mb For 1 Day", amount: 100},
        {package: "350mb For 2 Days", amount: 200},
        {package: "500mb Night Only", amount: 50},
        {package: "1.25gb (sunday 1 Day)", amount: 200},
        {package: "1.35gb For 14 Days", amount: 500},
        {package: "2.9gb For 30days", amount: 1000},
        {package: "5.8gb For 30 Days", amount: 2000},
        {package: "7.7gb For 30days", amount: 2500},
        {package: "10gb For 30 Days", amount: 3000},
        {package: "13.25gb For 30 Days", amount: 4000},
        {package: "18.25gb For 30 Days", amount: 5000},
        {package: "29.5gb For 30days", amount: 8000},
        {package: "50gb For 30days", amount: 10000},
        {package: "93gb For 30days", amount: 15000},
        {package: "119gb For 30days", amount: 18000},
        {package: "50mb For 1day", amount: 50},
        {package: "138gb For 30days", amount: 20000},
        {package: "7gb For 7days", amount: 1500},
        {package: "4.1gb For 30days", amount: 1500}
      ] },
    ]
  },
  // {
  //   name: 'Pay TV Bill',
  //   route: '',
  //   provider: [
  //     { serviceProvider: 'Dstv Box Office Wallet Topup', subRoute: 'dstv-box-office-wallet-topup' },
  //     { serviceProvider: 'Dstv Subcription', subRoute: 'dstv-subcription' },
  //     { serviceProvider: 'Gotv', subRoute: 'gotv' },
  //     { serviceProvider: 'Startimes Payments', subRoute: 'startimes-payments' }
  //   ]
  // },
  {
    name: 'Pay Electricity Bill',
    route: '',
    provider: [
      { serviceProvider: 'Benin EDC', subRoute: 'benin-edc',
        packageAmount: [
         {package: "Postpaid", amount: 0},
         {package: "Prepaid", amount: 0}
       ] },
      { serviceProvider: 'Eko EDC', subRoute: 'eko-edc',
        packageAmount: [
        {package: "Postpaid", amount: 0},
         {package: "Prepaid", amount: 0}
      ] },
      { serviceProvider: 'Enugu EDC', subRoute: 'enugu-edc',
        packageAmount: [
          {package: "Postpaid", amount: 0},
         {package: "Prepaid", amount: 0}
        ] },
      { serviceProvider: 'Ibadan EDC', subRoute: 'ibadan-edc',
        packageAmount: [
          {package: "Electric Bill", amount: 0},
         {package: "Prepaid", amount: 0}
        ] },
      { serviceProvider: 'Ikeja EDC', subRoute: 'ikeja-edc',
        packageAmount: [
          {package: "Postpaid", amount: 0},
         {package: "Prepaid", amount: 0}
        ] },
      { serviceProvider: 'Jos EDC', subRoute: 'jos-edc',
        packageAmount: [
          {package: "Jedc Postpaid", amount: 0},
         {package: "Prepaid", amount: 0}
        ] },
      { serviceProvider: 'Kaduna EDC', subRoute: 'kaduna-edc',
        packageAmount: [
          {package: "Postpaid", amount: 0},
         {package: "Prepaid", amount: 0}
        ] },
      { serviceProvider: 'Abuja EDC', subRoute: 'abuja-edc',
        packageAmount: [
          {package: "Aedc Postpaid", amount: 0},
         {package: "Aedc Prepaid", amount: 0}
        ] },
      { serviceProvider: 'Kedco', subRoute: 'kedco',
        packageAmount: [
          {package: "Postpaid", amount: 0},
          {package: "Prepaid", amount: 0}
        ] },
      { serviceProvider: 'PHed Postpaid', subRoute: 'phed-postpaid',
        packageAmount: [
          {package: "Postpaid", amount: 0},
          {package: "Prepaid", amount: 0}
        ] }
    ]
  },
  // {
  //   name: 'Pay for Betting',
  //   route: '',
  //   provider: [
  //     { serviceProvider: 'Nairabet', subRoute: 'nairabet' },
  //     { serviceProvider: '1xbet', subRoute: '1xbet' },
  //     { serviceProvider: 'Bet9ja', subRoute: 'Bet9ja' },
  //     { serviceProvider: 'BetKing', subRoute: 'betking' },
  //     { serviceProvider: 'Betway', subRoute: 'betway' },
  //     { serviceProvider: 'Merrybet Gold Limited', subRoute: 'merrybet-gold-limited' },
  //     { serviceProvider: 'Sportybet', subRoute: 'sportybet' },
  //     { serviceProvider: 'Winners Golden Bet', subRoute: 'winners-golden-bet' }
  //   ]
  // }
]
