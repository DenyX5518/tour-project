export interface ITour {
    id: number,
    name: string,
    county: string,
    image: string,
    price: number,
    startDate: Date,
}

export interface TourList {
    list: ITour[]
}

