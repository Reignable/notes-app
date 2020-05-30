import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function(): void {
  library.add(faPlus, faTrash)
}
