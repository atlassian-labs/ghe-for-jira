interface IComparable<T> {
  compareTo(other?: T): boolean;
}

const isEntity = (v: any): v is Entity<any> => {
  return v instanceof Entity;
};

export abstract class Entity<T> implements IComparable<T> {
  protected props: T;

  constructor(props: T) {
    this.props = props;
  }

  public equals(object?: Entity<T>): boolean {

    if (object == null || object == undefined) {
      return false;
    }

    if (!isEntity(object)) {
      return false;
    }

    return this.compareTo(object.props);
  }

  abstract compareTo(other?: T): boolean;
}