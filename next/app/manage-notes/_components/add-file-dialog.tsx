import { useContext } from 'react'
import { NoteContext } from '../_context/note-context'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Paperclip } from 'lucide-react'
import { UploadForm } from '@/components/form/upload-form'

interface AddFileDialogProps {}

export const AddFileDialog = (props: AddFileDialogProps) => {
  const noteContext = useContext(NoteContext)

  if (!noteContext?.note.id) return null

  const note = noteContext.note

  return (
    <Dialog>
      <DialogTrigger className="ml-auto" asChild>
        <Button>
          <Paperclip size={16} className="mr-2" /> Add New File
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full md:w-[800px]">
        <DialogHeader>
          <DialogTitle>Add new file to {note.name}</DialogTitle>
        </DialogHeader>

        <UploadForm type="file" />
      </DialogContent>
    </Dialog>
  )
}
