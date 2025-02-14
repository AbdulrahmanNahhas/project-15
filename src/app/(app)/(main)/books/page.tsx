import Image from "next/image"
import { IconDownload, IconEye, IconShare } from "@tabler/icons-react";
import { Button } from "@ui//button"

import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  // MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from "@/components/common/morphing-dialog";
import { Book, books } from "@/data/app/books/books";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <MorphingDialog
      transition={{
        type: "spring",
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <MorphingDialogTrigger
        style={{
          borderRadius: "12px", 
        }}
        className="bg-card rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-md border flex flex-col"
      >
        <div className="relative h-72 m-3 mb-2 !w-[calc(100%-24px)] flex items-center justify-center">
          <Image
            src={book.imageUrl || "/placeholder.svg"}
            alt={book.title}
            fill
            className="rounded-2xl !h-full !w-auto object-cover mx-auto"
          />
          <div className="absolute -top-1 -right-2 bg-background/50 backdrop-blur-xl px-3 py-1 rounded-full">
            <span className="text-sm text-primary">{book.downloads.toLocaleString()} تحميل</span>
          </div>
        </div>
        <div className="p-4 flex flex-col flex-1">
          <h2 className="text-lg font-semibold mb-2 line-clamp-1">{book.title}</h2>
          <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">{book.description}</p>
          <div className="flex gap-2 mt-auto">
            <Button variant="default" size="sm" className="flex-1 gap-1">
              <IconDownload className="w-3.5 h-3.5" />
              تحميل
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <IconShare className="w-3.5 h-3.5" />
              مشاركة
            </Button>
          </div>
        </div>
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: "24px",
          }}
          className="pointer-events-auto relative flex h-auto flex-col overflow-hidden border bg-background w-[458px]"
        >
          <div className="relative w-full mx-auto sm:w-[240px] h-[300px] flex-shrink-0 justify-center items-center mt-4">
            <MorphingDialogImage
              src={book.imageUrl}
              alt={book.title}
              className="absolute inset-0 h-full w-auto !mx-auto rounded-2xl shadow-inner"
            />
          </div>
          <div className="flex-1 p-6">
            <MorphingDialogTitle className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
              {book.title}
            </MorphingDialogTitle>
            <MorphingDialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 20 },
              }}
            >
              <p className="mt-2 leading-relaxed text-muted-foreground font-light">
                {book.description}
              </p>
              <div className="flex gap-3 mt-6">
                <Button variant="default" size="lg" className="flex-1 gap-2">
                  <IconDownload className="w-4 h-4" />
                  تحميل
                </Button>
                <Button variant="default" size="lg" className="flex-1 gap-2">
                  <IconEye className="w-4 h-4" />
                  قراءة
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <IconShare className="w-4 h-4" />
                  مشاركة
                </Button>
              </div>
            </MorphingDialogDescription>
          </div>
          <MorphingDialogClose className="absolute top-4 left-4 p-2 rounded-full bg-accent size-10 transition-colors" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
};

export default function BooksPage() {
  return (
    <div className="container mx-auto">
    <h1 className={"my-6 font-bold text-3xl mx-auto border-b pb-5"}>
      المكتبة الرقمية
    </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}
