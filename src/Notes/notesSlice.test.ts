import { RootState } from 'rootReducer'
import notes, { addNote, selectNotesList } from './notesSlice'

describe('notes slice', () => {
  describe('reducer', () => {
    it('should create initial state', () => {
      expect(notes(undefined, { type: undefined })).toEqual({ list: [] })
    })

    it('should handle adding a note', () => {
      const expected = {
        list: [{ body: 'Note 1 body', title: 'Note 1', id: 0 }],
      }
      expect(notes({ list: [] }, { type: addNote.type })).toEqual(expected)
    })
  })

  describe('actions', () => {
    describe('addNote', () => {
      it('should give each note incrementing ids', () => {
        const state1 = notes({ list: [] }, addNote())
        const state2 = notes(state1, addNote())
        expect(state2.list[1].id).toEqual(state2.list[0].id + 1)
      })
    })
  })

  describe('selectors', () => {
    describe('selectNotes', () => {
      it('should return the notes array from root state', () => {
        const initialState: RootState = {
          notes: {
            list: [{ id: 0, title: 'test note', body: 'test note body' }],
          },
        }
        const result = selectNotesList(initialState)
        expect(result).toEqual(initialState.notes.list)
      })
    })
  })
})
