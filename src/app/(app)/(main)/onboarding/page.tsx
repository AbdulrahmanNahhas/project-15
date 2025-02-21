"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Stepper, StepperItem, StepperTrigger, StepperIndicator, StepperSeparator } from "@/components/ui/stepper"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { BasicInfoStep } from "@/modules/app/ui/components/onboarding/basic-info-step"
import { UserDetailsStep } from "@/modules/app/ui/components/onboarding/user-details-step"
import { AccountConfigStep } from "@/modules/app/ui/components/onboarding/account-config-step"
import { FormData, formSchema } from "@/data/app/onboarding/types"
import { updateUser } from "@/modules/auth/actions/update-user"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
// import SignOutButton from "@/modules/auth/components/logout"

export default function OnboardingPage() {
  const [activeStep, setActiveStep] = useState(0)
  const [stepData, setStepData] = useState<Partial<FormData>>({})
  const router = useRouter()

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gender: undefined,
      muhafazah: undefined,
      userType: undefined,
      grade: undefined,
      certificate: undefined,
      role: undefined,
      imageUrl: undefined,
      coverImageUrl: undefined,
      bio: undefined,
      ...stepData,
    },
  })

  const onSubmit = async (data: FormData) => {
    console.log("Form submitted with data:", data)
    setStepData(data)
    const response = await updateUser(data);
    if (response.status === "success") {
      toast.success(response.message)
      router.push("/home")
    } else {
      toast.error(response.message)
    }
  }

  const nextStep = async () => {
    let isValid = false
    const currentStepData = form.getValues()

    switch (activeStep) {
      case 0:
        isValid = await form.trigger(["gender", "muhafazah"])
        break
      case 1:
        isValid = await form.trigger(["userType", "grade", "certificate", "role"])
        break
      // case 2:
      //   isValid = await form.trigger(["imageUrl", "coverImageUrl", "bio"])
      //   break
      default:
        isValid = true
    }
    if (isValid) {
      setStepData((prev) => ({ ...prev, ...currentStepData }))
      setActiveStep((prev) => Math.min(prev + 1, 2))
    }
  }

  const prevStep = () => setActiveStep((prev) => Math.max(prev - 1, 0))

  const steps = [
    { title: "Basic Info", description: "Tell us about yourself" },
    { title: "User Details", description: "Provide more specific information" },
    { title: "Account Config", description: "Set up your profile" },
  ]

  const getStepTitle = () => {
    switch (activeStep) {
      case 0:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold">أخبرنا عن نفسك</h1>
            <p className="text-muted-foreground mt-2 text-base font-normal">هذا يساعدنا في تخصيص تجربتك</p>
          </div>
        )
      case 1:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold">ما الذي يصفك بشكل أفضل؟</h1>
            <p className="text-muted-foreground mt-2 text-base font-normal">هذا يساعدنا في تخصيص تجربتك</p>
          </div>

        )
      case 2:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold">قم بتخصيص حسابك الشخصي</h1>
            <p className="text-muted-foreground mt-2 text-base font-normal">هذا يساعدنا في تخصيص تجربتك</p>
          </div>
        )
      default:
        return ""
    }
  }

  return (
    <div className="h-screen w-screen fixed top-0 right-0 left-0 bottom-0 px-4 pt-10 flex flex-col overflow-y-scroll z-50 bg-background">
      <Stepper value={activeStep} className="mb-10 w-full flex justify-center items-center">
        {steps.map((step, index) => (
          <StepperItem key={step.title} step={index}>
            <StepperTrigger>
              <StepperIndicator className="size-10 text-xl font-bold" />
            </StepperTrigger>
            {index < steps.length - 1 && <StepperSeparator className="min-w-[6rem] md:min-w-[12rem] w-full py-0.5" />}
          </StepperItem>
        ))}
      </Stepper>

      <h1 className="mb-8 text-center text-3xl font-bold tracking-tight">{getStepTitle()}</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col h-full flex-1 w-full max-w-3xl mx-auto">
          <div className="space-y-6 pb-6">
            {activeStep === 0 && <BasicInfoStep form={form} />}
            {activeStep === 1 && <UserDetailsStep form={form} />}
            {activeStep === 2 && <AccountConfigStep form={form} />}
          </div>

          <div className="flex items-center justify-between border border-b-0 py-3 px-3 rounded-t-2xl md:border-b md:p-6 mt-auto! sm:mt-0">
            <Button size="lg" type="button" onClick={prevStep} disabled={activeStep === 0} variant="outline" className="w-32 h-12 text-xl">
              السابق
            </Button>
            {activeStep < 2 ? (
              <Button size="lg" type="button" onClick={nextStep} className="w-32 h-12 text-xl" >
                التالي
              </Button>
            ) : (
              <Button  size="lg" type="submit" className="w-32 h-12 text-xl">
                إنهاء
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  )
}