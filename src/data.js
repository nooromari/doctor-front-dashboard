import axios from 'axios';
const Base_URL = 'http://127.0.0.1:8000/api/v1/dashboard';


export async function fetchData(req) {
    try {
        const response = await axios.get(`${Base_URL}/${req}`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const avg_cons = 28.6;
export const fuel_cost = 70.000;

export const consumption =
{
  per_month: {
    Jan: 130000,
    Feb: 60000,
    Mar: 120000,
    Apr: 80000,
    May: 99000,
    Jun: 60000,
  },
  per_week: {
    Week1: 25000,
    Week2: 20000,
    Week3: 10000,
    Week4: 16000,
  },
  per_day:
  {
    Sun: 1000,
    Mon: 500,
    Tus: 800,
    Wed: 900,
    Thu: 1500,
    Fri: 700,
    Sat: 1000
  }

}