export { }
declare global {
    interface IRequest {
        url: string;
        method: string;
        body?: { [key: string]: any };
        queryParams?: any;
        useCredentials?: boolean;
        headers?: any;
        nextOption?: any;
    }

    interface ITravel {
        id: number;
        name: string;
        description: string;
        image: string;
        country: {
            name: string;
        }
        rating: number
    }
}