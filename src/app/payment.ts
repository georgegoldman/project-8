 interface Provider {
  serviceProvider: string,
  subRoute: string
}

export interface Payment {
  name: string,
  route:string,
  provider: Provider[]
}
