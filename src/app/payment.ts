interface PackageAmount {
  package: string,
  amount: number
}
interface Provider {
  serviceProvider: string,
  subRoute: string,
  packageAmount: PackageAmount[]
}

export interface Payment {
  name: string,
  route:string,
  provider: Provider[]
}
