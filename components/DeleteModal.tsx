"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { db, storage } from "@/firebase"
import { useAppStore } from "@/store/store"
import { useUser } from "@clerk/nextjs"
import { deleteDoc, doc } from "firebase/firestore"
import { deleteObject, ref } from "firebase/storage"
import toast from "react-hot-toast"

export function DeleteModal() {
    const { user } = useUser()

    const [isDeleteModalOpen, setIsDeleteModalOpen, fileId, setFileId] = useAppStore((state) => [
        state.isDeleteModalOpen,
        state.setIsDeleteModalOpen,
        state.fileId,
        state.setFileId,
        ])

    async function deleteFile() {
        if (!user || !fileId)  return

        const fileRef = ref(storage, `users/${user.id}/files/${fileId}`)
        const toastId = toast.loading("Deleting file...")

        try {
            deleteObject(fileRef).then(async() => {
                deleteDoc(doc(db, "users", user.id, "files", fileId)).then(() => {
                    console.log("Document successfully deleted!");
                    toast.success("File deleted successfully!", { id: toastId })
                })
            })
            .finally(() => {
                setIsDeleteModalOpen(false)
            })
        } catch (error) {
            console.error("Error removing document: ", error);      
            toast.error("Error deleting file!", { id: toastId })      
            setIsDeleteModalOpen(false)
        }

        setIsDeleteModalOpen(false)
    }

  return (
    <Dialog
        open={isDeleteModalOpen}
        onOpenChange={(isOpen) => {
            setIsDeleteModalOpen(isOpen)
        }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Are you sure to Delete?</DialogTitle>
          <DialogDescription>
            You cant undo this action afterwards.
          </DialogDescription>
        </DialogHeader>
        <div className="flex space-x-2 py-3">
            <Button className="px-3 flex-1" size="sm" variant={"ghost"} onClick={() => setIsDeleteModalOpen(false)}>
                <span className="sr-only">Cancel</span>
                <span>Cancel</span>
            </Button>

            <Button className="px-3 flex-1" variant={"destructive"} size="sm" type="submit" onClick={() => deleteFile()}>
                <span className="sr-only">Delete</span>
                <span>Delete</span>
            </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
