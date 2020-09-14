export interface Environment{
    apiKey:string,
    production:boolean,
    fbDbUrl:string
    firebaseConfig? : {
        apiKey: string,
        authDomain: string,
        databaseURL: string,
        projectId: string,
        storageBucket:string,
        messagingSenderId: string,
        appId: string
    }
}