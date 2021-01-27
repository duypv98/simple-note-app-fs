type UserData = {
  id: string,
  email: string,
  full_name?: string,
  password: string,
  phone?: string
}

class User {
  public id: string;
  public email: string;
  public full_name?: string | null;
  public password: string;
  public phone?: string | null;

  constructor({
    id, email, full_name, password, phone
  }: UserData) {
    this.id = id;
    this.email = email;
    this.full_name = full_name || null;
    this.password = password;
    this.phone = phone || null;
  }
}

export default User;
