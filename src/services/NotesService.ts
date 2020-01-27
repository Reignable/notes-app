import axios from 'axios'
import { Note } from '../model/Note'

const BASE_URL = 'http://localhost:3001/notes'

class NotesService {
  public getNotes = async (): Promise<Note[]> => {
    const response = await axios.get(BASE_URL)
    return response.data
  }
}

export const notesService = new NotesService()
