export class Person {
    private static _nickname: string;

    public static get Nickname(): string {
        return this._nickname;
    }

    public static set Nickname(value: string) {
        this._nickname = value;
    }

    private static _color: string;

    public static get Color(): string {
        return this._color;
    }

    public static set Color(value: string) {
        this._color = value;
    }
}