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
      { serviceProvider: 'Ipnx Subscription Payments', subRoute: 'ipnx-subscription-payments', packageAmount: [] },
      { serviceProvider: 'Mtn Vtu Plus Data', subRoute: 'mtn-vtu-plus-data-plan', packageAmount: [] },
      { serviceProvider: '9Mobile Recharge(e-top Up)', subRoute: '9mobile-recharge-e-top-Up', packageAmount: [] },
      { serviceProvider: 'Airtel Prepaid Data Bundle', subRoute: 'airtel-prepaid-data-bundle', packageAmount: [] },
      { serviceProvider: 'Airtel Voice, Data & Sms Bundles', subRoute: 'airtelvoice-data-sms-bundles', packageAmount: [] },
      { serviceProvider: 'Glo Data Bundle', subRoute: 'glo-data-bundle', packageAmount: [] },
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
      { serviceProvider: 'Benin EDC', subRoute: 'benin-edc', packageAmount: [] },
      { serviceProvider: 'Eko EDC', subRoute: 'eko-edc', packageAmount: [] },
      { serviceProvider: 'Enugu EDC', subRoute: 'enugu-edc', packageAmount: [] },
      { serviceProvider: 'Ibadan EDC', subRoute: 'ibadan-edc', packageAmount: [] },
      { serviceProvider: 'Ikeja EDC', subRoute: 'ikeja-edc', packageAmount: [] },
      { serviceProvider: 'Jos EDC', subRoute: 'jos-edc', packageAmount: [] },
      { serviceProvider: 'Kaduna EDC', subRoute: 'kaduna-edc', packageAmount: [] },
      { serviceProvider: 'Abuja EDC', subRoute: 'abuja-edc', packageAmount: [] },
      { serviceProvider: 'Kedco', subRoute: 'kedco', packageAmount: [] },
      { serviceProvider: 'PHed Postpaid', subRoute: 'phed-postpaid', packageAmount: [] }
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
