import {
  createSlice,
  createSelector,
  PayloadAction,
  PrepareAction,
} from '@reduxjs/toolkit'
import { RootState } from 'rootReducer'

let nextNoteId = 0

export type Note = { id: number; title: string; body: string }
export type Notes = Note[]

type NotesState = {
  list: Notes
  selected?: number
}

const notesSlice = createSlice({
  name: 'notes',
  initialState: { list: [] } as NotesState,
  reducers: {
    addNote: (state): void => {
      state.list.push({
        id: nextNoteId++,
        title: `Note ${nextNoteId}`,
        body: `Note ${nextNoteId} body`,
      })
    },
    selectNote: {
      prepare: (id: number): ReturnType<PrepareAction<{ id: number }>> => ({
        payload: { id },
      }),
      reducer: (state, action: PayloadAction<{ id: number }>): void => {
        const { id } = action.payload
        if (state.list.some(note => note.id === id)) state.selected = id
      },
    },
    deleteNote: {
      prepare: (id: number): ReturnType<PrepareAction<{ id: number }>> => ({
        payload: { id },
      }),
      reducer: (state, action: PayloadAction<{ id: number }>): void => {
        const { id } = action.payload
        const noteToDelete = state.list.find(note => note.id === id)
        if (noteToDelete) {
          const index = state.list.indexOf(noteToDelete)
          if (state.selected === id) {
            if (index > 0) {
              state.selected = state.list[index - 1].id
            } else if (index === 0 && state.list.length > 1) {
              state.selected = state.list[index + 1].id
            } else {
              state.selected = undefined
            }
          }
          state.list.splice(index, 1)
        }
      },
    },
    updateNote: {
      prepare: (
        id: Note['id'],
        newValues: Partial<Omit<Note, 'id'>>,
      ): ReturnType<
        PrepareAction<{
          id: Note['id']
          title?: Note['title']
          body?: Note['body']
        }>
      > => ({
        payload: { id, ...newValues },
      }),
      reducer: (
        state,
        action: PayloadAction<{
          id: Note['id']
          title?: Note['title']
          body?: Note['body']
        }>,
      ): void => {
        const { id, title, body } = action.payload
        const note = state.list.find(n => n.id === id)
        if (note) {
          const index = state.list.indexOf(note)
          if (title !== undefined) state.list[index].title = title
          if (body !== undefined) state.list[index].body = body
        }
      },
    },
  },
})

const baseSelector = (state: RootState): NotesState => state.notes
export const selectNotesList = createSelector(baseSelector, state => state.list)
export const selectSelectedNoteId = createSelector(
  baseSelector,
  state => state.selected,
)
export const selectSelectedNote = createSelector(baseSelector, state =>
  state.list.find(({ id }) => id === state.selected),
)

export const {
  addNote,
  selectNote,
  deleteNote,
  updateNote,
} = notesSlice.actions
export default notesSlice.reducer
