export interface Room {
    id: string;
    name: string;
    roomTypeId: string;
    pricePerDay: number;
    isEmpty: boolean;
    isCleaned: boolean;
    lastCleanedAt: Date;
    description: string;
    maxAdult: number;
    maxChild: number;
}
