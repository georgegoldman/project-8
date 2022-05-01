export interface PackageAmount {
  package: string,
  amount: number
}
export interface Provider {
  serviceProvider: string,
  subRoute: string,
}

export interface Payment {
  name: string,
  route:string,
}


export interface Service {
  serviceType: string,
  serviceName: string,
  serviceRoute: string
}

export interface Package {
  packageName: string,
  packageAmount: number,
  packageType: string,
}
