import { RootState } from 'rootReducer'
import notes, { addNote, selectNotes } from './notesSlice'

describe('notes slice', () => {
  describe('reducer', () => {
    it('should create initial state', () => {
      expect(notes(undefined, { type: undefined })).toEqual([])
    })

    it('should handle adding a note', () => {
      const expected = [{ body: 'Note 1 body', title: 'Note 1', id: 0 }]
      expect(notes([], { type: addNote.type })).toEqual(expected)
    })
  })

  describe('actions', () => {
    describe('addNote', () => {
      it('should give each note incrementing ids', () => {
        const state1 = notes([], addNote())
        const state2 = notes(state1, addNote())
        expect(state2[1].id).toEqual(state2[0].id + 1)
      })
    })
  })

  describe('selectors', () => {
    describe('selectNotes', () => {
      it('should return the notes array from root state', () => {
        const initialState: RootState = {
          notes: [{ id: 0, title: 'test note', body: 'test note body' }],
        }
        const result = selectNotes(initialState)
        expect(result).toEqual(initialState.notes)
      })
    })
  })
})
