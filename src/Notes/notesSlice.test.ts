import { RootState } from 'rootReducer'
import notes, {
  addNote,
  selectNote,
  selectNotesList,
  selectSelectedNote,
} from './notesSlice'

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
    describe('selectNote', () => {
      it('should set selected note to the provided id', () => {
        const initialState = { list: [{ id: 0, body: 'test', title: 'Test' }] }
        const noteId = 0
        const result = notes(initialState, selectNote(noteId))
        expect(result.selected).toEqual(noteId)
      })

      it('should should only select the note if it exists', () => {
        const noteId = 0
        const result = notes({ list: [] }, selectNote(noteId))
        expect(result.selected).not.toEqual(noteId)
      })
    })
  })

  describe('selectors', () => {
    describe('selectNotesList', () => {
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

    describe('selectSelectedNote', () => {
      it('should return undefined if no note is selected', () => {
        const initialState: RootState = {
          notes: {
            list: [{ id: 0, title: 'test note', body: 'test note body' }],
          },
        }
        const result = selectSelectedNote(initialState)
        expect(result).toEqual(undefined)
      })

      it('should return the id of the selected note if one is selected', () => {
        const initialState: RootState = {
          notes: {
            list: [{ id: 0, title: 'test note', body: 'test note body' }],
            selected: 0,
          },
        }
        const result = selectSelectedNote(initialState)
        expect(result).toEqual(initialState.notes.selected)
      })
    })
  })
})
