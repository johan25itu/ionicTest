export class JoueurModel{
    private _nom: string;
    private _mail: string;
    private _pass: string;
    private _points: number;

    constructor(nom: string, mail:string, pass:string, points:number){
        this._nom = nom;
        this._mail = mail;
        this._pass = pass;
        this._points = points;
    }

}