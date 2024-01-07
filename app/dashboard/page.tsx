import React from 'react'
import { auth } from '@clerk/nextjs'
import Dropzone from '@/components/Dropzone';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';
import { FileType } from '@/typing';
import TableWrapper from '@/components/table/TableWrapper';

async function Dashboard() {
  const { userId } = auth();

  const docsResults = await getDocs(collection(db, "users", userId!, "files"))
  // @ts-ignore
  const skeletonFiles: FileType[] = docsResults.docs.map((doc) => ({
    id: doc.id,
    fileName: doc.data().fileName || doc.id,
    fullName: doc.data().fullName,
    timeStamp: new Date(doc.data().timeStamp?.seconds * 1000) || undefined,
    downloadURL: doc.data().downloadURL,
    type: doc.data().type,
    size: doc.data().size,
  }))

  return (
    <div className="boder-t">
        <Dropzone />

        <section className="container space-y-5">
            <h2 className="font-bold">All Files</h2>

            <div>
                <TableWrapper skeletonFiles={skeletonFiles} />
            </div>
        </section>
    </div>
  )
}

export default Dashboard