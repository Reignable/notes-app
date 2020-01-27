import axios from 'axios'
import { Note } from '../model/Note'

const BASE_URL = 'http://localhost:3001/notes'

class NotesService {
  public getNotes = async (): Promise<Note[]> => {
    const response = await axios.get(BASE_URL)
    return response.data
  }

  public getNote = async (id: string | number): Promise<Note> => {
    const response = await axios.get(`${BASE_URL}/${id}`)
    return response.data
  }

  public addNote = async (): Promise<Note> => {
    const response = await axios.post<Note>(BASE_URL, {
      title: 'New Note',
      lastEdited: new Date(),
    })
    return response.data
  }

  public updateNote = async (note: Note): Promise<Note> => {
    const response = await axios.put<Note>(`${BASE_URL}/${note.id}`, {
      ...note,
      lastEdited: new Date(),
    })
    return response.data
  }
}

export const notesService = new NotesService()
