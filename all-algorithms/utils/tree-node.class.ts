export class TreeNode {
  private _name: string;
  private _left: TreeNode | null;
  private _right: TreeNode | null;
  private _value: number;

  constructor(name: string, value = 0, left = null, right = null) {
    this._left = left;
    this._right = right;
    this._name = name;
    this._value = value;
  }

  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get left(): TreeNode | null {
    return this._left;
  }

  set left(value: TreeNode | null) {
    this._left = value;
  }

  get right(): TreeNode | null {
    return this._right;
  }

  set right(value: TreeNode | null) {
    this._right = value;
  }

  toString(): string {
    return this._name;
  }
}
