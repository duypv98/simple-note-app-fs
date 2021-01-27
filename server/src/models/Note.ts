type NoteData = {
  id: string,
  content?: string
}

class Note {
  public id: string;
  public content?: string;

  constructor({
    id, content
  }: NoteData) {
    this.id = id;
    this.content = content || '';
  }
}

export default Note;
