const add = (a:number, b:number) :number=> {
  return a+b;
}

function divide(a: number, b: number): number {
  return a/b
}


const logger = (message: strin): void => {
  
}

const logger = (message: strin): never => {
  
}

const forecast = {
  date: new Date(),
  weather:'sunny'
}

const logWeather = ({date,weather}: { date: Date, weather: string }) => {
  
}

const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng:25
  },
  setAge(age: number): void{
    this.age = age
  }
}

const { age }: { age: number } = profile;
const { coords: { lat, lng } }: { coords: { lat: number ,lng:number} } = profile;