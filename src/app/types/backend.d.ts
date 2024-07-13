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

    interface User {
        id: number;
        name: string;
    }

    interface Comment {
        id: number;
        text: string;
        placeId: number;
        userId: number;
        user: User;
        createdAt: number
    }

    interface Country {
        id: number;
        name: string;
    }

    interface ITravel {
        id: number;
        name: string;
        description: string;
        image: string;
        rating: number;
        country: Country;
        comments: Comment[];
    }

}