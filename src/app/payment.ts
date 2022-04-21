interface Provider {
  serviceProvider: string,
  subRoute: string
}

export interface Airtime {
  name: string,
  route:string,
  provider: Provider[]
}
