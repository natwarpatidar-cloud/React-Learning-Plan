import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useReducer, useState } from "react"
import formReducer from "./formReducer"
import { Spinner } from "@/components/ui/spinner"

export const FormWizard = () => {
    const [page, setPage] = useState(0);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isPending, setIsPending] = useState(false);
    
    const formState = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        username: '',
        password: '',
    }
    
    const [formData, dispatch] = useReducer(formReducer, formState);

    const handleTextChange = (e) => {
        dispatch({
            type: "HandleInputChange",
            field: e.target.name,
            payload: e.target.value
        });
    }

    const handleSubmit = () => {
        setIsPending(true);
        setTimeout(() => {
            setIsPending(false);
            setIsSuccess(true);
        }, 1500);
    }

    const prevHandler = () => {
        setPage(prev => prev > 0? prev - 1: prev);
    }

    const nextHandler = () => {
        setPage(prev => prev < tabs.length - 1? prev + 1: prev)
    }

    const tabs = [
        <div className="tab p-12 border shadow-2xl rounded-2xl space-y-4">
            <Label>Full Name:</Label>
            <Input name="firstName" type="text" placeholder="First Name" value={formData.firstName} onChange={handleTextChange} required />
            <Input name="lastName" type="text" placeholder="Last Name" value={formData.lastName} onChange={handleTextChange} required />
        </div>,
        <div className="tab p-12 border shadow-2xl rounded-2xl space-y-4">
            <Label>Contact Info:</Label>
            <Input name="phone" type="tel" placeholder="Phone No." value={formData.phone} onChange={handleTextChange} required />
            <Input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleTextChange} required />
        </div>,

        <div className="tab p-12 border shadow-2xl rounded-2xl space-y-4">
            <Label>Login Info:</Label>
            <Input name="username" type="text" placeholder="Username" value={formData.username} onChange={handleTextChange} required />
            <Input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleTextChange} required />
        </div>
    ]

    if(isPending) {
        return (
            <div className="container w-full h-[100vh]  flex flex-col items-center justify-center space-y-8">
                <div className="w-full flex items-center justify-center">
                    <div className="tab p-12 border shadow-2xl rounded-2xl space-y-4">
                        <div className="flex items-center gap-6">
                            <Spinner className="size-6" />
                            <Spinner className="size-6" />
                            <Spinner className="size-6" />
                            <Spinner className="size-6" />
                            <Spinner className="size-6" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if(isSuccess) {
        return (
            <div className="container w-full h-[100vh]  flex flex-col items-center justify-center space-y-8">
                <div className="w-full flex items-center justify-center">
                    <div className="tab p-6 border shadow-2xl rounded-2xl space-y-4">
                        <div class="w-full max-w-lg bg-white p-6 relative">
                            <div class="mt-8 text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-14 shrink-0 fill-green-500 inline"
                                    viewBox="0 0 512 512">
                                    <path
                                        d="M383.841 171.838c-7.881-8.31-21.02-8.676-29.343-.775L221.987 296.732l-63.204-64.893c-8.005-8.213-21.13-8.393-29.35-.387-8.213 7.998-8.386 21.137-.388 29.35l77.492 79.561a20.687 20.687 0 0 0 14.869 6.275 20.744 20.744 0 0 0 14.288-5.694l147.373-139.762c8.316-7.888 8.668-21.027.774-29.344z"
                                        data-original="#000000" />
                                    <path
                                        d="M256 0C114.84 0 0 114.84 0 256s114.84 256 256 256 256-114.84 256-256S397.16 0 256 0zm0 470.487c-118.265 0-214.487-96.214-214.487-214.487 0-118.265 96.221-214.487 214.487-214.487 118.272 0 214.487 96.221 214.487 214.487 0 118.272-96.215 214.487-214.487 214.487z"
                                        data-original="#000000" />
                                </svg>
                                <div class="mt-6">
                                    <h3 class="text-xl text-slate-900 font-semibold">Successfully Submitted!</h3>
                                    <p class="text-sm text-slate-500 leading-relaxed mt-3">
                                        Et leo, enim in non sed quis sed. Auctor
                                        natoque auctor risus amet quis
                                        mauris. Interdum et nisi, pellentesque id lectus. Ut bibendum pellentesque arcu luctus sapien.
                                    </p>
                                </div>
                            </div>

                            <button 
                                id="closeButton" type="button"
                                onClick={() => {
                                    setIsSuccess(false);
                                    setPage(0);
                                }}
                                class="mt-8 px-5 py-2.5 cursor-pointer w-full rounded-lg text-white text-sm font-medium border-none outline-none bg-gray-800 hover:bg-gray-700"
                            >
                                Got it
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container w-full h-[100vh]  flex flex-col items-center justify-center space-y-8">
            <from id="signup-form" className="w-full flex items-center justify-center">
                { tabs[page] }
            </from>

            <div>
                <ButtonGroup>
                    <Button 
                        variant="secondary" 
                        size="lg" 
                        className='cursor-pointer'
                        disabled={page == 0}
                        onClick={prevHandler}
                        form="signup-form"
                    >
                        Prev
                    </Button>
                    <ButtonGroupSeparator />
                    {
                        page !== tabs.length - 1? (<Button 
                            variant="secondary"
                            size="lg" 
                            onClick={nextHandler}
                            className='cursor-pointer'
                            form="signup-form"
                        >
                            Next
                        </Button>) : (
                            <Button
                                size="lg"
                                onClick={handleSubmit}
                                className='cursor-pointer'                   
                                form="signup-form"
                            >
                                Submit
                            </Button>
                        )
                    }
                </ButtonGroup>
            </div>
        </div>
    )
}