import { Payment } from "./payment"


export const PAYMENTS:Payment[] = [
  {
    name: 'Buy Airtime',
    route: 'airtime',
    provider: [
      { serviceProvider: 'MTN', subRoute: 'mtn', },
      { serviceProvider: 'GLO', subRoute: 'glo' },
      { serviceProvider: '9mobile', subRoute: '9mobile' },
      { serviceProvider: 'AIRTEL', subRoute: 'airtel' }
    ]
  },
  {
    name: 'Pay Internet Bill',
    route: '',
    provider: [
      {serviceProvider: 'Spectranet Limited', subRoute: 'spectranet-limited'},
      { serviceProvider: 'Smile Bundle', subRoute: 'smile-bundle' },
      { serviceProvider: 'Ipnx Subscription Payments', subRoute: 'ipnx-subscription-payments' },
      { serviceProvider: 'Mtn Vtu Plus Data Plan', subRoute: 'mtn-vtu-plus-data-plan' },
      { serviceProvider: '9Mobile Recharge(e-top Up)', subRoute: '9mobile-recharge-e-top-Up' },
      { serviceProvider: 'Airtel Prepaid Data Bundle', subRoute: 'airtel-prepaid-data-bundle' },
      { serviceProvider: 'Airtel Voice, Data & Sms Bundles', subRoute: 'airtelvoice-data-sms-bundles' },
      { serviceProvider: 'Glo Data Bundle', subRoute: 'glo-data-bundle' },
    ]
  },
  {
    name: 'Pay TV Bill',
    route: '',
    provider: [
      { serviceProvider: 'Dstv Box Office Wallet Topup', subRoute: 'dstv-box-office-wallet-topup' },
      { serviceProvider: 'Dstv Subcription', subRoute: 'dstv-subcription' },
      { serviceProvider: 'Gotv', subRoute: 'gotv' },
      { serviceProvider: 'Startimes Payments', subRoute: 'startimes-payments' }
    ]
  },
  {
    name: 'Pay Electricity Bill',
    route: '',
    provider: [
      { serviceProvider: 'Benin EDC', subRoute: 'benin-edc' },
      { serviceProvider: 'Eko EDC', subRoute: 'eko-edc' },
      { serviceProvider: 'Enugu EDC', subRoute: 'enugu-edc' },
      { serviceProvider: 'Ibadan EDC', subRoute: 'ibadan-edc' },
      { serviceProvider: 'Ikeja EDC', subRoute: 'ikeja-edc' },
      { serviceProvider: 'Jos EDC', subRoute: 'jos-edc' },
      { serviceProvider: 'Kaduna EDC', subRoute: 'kaduna-edc' },
      { serviceProvider: 'Abuja EDC', subRoute: 'abuja-edc' },
      { serviceProvider: 'Kedco', subRoute: 'kedco' },
      { serviceProvider: 'PHed Postpaid', subRoute: 'phed-postpaid' }
    ]
  },
  {
    name: 'Pay for Betting',
    route: '',
    provider: [
      { serviceProvider: 'Nairabet', subRoute: 'nairabet' },
      { serviceProvider: '1xbet', subRoute: '1xbet' },
      { serviceProvider: 'Bet9ja', subRoute: 'Bet9ja' },
      { serviceProvider: 'BetKing', subRoute: 'betking' },
      { serviceProvider: 'Betway', subRoute: 'betway' },
      { serviceProvider: 'Merrybet Gold Limited', subRoute: 'merrybet-gold-limited' },
      { serviceProvider: 'Sportybet', subRoute: 'sportybet' },
      { serviceProvider: 'Winners Golden Bet', subRoute: 'winners-golden-bet' }
    ]
  }
]
