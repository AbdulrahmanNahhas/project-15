import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@ui//avatar"
import { Button } from "@ui//button"
import { Textarea } from "@ui//textarea"
import { Badge } from "@ui//badge"
import { ChevronUp, MessageSquare, MoreHorizontal } from 'lucide-react'

type Comment = {
  id: number
  user: {
    name: string
    avatar: string
    isTeacher?: boolean
  }
  content: string
  timestamp: string
  upvotes: number
  replies?: Comment[]
}
const sampleComments: Comment[] = [
  {
    id: 1,
    user: { name: "علي الفارسي", avatar: "", isTeacher: true },
    content: "شرح ممتاز! من الرائع أن نرى هذا التوضيح الشامل لمفاهيم الرياضيات. من المهم فهم كيفية ارتباط الفروع المختلفة ببعضها.",
    timestamp: "قبل ساعتين",
    upvotes: 20,
    replies: [
      {
        id: 2,
        user: { name: "مريم العتيبي", avatar: "" },
        content: "شكرًا على الشرح الرائع، أستاذ علي. هل يمكنك توضيح الفرق بين الرياضيات البحتة والرياضيات التطبيقية؟",
        timestamp: "قبل ساعة",
        upvotes: 5,
      },
      {
        id: 3,
        user: { name: "علي الفارسي", avatar: "", isTeacher: true },
        content: "بالطبع، مريم! الرياضيات البحتة تركز على النظرية والمفاهيم الأساسية، بينما الرياضيات التطبيقية تهتم بتطبيق هذه النظريات في الحياة العملية.",
        timestamp: "قبل 45 دقيقة",
        upvotes: 8,
      }
    ]
  },
  {
    id: 4,
    user: { name: "يوسف الهاشمي", avatar: "" },
    content: "كان الجزء عن الهندسة التفاضلية رائعًا! لم أكن أدرك مدى أهمية هذه الفرع في العديد من التطبيقات العملية.",
    timestamp: "قبل 3 ساعات",
    upvotes: 15,
  },
  {
    id: 5,
    user: { name: "سارة الشمري", avatar: "" },
    content: "ماذا عن تطبيقات الرياضيات في الذكاء الاصطناعي؟ هل يمكن التوسع في هذا الموضوع؟",
    timestamp: "قبل 4 ساعات",
    upvotes: 10,
    replies: [
      {
        id: 6,
        user: { name: "فهد السهلي", avatar: "" },
        content: "سؤال رائع، سارة! الرياضيات تلعب دورًا كبيرًا في الذكاء الاصطناعي، خاصة في الجبر الخطي، نظرية الاحتمالات، والتحليل العددي.",
        timestamp: "قبل 3 ساعات",
        upvotes: 6,
      }
    ]
  },
  {
    id: 7,
    user: { name: "نورا التميمي", avatar: "" },
    content: "هذا الفيديو يساعدني كثيرًا في فهم الخريطة الرياضية. أعتقد أنه يجب أن أتعمق أكثر في موضوع الرياضيات التجريبية.",
    timestamp: "قبل 5 ساعات",
    upvotes: 12,
  },
  {
    id: 8,
    user: { name: "جاسم القحطاني", avatar: "" },
    content: "ما زلت أواجه صعوبة في فهم النسبية والرياضيات المتعلقة بها. هل هناك فيديوهات أخرى توصي بها؟",
    timestamp: "قبل 6 ساعات",
    upvotes: 3,
    replies: [
      {
        id: 9,
        user: { name: "علي الفارسي", avatar: "", isTeacher: true },
        content: "جاسم، أنصحك بمراجعة بعض الكتب مثل 'الفيزياء الرياضية' أو مشاهدة محاضرات عبر الإنترنت حول النسبية. ستجد تفسيرات جيدة هناك.",
        timestamp: "قبل 5 ساعات",
        upvotes: 9,
      }
    ]
  },
  {
    id: 10,
    user: { name: "هند الماجد", avatar: "" },
    content: "الطريقة التي شرحت بها العلاقة بين الرياضيات والفن كانت مدهشة. لم أكن أتوقع أن يكون هناك هذا الارتباط!",
    timestamp: "قبل 7 ساعات",
    upvotes: 18,
  },
  {
    id: 11,
    user: { name: "عبدالله البندر", avatar: "" },
    content: "أشعر أنني بحاجة إلى دراسة المزيد عن الرياضيات المتقدمة بعد مشاهدة هذا الفيديو. هل هناك كتب توصي بها؟",
    timestamp: "قبل 8 ساعات",
    upvotes: 5,
  },
  {
    id: 12,
    user: { name: "هالة الزهراني", avatar: "" },
    content: "أحببت الجزء المتعلق بالرياضيات في الطبيعة. هذا يجعلني أرى العالم بطريقة جديدة.",
    timestamp: "قبل 9 ساعات",
    upvotes: 14,
  },
  {
    id: 13,
    user: { name: "سلمان الحارثي", avatar: "" },
    content: "أواجه صعوبة في فهم بعض مفاهيم التفاضل والتكامل. هل يمكننا مناقشة هذه المواضيع بشكل أعمق؟",
    timestamp: "قبل 10 ساعات",
    upvotes: 2,
    replies: [
      {
        id: 14,
        user: { name: "علي الفارسي", avatar: "", isTeacher: true },
        content: "بالطبع، سلمان. سنخصص وقتًا لمناقشة مفاهيم التفاضل والتكامل في الفصل القادم.",
        timestamp: "قبل 9 ساعات",
        upvotes: 7,
      }
    ]
  },
  {
    id: 15,
    user: { name: "فاطمة الجهني", avatar: "" },
    content: "هذا الفيديو جعلني أقدر الرياضيات أكثر. أشعر أنني فهمت الكثير من الأشياء التي كنت أجهلها.",
    timestamp: "قبل 11 ساعة",
    upvotes: 16,
  }
]
export default function CommentsSection() {
  const [comments, setComments] = useState(sampleComments)
  const [newComment, setNewComment] = useState('')

  const handleUpvote = (commentId: number) => {
    setComments(prevComments =>
      prevComments.map(comment =>
        comment.id === commentId
          ? { ...comment, upvotes: comment.upvotes + 1 }
          : comment
      )
    )
  }

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      const newCommentObj: Comment = {
        id: comments.length + 1,
        user: { name: "المستخدم الحالي", avatar: "" },
        content: newComment,
        timestamp: "الآن",
        upvotes: 0,
      }
      setComments([newCommentObj, ...comments])
      setNewComment('')
    }
  }

  const renderComment = (comment: Comment, isReply = false) => (
    <div key={comment.id} className={`flex gap-2 ${isReply ? 'mr-12 mt-4' : 'mt-6'}`}>
      <Avatar>
        <AvatarImage src={comment.user.avatar} alt={comment.user.name} />
        <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-center space-x-2">
          <h4 className="font-semibold">{comment.user.name}</h4>
          {comment.user.isTeacher && (
            <Badge variant="secondary" className={"!mr-1 !ml-0 px-1"}>معلم</Badge>
          )}
          <span className="text-sm text-gray-500 !mr-2">{comment.timestamp}</span>
        </div>
        <p className="mt-1 text-gray-600">{comment.content}</p>
        <div className="mt-2 flex items-center gap-1">
          <Button variant="ghost" size="sm" onClick={() => handleUpvote(comment.id)}>
            <ChevronUp className="ml-1 h-4 w-4" />
            {comment.upvotes}
          </Button>
          <Button variant="ghost" size="sm">
            <MessageSquare className="ml-1 h-4 w-4" />
            رد
          </Button>
          <Button variant="ghost" size="sm" className={"px-2"}>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="max-w-2xl mx-auto mt-8 text-right" dir="rtl">
      <h2 className="text-2xl font-bold mb-4">التعليقات</h2>

      <form onSubmit={handleSubmitComment} className="mb-8">
        <Textarea
          placeholder="أضف تعليقًا..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="mb-2"
        />
        <Button type="submit">نشر التعليق</Button>
      </form>

      <div className="space-y-6">
        {comments.map(comment => (
          <div key={comment.id}>
            {renderComment(comment)}
            {comment.replies && comment.replies.map(reply => renderComment(reply, true))}
          </div>
        ))}
      </div>
    </div>
  )
}