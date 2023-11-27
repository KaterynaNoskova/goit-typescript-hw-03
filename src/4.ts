class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected key: Key | null;
  protected tenants: Person[];
  constructor(key: Key | null = null) {
    this.door = false;
    this.key = key;
    this.tenants = [];
  }
  abstract openDoor(key: Key): void;
  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log(`${person.getKey().getSignature()} entered the house.`);
    } else {
      console.log("The door is closed. Cannot enter.");
    }
  }
}

class MyHouse extends House {
  constructor(private houseKey: Key) {
    super(houseKey);
  }
  openDoor(key: Key): void {
    if (key.getSignature() === this.houseKey.getSignature()) {
      this.door = true;
      console.log("Door is open.");
    } else {
      console.log("Sorry, key is wrong.");
    }
  }
}
export {};