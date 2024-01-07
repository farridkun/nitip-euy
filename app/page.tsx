import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center bg-blue-500 dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-blue-950 dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold">
            Welcome to Nitip Euy. <br />
            <br />
            Storage everything for your needs, all in one place.
          </h1>

          <p className="pb-20">
            Nitip Euy is a file storage service that allows you to store files
            and share them with your friends.
          </p>

          <Link href="/dashboard" className="flex cursor-pointer bg-blue-800 p-5 w-fit">
            Try it for free!
            <ArrowRight className="ml-10" />
          </Link>
        </div>

        <div className="bg-blue-500 dark:bg-slate-800 h-full p-10">
          <video autoPlay loop muted className="rounded-lg">
            <source
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/dbx1-hero-1920x1080.mp4"
              type="video/mp4"
            />
            Your browser does not meet the minimum requirements to view this
          </video>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-10">
        <p className="text-center text-3xl font-bold pb-10">
          Features
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start justify-items-center">
          <div className="flex flex-col items-center space-y-5">
            <img src="https://i.postimg.cc/4yZ9FhJf/undraw-Cloud-files-re-v5qg.png" alt="Cloud files" className="w-80 h-80" />

            <h2 className="text-2xl font-bold">
              Cloud files
            </h2>

            <p className="text-center">
              Store your files in the cloud! Access documents, photos, video, and more — anytime, anywhere.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-5">
            <img src="https://i.postimg.cc/4Nf9P7Q8/undraw-Cloud-sync-re-0lxo.png" alt="Cloud sync" className="w-80 h-80" />

            <h2 className="text-2xl font-bold">
              Cloud sync
            </h2>

            <p className="text-center">
              Sync your files automatically to your computer and use the Office mobile apps on your phone or tablet or Office Online right in your browser to stay productive and work together, no matter where you are.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-5">
            <img src="https://i.postimg.cc/7Zr0Q4H4/undraw-Cloud-sharing-re-0jmo.png" alt="Cloud sharing" className="w-80 h-80" />

            <h2 className="text-2xl font-bold">
              Cloud sharing
            </h2>

            <p className="text-center">
              Share files, folders, and photos with friends and family. No more large email attachments or thumb drives—just send a link via email, text, iMessage, or Facebook.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-500 dark:bg-slate-800">
        <p className="text-center text-3xl font-bold py-5">
          Disclaimer
        </p>

        <p className="text-center">
          This web is purposes for test at GoFleet only.
        </p>
      </div>
    </main>
  )
}
